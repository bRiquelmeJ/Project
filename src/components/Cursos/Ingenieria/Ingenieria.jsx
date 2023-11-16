import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ingenieria.css';
import {Link} from 'react-router-dom';
import COMPUTACION from '../../../img/COMPUTACION.png';
import ROBOTICA from '../../../img/ROBOTICA.png';


function Ingenieria() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 h-100">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
                <div className="welcome-box  row ">
                    <div className="">
                    <h2 className= "perfilFont">Bienvenid@ a Ingeniería</h2>
                    </div>
                </div>

                <div className="mt-3 row d-flex align-items-center justify-content-center courses-btn">
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/Computacion" type="button" className="btn btn-lg btn-block">
                            <img src={COMPUTACION} alt="Computacion" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/Robotica" type="button" className="btn btn-lg btn-block">
                            <img src={ROBOTICA} alt="Robotica" className="img-fluid imgZoom" />
                        </Link>
                    </div>
                </div>
                <div className='row container-fluid d-flex align-content-center justify-content-center'> 
                <Link to="/Quizz-Ingenieria" class="btn button1"> ¡Vamos al Quiz! </Link>    
                </div>
            </div>
      
    </div>
  );
}

export default Ingenieria;
