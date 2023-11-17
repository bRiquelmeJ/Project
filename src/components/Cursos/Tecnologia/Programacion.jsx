import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './ProgramacionContenido'
import ModalContentInfo from './ProgramacionContenidoInfo'
import Sidebar from '../Sidebar';
import '../../../Styles/tecnologia.css';


function Programacion() {
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
          <h2 className= "perfilFont">Bienvenid@ a Programación</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid  d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
          La programación es el arte de dar vida a tus ideas en el mundo digital. Es como aprender un nuevo idioma para crear aplicaciones, juegos y soluciones innovadoras. Cada línea de código es un paso más cerca de convertir tus pensamientos en realidad. Bienvenido al emocionante viaje de la programación, donde la creatividad se encuentra con el potencial ilimitado de la tecnología
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

export default Programacion;
