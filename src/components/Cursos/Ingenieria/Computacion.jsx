import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './ComputacionContenido'
import ModalContentInfo from './ComputacionContenidoInfo'
import Sidebar from '../Sidebar';
import '../../../Styles/ingenieria.css';
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';


function Ingenieria() {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box  mb-3">
          <div className=" text-center">
          <h2 className= "perfilFont">Bienvenid@ a Computación</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid  d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
          Los expertos en computación exploran el fascinante mundo de las máquinas y la información a diferentes niveles, desde el código en programas individuales hasta la gestión de sistemas complejos en toda la red.  </p>
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
