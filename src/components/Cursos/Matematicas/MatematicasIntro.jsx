import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './MatematicasContenido';
import ModalContentInfo from './MatematicasContenidoInfo';
import Sidebar from "../Sidebar";
import { Link } from 'react-router-dom';
import '../../../Styles/btn-back.css';
import '../../../Styles/text-content.css';
import Imagen from '../../../img/generales/Logo EquidApp.png';
import "../../../Styles/MatematicasCSS.css"

const MatematicasIntro = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 h-100 col ">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
          <Link to="/Matematicas" className="text-start btn btn-back">
            Volver atrás
          </Link>
          <h2 className="perfilFont">Bienvenid@ a Matemáticas</h2>
          <p></p><p></p>
        </div>

        <div className="mt-3 course-text container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
          <div className="text-center text-content p-4">
            <p>
              Los matemáticos exploran el fascinante mundo de los números y las formas, desde problemas simples hasta complejas ecuaciones y patrones en la naturaleza. Únete y descubre más acerca de los conceptos fundamentales de las matemáticas, desde la aritmética básica hasta las complejas fórmulas que ayudan a entender el universo que nos rodea.
            </p>
          </div>
          <div className="text-center">
            <img src={Imagen} alt="Biologia" className="img-fluid" />
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

export default MatematicasIntro;