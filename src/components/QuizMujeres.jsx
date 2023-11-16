import React, { useState, useEffect } from 'react';
import MascotaFeliz from "../img/Logo EquidApp.png";
import MascotaTriste from "../img/Equidapp-Triste.png";
import Modal from "../components/Cursos/Avatar/Medallas/Mmodal";
import Medal from "../components/Cursos/Avatar/Medallas/Medal";
import Insignia from "../img/medallas/STEM.png";

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
  const [showMedalModal, setShowMedalModal] = useState(false);
  const [medals, setMedals] = useState(() => {
      const savedMedals = localStorage.getItem('medalsUnlocked');
      return savedMedals ? JSON.parse(savedMedals) : Array(6).fill(false);
  });

  const handleAnswerButtonClick = (isCorrect) => {
      if (isCorrect) {
          setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
      } else {
          setShowScore(true);
          if (score + 1 === questions.length) {
              const updatedMedals = [...medals];
              updatedMedals[0] = true; // Este es el índice para la medalla del Quiz Intro
              setMedals(updatedMedals);
              localStorage.setItem('medalsUnlocked', JSON.stringify(updatedMedals));
              setShowMedalModal(true);
          }
      }
  };

  const handleRetryButton = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      setShowMedalModal(false);
  };

  return (
      <div className='quiz'>
          {showScore ? (
              <div className='score-section'>
                  {`Has acertado ${score} de ${questions.length} preguntas.`}
                  <button onClick={handleRetryButton}>Reintentar</button>
              </div>
          ) : (
              <>
                  <div className='question-section'>
                      <div className='question-count'>
                          <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
                      </div>
                      <div className='question-text'>
                          {questions[currentQuestion].questionText}
                      </div>
                  </div>
                  <div className='answer-section'>
                      {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                          <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                              {answerOption.answerText}
                          </button>
                      ))}
                  </div>
              </>
          )}

          {showMedalModal && (
              <Modal onClose={() => setShowMedalModal(false)}>
                  <h2>¡Felicidades!</h2>
                  <p>Has desbloqueado una medalla por tu excelente desempeño.</p>
                  {/* Asegúrate de que la ruta a la imagen de la medalla desbloqueada sea correcta */}
                  <Medal
                      unlocked={true}
                      imageUnlocked={Insignia}
                  />
                  <button onClick={() => setShowMedalModal(false)}>Cerrar</button>
              </Modal>
          )}
      </div>
  );
}

export default QuizIntroSTEM;