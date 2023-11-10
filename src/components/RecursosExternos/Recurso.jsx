import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentS from './RecursoContenidoS'
import ModalContentT from './RecursoContenidoT'
import ModalContentE from './RecursoContenidoE'
import ModalContentM from './RecursoContenidoM'
import Sidebar from '../Cursos/Sidebar';
import S from '../../img/iconos/S.svg'
import T from '../../img/iconos/T.svg'
import E from '../../img/iconos/E.svg'
import M from '../../img/iconos/M.svg'
import Cookies from '../../img/recurs/galleta.png'
import '../../Styles/recurso.css';




function Recurso() {
    const [showModalS, setShowModalS] = useState(false);
    const [showModalT, setShowModalT] = useState(false);
    const [showModalE, setShowModalE]= useState(false);
    const [showModalM, setShowModalM] = useState(false);

return (
<div className="app-container container-fluid  row">
    <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
    <Sidebar/>
    </div>

<div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
    <div className="app-main ">
        <div className="header-box container bg-warning-subtle ">
        <div className="welcome-box-text">
        <h2>¡Sigamos Aprendiendo! : Recursos Divertidos</h2>
        </div>
            </div>
    <div class="row align-items-start">
    <div class="col">
        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
        <>
        <button 
        type="button" 
        class="btn btn-outline-light" 
        onClick={() => setShowModalS(true)}> 
        <img src={S} alt="Icono S" />
        </button>
        {showModalS && createPortal(
        <ModalContentS onClose={() => setShowModalS(false)} />,
        document.body)}
        </>
        <>
        <button 
        type="button" 
        class="btn btn-outline-light"
        onClick={() => setShowModalT(true)}>
        <img src={T} alt="Icono T" />
        </button>
        {showModalT && createPortal(
        <ModalContentT onClose={() => setShowModalT(false)} />,
        document.body)}
        </>
        <>
        <button 
        type="button" 
        class="btn btn-outline-light"
        onClick={() => setShowModalE(true)}>
        <img src={E} alt="Icono E" />
        </button>
        {showModalE && createPortal(
        <ModalContentE onClose={() => setShowModalE(false)} />,
        document.body)}
        </>

        <>
        <button 
        type="button" 
        class="btn btn-outline-light"
        onClick={() => setShowModalM(true)}>
        <img src={M} alt="Icono M" />
        </button>
        {showModalM && createPortal(
        <ModalContentM onClose={() => setShowModalM(false)} />,
        document.body)}
        </>
        </div>
        </div>
        <div class="col" >

        <div class="card mb-3" style={{ width: '660px', backgroundColor: 'rgb(243, 243, 218)'}}>
    <div class="row g-0">
        <div class="col-md-4">
        <img src={Cookies} class="img-fluid rounded-start" alt="Cookies"/>
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">¿Qué son las Cookies?</h5>
        <p class="card-text ">Las cookies en internet no son galletas, ¡son algo digital!</p>
        <p class="card-text">Son como pequeñas notas que guardan información sobre lo que me gusta en una página web.</p>
        <p class="card-text">Ayudan a que las páginas funcionen mejor.</p>
        <p class="card-text"><small class="text-body-secondary">Recuerda siempre contarle a un adulto si algo parece extraño o no lo entiendes bien. 
            ¡La seguridad es lo primero!</small></p>
        </div>
        </div>
    </div>
        </div>
        </div>
        <div class="col"></div>
            </div>
    </div>
    </div>
    </div>
)
}



export default Recurso;