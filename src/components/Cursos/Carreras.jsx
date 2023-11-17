import React from 'react';

function Carreras() {
return (
    <div>
    <h1>¡Buscador de Carreras!</h1>
    <iframe
        title="Carreras"
        src="https://acceso-sup.mineduc.cl/acceso-buscador/buscador-cu"
        width="600"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
    ></iframe>
    </div>
);
}

export default Carreras;