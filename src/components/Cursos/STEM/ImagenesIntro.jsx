import React, { useState, useEffect } from 'react';
import '../../../Styles/pCursos.css';

const ImagenesIntro = () => {
  const [images] = useState([
    'url_de_la_imagen_1',
    'url_de_la_imagen_2',
    'url_de_la_imagen_3',
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
    <div className="image-carousel">
      <img
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        className="image-carousel" // Añade la clase aquí
      />
    </div>
  );
};

export default ImagenesIntro;
