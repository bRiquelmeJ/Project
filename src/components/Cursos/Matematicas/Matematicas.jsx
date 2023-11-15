
import Sidebar from '../Sidebar';
import Math from '../../../img/Math.png'
import "../../../Styles/MatematicasCSS.css"
import { Link } from 'react-router-dom';

const Matematicas1 = () => {
  return (
    <div className="app-container container-fluid row">
      <div className="app-sidebar col-lg-3 col-md-4 col-sm-5 col-12">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg-9 col-md-8 col-sm-7 col-12">
      <div className="welcome-box  row ">
        <div className="">
          <h2 className= "perfilFont">Bienvenid@ a Matemáticas</h2>
        </div>


        <div className="row d-flex align-items-center justify-content-center courses-btn">
                    <div className="btn-group col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
                        <Link to="/MatematicasIntro" type="button" className="btn btn-lg btn-block">
                            <img src={Math} alt="Biologia" className="img-fluid imgZoom" />
                        </Link>
                    </div>
        </div>
        </div>     
              <div className='row container-fluid d-flex align-content-center justify-content-center'> 
              <Link to="/Quizz-Matematicas" class="btn button1"> ¡Vamos al Quiz! </Link>   
              </div>
      </div>

    </div>
  );
};

export default Matematicas1;