import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentVideo from './FisicaContenido';
import ModalContentInfo from './FisicaContenidoInfo';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';

function Fisica() {

  const [showModalVideo, setShowModalVideo] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
    return (
        <div className="app-container container-fluid  row">
            <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
                <Sidebar />
            </div>
            <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
                <div className="welcome-box mb-3">
                    <div className="text-center">
                        <h2 className= "perfilFont">Bienvenid@ a Física</h2>
                    </div>
                </div>
                <div className="mt-3 course-text container-fluid w-50 d-flex align-items-center justify-content-center">
                    <p className="text-center border-course-text border rounded p-4">
                        La física, es una disciplina fundamental en la comprensión del universo que nos rodea. Se adentra en el estudio de la naturaleza y sus leyes fundamentales. <br></br>

                        A través de la observación, la experimentación y la formulación de teorías, los físicos buscan entender y predecir el comportamiento de los objetos y fenómenos en el cosmos.</p>
                </div>
                <div className='container-fluid d-flex justify-content-evenly'>
                    <>
                    <img src={Video} alt='Ciencias-Video' onClick={() => setShowModalVideo(true)}/>
                    {showModalVideo && createPortal(
        <ModalContentVideo onClose={() => setShowModalVideo(false)} />,
        document.body)}

                    </>
                    <>
                    <img src={Lectura} alt='Ciencias-Lectura' onClick={() => setShowModalInfo(true)}  />
                    {showModalInfo && createPortal(
        <ModalContentInfo onClose={() => setShowModalInfo(false)} />,
        document.body)}
                    </>
                </div>
            </div>
        </div>
    )
}
export default Fisica