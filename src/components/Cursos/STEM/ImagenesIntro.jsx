import React, { useState, useEffect } from 'react';
import '../../../Styles/pCursos.css';
import img1 from '../../../img/generales/Copia de EQUIDAPP.png';
import img2 from '../../../img/generales/EQUIDAPP-portadaprueba.png';
import img3 from '../../../img/generales/Banner3.png';

const ImagenesIntro = ({ currentIndex, changePoints }) => {
  const [images] = useState([
    img1,
    img2,
    img3
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
    <div className="container">
      <img img-fluid
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        className="imageIntro" // Añade la clase aquí
      />
    </div>
  );
};

export default ImagenesIntro;