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

function Body(){

  return(
    <div className="app-container">
      <div className="app-sidebar">
        <div className="user-box">
          Img Usuario
        </div>
        <div className="user-box-text">
          Usuario
        </div>
        <div className= "btn-group-vertical">
          <div>
          <button type="button" class="btn btn-outline-dark btn-sm"><img src= {Quiz} alt="Quiz" /></button> 
          <span>Quiz</span>
          </div>
          <div>
          <button  type="button" class="btn btn-outline-dark btn-sm"> <img src= {Recursos} alt="Recursos"/>
          </button>
          <span>Recursos</span>
          </div>
          <div>
          <button type="button" class="btn btn-outline-dark btn-sm">
            <img src={Insignia} width="48px" height="48px" alt="Insignias"/>
          </button>
          <span>Insignia</span>
          </div>
          <div>
          <button type="button" class="btn btn-outline-dark btn-sm">
            <img src={Foro} width="48px" height="48px" alt="Foro"/></button>
            <span>Foro</span>
            </div>
            <div>
            <button type="button" class="btn btn-outline-dark btn-sm">
            <img src={Ajustes} width="48px" height="48px" alt="Ajustes"/></button>
            <span>Ajustes</span>
            </div>
            </div>
      </div>
      <div className="app-main">
          <div className="welcome-box">
            <div className="welcome-box-text">
              <h2>Bienvenid@ de vuelta</h2>
            </div> 
            <div className="welcome-box-letras">
              <div className="welcome-box-s">
              <img src= {S} alt="Icono S"/>
              </div>
              <div className="welcome-box-t">
              <img src= {T} alt="Icono T"/>
              </div>
              <div className="welcome-box-e">
              <img src= {E} alt= "Icono E"/>
              </div>
              <div className="welcome-box-m">
              <img src= {M} alt= "Icono M"/>
              </div>
            </div>
          </div>

          <Body2 />
      
    </div> 
  </div>
  );
}

export default Body;