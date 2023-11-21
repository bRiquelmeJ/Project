import React from 'react';
import '../../../Styles/pCursos.css';
import Mascota from '../../../img/generales/Logo EquidApp.png';
import ContenidoStem from './ContenidoStem';

function TalkingPet() {
  return (
    <div className='row'>
    <div className="mt-5 mb-3 insideBox">
      <div className='container'>
          <ContenidoStem />
          </div>
      <div className="contentPet">
        <img src={Mascota} alt="Mascota" />
      </div>
    </div>
    </div>
  );
}

export default TalkingPet;
