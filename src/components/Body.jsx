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
            <button type="button" class="btn btn-sm "><img src={Quiz} alt="Quiz" /><span>Quiz</span></button>
          </div>
          <div className='row'>
            <button type="button" class="btn  btn-sm"> <img src={Recursos} alt="Recursos" />
              <span>Recursos</span>
            </button>

          </div>
          <div className='row'>
            <button type="button" class="btn  btn-sm">
              <img src={Insignia} alt="Insignias" />
              <span>Insignia</span>
            </button>

          </div>
          <div className='row'>
            <button type="button" class="btn  btn-sm">
              <img src={Foro} alt="Foro" /><span>Foro</span></button>

          </div>
          <div className='row'>
            <button type="button" class="btn btn-sm">
              <img src={Ajustes} alt="Ajustes" /><span>Ajustes</span></button>

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