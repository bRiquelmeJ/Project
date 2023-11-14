import React from 'react';
import '../../Styles/pCursos.css';
import QuizMujeres from '../QuizMujeres';
import Mascota from "../../img/Logo EquidApp.png";

function QuizzInicial() {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto h-100">
          <div className="news-activities-text">
            <QuizMujeres />
          </div>
        </div>
        <div className="col-lg-4 d-flex justify-content-end align-items-center">
          <img src={Mascota} alt="Mascota" className="mascota-image" />
        </div>
      </div>
    </div>
  );
}

export default QuizzInicial;
