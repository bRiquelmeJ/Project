import React, { useState, useEffect } from 'react';
import '../../../Styles/pCursos.css';
import Mascota from '../../../img/Logo EquidApp.png';

function TalkingPet() {
  const [paragraphs, setParagraphs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch(Intro)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.json();
      })
      .then(paragraphs => setParagraphs(paragraphs))
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }, []);
  
  function showNextParagraph() {
    if (currentIndex < paragraphs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto h-100" onClick={showNextParagraph}>
          <div className="talkingPetText">
           
           
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
          <img src={Mascota} alt="Mascota" className="mascota-image" />
        </div>
      </div>
    </div>
  );
}

export default TalkingPet;
