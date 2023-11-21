import React from 'react';
import Sidebar from './Cursos/Sidebar';


function Pcursos() {

return (
    <div className="app-container container-fluid  row ">
    <div className="container-fluid app-sidebar col-lg-10 col-md-12 col ">
        
        <Sidebar/>
    </div>
      
    <div className="app-main container-fluid col-lg col-md-12 ">
        <h1 className= "perfilFont">Ajustes de mi cuenta</h1>
    </div>
    
      
    </div>
  );
}

export default Pcursos;
