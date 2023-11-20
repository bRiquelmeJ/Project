import React, { useState, useEffect } from 'react';
import '../../../Styles/pCursos.css';
import Bienvenida from '../../../img/contenido/Stem/Bienvenida.jpg';

const ImagenesIntro = ({ currentIndex, changePoints }) => {
  const [images] = useState([
    Bienvenida,
    'url_de_la_imagen_2',
    'url_de_la_imagen_3',
    // ... otras imágenes
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambiar automáticamente la imagen solo en los puntos de cambio
    if (Array.isArray(changePoints) && changePoints.includes(currentIndex)) {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }
  }, [currentIndex, changePoints, images]);

  return (
    <div className="container col">
      <img
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        className="image-carousel" // Añade la clase aquí
      />
    </div>
  );
};

export default ImagenesIntro;