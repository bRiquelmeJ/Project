import Quiz from '../img/iconos/Quiz.svg';
import Recursos from '../img/iconos/Recursos.svg';
import Insignia from '../img/iconos/Insignia.png'
import Foro from '../img/iconos/Foro.png'
import Ajustes from '../img/iconos/Ajustes.png'
import perfil from '../img/perfil.jpg'
import '../pCursos.css';

function Sidebar() {

    return (
        <div className="user-box d-flex flex-column ">
            <div className='p-5 '>
                <img src={perfil} alt="" className="foto-perfil" />
            </div>
            <div>
                <div className='userText '>
                    <h1 className='fs-1'>Camila</h1>
                </div>
            </div>
            <ul className="nav nav-tabs sidebar-menu">
                <li className="nav-item p-4">
                 <img className=' icons-btn' src={Quiz} alt="Quiz" />
                </li>
                <li className="nav-item p-4 ">
                <img className='icons-btn' src={Recursos} alt="Recursos" />
                </li>
                <li className="nav-item p-4">
                <img className='col icons-btn' src={Insignia} alt="Insignias" />
                </li>
                <li className="nav-item p-4 ">
                <img className='icons-btn' src={Foro} alt="Foro" />
                </li>
                <li className="nav-item p-4">
                <img className='col icons-btn' src={Ajustes} alt="Ajustes" />
                </li>
                
           </ul>
            
        </div>

    )
}

export default Sidebar;