import S from '../../img/iconos/S.svg'
import T from '../../img/iconos/T.svg'
import E from '../../img/iconos/E.svg'
import M from '../../img/iconos/M.svg'
import { Link } from 'react-router-dom'
import Matematicas from './Matematicas/Matematicas-1'

function StemBtn(){

    return(
        <div className="header-box container w-60 h-auto   ">
          <div className="welcome-box w-50 row ">
            <div className="welcome-box-text">
            <h2>Bienvenid@ de vuelta</h2>
            </div>
            
          </div>
          <div className="  m-4 row ">
            <div className=" col">
              <button className='icons-stem border-0'><img src={S} alt="Icono S" /></button>
            </div>
            <div className=" col">
              <button className='icons-stem border-0'><img src={T} alt="Icono T" /></button>
            </div>
            <div className=" col">
              <button className='icons-stem border-0'><img src={E} alt="Icono E" /></button>         
            </div>
            <div className=" col">
              <Link to={Matematicas} className='icons-stem border-0'><img src={M} alt="Icono M" /></Link>
            </div>
          </div>
        </div>
    )
}

export default StemBtn;