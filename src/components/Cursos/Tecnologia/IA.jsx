import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentInfo from './IAContenidoInfo'
import ModalContentVideo from './IAContenido'
import Sidebar from '../Sidebar';
import '../../../Styles/tecnologia.css';
import'../../../Styles/pCursos.css';
import { Link } from 'react-router-dom';
import '../../../Styles/btn-back.css';
import '../../../Styles/text-content.css';
import '../../../Styles/pCursos.css';
import Imagen from '../../../img/generales/Logo EquidApp.png';


function IA() {
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
          <h2 className="perfilFont">Bienvenid@ a Inteligencia Artificial</h2>
          <p></p><p></p>
        </div>

        <div className="mt-3 course-text container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
          <div className="text-center text-content p-4">
          <p>
          Sumérgete en el apasionante mundo de la inteligencia artificial, desentrañando los secretos de cómo las máquinas pueden reconocer patrones en datos, tomar decisiones autónomas y hasta entender el lenguaje humano. Explora cómo la inteligencia artificial puede transformar nuestra forma de trabajar y vivir, desde asistentes virtuales hasta vehículos autónomos. ¡Únete y descubre los asombrosos poderes de las IAs
          </p>
        </div>
        <div className="text-center">
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

export default IA;
