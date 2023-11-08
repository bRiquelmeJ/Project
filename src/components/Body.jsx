import React from 'react';
import Quiz from '../img/iconos/Quiz.svg';
import Recursos from '../img/iconos/Recursos.svg';
import Insignia from '../img/iconos/Insignia.png'
import Foro from '../img/iconos/Foro.png'
import Ajustes from '../img/iconos/Ajustes.png'
import S from '../img/iconos/S.svg'
import T from '../img/iconos/T.svg'
import E from '../img/iconos/E.svg'
import M from '../img/iconos/M.svg'
import MujerSTEM from '../img/STEMimg.jpg'
import Body2 from '../components/Body2'

import '../body.css';

function Body() {

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
            <h2>Bienvenid@ de vuelta</h2>
          </div>
          <div className=" m-4 row ">
            <div className=" col">
              <img src={S} alt="Icono S" />
            </div>
            <div className=" col">
              <img src={T} alt="Icono T" />
            </div>
            <div className=" col">
              <img src={E} alt="Icono E" />
            </div>
            <div className=" col">
              <img src={M} alt="Icono M" />
            </div>
          </div>
        </div>
        <Body2 />
      </div>
    </div>
  );
}

export default Body;