import React from 'react';
import '../../../Styles/Mujeres.css';
import Sidebar from '../Sidebar';
import { useState } from 'react';
import S from '../../../img/iconos/S.svg'
import T from '../../../img/iconos/T.svg'
import E from '../../../img/iconos/E.svg'
import M from '../../../img/iconos/M.svg'


function MujeresBio() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const mujeresCientificasData = [
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
      miniBiografia:'Pionera en la programación de computadoras y una de las creadoras del primer compilador, lo que llevó al desarrollo de lenguajes de programación de alto nivel.'},
    { nombre: 'Lillian Moller Gilbreth', 
      categoria: 'ingenieria', 
      miniBiografia:' Ingeniera industrial y psicóloga, pionera en el campo de la eficiencia y la ergonomía.'},
    { nombre: 'Elmina Wilson', 
      categoria: 'ingenieria', 
      miniBiografia:'Ingeniera civil y matemática, fue la primera mujer miembro de la American Society of Civil Engineers.'  },
    { nombre: 'Chien-Shiung Wu ', 
      categoria: 'ingenieria', 
      miniBiografia:': Física experimental e ingeniera, contribuyó significativamente al campo de la física nuclear y fue parte fundamental del experimento de la paridad.'},
    { nombre: 'Karen Uhlenbeck', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática estadounidense galardonada con el Premio Abel en 2019 por su trabajo en el campo de las ecuaciones en derivadas parciales.'},
    { nombre: 'Mary Cartwright', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática británica que hizo contribuciones destacadas a la teoría de las ecuaciones diferenciales y a la teoría del caos'},
    { nombre: 'Sofia Kovalevskaya', 
      categoria: 'matematicas', 
      miniBiografia:' Matemática rusa y primera mujer en obtener un doctorado en matemáticas. Realizó contribuciones significativas a la teoría de las ecuaciones diferenciales y la mecánica.'},
    { nombre: 'Cathleen Morawetz', 
      categoria: 'matematicas', 
      miniBiografia:'Matemática aplicada que contribuyó a la teoría de las ecuaciones en derivadas parciales y la dinámica de fluidos.'},
    { nombre: 'Sylvia Earle', 
      categoria: 'ciencia', 
      miniBiografia:' Oceanógrafa y exploradora submarina que ha dedicado su vida al estudio y la protección de los océanos.'},
    { nombre: 'Jennifer Doudna', 
      categoria: 'ciencia', 
      miniBiografia:'Bioquímica y genetista conocida por su papel en el desarrollo de la tecnología CRISPR-Cas9 para la edición del genoma.'},
    { nombre: 'Reshma Saujani', 
      categoria: 'tecnologia', 
      miniBiografia:'Fundadora de Girls Who Code, una organización que promueve la educación en programación para niñas y mujeres.'},
    { nombre: 'Gwynne Shotwell', 
      categoria: 'ingenieria', 
      miniBiografia:'Ingeniera aeroespacial y presidenta de SpaceX, desempeñó un papel crucial en el desarrollo de tecnologías espaciales avanzadas.'},
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
        <div className="btn-group-horizontal d-flex flex-wrap justify-content-center" role="group" aria-label="Horizontal button group">
        <button onClick={() => handleCategoryChange('ciencia')}  className="btn btn-outline-light flex-grow-1">
        <img src={S} alt="Icono S" className="img-fluid" />
        </button>
        <button onClick={() => handleCategoryChange('tecnologia')} className="btn btn-outline-light flex-grow-1">    
        <img src={T} alt="Icono T" className="img-fluid" />
        </button>
        <button onClick={() => handleCategoryChange('ingenieria')} className="btn btn-outline-light flex-grow-1">
        <img src={E} alt="Icono E" className="img-fluid" />
        </button>
        <button onClick={() => handleCategoryChange('matematicas')} className="btn btn-outline-light flex-grow-1">
        <img src={M} alt="Icono M" className="img-fluid" />
        </button>
      </div>
      
      <div className="row">
        {mujeresCientificasData.map((cientifica, index) => (
    
        (selectedCategory === cientifica.categoria) && (
          <div key={index} className="col-lg-4 mb-4">
            <div className= "book">
            <p className="bio">{cientifica.miniBiografia}</p>
            <div className="cover">
              <p className="nombre">{cientifica.nombre}</p>
            </div>
          </div>
        </div>
        
        )
      ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default MujeresBio;
