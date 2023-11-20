import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './ComputacionContenido'
import ModalContentInfo from './ComputacionContenidoInfo'
import Sidebar from '../Sidebar';
import '../../../Styles/ingenieria.css';
import { Link } from 'react-router-dom';
import '../../../Styles/btn-back.css';
import '../../../Styles/text-content.css';
import Imagen from '../../../img/generales/Logo EquidApp.png';


function Ingenieria() {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 h-100 col ">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
          <Link to="/Ingenieria" className="text-start btn btn-back">
            Volver atrás
          </Link>
          <h2 className="perfilFont">Bienvenid@ a Computación</h2>
          <p></p><p></p>
        </div>

        <div className="mt-3 course-text container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
          <div className="text-center text-content p-4">
            <p>
              Los expertos en computación exploran el fascinante mundo de las máquinas y la información a diferentes niveles, desde el código en programas individuales hasta la gestión de sistemas complejos en toda la red.
            </p>
          </div>
          <div className="text-center">
            <img src={Imagen} alt="Biologia" className="img-fluid h-50" />
          </div>
        </div>
        <div className='container-fluid d-flex justify-content-evenly'>
          <>
            <button class="game-button" onClick={() => setShowModalVideo(true)}>
              <svg class="play-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,20 L 10,30 z"></path>
              </svg>
              PLAY VIDEO
            </button>
            {showModalVideo && createPortal(
              <ModalContentVideo onClose={() => setShowModalVideo(false)} />,
              document.body)}
          </>
          <>
            <button class="game-button" onClick={() => setShowModalInfo(true)}>
              <svg class="play-icon" viewBox="0 0 40 40">
                <path d="M 10,10 L 30,20 L 10,30 z"></path>
              </svg>
              INFORMACION CURSO
            </button>
            {showModalInfo && createPortal(
              <ModalContentInfo onClose={() => setShowModalInfo(false)} />,
              document.body)}
          </>
        </div>
      </div>
    </div>
  );
}

export default Ingenieria;
