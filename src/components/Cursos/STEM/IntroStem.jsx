import React from 'react';
import '../../../Styles/pCursos.css';
import Sidebar from './../Sidebar';
import ContenidoStem from './ContenidoStem';

function IntroStem() {
  return (
    <div className="app-container container-fluid row">
      <div className="container-fluid app-sidebar col-lg-2 col">
        <Sidebar />
      </div>

      <div className="app-main container-fluid col-lg col-md-12 ">
        <ContenidoStem />
      </div>
    </div>
  );
}

export default IntroStem;