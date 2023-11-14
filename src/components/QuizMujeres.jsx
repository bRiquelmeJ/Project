import React, { useState } from 'react';


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

function QuizIntroSTEM({ setFeedbackMessage }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerOptionClick = (answerOption) => {
    setSelectedAnswer(answerOption.answerText);

    if (answerOption.isCorrect) {
      setScore(score + 1);
      setFeedbackMessage("¡Correcto! ¡Muy bien!"); // No hay mensaje de retroalimentación si es correcto
    } else {
      setFeedbackMessage("¡Ups! Esa no es la respuesta correcta."); // Mensaje de retroalimentación para la mascota
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer("");
        setFeedbackMessage(""); // Limpiar mensaje para la siguiente pregunta
      }, 2000); // Esperar 2 segundos antes de mostrar la siguiente pregunta
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer("");
    setFeedbackMessage("");
  };
  return (
    <div className='quiz'>
      <div className='quiz-intro'>
        {/* ... Mensaje de bienvenida ... */}
      </div>

      {showScore ? (
        <div className='score-section'>
          Has acertado {score} de {questions.length} preguntas.
          <button onClick={resetQuiz} className='btn btn-purple'>Volver a empezar</button>
        </div>
      ) : (
        <div className='card quizzCard'>
          <div className='card-body'>
            <div className='question-section'>
              <div className='question-count'>
                <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
              <ul>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleAnswerOptionClick(answerOption)}
                      className={`btn m-2 ${selectedAnswer === answerOption.answerText ? (answerOption.isCorrect ? 'btn-success' : 'btn-danger') : 'btn btn-purple'}`}
                      disabled={selectedAnswer !== ""}
                    >
                      {answerOption.answerText}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default QuizIntroSTEM;