import Quiz from '../../img/iconos/Quiz.svg';
import Recursos from '../../img/iconos/Recursos.svg';

import Foro from '../../img/iconos/Foro.png'
import Ajustes from '../../img/iconos/Ajustes.png'
import perfil from '../../img/perfil.jpeg'
import '../../Styles/pCursos.css';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div className="user-box row">
            <div>
            <div>
            <Link to="/PlataformaCursos">
      <img src={perfil} alt="perfil" className="foto-perfil" />
    </Link>

            </div>
            <div >
            <h4 className='perfilFont'>Usuario</h4> 
            </div>
                <div> 

                <div class="btn-group-vertical sidebar" role="group" aria-label="Vertical button group">
                <button type="button" className="btn "><Link to="/quizz-intro"><img className=' icons-btn' src={Quiz} alt="Quiz" /></Link></button>
                <button type="button" className="btn"><Link to="/recurso"><img className='icons-btn' src={Recursos} alt="Recursos" /></Link></button>
                <button type="button" className="btn"><img className='icons-btn' src={Foro} alt="Foro" /></button>
                <button type="button" className="btn"><img className='col icons-btn' src={Ajustes} alt="Ajustes" /></button>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Sidebar;
