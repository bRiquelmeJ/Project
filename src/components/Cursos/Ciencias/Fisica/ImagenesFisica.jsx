import React, { useState, useEffect } from 'react';
import '../../../../Styles/pCursos.css';
import imgFisica from '../../../../img/contenido/fisica.jpg';


const ImagenesFisica = ({ currentIndex, changePoints }) => {
  const [images] = useState([
    imgFisica,
    
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
    <div className="image-carousel">
      <img
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        className="img-fluid insideBox" 
      />
    </div>
  );
};

export default ImagenesFisica;