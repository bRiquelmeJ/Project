import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentInfo from './IAContenidoInfo'
import ModalContentVideo from './IAContenido'
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';
import Sidebar from '../Sidebar';
import '../../../Styles/tecnologia.css';


function IA() {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
      <div className="welcome-box mb-3">
          <div className=" text-center">
          <h2 className= "perfilFont">¡Bienvenid@s al asombroso universo de la inteligencia artificial!</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
          Sumérgete en el apasionante mundo de la inteligencia artificial, desentrañando los secretos de cómo las máquinas pueden reconocer patrones en datos, tomar decisiones autónomas y hasta entender el lenguaje humano. Explora cómo la inteligencia artificial puede transformar nuestra forma de trabajar y vivir, desde asistentes virtuales hasta vehículos autónomos. ¡Únete y descubre los asombrosos poderes de las IAs
          </p>
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

export default IA;
