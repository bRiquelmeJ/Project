import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registro from "./components/Registro";
import Home from "./components/Home";
import Login from "./components/Login";
import Body from "./components/Body";
import TecnoPage from "./components/Tecnologia/TecnoPage"; // Asegúrate de que la ruta de importación es correcta

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
          <Route path="/body" element={<Body />} />
          <Route path="/tecno" element={<TecnoPage />} /> {/* Ruta agregada para TecnoPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
