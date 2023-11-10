import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registro from "./components/Registro";
import Home from "./components/Home";
import Login from "./components/Login";
import Pcursos from "./components/Pcursos";
import Matematicas from "./components/Matematicas/Matematicas-1";
import MatematicasIntro from "./components/Matematicas/Matematicas-intro";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registrarse" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/PlataformaCursos" element={<Pcursos />} />
          <Route path="/Matematicas" element={<Matematicas />} />
          <Route path="/Matematicas-intro" element={<MatematicasIntro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
