import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './RoboticaContenido';
import ModalContentInfo from './RoboticaContenidoInfo';
import Sidebar from '../Sidebar';
import '../../../Styles/ingenieria.css';
import '../../../Styles/pCursos.css';
import { Link } from 'react-router-dom';
import '../../../Styles/btn-back.css';
import '../../../Styles/text-content.css';
import Imagen from '../../../img/generales/Logo EquidApp.png';


function Ingenieria() {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);


  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12">
        <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
          <Link to="/Ingenieria" className="text-start btn btn-back">
            Volver atrás
          </Link>
          <h2 className="perfilFont">Bienvenid@ a Robótica</h2>
          <p></p><p></p>
        </div>

        <div className="mt-3 course-text container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
          <div className="text-center text-content p-4">
            <p>
              En este campo vanguardista, la creatividad y la tecnología convergen para dar vida a máquinas inteligentes y autónomas. <br></br>
              La Robótica es mucho más que simples robots; es una ventana al futuro donde la ingeniería, la inteligencia artificial y la automatización se fusionan. <br></br>
              Explorarás la creación de dispositivos capaces de moverse, interactuar y tomar decisiones por sí mismos.          </p>
          </div>
          <div className="text-center">
            <img src={Imagen} alt="Biologia" className="img-fluid h-50" />
          </div>
        </div>
        
        <div className='btn-group-horizontal d-flex flex-wrap justify-content-evenly mb-5'>
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
