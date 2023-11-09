import React from 'react';

function Recursos () {
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
        </div>
    )
}