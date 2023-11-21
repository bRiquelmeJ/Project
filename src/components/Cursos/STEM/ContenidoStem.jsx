import React, { useState } from 'react';
import ImagenesIntro from './ImagenesIntro';
import '../../../Styles/pCursos.css';

const ContenidoStem = () => {
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

  const handleNext = () => {
    if (currentIndex < paragraphs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Añade los índices en los que deseas cambiar la imagen
  const imageChangePoints = [2, 4];

  return (
    <div>
    <div className="row">
      <div className="col-lg-8 mx-auto h-100 mg-5">
      {/* Pasa el índice actual y los puntos de cambio como propiedades */}
      <ImagenesIntro currentIndex={currentIndex} changePoints={imageChangePoints} />
      </div>
    </div>
    <div className="row pt-5">
      <div className="col-lg-8 mx-auto h-100">
        <div className="talkingPetText" onClick={handleNext}>
          <p>{paragraphs[currentIndex]}</p>
          <p className='ClickContinuar'>Click para Continuar</p>
          <div>
          <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} disabled={currentIndex === 0}>
            Retroceder
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default ContenidoStem;