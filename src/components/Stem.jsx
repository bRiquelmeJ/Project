import StemImage from '../img/STEMimg.jpg'
import '../App.css'

export default function Stem() {
    return (
      <div className="container my-5">
        <div className="card mb-3 cardStem mx-auto">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={StemImage} className="img-fluid rounded-start h-100" alt="StemImage" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-center">¿Qué es STEM?</h5>
                <p className="card-text text-center">STEM es el acrónimo en inglés de Ciencia, Tecnología,
                  Ingeniería y Matemáticas (Science, Technology, Engineering,
                  Mathematics).</p>
  
                {/* Tarjetas STEM */}
                <div className="row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <div className="card text-center card-stem d-flex flex-column justify-content-between">
                      <div className="card-body text-white card-texto">
                        <h5 className="card-title">S</h5>
                        <p className="card-text fst-italic">Science</p>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Desarrolla competencias en un campo que trata problemas de cambio climático, medicina o calentamiento global.</p>
                        
                        <button className="btn btnStem">Ir al curso</button>
                        
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3 mb-3">
                    <div className="card text-center card-stem d-flex flex-column justify-content-between">
                      <div className="card-body card-texto text-white">
                        <h5 className="card-title">T</h5>
                        <p className="card-text fst-italic">Technology </p>
                        
                      </div>
                      <div className="card-body">
                        <p className="card-text">Expresa la relación del profesional con el campo tecnológico, desde el lenguaje programático hasta la Inteligencia Artificial.</p>
                    
                          <button className="btn btnStem">Ir al curso</button>
                        
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3 mb-3">
                    <div className="card text-center card-stem d-flex flex-column justify-content-between">
                      <div className="card-body card-texto text-white">
                        <h5 className="card-title">E</h5>
                        <p className="card-text fst-italic">Engineering</p>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Plantea soluciones a nivel de infraestructura, diseño de ciudades inteligentes e infraestructuras.</p>
                        
                        <button className="btn btnStem">Ir al curso</button>
                        
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3 mb-3">
                    <div className="card text-center card-stem d-flex flex-column justify-content-between">
                      <div className="card-body card-texto text-white">
                        <h5 className="card-title">M</h5>
                        <p className="card-text fst-italic">Mathematics</p>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Enfocada en campos de análisis financiero, economía, contabilidad, inversión e, incluso, economía circular.</p>
                        
                        <button className="btn btnStem">Ir al curso</button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  