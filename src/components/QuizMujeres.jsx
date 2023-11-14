import React, { useState } from 'react';
import Mascota from "../img/Logo EquidApp.png";

const questions = [
  {
    questionText: "¿Qué ciencia se centra en el estudio de los seres vivos y su entorno?",
    answerOptions: [
      { answerText: "Física", isCorrect: false },
      { answerText: "Química", isCorrect: false },
      { answerText: "Biología", isCorrect: true },
      { answerText: "Astronomía", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes no es una rama de la ingeniería?",
    answerOptions: [
      { answerText: "Ingeniería Civil", isCorrect: false },
      { answerText: "Ingeniería de Sabores", isCorrect: true },
      { answerText: "Ingeniería Eléctrica", isCorrect: false },
      { answerText: "Ingeniería Mecánica", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué rama de las matemáticas se enfoca en el estudio de las relaciones espaciales y las propiedades de las figuras?",
    answerOptions: [
      { answerText: "Álgebra", isCorrect: false },
      { answerText: "Trigonometría", isCorrect: false },
      { answerText: "Geometría", isCorrect: true },
      { answerText: "Estadística", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes opciones representa un ejemplo de tecnología?",
    answerOptions: [
      { answerText: "Un átomo", isCorrect: false },
      { answerText: "Un teléfono inteligente", isCorrect: true },
      { answerText: "La gravedad", isCorrect: false },
      { answerText: "Una flor", isCorrect: false },
    ],
  },
  {
    questionText: "¿En qué área de STEM podrías estar interesado si te gusta diseñar aplicaciones para teléfonos móviles?",
    answerOptions: [
      { answerText: "Ciencia", isCorrect: false },
      { answerText: "Tecnología", isCorrect: true },
      { answerText: "Ingeniería", isCorrect: false },
      { answerText: "Matemáticas", isCorrect: false },
    ],
  },
];

function QuizIntroSTEM() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Agregado para la retroalimentación

  const handleAnswerOptionClick = (answerOption) => {
    const isCorrect = answerOption.isCorrect;
    setSelectedAnswer(answerOption.answerText);
    
    // Agregar retroalimentación basada en si la respuesta es correcta o no
    if (isCorrect) {
      setScore(score + 1);
      setFeedbackMessage("¡Correcto! Esa es la respuesta.");
    } else {
      setFeedbackMessage("Incorrecto. Vuelve a intentarlo.");
    }

    // Espera para mostrar la siguiente pregunta y limpiar la retroalimentación
    setTimeout(() => {
      setFeedbackMessage(""); // Limpia la retroalimentación
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setSelectedAnswer("");
    }, 2000); // Ajusta este tiempo según lo que desees para mostrar la retroalimentación
  };

  // ... Resto del componente

  return (
    <div className='quiz'>
      {/* ... Resto del JSX ... */}
      <div className="mascot-feedback">
        {feedbackMessage && <div className="feedback-bubble">{feedbackMessage}</div>}
        <img src={Mascota} alt="Mascota" className="mascota-image" />
      </div>
      {/* ... Resto del JSX ... */}
    </div>
  );
}
export default QuizIntroSTEM;
