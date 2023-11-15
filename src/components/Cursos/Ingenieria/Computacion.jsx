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
        <div className="welcome-box  mb-3">
          <div className=" text-center">
          <h2 className= "perfilFont">Bienvenid@ a Computación</h2>
          </div>
        </div>
        <div className="mt-3 course-text container-fluid w-50 d-flex align-items-center justify-content-center">
          <p className="text-center border-course-text border rounded p-4">
            Los biólogos estudian la vida a diferentes niveles, desde las células individuales, pasando por los organismos, hasta la biósfera completa del planeta Tierra. Ven y aprende más acerca de los temas fundamentales de la biología.
          </p>
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
