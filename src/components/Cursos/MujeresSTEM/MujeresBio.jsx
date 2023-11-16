import React from 'react';
import '../../../Styles/Mujeres.css';
import Sidebar from '../Sidebar';
import { useState } from 'react';


function MujeresBio() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const mujeresCientificasData = [
    { nombre: 'Marie Curie', categoria: 'fisica', miniBiografia: 'Descubridora de la radiactividad.' },
    { nombre: 'Rosalind Franklin', categoria: 'quimica', miniBiografia: 'Contribuyó al entendimiento de la estructura del ADN.' },
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
      
      <button onClick={() => handleCategoryChange('todos')}>Todos</button>
      <button onClick={() => handleCategoryChange('fisica')}>Física</button>
      <button onClick={() => handleCategoryChange('quimica')}>Química</button>


      {mujeresCientificasData.map((cientifica, index) => (
    
        (selectedCategory === 'todos' || selectedCategory === cientifica.categoria) && (
          <div key={index} className="book">
            <p>{cientifica.miniBiografia}</p>
            <div className="cover">
              <p>{cientifica.nombre}</p>
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
