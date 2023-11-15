// Sidebar.js
import React, { useState } from 'react';
import AvatarModal from './Avatar/AvatarModal'; // Verifica la ruta
import perfil from '../../img/perfil.jpeg';
import '../../Styles/pCursos.css'; // Verifica la ruta
import { Link } from 'react-router-dom';

function Sidebar() {
    const [isAvatarModalOpen, setAvatarModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(() => {
        // Intenta obtener el avatar del almacenamiento local o usa el predeterminado
        return localStorage.getItem('userAvatar') || perfil;
    });

    const handleAvatarChange = (newAvatarSrc) => {
        setAvatar(newAvatarSrc);
        localStorage.setItem('userAvatar', newAvatarSrc);
        setAvatarModalOpen(false);
    };

    return (
        <div className="user-box row">
            <div>
                <img src={avatar} alt="perfil" className="foto-perfil" />
                <button className="bookmarkBtn" onClick={() => setAvatarModalOpen(true)}>
                    <span className="IconContainer">
                        {/* Agrega aquí el SVG o ícono para "Cambiar Avatar" */}
                    </span>
                    <p className="text">Cambiar Avatar</p>
                </button>

                <AvatarModal
                    isOpen={isAvatarModalOpen}
                    onClose={() => setAvatarModalOpen(false)}
                    onSelectAvatar={handleAvatarChange}
                />
            </div>
            <div className="btn-group-vertical sidebar" role="group" aria-label="Vertical button group">
                <button type="button" className="bookmarkBtn">
                    <Link to="/quizz-intro">
                        <p className="text">Quiz</p>
                    </Link>
                </button>
                <button type="button" className="bookmarkBtn">
                    <Link to="/recurso">
                        <p className="text">Recursos</p>
                    </Link>
                </button>
                <button type="button" className="bookmarkBtn">
                    <Link to="/foro">
                        <p className="text">Foro</p>
                    </Link>
                </button>
                <button type="button" className="bookmarkBtn">
                    <Link to="/ajustes">
                        <p className="text">Ajustes</p>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;
