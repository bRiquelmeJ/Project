import React, { useState } from 'react';
import '../../../Styles/pCursos.css';
import Mascota from '../../../img/generales/Logo EquidApp.png';

function TalkingPet() {
  const paragraphs = [
    "Hola soy “ingrese nombre aquí” y seré tu compañera en EquidApp.",
    "Muchas gracias por registrarte, estás por entrar en un mundo lleno de oportunidades y descubrimiento",
    "el mundo STEM o CTIM en español, este nombre está formado por la primera letra de 4 áreas de estudio que significa ciencia, tecnología, ingeniería y matemáticas",
    "Ahora puede que no parezca muy divertido, pero en realidad cada una es ¡increíblemente!",
    "Y no solo eso, ¡aprendiendo de ellas podrías convertirte en una futura Doctora, Investigadora o ingeniería!",
    "No hay límites en lo que quieras ser y el día de mañana puedes ser tú la que inspire a otras niñas",
    "Pero es mejor que lo veas tú misma ¡Vamos Descubramos el mundo STEM!"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < paragraphs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto h-100">
          <div className="talkingPetText">
            <p>{paragraphs[currentIndex]}</p>
            <div className="button-container">
              <button className="arrow-button" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fas fa-arrow-left"></i>
              </button>
              <button className="arrow-button" onClick={handleNext} disabled={currentIndex === paragraphs.length - 1}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
          <img src={Mascota} alt="Mascota" className="mascota-image Pet-Talk" />
        </div>
      </div>
    </div>
  );
}

export default TalkingPet;
