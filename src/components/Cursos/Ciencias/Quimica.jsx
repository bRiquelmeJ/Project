import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentInfo from './QuimicaContenidoInfo';
import ModalContentVideo from './QuimicaContenido';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import '../../../Styles/pCursos.css';
import { Link } from 'react-router-dom';
import '../../../Styles/btn-back.css';
import '../../../Styles/text-content.css';
import Imagen from '../../../img/generales/Logo EquidApp.png';

function Quimica() {
    const [showModalVideo, setShowModalVideo] = useState(false);
    const [showModalInfo, setShowModalInfo] = useState(false);

    return (
        <div className="app-container container-fluid  row">
            <div className="container-fluid app-sidebar col-lg-10 col-md-12  col ">
                <Sidebar />
            </div>
            <div className="app-main container-fluid col-lg col-md-12">
                <div className="welcome-box mb-3 d-flex flex-row align-items-center justify-content-around">
                    <Link to="/Ciencia" className="text-start btn btn-back">
                        Volver atrás
                    </Link>
                    <h2 className="perfilFont">Bienvenid@ a Química</h2>
                    <p></p><p></p>
                </div>


                <div className="mt-3 course-text container-fluid d-md-flex flex-md-row align-items-center justify-content-center">
                    <div className="text-center text-content p-4">
                        <p>
                            La química explora la composición y transformación de la materia. <br></br>

                            A través de experimentos y teorías, desentraña cómo interactúan las sustancias, proporcionando las bases para avances científicos y tecnológicos clave. <br></br>

                            En su esencia, la química busca entender la naturaleza íntima de la materia y las fuerzas que la rigen en el universo.
                        </p>
                    </div>
                    <div className="text-center">
                        <img src={Imagen} alt="Biologia" className="img-fluid h-50" />
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
    )
}

export default Quimica; 