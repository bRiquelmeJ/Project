import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import Biologia from '../../../img/BIOLOGIA.png'
import Quimica from '../../../img/QUIMICA.png'
import Fisica from '../../../img/FISICA.png'
import { Link } from 'react-router-dom'




function Ciencia() {

return (
    <div className="app-container container-fluid  row">
    <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
    <Sidebar/>
    </div>
    <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        <div className="welcome-box w-50 row ">
            <div className="welcome-box-text">
            <h2>Bienvenid@ a Ciencias</h2>
            </div>
        </div>

        <div className="mt-3">
        <div class="btn-group" role="group" aria-label="iconos">
            <Link to="/Biologia" className='icons-stem btn rounded-circle'>
            <button 
            type="button" 
            class="btn"
            img src={Biologia} alt="Biologia"> Biologia
            </button> </Link>
            <Link to="/Quimica" className='icons-stem btn rounded-circle'>
            <button 
            type="button" 
            class="btn"
            img src={Quimica} alt="Quimica"> Quimica

            </button></Link>
            <Link to="/Fisica" className='icons-stem btn rounded-circle'>
            <button 
            type="button" 
            class="btn"
            img src={Fisica} alt="Fisica"> Fisica

            </button></Link>
        </div>

        </div>
    



    </div>
    
    </div>



)}
export default Ciencia;