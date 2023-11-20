import React from 'react';
import '../../../Styles/pCursos.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import MujeresIntro from './QuizzMujeres/MujeresIntro';


function Mujeres() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 h-100 col ">

        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
              <div className="welcome-box row ">
                    <h2 className= "perfilFontM"> Descubriendo el Legado Femenino: Ciencia, Tecnología, Ingeniería y Matemáticas (STEM)</h2> 
                </div>

        <div>
          <h4 className="text-center  p-4">
              A lo largo de la historia, las mujeres han desempeñado un papel fundamental en el avance de la ciencia, la tecnología, la ingeniería y las matemáticas, aunque sus contribuciones no siempre han sido ampliamente reconocidas o celebradas.
          </h4>
        </div>
        <div className='row container-fluid d-flex align-content-center justify-content-center mb-5'>
          <MujeresIntro />
        </div>
          <div className='row container-fluid d-flex align-content-center justify-content-center'>
          
            <Link to="/MujeresBio" class="btnM">¡Aprende sobre las mujeres en STEM!</Link> 
          
          </div>

      </div>
          
      
    </div>
  );
}

export default Mujeres;
