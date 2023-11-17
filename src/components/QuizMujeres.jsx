import React, { useState, useEffect } from 'react';
import MascotaFeliz from "../img/generales/Logo EquidApp.png";
import MascotaTriste from "../img/generales/Equidapp-Triste.png";
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

function QuizIntroSTEM({ setFeedbackMessage, setMascotaImage }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [showMedalModal, setShowMedalModal] = useState(false);
  const [medals, setMedals] = useState(() => {
    const savedMedals = localStorage.getItem('medalsUnlocked');
    return savedMedals ? JSON.parse(savedMedals) : Array(6).fill(false);
  });

  const MEDAL_INDEX = 4;

  useEffect(() => {
    const randomizedQuestions = [...questions].sort(() => Math.random() - 0.5);
    setRandomQuestions(randomizedQuestions);
  }, []);
  
  useEffect(() => {
    if (medals[MEDAL_INDEX]) {
      setShowScore(true);
      setFeedbackMessage("Explora otras secciones para seguir aprendiendo y desbloqueando medallas.");
      setMascotaImage(MascotaFeliz);
    }
  }, [medals, MEDAL_INDEX, setFeedbackMessage, setMascotaImage]);

  const handleAnswerButtonClick = (isCorrect, answerText) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerText);
      setFeedbackMessage(isCorrect ? "¡Correcto! ¡Muy bien hecho!" : "¡Incorrecto! Intenta de nuevo.");
      setMascotaImage(isCorrect ? MascotaFeliz : MascotaTriste);
      setScore(isCorrect ? score + 1 : score);
  
      setTimeout(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
          setSelectedAnswer(null); // Reiniciar la selección de respuesta para la próxima pregunta
        } else {
          setShowScore(true);
          if (score + 1 === questions.length) {
            const updatedMedals = [...medals];
            updatedMedals[MEDAL_INDEX] = true;
            setMedals(updatedMedals);
            localStorage.setItem('medalsUnlocked', JSON.stringify(updatedMedals));
            setShowMedalModal(true);
          }
        }
      }, 1000); // Esperar 1 segundo antes de pasar a la siguiente pregunta
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowMedalModal(false);
  };

  return (
    <div className='container mt-5'>
      {showScore ? (
        <div className='score-section text-center'>
          {medals[MEDAL_INDEX] ? (
            <div>
              <p className="h4">Felicidades, ya has completado este quiz y desbloqueado la medalla.</p>
              <img src={Insignia} alt="Medalla" className="img-fluid" />
            </div>
          ) : (
            <>
              <p className="h4">Has acertado {score} de {questions.length} preguntas.</p>
              <button className="btn btn-purple" onClick={resetQuiz}>Reintentar</button>
            </>
          )}
        </div>
      ) : (
        <div className='card quizzCard'>
          <div className='card-body'>
            <div className='question-section mb-4'>
              <div className='question-count'>
                <span className="h3">Pregunta {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text h5'>
                {randomQuestions[currentQuestion] && randomQuestions[currentQuestion].questionText}
              </div>
              <div className='answer-section'>
                <ul className="list-group mt-2">
                  {randomQuestions[currentQuestion] && randomQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleAnswerButtonClick(answerOption.isCorrect, answerOption.answerText)}
                        className={`btn btn-purple mt-2 w-100 shadow-hover ${selectedAnswer === answerOption.answerText ? (answerOption.isCorrect ? 'btn-success' : 'btn-danger') : ''}`}
                        disabled={selectedAnswer !== null}
                      >
                        {answerOption.answerText}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {showMedalModal && (
        <Modal onClose={() => setShowMedalModal(false)}>
          <h2>¡Felicidades!</h2>
          <p>Has desbloqueado una medalla por tu excelente desempeño.</p>
          <Medal
            unlocked={true}
            imageUnlocked={Insignia}
            imageLocked={Insignia}
          />
          <button className="btn btn-purple" onClick={() => setShowMedalModal(false)}>Cerrar</button>
        </Modal>
      )}
    </div>
  );
}

export default QuizIntroSTEM;