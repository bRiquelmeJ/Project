import S from '../img/iconos/S.svg'
import T from '../img/iconos/T.svg'
import E from '../img/iconos/E.svg'
import M from '../img/iconos/M.svg'
import { Link } from 'react-router-dom'
import '../pCursos.css'

function StemBtn() {
  return (
    <div className="header-box container mt-5 pb-2">
      <div className="welcome-box row p-3 w-50">
        <h2>Bienvenid@ de vuelta</h2>
      </div>

      <div className="row mt-4">
        <div className="col">
          <button className="icons-stem btn rounded-circle">
            <img src={S} alt="Icono S" />
          </button>
        </div>
        <div className="col">
          <button className="icons-stem btn rounded-circle">
            <img src={T} alt="Icono T" />
          </button>
        </div>
        <div className="col">
          <button className="icons-stem btn rounded-circle">
            <img src={E} alt="Icono E" />
          </button>
        </div>
        <div className="col">
          <Link to="/Matematicas" className="icons-stem btn rounded-circle">
            <img src={M} alt="Icono M" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StemBtn;
