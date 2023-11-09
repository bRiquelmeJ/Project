import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentS from './RecursoContenidoS'
import ModalContentT from './RecursoContenidoT'
import ModalContentE from './RecursoContenidoE'
import ModalContentM from './RecursoContenidoM'
import Sidebar from '../Sidebar';
import S from '../../img/iconos/S.svg'
import T from '../../img/iconos/T.svg'
import E from '../../img/iconos/E.svg'
import M from '../../img/iconos/M.svg'
import '../RecursosExternos/recurso.css';




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
</div>
</div>
)
}



export default Recurso;