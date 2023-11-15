import React, { useState } from 'react';
import '../../Styles/quizzIntro.css';
import QuizMujeres from '../QuizMujeres'; // Asegúrate de que la ruta sea correcta
import Mascota from "../../img/Logo EquidApp.png";

function QuizzInicial() {
  // Agrega un estado para manejar los mensajes de retroalimentación
  const [feedbackMessage, setFeedbackMessage] = useState("");

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto h-100">
          <div className="news-activities-text">
            {/* Pasa setFeedbackMessage como una prop al componente QuizMujeres */}
            <QuizMujeres setFeedbackMessage={setFeedbackMessage} />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
          {/* Aquí podrías posicionar la burbuja de retroalimentación si es necesario */}
          {feedbackMessage && (
            <div className="feedback-bubble">{feedbackMessage}</div>
          )}
          <img src={Mascota} alt="Mascota" className="mascota-image" />
        </div>
      </div>
    </div>
  );
}

export default QuizzInicial;
