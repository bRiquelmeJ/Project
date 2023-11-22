import React, { useState, useEffect } from 'react';
import AvatarModal from './Avatar/AvatarModal';
import perfil from '../../img/generales/perfil.jpeg';
import '../../Styles/pCursos.css';
import { Link } from 'react-router-dom';
import Quiz from '../../img/iconos/Quiz.svg';
import Recursos from '../../img/iconos/Recursos.svg';
import Ajustes from '../../img/iconos/Ajustes.png';
import Medal from './Avatar/Medallas/Medal';
import CIENCIA from '../../img/medallas/CIENCIA.png';
import INGENIERIA from '../../img/medallas/Ingenieria.png';
import MATEMATICAS from '../../img/medallas/MATEMATICAS.png';
import MUJERES from '../../img/medallas/MUJERES.png';
import STEM from '../../img/medallas/STEM.png';
import TECNOLOGIA from '../../img/medallas/TECNOLOGIA.png';
import CambioImagen from '../../img/iconos/cambioimagen.png';
import { useAuth } from "../../context/AuthContext";
import { useMedals } from "../../context/medalsContext"; // Asegúrate de que esta es la ruta correcta

function Sidebar() {
    const { user } = useAuth();
    const {userId} = useAuth(); // Agregar userId
    const { medals, getMedals } = useMedals();
    const [isAvatarModalOpen, setAvatarModalOpen] = useState(false);
    const [avatar, setAvatar] = useState(() => localStorage.getItem('userAvatar') || perfil);

    useEffect(() => {
        if (user?._id) {
            getMedals(user._userId);
        }
    }, [user, getMedals]);
    
    useEffect(() => {
        console.log(medals);
    }, [medals]);

    const medalImages = [
        { name: 'CienciaM', image: CIENCIA },
        { name: 'IngenieriaM', image: INGENIERIA },
        { name: 'MatematicasM', image: MATEMATICAS },
        { name: 'MujeresM', image: MUJERES },
        { name: 'StemM', image: STEM },
        { name: 'TecnologiaM', image: TECNOLOGIA },
    ];

    const handleAvatarChange = (newAvatarSrc) => {
        setAvatar(newAvatarSrc);
        localStorage.setItem('userAvatar', newAvatarSrc);
        setAvatarModalOpen(false);
    };

    return (
        <div className="user-box row">
            <div>
                <img src={avatar} alt="Perfil" className="foto-perfil" />
                <div className="medals-container">
                    {medalImages.map((medalInfo, index) => {
                        const isUnlocked = medals.some(medal => medal.nombre === medalInfo.name && medal.obtenida);
                        return (
                            <Medal 
                                key={index} 
                                unlocked={isUnlocked} 
                                imageUnlocked={medalInfo.image} 
                                imageLocked={medalInfo.image} // La misma imagen, el estilo se controla en el componente Medal
                            />
                        );
                    })}
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
                    <img className='icons-btn' src={CambioImagen} alt="Cambio Imagen" />
                </button>
                <button type="button" className="btn">
                    <Link to="/ajustes">
                        <img className='col icons-btn' src={Ajustes} alt="Ajustes" />
                    </Link>
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
