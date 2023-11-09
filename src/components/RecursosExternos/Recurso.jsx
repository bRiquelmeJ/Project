import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContentS from './RecursoContenidoS'
import ModalContentT from './RecursoContenidoT'
import ModalContentE from './RecursoContenidoE'
import ModalContentM from './RecursoContenidoM'
import Quiz from '../../img/iconos/Quiz.svg';
import Recursos from '../../img/iconos/Recursos.svg';
import Insignia from '../../img/iconos/Insignia.png'
import Foro from '../../img/iconos/Foro.png'
import Ajustes from '../../img/iconos/Ajustes.png'
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
    <div className="app-container">
    <div className="app-sidebar col">
        <div className="user-box row">
            Img Usuario
        </div>
        <div className="user-box-text row ">
            Usuario
        </div>
        <div className="btn-group-vertical ">
        <div className='row'>
        <img className='col icons-btn' src={Quiz} alt="Quiz" />
        <div className='col'>
        <button type="button" class="btn btn-sm ">
            Quiz
        </button>
        </div>
        </div>
        <div className='row'>
        <img className='col icons-btn' src={Recursos} alt="Recursos" />
        <div className='col'>
        <button type="button" class="btn btn-sm ">
            Recursos
        </button>
        </div>
        </div>
        <div className='row'>
        <img className='col icons-btn' src={Insignia} alt="Insignias" />
        <button type="button" class="btn  btn-sm col">
            Insignia
        </button>
        </div>
        <div className='row'>
        <img className=' col icons-btn' src={Foro} alt="Foro" />
        
        <div className='col'>
            <button type="button" className="btn  btn-sm ">
                Foro
        </button>
        </div>
        
        </div>
        <div className='row'>
        <img className='col icons-btn' src={Ajustes} alt="Ajustes" />
        <button type="button" class="btn btn-sm col">
            Ajustes
        </button>
        </div>
    </div>
    </div>
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
)
}



export default Recurso;