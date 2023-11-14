import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registro from "./components/Registro";
import Home from "./components/Home";
import Login from "./components/Login";
import Pcursos from "./components/Cursos/Pcursos";
import Matematicas from "./components/Cursos/Matematicas/Matematicas-1"
import Recurso from "./components/RecursosExternos/Recurso";
import MatematicasIntro from "./components/Cursos/Matematicas/Matematicas-Intro";
import MujeresSTEM from "./components/Cursos/MujeresSTEM/Mujeres"
import Ciencia from "./components/Cursos/Ciencias/Ciencia"
import Biologia from "./components/Cursos/Ciencias/Biologia"
import Fisica from "./components/Cursos/Ciencias/Fisica"
import Quimica from "./components/Cursos/Ciencias/Quimica"
import Tecnologia from "./components/Cursos/Tecnologia/Tecnologia"
import Ingenieria from "./components/Cursos/Ingenieria/Ingenieria"
import Computacion from "./components/Cursos/Ingenieria/Computacion"
import Robotica from "./components/Cursos/Ingenieria/Robotica"
import Programacion from "./components/Cursos/Tecnologia/Programacion"
import IA from "./components/Cursos/Tecnologia/IA"
import CienciaDeDatos from "./components/Cursos/Tecnologia/CienciaDeDatos"
import CursoIntro from "./components/Cursos/CursoIntro";

function App() {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrarse" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/PlataformaCursos" element={<Pcursos />} />
          <Route path="/recurso" element={<Recurso/>} />
          <Route path="/" element={<Pcursos/>} />
          <Route path="/Matematicas" element={<Matematicas />} />
          <Route path="/Matematicas-intro" element={<MatematicasIntro />} />

          <Route path="/Ciencia" element={<Ciencia/>} />
          <Route path="/Biologia" element={<Biologia/>} />
          <Route path="/Fisica" element={<Fisica/>} />
          <Route path="/Quimica" element={<Quimica/>} />
          <Route path="/Tecnologia" element={<Tecnologia/>} />
          <Route path="/Programacion" element={<Programacion/>} />
          <Route path="/IA" element={<IA/>} />
          <Route path="/CienciaDeDatos" element={<CienciaDeDatos/>} />
          <Route path="/Ingenieria" element={<Ingenieria/>} />
          <Route path="/Computacion" element={<Computacion/>} />
          <Route path="/Robotica" element={<Robotica/>} />
          <Route path="/Quizz-intro" element = {<CursoIntro />}/>
          <Route path="/MujeresSTEM" element = {<MujeresSTEM />}/>


        </Routes>
      </div>
    </Router>
    </div>


  );
}

export default App;
