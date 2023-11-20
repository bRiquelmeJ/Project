import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './RoboticaContenido';
import ModalContentInfo from './RoboticaContenidoInfo';
import Sidebar from '../Sidebar';
import '../../../Styles/ingenieria.css';


function Ingenieria() {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);


  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 h-100 col ">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box mb-3">
          <div className="text-center">
          <h2 className= "perfilFont">Bienvenid@ a Robótica</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid d-flex align-items-center justify-content-center">
          <h4 className="text-center p-4">
          En este campo vanguardista, la creatividad y la tecnología convergen para dar vida a máquinas inteligentes y autónomas. <br></br>
          La Robótica es mucho más que simples robots; es una ventana al futuro donde la ingeniería, la inteligencia artificial y la automatización se fusionan. <br></br>
          Explorarás la creación de dispositivos capaces de moverse, interactuar y tomar decisiones por sí mismos.
          </h4>
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
