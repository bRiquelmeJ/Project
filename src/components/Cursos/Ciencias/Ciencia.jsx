import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import Biologia from '../../../img/BIOLOGIA.png';
import Quimica from '../../../img/QUIMICA.png';
import Fisica from '../../../img/FISICA.png';
import { Link } from 'react-router-dom';

function Ciencia() {
return (
    <div className="app-container container-fluid  row">
    <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
        <Sidebar />
    </div>
    <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box w-50 row ">
        <div className="welcome-box-text">
            <h2>Bienvenid@ a Ciencias</h2>
        </div>
        </div>

        <div className="mt-3 row d-flex align-items-center justify-content-center">
        <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Link to="/Biologia" type="button" className="btn btn-lg btn-block">
            <img src={Biologia} alt="Biologia" className="img-fluid" />
            </Link>
        </div>
        <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Link to="/Quimica" type="button" className="btn btn-lg btn-block">
            <img src={Quimica} alt="Quimica" className="img-fluid" />
            </Link>
        </div>
        <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <Link to="/Fisica" type="button" className="btn btn-lg btn-block">
            <img src={Fisica} alt="Fisica" className="img-fluid" />
            </Link>
        </div>
        </div>
    </div>
    </div>
);
}

export default Ciencia;
