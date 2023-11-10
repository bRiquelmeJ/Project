import Quiz from '../../img/iconos/Quiz.svg';
import Recursos from '../../img/iconos/Recursos.svg';
import Insignia from '../../img/iconos/Insignia.png'
import Foro from '../../img/iconos/Foro.png'
import Ajustes from '../../img/iconos/Ajustes.png'
import perfil from '../../img/computadora (1).png'
import '../../Styles/pCursos.css';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className="user-box row">
            <div>
                <img src={perfil} alt="perfil" className="foto-perfil" />
            </div>
            <div >
            <h4>Usuario</h4> 
            </div>

            <ul>
                <li><img className=' icons-btn' src={Quiz} alt="Quiz" /></li>
                <li><Link to="/recurso"><img className='icons-btn' src={Recursos} alt="Recursos" /></Link></li>
                <li><img className='col icons-btn' src={Insignia} alt="Insignias" /></li>
                <li><img className='icons-btn' src={Foro} alt="Foro" /></li>
                <li><img className='col icons-btn' src={Ajustes} alt="Ajustes" /></li>
            </ul>
        </div>

    )
}

export default Sidebar;