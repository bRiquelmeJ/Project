import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './BiologiaContenido';
import ModalContentInfo from './BiologiaContenidoInfo';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';

function Biologia() {

  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);

  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box  mb-3">
          <div className="text-center">
            <h2 className= "perfilFont">Bienvenid@ a Biología</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid w-50 d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
            Los biólogos estudian la vida a diferentes niveles, desde las células individuales, pasando por los organismos, hasta la biósfera completa del planeta Tierra. Ven y aprende más acerca de los temas fundamentales de la biología.
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

export default Biologia;


