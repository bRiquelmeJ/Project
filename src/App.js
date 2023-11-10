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
        </Routes>
      </div>
    </Router>
    </div>


  );
}

export default App;
