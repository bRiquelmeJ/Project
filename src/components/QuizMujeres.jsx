import React, { useState } from 'react';

const questions = [
  {
    questionText: "¿Quién es reconocida como la primera programadora de computadoras?",
    answerOptions: [
      { answerText: "Marie Curie", isCorrect: false },
      { answerText: "Ada Lovelace", isCorrect: true },
      { answerText: "Alan Turing", isCorrect: false }
    ]
    // ... puedes añadir más preguntas
  }
];

function QuizMujeres() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">EquidApp</header>
      
      <div className="quiz-main">
        <div className="sidebar">
          {/* Puedes poner aquí los íconos y menús del lado izquierdo */}
        </div>
        
        <div className="quiz-content">
          <h2>Pon a Prueba tu Conocimiento: ¡Mujeres Pioneras en STEM!</h2>
          
          {showScore ? (
            <div className="score-section">
              Has acertado {score} de {questions.length} preguntas.
            </div>
          ) : (
            <>
              <h3>QUIZ MUJERES</h3>
              
              <div className="question-section">
                <div className="question-count">
                  <span>Pregunta {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                    {String.fromCharCode(97 + index)}) {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizMujeres;
