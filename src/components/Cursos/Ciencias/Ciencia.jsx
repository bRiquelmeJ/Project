import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ciencias.css';
import Biologia from '../../../img/BIOLOGIA.png'
import Quimica from '../../../img/QUIMICA.png'
import Fisica from '../../../img/FISICA.png'




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
            <button 
            type="button" 
            class="btn"
            img src={Biologia} alt="Biologia">
            </button>
            <button 
            type="button" 
            class="btn"
            img src={Quimica} alt="Quimica">

            </button>
            <button 
            type="button" 
            class="btn"
            img src={Fisica} alt="Fisica">

            </button>
        </div>

        </div>
    



    </div>
    
    </div>



)}
export default Ciencia;