import React from 'react';
import imagenPortada03 from '../img/ImagenPortada03.jpg';
import imagenPortada04 from '../img/ImagenPortada04.jpg';
import imagenPortada05 from '../img/ImagenPortada05.jpg';
import imagenPortada06 from '../img/ImagenPortada06.jpg';
import stem08 from '../img/stem08.png';
import imagenPortada10 from '../img/ImagenPortada10.jpg';

function About() {
  return (
    <div>
      {/* Sección 1: ¡Bienvenid@ a EquidApp! */}
      <section id="about">
        <div className="container mt-4 p-4">
          <h1 className="text-center">¡Bienvenid@ a EquidApp!</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={imagenPortada03}
                alt="quienes-somos"
                className="img-fluid img-thumbnail"
                style={{ width: '300px', margin: '0 auto' }}
              />
            </div>
            <div className="col-lg-8">
              <h3 className="text-start">¿Quiénes Somos?</h3>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-start">
                    ¡Bienvenidas a EquidApp! Somos tu ventana al universo STEM.
                    Diseñada para niñas mayores de 14 años, nuestra plataforma
                    ofrece herramientas y recursos que hacen que la programación
                    y las carreras STEM sean accesibles y emocionantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Objetivos */}
      <section id="about2">
        <div className="container mt-4 p-4">
          <h1 className="text-center">Nuestros Objetivos</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={imagenPortada04}
                alt="objetivos"
                className="img-fluid img-thumbnail"
                style={{ width: '300px', margin: '0 auto' }}
              />
            </div>
            <div className="col-lg-8">
              <h3 className="text-start">Objetivos</h3>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-start">
                    Nuestro sitio web fue inspirado por el Objetivo de
                    Desarrollo Sustentable "Igualdad de Género" de la ONU.
                    Estamos construyendo un espacio donde todas las niñas
                    pueden explorar, aprender y liderar en el fascinante mundo
                    de la ciencia y la tecnología.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Origen de EquidApp */}
      <section id="about3">
        <div className="container mt-4 p-4">
          <h1 className="text-center">Origen de EquidApp</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={imagenPortada05}
                alt="origen"
                className="img-fluid img-thumbnail"
                style={{ width: '300px', margin: '0 auto' }}
              />
            </div>
            <div className="col-lg-8">
              <h3 className="text-start">Origen de EquidApp</h3>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-start">
                    Además, nacimos como un proyecto integrador en el bootcamp
                    "Generation", donde un apasionado equipo de 5 jóvenes amantes
                    de la programación se unió para acercar el mundo del código a
                    niñas y adolescentes. ¡Descubre tu potencial con EquidApp!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: ¿Qué es STEM? */}
      <section id="about4">
        <div className="container mt-4 p-4">
          <h1 className="text-center">¿Qué es STEM?</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={stem08}
                alt="STEM"
                className="img-fluid img-thumbnail"
                style={{ width: '300px', margin: '0 auto' }}
              />
            </div>
            <div className="col-lg-8">
              <h3 className="text-start">¿Qué es STEM?</h3>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-start">
                    STEM es el acrónimo en inglés de Ciencia, Tecnología,
                    Ingeniería y Matemáticas (Science, Technology, Engineering,
                    Mathematics).
                  </p>
                  <p className="text-start">
                    Estas disciplinas son la columna vertebral de nuestro mundo
                    moderno, impulsando la innovación y el desarrollo en múltiples
                    sectores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Importancia de la diversidad en STEM */}
      <section id="about5">
        <div className="container mt-4 p-4">
          <h1 className="text-center">Importancia de la diversidad en STEM</h1>
          <div className="row mt-4">
            <div className="col-lg-4">
              <img
                src={imagenPortada06}
                alt="diversidad-stem"
                className="img-fluid img-thumbnail"
                style={{ width: '300px', margin: '0 auto' }}
              />
            </div>
            <div className="col-lg-8">
              <h3 className="text-start">Importancia de la diversidad en STEM</h3>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-start">
                    Sin embargo, durante mucho tiempo, estas áreas han estado
                    dominadas por hombres, lo que ha creado barreras para las
                    mujeres.
                  </p>
                  <p className="text-start">
                    Es esencial abordar este desequilibrio no solo para ofrecer
                    igualdad de oportunidades, sino también para beneficiar a la
                    sociedad en general. Las perspectivas diversas enriquecen la
                    ciencia y la innovación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 6: Unete a nuestra comunidad */}
      <section id="about6">
        <div className="container mt-4 p-4">
          <h1 className="text-center">Únete a nuestra comunidad</h1>
          <div className="row mt-4">
            <div className="col-lg-8">
              <h3 className="text-start">Únete a nuestra comunidad</h3>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-start">
                    En nuestra plataforma educativa, STEM para Mujeres, creemos
                    que empoderar a las mujeres en estas disciplinas es
                    fundamental.
                  </p>
                  <p className="text-start">
                    Por eso ofrecemos recursos, tutoriales y guías
                    específicamente diseñados para mujeres que buscan adentrarse
                    o avanzar en campos STEM.
                  </p>
                  <p className="text-start">
                    <strong>Únete a nuestra comunidad, explora, aprende y
                    transforma el futuro.</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <img
                src={imagenPortada10}
                alt="comunidad"
                className="img-fluid img-thumbnail"
                style={{ width: '300px', margin: '0 auto' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
