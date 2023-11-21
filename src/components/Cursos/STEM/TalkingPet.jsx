import React from 'react';
import '../../../Styles/pCursos.css';
import Mascota from '../../../img/generales/Logo EquidApp.png';
import ContenidoStem from './ContenidoStem';

function TalkingPet() {
  return (
    <div className="mt-5 mb-3 insideBox">
      <div className='container col-10'>
          <ContenidoStem />
          </div>
      <div className="col-lg-2 d-flex justify-content-end align-items-end position-relative">
        <img src={Mascota} alt="Mascota" className="mascota-image position-absolute" />
      </div>
    </div>
  );
}

export default TalkingPet;
