import React from 'react';
import QuizIcon from '../../img/iconos/Quiz.svg';
import RecursosIcon from '../../img/iconos/Recursos.svg';
import InsigniaIcon from '../../img/iconos/Insignia.png';
import ForoIcon from '../../img/iconos/Foro.png';
import AjustesIcon from '../../img/iconos/Ajustes.png';
import PerfilIcon from '../../img/perfil.jpg';
import { Link } from 'react-router-dom'; // Asegúrate de que estás usando react-router-dom
import "../../Styles/Sidebar.css";


const Sidebar = () => {
  return (
    <div className="app-sidebar col-1">
      <div className="user-box row">
        <img src={PerfilIcon} alt="Perfil" className="foto-perfil"/>
      </div>
      <div className="user-box-text row ">
        Camila {/* Asumiendo que "Camila" es el nombre del usuario */}
      </div>
      <div className="btn-group-vertical">
        {/* Usar el componente Link de react-router-dom para la navegación */}
        <Link to="/quiz" className="btn btn-link row">
          <img className='icons-btn' src={QuizIcon} alt="Quiz" />
          Quiz
        </Link>
        <Link to="/recursos" className="btn btn-link row">
          <img className='icons-btn' src={RecursosIcon} alt="Recursos" />
          Recursos
        </Link>
        <Link to="/insignias" className="btn btn-link row">
          <img className='icons-btn' src={InsigniaIcon} alt="Insignias" />
          Insignia
        </Link>
        <Link to="/foro" className="btn btn-link row">
          <img className='icons-btn' src={ForoIcon} alt="Foro" />
          Foro
        </Link>
        <Link to="/ajustes" className="btn btn-link row">
          <img className='icons-btn' src={AjustesIcon} alt="Ajustes" />
          Ajustes
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
