// Sidebar.js
import React, { useState } from 'react';
import AvatarModal from './Avatar/AvatarModal'; 
import perfil from '../../img/generales/perfil.jpeg';
import '../../Styles/pCursos.css'; 
import { Link } from 'react-router-dom';
import Quiz from '../../img/iconos/Quiz.svg';
import Recursos from '../../img/iconos/Recursos.svg';
import Ajustes from '../../img/iconos/Ajustes.png'
import Medal from './Avatar/Medallas/Medal';
import CIENCIA from '../../img/medallas/CIENCIA.png';
import INGENIERIA from '../../img/medallas/Ingenieria.png';
import MATEMATICAS from '../../img/medallas/MATEMATICAS.png';
import MUJERES from '../../img/medallas/MUJERES.png';
import STEM from '../../img/medallas/STEM.png';
import TECNOLOGIA from '../../img/medallas/TECNOLOGIA.png';
import CambioImagen from '../../img/iconos/cambioimagen.png'
import { useAuth } from "../../context/AuthContext";

function Sidebar() {

    const {user} = useAuth()
    const [isAvatarModalOpen, setAvatarModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(() => localStorage.getItem('userAvatar') || perfil);
   // TODO: aca se debe usar el estado del context
    const [medalsUnlocked] = useState(() => {
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
                <h4 className='perfilFont'>{user.name}</h4>
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
                <button type="button" className="btn" onClick={() => setAvatarModalOpen(true)}>
                    <span >
                         <img className='icons-btn' src={CambioImagen} alt="CambiosImagen" />{/* Agrega aquí el SVG o ícono para "Cambiar Avatar" */}
                    </span>
                </button>
                <AvatarModal
                    isOpen={isAvatarModalOpen}
                    onClose={() => setAvatarModalOpen(false)}
                    onSelectAvatar={handleAvatarChange}
                />
            
            </div>
        </div>
    );
}

export default Sidebar;