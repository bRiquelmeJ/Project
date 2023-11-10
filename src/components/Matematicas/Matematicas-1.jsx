import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import './MatematicasCSS.css'

const Matematicas1 = () => {
  return (
    <div className="app-container container-fluid row">
      <div className="app-sidebar col-lg-3 col-md-4 col-sm-5 col-12">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg-9 col-md-8 col-sm-7 col-12">
        <h1 className="text-center pt-3">Bienvenid@s a Matemáticas</h1>
        <p className="text-center mx-auto p-2">
          Matemáticas es la ciencia de los números y las formas. En las carreras STEM, las personas utilizan las matemáticas para resolver problemas, hacer predicciones y entender patrones en el mundo que nos rodea.
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 container-fluid mb-4">
            <div className="text-center border border-dark rounded p-3">
              <h3>Capítulos:</h3>
              <Link to="" className="btn btn-math mb-2 w-100">
                Capítulo 1: El Origen de las Matemáticas
              </Link>
              <Link to="" className="btn btn-math mb-2 w-100">
                Capítulo 2: Las Matemáticas en la Vida Cotidiana
              </Link>
              <Link to="" className="btn btn-math mb-2 w-100">
                Capítulo 3: Matemáticas en el Siglo XXI y Más Allá
              </Link>
              <Link to="" className="btn btn-math mb-2 w-100">
                Capítulo 4: El Misterio y la Maravilla de las Matemáticas
              </Link>
              <Link to="" className="btn btn-math mb-2 w-100">
                TEST MATEMÁTICAS
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 container-fluid mb-4">
            <div className="text-center border border-dark rounded p-3">
              <h3>Información sobre carreras:</h3>
              {/* Agrega aquí la información sobre carreras */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matematicas1;

