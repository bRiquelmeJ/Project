import React, { useState } from 'react';

function ContenidoStem() {
  const paragraphs = [
    "Hola soy “ingrese nombre aquí” y seré tu compañera en EquidApp.",
    "Muchas gracias por registrarte, estás por entrar en un mundo lleno de oportunidades y descubrimiento",
    "el mundo STEM o CTIM en español, este nombre está formado por la primera letra de 4 áreas de estudio que significa ciencia, tecnología, ingeniería y matemáticas",
    "Ahora puede que no parezca muy divertido, pero en realidad cada una es ¡increíblemente!"
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

  return (
    <div>
      <p>{paragraphs[currentIndex]}</p>
      <div>
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Retroceder
        </button>
        <button onClick={handleNext} disabled={currentIndex === paragraphs.length - 1}>
          Avanzar
        </button>
      </div>
    </div>
  );
}

export default ContenidoStem;