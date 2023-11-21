import React, { useState, useEffect } from 'react';
import '../../../Styles/pCursos.css';
import img1 from '../../../img/generales/Copia de EQUIDAPP.png';
import img2 from '../../../img/generales/EQUIDAPP-portadaprueba.png';
import img3 from '../../../img/generales/Banner3.png';

const ImagenesIntro = () => {
  const [images] = useState([
    img1,
    img2,
    img3
    // ... otras imágenes
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambiar automáticamente la imagen cada 5 segundos
    const intervalId = setInterval(() => {
      if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  return (

    <div className="container">
      <img 
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        className="img-fluid insideBox" // Añade la clase aquí

      />
    </div>
  );
};

export default ImagenesIntro;