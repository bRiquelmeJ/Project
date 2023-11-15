import React, { useState,useEffect } from 'react';
import MascotaFeliz from "../../../../img/Logo EquidApp.png";
import MascotaTriste from "../../../../img/Equidapp-Triste.png"


const questions = [
  //biologia
  {
    questionText: "¿Cuál es la unidad básica de la vida?",
    answerOptions: [
      { answerText: "Célula", isCorrect: true },
      { answerText: "Átomo", isCorrect: false },
      { answerText: "Organismo", isCorrect: false },
      { answerText: "Molécula", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué campo de la biología se enfoca en el estudio de las relaciones entre los seres vivos y su entorno?",
    answerOptions: [
      { answerText: "Genética", isCorrect: false },
      { answerText: "Ecología", isCorrect: true },
      { answerText: "Microbiología", isCorrect: false },
      { answerText: "Biogeografía", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes no es una de las características fundamentales de la vida?",
    answerOptions: [
      { answerText: "Reproducción", isCorrect: false },
      { answerText: "Homeostasis", isCorrect: false },
      { answerText: "Inmovilidad", isCorrect: true },
      { answerText: "Metabolismo", isCorrect: false },
    ],
  },
  {
    questionText: "¿Quién es conocido como el padre de la teoría de la evolución?",
    answerOptions: [
      { answerText: "Isaac Newton", isCorrect: false },
      { answerText: "Galileo Galilei", isCorrect: false },
      { answerText: "Charles Darwin", isCorrect: true },
      { answerText: "Louis Pasteur", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es el material genético que almacena la información hereditaria en los seres vivos?",
    answerOptions: [
      { answerText: "Proteínas", isCorrect: false },
      { answerText: "Carbohidratos", isCorrect: false },
      { answerText: "ADN", isCorrect: true },
      { answerText: "ARN", isCorrect: false },
    ],
  },
  // fisica 
  {
    questionText: "¿Qué campo de la física se enfoca en el estudio de los movimientos de los objetos y las fuerzas que los causan?",
    answerOptions: [
      { answerText: "Termodinámica", isCorrect: false },
      { answerText: "Electricidad y Magnetismo", isCorrect: false },
      { answerText: "Mecánica", isCorrect: true },
      { answerText: "Óptica", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes ecuaciones matemáticas se relaciona directamente con la Segunda Ley de Newton?",
    answerOptions: [
      { answerText: "E = mc^2", isCorrect: false },
      { answerText: "F = ma", isCorrect: true },
      { answerText: "PV = nRT", isCorrect: false },
      { answerText: "E = hf", isCorrect: false },
    ],
  },
  {
    questionText: "La ley de la conservación de la energía establece que:",
    answerOptions: [
      { answerText: "La energía total de un sistema aislado se mantiene constante.", isCorrect: true },
      { answerText: "La energía se crea de la nada en situaciones específicas.", isCorrect: false },
      { answerText: "La energía se destruye en todas las interacciones.", isCorrect: false },
      { answerText: "La energía es directamente proporcional a la temperatura.", isCorrect: false },
    ],
  },
  {
    questionText: "¿Qué rama de la física se ocupa del estudio de la propagación de la luz y la formación de imágenes?",
    answerOptions: [
      { answerText: "Mecánica Cuántica", isCorrect: false },
      { answerText: "Mecánica", isCorrect: false },
      { answerText: "Óptica", isCorrect: true },
      { answerText: "Termodinámica", isCorrect: false },
    ], 
  },
  {
    questionText: "La famosa ecuación E=mc^2 está asociada con:",
    answerOptions: [
      { answerText: "La Teoría de la Relatividad Especial de Einstein", isCorrect: true },
      { answerText: "La Teoría Cuántica de Planck", isCorrect: false },
      { answerText: "La Ley de la Gravitación Universal de Newton", isCorrect: false },
      { answerText: "La Ley de Ohm", isCorrect: false },
    ],
  },
  //quimica 
  {
    questionText: "¿Qué es la química?",
    answerOptions: [
      { answerText: "El estudio de los seres vivos", isCorrect: false },
      { answerText: "El estudio de la materia y sus cambios", isCorrect: true },
      { answerText: "El estudio de los eventos astronómicos", isCorrect: false },
      { answerText: "El estudio de las civilizaciones antiguas", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de las siguientes no es una clasificación común de la materia?",
    answerOptions: [
      { answerText: "Sólido", isCorrect: false },
      { answerText: "Líquido", isCorrect: false },
      { answerText: "Energía", isCorrect: true },
      { answerText: "Gas", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es la unidad básica de la materia?",
    answerOptions: [
      { answerText: "Elemento", isCorrect: false },
      { answerText: "Átomo", isCorrect: true },
      { answerText: "Compuesto", isCorrect: false },
      { answerText: "Molécula", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál de los siguientes elementos es un gas noble?",
    answerOptions: [
      { answerText: "Oxígeno", isCorrect: false },
      { answerText: "Hidrógeno", isCorrect: false },
      { answerText: "Neón", isCorrect: true },
      { answerText: "Hierro", isCorrect: false },
    ],
  },
  {
    questionText: "¿Cuál es la tabla que enumera todos los elementos químicos conocidos en orden de número atómico?",
    answerOptions: [
      { answerText: "Tabla de los compuestos", isCorrect: false },
      { answerText: "Tabla de los elementos", isCorrect: true },
      { answerText: "Tabla de los símbolos", isCorrect: false },
      { answerText: "Tabla de las fórmulas", isCorrect: false },
    ],
  },
]
  
  
function QuizzCiencia({ setFeedbackMessage, setMascotaImage }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [randomQuestions, setRandomQuestions] = useState([]);

  // Función para seleccionar 7 preguntas aleatorias
  const selectRandomQuestions = (allQuestions, numQuestions) => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
  };

  // Inicializar el cuestionario con preguntas aleatorias al montar el componente
  useEffect(() => {
    setRandomQuestions(selectRandomQuestions(questions, 7));
  }, []);

  const handleAnswerOptionClick = (answerOption) => {
    setSelectedAnswer(answerOption.answerText);

    if (answerOption.isCorrect) {
      setMascotaImage(MascotaFeliz);
      setScore(score + 1);
      setFeedbackMessage("¡Correcto! ¡Muy bien!");
    } else {
      setMascotaImage(MascotaTriste);
      setFeedbackMessage("¡Ups! Esa no es la respuesta correcta.");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < randomQuestions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer("");
        setFeedbackMessage("");
      }, 1000);
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
        {/* Mensaje de bienvenida */}
      </div>

      {showScore ? (
        <div className='score-section'>
          Has acertado {score} de {randomQuestions.length} preguntas.
          <button onClick={resetQuiz} className='btn btn-purple'>Volver a empezar</button>
        </div>
      ) : (
        <div className='card quizzCard'>
          <div className='card-body'>
            {randomQuestions.length > 0 && currentQuestion < randomQuestions.length ? (
              <>
                <div className='question-section'>
                  <div className='question-count'>
                    <span>Pregunta {currentQuestion + 1}</span>/{randomQuestions.length}
                  </div>
                  <div className='question-text'>{randomQuestions[currentQuestion].questionText}</div>
                </div>
                <div className='answer-section'>
                  <ul>
                    {randomQuestions[currentQuestion].answerOptions.map((answerOption, index) => (
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
              </>
            ) : (
              <div>Cargando preguntas...</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizzCiencia;