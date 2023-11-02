// Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import imagenLogin from "../img/imagen-login.png";
function Login() {
  return (
    <section id="about">
      <div className="container mt-4 p-4">
        <div className="row mt-4">
          <div className="col-lg-8 col-md-12">
            <h3 id="subtituloRegistro" className="text">Inicia sesión y conecta <br /> con nuestra comunidad</h3>
            <div className="row">
              <div className="col-md-12">
                <form style={{ width: '80%', margin: 'auto' }}>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="passwordInput" />
                  </div>
                  <button id="btnLogin" type="submit" className="btn btn-purple">Iniciar Sesión</button>
                  <div>
                  <button className="btn btn-light border">
    <i className="fab fa-google"></i> Iniciar sesión con Google
</button>
</div>
<div>
                  <button className="btn btn-light border">
    <i className="fab fa-google"></i> Iniciar sesión con Facebook
</button>

</div>
                  <p className="mt-3">
                    ¿No tienes una cuenta? <Link to="/registrarse">Regístrate</Link>
                  </p>
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

export default Login;
