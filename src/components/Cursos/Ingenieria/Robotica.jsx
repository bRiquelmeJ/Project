import React from 'react';
import Sidebar from '../Sidebar';
import '../../../Styles/ingenieria.css';
import Lectura from '../../../img/iconos/ciencias-lectura.png';
import Video from '../../../img/iconos/ciencias-video.png';


function Ingenieria() {

  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box mb-3">
          <div className="text-center">
          <h2 className= "perfilFont">Bienvenid@ a Robótica</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid w-50 d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
          En este campo vanguardista, la creatividad y la tecnología convergen para dar vida a máquinas inteligentes y autónomas. <br></br>
La Robótica es mucho más que simples robots; es una ventana al futuro donde la ingeniería, la inteligencia artificial y la automatización se fusionan. <br></br>
Explorarás la creación de dispositivos capaces de moverse, interactuar y tomar decisiones por sí mismos.          </p>
        </div>
        <div className='container-fluid d-flex justify-content-evenly'>
          <img src={Video} alt='Ciencias-Video'/>
          <img src={Lectura} alt='Ciencias-Lectura' />
        </div>
      </div>
    </div>
  );
}

export default Ingenieria;
