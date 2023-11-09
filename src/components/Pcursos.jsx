import React from 'react';
import '../pCursos.css';
import StemBtn from './StemBtn';
import Sidebar from './Sidebar';
import Body2 from './Body2';

function Pcursos() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
        
        <Sidebar/>
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
        
        <StemBtn/>
        <Body2/>
      </div>
      
      
    </div>
  );
}

export default Pcursos;