import React from 'react';
import Quiz from '../img/iconos/Quiz.svg';
import Recursos from '../img/iconos/Recursos.svg';
import Insignia from '../img/iconos/Insignia.png'
import Foro from '../img/iconos/Foro.png'
import Ajustes from '../img/iconos/Ajustes.png'


function Home(){

  return(
    <div className="app-container">
      <div className="app-sidebar">
        <div className="user-box">Img Usuario</div>
        <div>Usuario</div>

        <div>
          <button type="button" class="btn btn-outline-dark"><img src= {Quiz} alt="Quiz" />Quiz</button> 
          </div>
        <div>
          <button  type="button" class="btn btn-outline-dark"> <img src= {Recursos} alt="Recursos"/>
          Recursos
          </button>
          </div>
        <div>
          <button type="button" class="btn btn-outline-dark">
            <img src={Insignia} width="48px" height="48px" alt="Insignias"/>
          Insignias
          </button>
          </div>
        <div>
          <button type="button" class="btn btn-outline-dark">
            <img src={Foro} width="48px" height="48px" alt="Foro"/>
            Foro
            </button></div>
        <div>
          <button type="button" class="btn btn-outline-dark">
            <img src={Ajustes} width="48px" height="48px" alt="Ajustes"/>
            Ajustes
            </button>
            </div>
      </div>
      
      <div className="app-main">
        <div className="welcome-box">Bienvenid@ de vuelta</div>
        <div className="news-activities">
          Noticias y Actividades
        </div>
      </div>
    </div>
  );
}

export default Home;