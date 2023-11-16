import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './CDDContenido'
import ModalContentInfo from './CDDContenidoInfo'
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';
import Sidebar from '../Sidebar';
import '../../../Styles/tecnologia.css';


function CienciaDeDatos() {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
      <div className="welcome-box mb-3">
          <div className="text-center">
          <h2 className= "perfilFont">¡Bienvenid@s al mundo de los datos!</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid  d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
          La Ciencia de Datos, un campo fascinante e interdisciplinario, se erige como la brújula que guía la era digital. 
          En su esencia, es la búsqueda de conocimiento a través del análisis de datos, aprovechando información cruda para desvelar patrones, tendencias y revelaciones que impulsan la toma de decisiones
          ¡Te invitamos a estudiar análisis de datos y desatar el potencial de la información!
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

export default CienciaDeDatos;
