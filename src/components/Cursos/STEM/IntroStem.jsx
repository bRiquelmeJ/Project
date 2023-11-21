import React from 'react';
import '../../../Styles/pCursos.css';
import Sidebar from './../Sidebar';
import TalkingPet from './TalkingPet';

function IntroStem() {

  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-10 col-md-12">
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
      <div className="app-main container-fluid col-lg col-md-12">
      <TalkingPet/>
      </div>
    </div>
    </div>
  );
}

export default IntroStem;