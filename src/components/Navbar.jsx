import React from "react"
import logo from "../img/Mascota_01-removebg-preview.png"

function Navbar(){
    return(
    <section id="BarraNav">
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
       <div>
          <img id="logoNav" src={logo} alt="logo" className="d-inline-block" />
          <a className="navbar-brand text-white" href="#" id="texto_titulo">EquidApp</a>
       </div>
        <button id="hamburguesa" className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Iniciar sesión</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active" href="#">Registrarse</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Foro</a>
                </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cursos
                </a>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Ingenieria</a></li>
                  <li><a className="dropdown-item" href="#">Programación</a></li>
                      <li><a className="dropdown-item" href="#">Ciencia</a></li>
                      <li><a className="dropdown-item" href="#">Matemáticas</a></li>
                  
                </ul>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </nav>
  </section>
  );
};
    
export default Navbar;