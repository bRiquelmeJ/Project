import React from 'react';
import '../../../Styles/pCursos.css';
import Sidebar from '../Sidebar';


function Pcursos() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
      <div className="welcome-box w-50 row ">
                    <div className="welcome-box-text">
                        <h2>Descubriendo el Legado Femenino en Ciencia, Tecnología, Ingeniería y Matemáticas (STEM)</h2>
                    </div>
                </div>
      <div className="mt-0 course-text container-fluid w-100 d-flex align-items-center justify-content-center">
      <h3 className="text-center border-course-text border rounded p-4">
      A lo largo de la historia, las mujeres han desempeñado un papel fundamental en el avance de la ciencia, la tecnología, la ingeniería y las matemáticas, aunque sus contribuciones no siempre han sido ampliamente reconocidas o celebradas.
      </h3>
        </div>
      </div>
      
      
    </div>
  );
}

export default Pcursos;
