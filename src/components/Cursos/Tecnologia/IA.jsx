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
      <div className="welcome-box w-50 mb-3">
          <div className="welcome-box-text text-center">
            <h2>¡Bienvenid@s al asombroso universo de la inteligencia artificial!</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid w-50 d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
          La programación es el arte de dar vida a tus ideas en el mundo digital. Es como aprender un nuevo idioma para crear aplicaciones, juegos y soluciones innovadoras. Cada línea de código es un paso más cerca de convertir tus pensamientos en realidad. Bienvenido al emocionante viaje de la programación, donde la creatividad se encuentra con el potencial ilimitado de la tecnología
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

export default IA;
