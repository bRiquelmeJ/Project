import React from 'react';


function Home(){

  return(
    <div className="app-container">
     
      <div className="app-sidebar">
        <div className="user-box">Img Usuario</div>
        <div>Usuario</div>

        <div>
          <button>
        
      <img src= "./src/img/Iconos/Quiz.svg" alt="Quiz" /> Quiz
          </button>
          </div>
        <div><button>Recursos</button></div>
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