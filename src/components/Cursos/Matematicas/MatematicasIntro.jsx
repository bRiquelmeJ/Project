import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './MatematicasContenido';
import ModalContentInfo from './MatematicasContenidoInfo';
import Sidebar from "../Sidebar";
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';

import "../../../Styles/MatematicasCSS.css"

const MatematicasIntro = () => {
  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

    return (
        <div className="app-container container-fluid row">
      <div className="app-sidebar col-lg-3 col-md-4 col-sm-5 col-12">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box  mb-3">
          <div className="text-center">
            <h2 className= "perfilFont">Bienvenid@ a Matemáticas</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid  d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
          Los matemáticos exploran el fascinante mundo de los números y las formas, desde problemas simples hasta complejas ecuaciones y patrones en la naturaleza. Únete y descubre más acerca de los conceptos fundamentales de las matemáticas, desde la aritmética básica hasta las complejas fórmulas que ayudan a entender el universo que nos rodea.
          </p>
        </div>
        
        <div className='container-fluid d-flex justify-content-evenly'>
          <>
          <img src={Video} alt='Ciencias-Video' onClick={() => setShowModalVideo(true)}/> 
          {showModalVideo && createPortal(
          <ModalContentVideo onClose={() => setShowModalVideo(false)} />,
          document.body)}
          </>
          <>
          <img src={Lectura} alt='Ciencias-Lectura' onClick={() => setShowModalInfo(true)} />
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