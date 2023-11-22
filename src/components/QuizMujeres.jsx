import React, { useState, useContext } from 'react';
import MascotaFeliz from "../img/generales/Logo EquidApp.png";
import MascotaTriste from "../img/generales/Equidapp-Triste.png";
import Modal from "../components/Cursos/Avatar/Medallas/Mmodal";
import Medal from "../components/Cursos/Avatar/Medallas/Medal";
import Insignia from "../img/medallas/STEM.png";
import { useAuth } from '../context/AuthContext'; // Asegúrate de que esta es la ruta correcta
import axios from 'axios';
import Cookies from 'js-cookie';
import { updateMedallas } from '../api/auth'; // Asegúrate de que la ruta es correcta



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
  const [showMedalModal, setShowMedalModal] = useState(false);

  const { user,id } = useAuth();
  const token = Cookies.get('token');

  const handleAnswerOptionClick = async (isCorrect, answerText) => {
    setSelectedAnswer(answerText);
    setFeedbackMessage(isCorrect ? "¡Correcto! ¡Muy bien hecho!" : "¡Incorrecto! Intenta de nuevo.");
    setMascotaImage(isCorrect ? MascotaFeliz : MascotaTriste);

    if (isCorrect) {
        setScore(score + 1);
        if (score + 1 === questions.length) {
            // Aquí usamos updateMedallas de auth.js para actualizar la medalla
            try {
              const medalUpdateResponse = await updateMedallas(user.id._id, 'CienciaM', token);
              console.log('Medalla actualizada:', medalUpdateResponse);
              setShowMedalModal(true);
          } catch (error) {
              console.error('Error al actualizar la medalla:', error);
          }
        }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
};
  

  // Renderizado del componente
  return (
    <div className='container mt-5'>
      {showScore ? (
        <div className='score-section text-center'>
          {showMedalModal ? (
            <div>
              <p className="h4">¡Felicidades! Medalla desbloqueada.</p>
              <img src={Insignia} alt="Medalla" className="img-fluid" />
            </div>
          ) : (
            <>
              <p className="h4">Has acertado {score} de {questions.length} preguntas.</p>
              <button className="btn btn-purple" onClick={() => setCurrentQuestion(0)}>Reintentar</button>
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
                {questions[currentQuestion].questionText}
              </div>
              <div className='answer-section'>
                <ul className="list-group mt-2">
                  {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                    <li key={index} className="list-group-item">
                      <button
                        className={`btn btn-purple ${selectedAnswer === answerOption.answerText ? 'selected' : ''}`}
                        onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}
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
        </Modal>
      )}
    </div>
  );
}

export default QuizIntroSTEM;