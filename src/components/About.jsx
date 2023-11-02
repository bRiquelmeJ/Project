import React from 'react';
import imagenPortada03 from '../img/ImagenPortada03.jpg';
import imagenPortada04 from '../img/ImagenPortada04.jpg';
import imagenPortada05 from '../img/ImagenPortada05.jpg';



export default function Main() {
  return (
    <div className='container'>
      <div className='row justify-content-center text-center'>
        <div className="col-lg-4">
          <div className="card mb-4 cardAbout">
            <img src={imagenPortada03} className="card-img-top img-fluid" alt="imagenQuienesSomos"/>
            <div className="card-body">
              <h5 className="card-title">¡Bienvenid@ a EquidApp!</h5>
              <p className="card-text"> ¡Bienvenidas a EquidApp! Somos tu ventana al universo STEM.
                Diseñada para niñas mayores de 14 años, nuestra plataforma
                ofrece herramientas y recursos que hacen que la programación
                y las carreras STEM sean accesibles y emocionantes.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card mb-4 cardAbout">
            <img src={imagenPortada05} className="card-img-top img-fluid" alt="imagenOrigenEquidApp"/>
            <div className="card-body">
              <h5 className="card-title">Origen de EquidApp</h5>
              <p className="card-text"> Además, nacimos como un proyecto integrador en el bootcamp
                "Generation", donde un apasionado equipo de 5 jóvenes amantes
                de la programación se unió para acercar el mundo del código a
                niñas y adolescentes. ¡Descubre tu potencial con EquidApp!</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card mb-4 cardAbout">
            <img src={imagenPortada04} className="card-img-top img-fluid" alt="imagenObjetivosEquidApp"/>
            <div className="card-body">
              <h5 className="card-title">Nuestros Objetivos</h5>
              <p className="card-text"> Nuestro sitio web fue inspirado por el Objetivo de
                Desarrollo Sustentable "Igualdad de Género" de la ONU.
                Estamos construyendo un espacio donde todas las niñas
                pueden explorar, aprender y liderar en el fascinante mundo
                de la ciencia y la tecnología.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
