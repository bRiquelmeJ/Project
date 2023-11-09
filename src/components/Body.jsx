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
import perfil from '../img/perfil.jpg'
import Body2 from '../components/Body2'

import { Link } from 'react-router-dom';

import '../body.css';

function Body() {

  return (
    <div className="app-container row">
      <div className="app-sidebar col-1">
        <div className="user-box row">
        <img src={perfil} alt="" className="foto-perfil"/>
        </div>
        <div className="user-box-text row ">
          Camila
        </div>
        <div className="btn-group-vertical ">
          <div className='row'>
          <div className='col'>
            <img className=' icons-btn' src={Quiz} alt="Quiz" />
            <button type="button" class="btn   ">
              Quiz
            </button>
            </div>
            
          </div>
          <div className='row'>
          <div className='col'>
            <img className='icons-btn' src={Recursos} alt="Recursos" />
            <button type="button" class="btn  ">
              <Link to="/recurso">Recursos</Link>
            </button>
            </div>
          </div>
          <div className='row'>
          <div className='col'>
            <img className='col icons-btn' src={Insignia} alt="Insignias" />
          
        
          <button type="button" class="btn ">
              Insignia
            </button>
          </div>

          </div>
          <div className='row'>
          <div className='col'>
            <img className='icons-btn' src={Foro} alt="Foro" />
            
          <button type="button" className="btn ">
              Foro
            </button>
          </div>
            
          </div>
          <div className='row'>
          <div className='col'>
            <img className='col icons-btn' src={Ajustes} alt="Ajustes" />
            <button type="button" class="btn ">
              Ajustes
            </button>
            </div>

          </div>
        </div>
      </div>
      <div className="app-main col">
        <div className="header-box container ">
          <div className="welcome-box row ">
            <div className="welcome-box-text">
            <h2>Bienvenid@ de vuelta</h2>
            </div>
            
          </div>
          <div className="  m-4 row ">
            <div className=" col">
              <button className='icons-stem border-0'><img src={S} alt="Icono S" /></button>
            </div>
            <div className=" col">
              <button className='icons-stem border-0'><img src={T} alt="Icono T" /></button>
            </div>
            <div className=" col">
              <button className='icons-stem border-0'><img src={E} alt="Icono E" /></button>         
            </div>
            <div className=" col">
              <button className='icons-stem border-0'><img src={M} alt="Icono M" /></button>
            </div>
          </div>
        </div>
        <Body2 />
      </div>
    </div>
  );
}

export default Body;