import React from 'react';
import Sidebar from '../../Cursos/Sidebar';
import '../../../Styles/ingenieria.css';


function Ingenieria() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
      <div className="welcome-box w-50 row ">
        <div className="welcome-box-text">
            <h2>Bienvenid@ a Ingenieria</h2>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Ingenieria;
