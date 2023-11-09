import React from 'react';
import IconS from '../../img/iconos/S.svg'; // Asegúrate de que las rutas a los iconos sean correctas
import IconT from '../../img/iconos/T.svg';
import IconE from '../../img/iconos/E.svg';
import IconM from '../../img/iconos/M.svg';
import "../../Styles/Content.css";

const MainContent = () => {
  return (
    <div className="app-main col">
      <div className="header-box container">
        <div className="welcome-box row">
          <div className="welcome-box-text">
            <h2>Bienvenid@ de vuelta</h2>
          </div>
        </div>
        <div className="m-4 row">
          {/* Asumiendo que estos botones llevan a diferentes secciones de tu aplicación, podrías envolverlos en <Link> o usar onClick para manejar la navegación */}
          <div className="col">
            <button className='icons-stem border-0'>
              <img src={IconS} alt="Icono S" />
            </button>
          </div>
          <div className="col">
            <button className='icons-stem border-0'>
              <img src={IconT} alt="Icono T" />
            </button>
          </div>
          <div className="col">
            <button className='icons-stem border-0'>
              <img src={IconE} alt="Icono E" />
            </button>
          </div>
          <div className="col">
            <button className='icons-stem border-0'>
              <img src={IconM} alt="Icono M" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
