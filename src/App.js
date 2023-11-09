import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registro from "./components/Registro";
import Home from "./components/Home";
import Login from "./components/Login";
import Body from "./components/Body";
import Recurso from "./components/RecursosExternos/Recurso"

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
          <Route path="/body" element={<Body />} />
          <Route path="/recurso" element={<Recurso/>} />
          <Route path="/" element={<Body/>} />
        </Routes>
      </div>
    </Router>
    </div>


  );
}

export default App;
