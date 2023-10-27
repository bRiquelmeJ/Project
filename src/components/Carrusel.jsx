import React from "react"

function Carrusel(){
    return(
        <section id="carrusel">
        <div id="carouselExampleCaptions" className="carousel slide carrusel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://vlvk.nl/wp-content/uploads/2020/12/1busy-technologist-and-manufacturing-technician-at-YCRKJ43.jpg" class="d-block w-100" alt="imagen-portada-1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="colorPortada"><strong />EquidApp</h5>
                  <p className="colorPortada"> <em>Chic@s en el ciberespacio.</em></p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/img/ninos-con-computador.jpg" className="d-block w-100" alt="ninos-en-computador" />
                <div className="carousel-caption d-none d-md-block bg-dark text-white">
                  <div>
                    <h5 style={{ color: 'black' }}>¡Explora el fascinante mundo de la tecnología con nuestra guía interactiva!</h5>
                    <p>Si eres un@ adolescente creativ@ que ama la tecnología, este es tu lugar para jugar y empezar a crear. ¡Sumérgete en una experiencia única donde la diversión se encuentra con la innovación! 🚀✨ ¡Tu aventura tecnológica comienza aquí! 🎮🌐</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/ImagenPortada12.jpg" className="d-block w-100" alt="Mujeres stem" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="colorPortada2"> <strong />¡Creemos comunidad!</h5>
                  <p className="colorPortada2"> <em><strong />Con el foro pueden conectarse con otras chicas apasionadas por STEM, para: compartir ideas, hacer preguntas y encontrar mentores.</em></p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
    );
};
export default Carrusel;