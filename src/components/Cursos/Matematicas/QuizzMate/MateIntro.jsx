import React from 'react';
import '../../../../Styles/pCursos.css';
import StemBtn from '../../StemBtn';
import Sidebar from '../../Sidebar';
import ContainerMateQuizz from './ContainerMateQuizz';


function MateIntro() {

  return (
    <div className="app-container container-fluid  row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 w-50 h-80">
        
        <Sidebar/>
      </div>
      <div className="app-main container-fluid col-lg col-md-12 w- h-80">
        
        <StemBtn/>
        <ContainerMateQuizz/>
      </div>
      
      
    </div>
  );
}

export default MateIntro;