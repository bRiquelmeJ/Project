import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from '../RecursosExternos/RecursoContenido'
import Quiz from '../img/iconos/Quiz.svg';
import Recursos from '../img/iconos/Recursos.svg';
import Insignia from '../img/iconos/Insignia.png'
import Foro from '../img/iconos/Foro.png'
import Ajustes from '../img/iconos/Ajustes.png'
import S from '../img/iconos/S.svg'
import T from '../img/iconos/T.svg'
import E from '../img/iconos/E.svg'
import M from '../img/iconos/M.svg'
import '../RecursosExternos/recurso.css';



function Recurso () {
const [showModal, setShowModal] = useState(false);


const resources = [
{
    title: 'Recurso S',
    description: 'Descripción del Recurso S',
    url: 'URL del Recurso S',
    icon: S,
},
{
    title: 'Recurso T',
    description: 'Descripción del Recurso T',
    url: 'URL del Recurso T',
    icon: T,
},
{
    title: 'Recurso E',
    description: 'Descripción del Recurso E',
    url: 'URL del Recurso E',
    icon: E,
},
{
    title: 'Recurso M',
    description: 'Descripción del Recurso M',
    url: 'URL del Recurso M',
    icon: M,
},
];


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
            <button 
            type="button" 
            class="btn btn-outline-light" 
            onClick={() => setShowModal(true)}> 
            <img src={S} alt="Icono S" />
            </button>
            <button 
            type="button" 
            class="btn btn-outline-light">
            <img src={T} alt="Icono T" />
            </button>
            <button 
            type="button" 
            class="btn btn-outline-light">
            <img src={E} alt="Icono E" />
            </button>
            <button 
            type="button" 
            class="btn btn-outline-light">
            <img src={M} alt="Icono M" />
            </button>
            {showModal && createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,
            document.body)}
        </div>
    </div>
</div>
)
}



export default Recurso;