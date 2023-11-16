import React from 'react';
import '../../../Styles/Mujeres.css';
import Sidebar from '../Sidebar';
import { useState } from 'react';


function MujeresBio() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const mujeresCientificasData = [
    { nombre: '', categoria: '', miniBiografia:''},
    { nombre: 'Marie Curie', 
      categoria: 'ciencia', 
      miniBiografia: 'Descubridora de la radiactividad. Ganadora de 2 premios nobel.' },
    { nombre: 'Rosalind Franklin', 
      categoria: 'ciencia', 
      miniBiografia: 'Química y cristalógrafa, contribuyó a la comprensión de la estructura del ADN.'},
    { nombre: 'Mariana Costa', 
      categoria: 'tecnologia', 
      miniBiografia:'Cofundadora y directora ejecutiva de Laboratoria, una organización enfocada en empoderar a las mujeres latinoamericanas en el campo de la tecnología.'},
    { nombre: 'Natalia Montellano', 
      categoria: 'ciencia', 
      miniBiografia:' Investigaciones en ciencia de los alimentos, materia blanda, biofísica, proteínas y funciones biológicamente activas.'},
    { nombre: 'Valentina Muñoz', 
      categoria: 'tecnologia', 
      miniBiografia:'Cofundadora y presidenta de la Asociación de Mujeres Jóvenes por las Ideas (AMUJI Chile). Fue reconocida recientemente como la programadora más joven en contribuir a la construcción de la primera política de Inteligencia Artificial en su país'},
    { nombre: 'Hedy Lammar',
      categoria: 'ingenieria', 
      miniBiografia:'Aunque más conocida como actriz, también co-inventó un sistema de comunicaciones secretas que sirvió como base para el desarrollo de tecnologías como el salto de frecuencia, fundamental en las comunicaciones inalámbricas modernas.'},
    { nombre: 'Katherine Johnson', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática y física espacial, contribuyó significativamente a la NASA.'},
    { nombre: 'Ada Lovelace', 
      categoria: 'tecnologia', 
      miniBiografia:'Considerada la primera programadora de computadoras, Ada Lovelace escribió el primer algoritmo destinado a ser procesado por una máquina, anticipando así el concepto de programación informática.'},
    { nombre: 'Grace Hopper', 
      categoria: 'tecnologia', 
      miniBiografia:''},
    { nombre: '', categoria: '', miniBiografia:''},
    { nombre: '', categoria: '', miniBiografia:''},
    { nombre: '', categoria: '', miniBiografia:''},
    { nombre: '', categoria: '', miniBiografia:''},
    { nombre: '', categoria: '', miniBiografia:''},
    { nombre: '', categoria: '', miniBiografia:''},
  ]
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
    return (
    <div className="app-container container-fluid  row">
      
      <div className="container-fluid app-sidebar col-lg-10 col-md-12 h-100">
        
        <Sidebar/>
      </div>
      
      <div className="app-main container-fluid col-lg col-md-12 w-50 h-80">
      
      <div>
      <button onClick={() => handleCategoryChange('ciencia')}>Ciencia</button>
      <button onClick={() => handleCategoryChange('tecnologia')}>Tecnologia</button>
      <button onClick={() => handleCategoryChange('ingenieria')}>Ingeniria</button>
      <button onClick={() => handleCategoryChange('matematicas')}>Matematicas</button>


      {mujeresCientificasData.map((cientifica, index) => (
    
        (selectedCategory === cientifica.categoria) && (
          <div key={index} className="book">
            <p className="bio">{cientifica.miniBiografia}</p>
            <div className="cover">
              <p className="nombre">{cientifica.nombre}</p>
            </div>
          </div>
        )
      ))}
    </div>
          
      
    </div>
    </div>
  );
}

export default MujeresBio;
