import React, { useState } from 'react';
import imagenLogin from "../img/imagen-login.png";
import '../register.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Registro() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  

  

  const handleName = (e) => {
    setName(e.target.value);
  };
  
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (name === '' || lastName === '' || email === '' || password === '' || date === '') {
      alert('Todos los campos son obligatorios');
      return;
    }
    const user = {
      "name": name,
      "lastname": lastName,
      "email": email,
      "password": password,
      "date": date,
    }
   
    fetch('http://localhost:4000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      alert('Usuario creado correctamente');
      // Limpiar el formulario
      setName('');
      setLastname('');
      setEmail('');
      setPassword('');
      setDate('');

      Navigate('/login'); // Redirige al usuario a la ruta de inicio de sesión
    })
    .catch((error) => {

      navigate('/login'); // Redirige al usuario a la ruta de inicio de sesión
    }).catch((error) => {

      console.error('Error:', error);
    });
  };

  return (
    <section id="about">
      <div className="container mt-4 p-4">
        <div className="row mt-4">
          <div className="col-lg-8 col-md-12">
            <h3 id="subtituloRegistro" className="text pt-">Regístrate para ser parte <br /> de nuestra comunidad</h3>
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={handleSubmit} style={{ width: '80%', margin: 'auto' }}> {/* Agregado onSubmit aquí */}
                  <div className="row pt-2 pb-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" onChange={handleName} />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" onChange={handleLastname} />
                    </div>
                  </div>
                  <div className="row">
                    <h6>Fecha de Nacimiento</h6>
                  </div>
                  <div className="row p-3">
                    <input type="date" onChange={handleDate}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword} />
                  </div>
                  <button type="submit" className="btn btn-purple">Registrarse</button>
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
