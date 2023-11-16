import StemImage from '../img/STEMimg.jpg'
import '../App.css'
import '../Styles/card-stem.css'

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
                  <div className="card-stem">
  <div className="card-title-stem">
    <h1 className="display-1">S</h1>
    <p className="card-body-stem fst-italic">Science</p>
  </div>
  <div className="card-body-stem">
    <p className="card-text-stem">
      Desarrolla competencias en un campo que trata problemas de cambio climático, medicina o calentamiento global.
    </p>
    <button className="btn btnStem">Ir al curso</button>
  </div>
</div>


                  </div>
                </div>

                {/* Technology Card */}
                <div className="col-md-3 mb-3">
                  <div className="card text-center card-stem">
                    <div className="card-body card-texto text-white">
                      <h5 className="card-title">T</h5>
                      <p className="card-text fst-italic">Technology</p>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text">Expresa la relación del profesional con el campo tecnológico, desde el lenguaje programático hasta la Inteligencia Artificial.</p>
                      <Link to="/Tecnologia" className="btn btnStem mt-auto">Ir al curso</Link>
                    </div>
                  </div>
                </div>

                {/* Engineering Card */}
                <div className="col-md-3 mb-3">
                  <div className="card text-center card-stem">
                    <div className="card-body card-texto text-white">
                      <h5 className="card-title">E</h5>
                      <p className="card-text fst-italic">Engineering</p>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text">Plantea soluciones a nivel de infraestructura, diseño de ciudades inteligentes e infraestructuras.</p>
                      <Link to="/Ingenieria" className="btn btnStem mt-auto">Ir al curso</Link>
                    </div>
                  </div>
                </div>

                {/* Mathematics Card */}
                <div className="col-md-3 mb-3">
                  <div className="card text-center card-stem">
                    <div className="card-body card-texto text-white">
                      <h5 className="card-title">M</h5>
                      <p className="card-text fst-italic">Mathematics</p>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <p className="card-text">Enfocada en campos de análisis financiero, economía, contabilidad, inversión e, incluso, economía circular.</p>
                      <Link to="/Matematicas" className="btn btnStem mt-auto">Ir al curso</Link>
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
