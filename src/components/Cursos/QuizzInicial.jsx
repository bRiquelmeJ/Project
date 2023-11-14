import React, { useState } from 'react';
import '../../Styles/pCursos.css';
import QuizMujeres from '../QuizMujeres';
import Mascota from "../../img/Logo EquidApp.png";

function QuizzInicial() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerOptionClick = (answerOption) => {
    setSelectedAnswer(answerOption.answerText);

    if (answerOption.isCorrect) {
      setScore(score + 1);
      setFeedbackMessage(""); // No hay mensaje de retroalimentación si es correcto
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
export default QuizzInicial;
