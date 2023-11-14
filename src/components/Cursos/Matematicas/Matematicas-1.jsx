
import Sidebar from '../Sidebar';
import "../../../Styles/MatematicasCSS.css"

const Matematicas1 = () => {
  return (
    <div className="app-container container-fluid row">
      <div className="app-sidebar col-lg-3 col-md-4 col-sm-5 col-12">
        <Sidebar />
      </div>
      <div className="app-main container-fluid col-lg-9 col-md-8 col-sm-7 col-12">
      <div className="welcome-box w-50 row ">
        <div className="welcome-box-text">
            <h2>Bienvenid@ a Matemáticas</h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Matematicas1;