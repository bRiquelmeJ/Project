import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './ProgramacionContenido'
import ModalContentInfo from './ProgramacionContenidoInfo'
import Sidebar from '../Sidebar';
import '../../../Styles/tecnologia.css';
import { Link } from 'react-router-dom';
import '../../../Styles/btn-back.css';
import '../../../Styles/text-content.css';
import '../../../Styles/pCursos.css';
import Imagen from '../../../img/generales/Logo EquidApp.png';

function Programacion() {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 col">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12">
        <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
          <Link to="/Tecnologia" className="text-start btn btn-back">
            Volver atrás
          </Link>
          <h2 className="perfilFont">Bienvenid@ a Programación</h2>
          <p></p><p></p>
        </div>

        <div className="mt-3 course-text container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
          <div className="text-center text-content p-4">
          <p>
          La programación es el arte de dar vida a tus ideas en el mundo digital. Es como aprender un nuevo idioma para crear aplicaciones, juegos y soluciones innovadoras. Cada línea de código es un paso más cerca de convertir tus pensamientos en realidad. Bienvenido al emocionante viaje de la programación, donde la creatividad se encuentra con el potencial ilimitado de la tecnología
          </p>
        </div>
        <div>
            <img src={Imagen} alt="Biologia" className="img-fluid" />
          </div>
        </div>

        <div className='btn-group-horizontal d-flex flex-wrap justify-content-evenly mb-5'>
        <>
          <button class="game-button mb-2" onClick={() => setShowModalVideo(true)}>
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
