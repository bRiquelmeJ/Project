import React from 'react';
import { Link } from 'react-router-dom';
import imagenLogin from "../img/imagen-login.png";
import '../register.css';

function Registro() {
  return (
    <section id="about">
      <div className="container mt-4 p-4">
        <div className="row mt-4">
          <div className="col-lg-8 col-md-12">
            <h3 id="subtituloRegistro" className="text pt-">Regístrate para ser parte <br /> de nuestra comunidad</h3>
            <div className="row">
              <div className="col-md-12">
                <p className="text-start"></p>
                <form style={{ width: '80%', margin: 'auto' }}>
                  <div className="row pt-2 pb-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" />
                    </div>
                  </div>
                  <div className="row">
                    <h6>Fecha de Nacimiento</h6>
                  </div>
                  <div className="row p-3">
                    <input type="date" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <button id="btnRegistro" type="submit" className="btn btn-purple">Registrarse</button>
                  <div>
                  <button className="btn btn-light border">
    <i className="fab fa-google"></i> Registrate con Google
</button>
<div>
                  <button className="btn btn-light border">
    <i className="fab fa-google"></i> Registrate con Facebook
</button>

</div>
</div>
                </form>
              </div>
              
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="d-flex justify-content-lg-end justify-content-md-center">
              <img src={imagenLogin} alt="imagen-login-principal" className="img-fluid" id="imagen-login-principal1" style={{maxWidth: '120%', height: 'auto', marginTop: '250px', marginRight: '10px'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registro;