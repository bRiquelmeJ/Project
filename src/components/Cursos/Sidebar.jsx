// Sidebar.js
import React, { useState } from 'react';
import AvatarModal from './Avatar/AvatarModal'; // Verifica la ruta
import perfil from '../../img/perfil.jpeg';
import '../../Styles/pCursos.css'; // Verifica la ruta
import { Link } from 'react-router-dom';
import Quiz from '../../img/iconos/Quiz.svg';
import Recursos from '../../img/iconos/Recursos.svg';
import Foro from '../../img/iconos/Foro.png'
import Ajustes from '../../img/iconos/Ajustes.png'
import Medal from './Avatar/Medallas/Medal';
import CIENCIA from '../../img/medallas/CIENCIA.png';
import INGENIERIA from '../../img/medallas/Ingenieria.png';
import MATEMATICAS from '../../img/medallas/MATEMATICAS.png';
import MUJERES from '../../img/medallas/MUJERES.png';
import STEM from '../../img/medallas/STEM.png';
import TECNOLOGIA from '../../img/medallas/TECNOLOGIA.png';
import CambioImagen from '../../img/iconos/cambioimagen.png'


function Sidebar() {
    const [isAvatarModalOpen, setAvatarModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(() => localStorage.getItem('userAvatar') || perfil);
    const [medalsUnlocked, setMedalsUnlocked] = useState(() => {
        const savedMedals = localStorage.getItem('medalsUnlocked');
        return savedMedals ? JSON.parse(savedMedals) : Array(7).fill(false);
    });

    const medalImages = [
        CIENCIA,
        INGENIERIA,
        MATEMATICAS,
        MUJERES,
        STEM,
        TECNOLOGIA,
      ];
      

    const handleAvatarChange = (newAvatarSrc) => {
        setAvatar(newAvatarSrc);
        localStorage.setItem('userAvatar', newAvatarSrc);
        setAvatarModalOpen(false);
    };

    return (
        <div className="user-box row">
            <div>
                <img src={avatar} alt="perfil" className="foto-perfil" />
                <div className="medals-container">
                    {medalImages.map((image, index) => (
                        <Medal key={index} unlocked={medalsUnlocked[index]} imageUnlocked={image} imageLocked={image} />
                    ))}
                </div>
                <h4 className='perfilFont'>Usuario</h4>
            </div>
            <div className="btn-group-vertical sidebar" role="group" aria-label="Vertical button group">
                <button type="button" className="btn">
                    <Link to="/quizz-intro">
                        <img className='icons-btn' src={Quiz} alt="Quiz" />
                    </Link>
                </button>
                <button type="button" className="btn">
                    <Link to="/recurso">
                        <img className='icons-btn' src={Recursos} alt="Recursos" />
                    </Link>
                </button>
                <button type="button" className="btn">
                    <Link to="/foro">
                        <img className='icons-btn' src={Foro} alt="Foro" />
                    </Link>
                </button>
                <button type="button" className="btn" onClick={() => setAvatarModalOpen(true)}>
                    <img className='col icons-btn' src={Ajustes} alt="Ajustes" />

                    <span >
                         <img className='icons-btn' src={CambioImagen} alt="CambiosImagen" />{/* Agrega aquí el SVG o ícono para "Cambiar Avatar" */}
                    </span>
                </button>
                <AvatarModal
                    isOpen={isAvatarModalOpen}
                    onClose={() => setAvatarModalOpen(false)}
                    onSelectAvatar={handleAvatarChange}
                />
                <button type="button" className="btn">
                    <Link to="/ajustes">
                    <img className='icons-btn' src={Ajustes} alt="Ajustes" />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;