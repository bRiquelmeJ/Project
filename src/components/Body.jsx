import React from 'react';
import Quiz from './img/iconos/Quiz.svg';
import Recursos from './img/iconos/Recursos.svg';

function Home(){

  return(
    <div className="app-container">
     
      <div className="app-sidebar">
        <div className="user-box">Img Usuario</div>
        <div>Usuario</div>

        <div>
          <button><img src= {Quiz} alt="Quiz" />Quiz</button> 
          </div>
        <div>
          <button> <img src= {Recursos} alt="Recursos"/>
          Recursos
          </button>
          </div>
        <div><button>Insignias</button></div>
        <div><button>Foro</button></div>
        <div><button>Ajustes</button></div>
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