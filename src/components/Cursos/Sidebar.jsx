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
            <div>
                <img src={perfil} alt="perfil" className="foto-perfil" />
            </div>
            <div  >
            <h4>Usuario</h4> 
            </div>
                <div> 

                <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <button type="button" className="btn"><img className=' icons-btn' src={Quiz} alt="Quiz" /></button>
                <button type="button" className="btn"><Link to="/recurso"><img className='icons-btn' src={Recursos} alt="Recursos" /></Link></button>
                <button type="button" className="btn"><img className='col icons-btn' src={Insignia} alt="Insignias" /></button>
                <button type="button" className="btn"><img className='icons-btn' src={Foro} alt="Foro" /></button>
                <button type="button" className="btn"><img className='col icons-btn' src={Ajustes} alt="Ajustes" /></button>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Sidebar;
