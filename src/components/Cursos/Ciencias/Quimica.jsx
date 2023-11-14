import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentInfo from './QuimicaContenidoInfo';
import ModalContentVideo from './QuimicaContenido';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';

function Quimica() {
    const [showModalVideo, setShowModalVideo] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false);

    return (
        <div className="app-container container-fluid  row">
            <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
                <Sidebar />
            </div>
            <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
                <div className="welcome-box w-50 mb-3">
                    <div className="welcome-box-text text-center">
                        <h2>Bienvenid@ a Química</h2>
                    </div>
                </div>
                <div className="mt-3 course-text container-fluid w-50 d-flex align-items-center justify-content-center">
                    <p className="text-center border-course-text border rounded p-4">

                        La química explora la composición y transformación de la materia. <br></br>

                        A través de experimentos y teorías, desentraña cómo interactúan las sustancias, proporcionando las bases para avances científicos y tecnológicos clave. <br></br>

                        En su esencia, la química busca entender la naturaleza íntima de la materia y las fuerzas que la rigen en el universo.</p>
                </div>
                <div className='container-fluid d-flex justify-content-evenly'>
                    <>
                    <img src={Video} alt='Ciencias-Video' onClick={() => setShowModalVideo(true)}/>
                    {showModalVideo && createPortal(
                    <ModalContentVideo onClose={() => setShowModalVideo(false)} />,
                    document.body)}
                    </>
                    <>
                    <img src={Lectura} alt='Ciencias-Lectura' onClick={() => setShowModalInfo(true)}/>
                    {showModalInfo && createPortal(
                        <ModalContentInfo onClose={() => setShowModalInfo(false)} />,
                        document.body)}
                    </>
                
                </div>
            </div>

        </div>
    )
}

export default Quimica; 