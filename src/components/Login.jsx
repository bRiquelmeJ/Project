import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import imagenLogin from "../img/imagen-login.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: '' });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!email) {
      errors.email = 'El correo electrónico es obligatorio';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'El correo electrónico no es válido';
      isValid = false;
    }

    if (!password) {
      errors.password = 'La contraseña es obligatoria';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const userData = {
      email,
      password,
    };

    fetch('http://localhost:4000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then((response) => {
      if (!response) {
        throw new Error('Error en el inicio de sesión');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Login Success:', data);
      // Aquí puedes redirigir al usuario o manejar la sesión
      Navigate('/home');
    })
    .catch((error) => {
      console.error('Login Error:', error);
      alert('Error al iniciar sesión: ' + error.message);
    });
  };

  return (
    <section id="about">
      <div className="container mt-4 p-4">
        <div className="row mt-4">
          <div className="col-lg-8 col-md-12">
            <h3 id="subtituloRegistro" className="text">Inicia sesión y conecta <br /> con nuestra comunidad</h3>
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleSubmit} style={{ width: '80%', margin: 'auto' }}>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" value={email} onChange={handleEmailChange} />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="passwordInput" value={password} onChange={handlePasswordChange} />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
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
