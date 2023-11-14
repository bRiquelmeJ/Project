// ContainerQuizz.js
import React, { useState } from 'react';
import "../../../Styles/pCursos.css";
import QuizzInge from './QuizzInge';
import Mascota from "../../../img/Logo EquidApp.png";

function ContainerQuizz() {
  const [feedbackMessage, setFeedbackMessage] = useState("");

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto h-100">
          <div className="news-activities-text">
            <QuizzInge setFeedbackMessage={setFeedbackMessage} />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center position-relative">
          {feedbackMessage && (
            <div className="feedback-bubble">
              {feedbackMessage}
            </div>
          )}
          <img src={Mascota} alt="Mascota" className="mascota-image" />
        </div>
      </div>
    </div>
  );
}

export default ContainerQuizz;
