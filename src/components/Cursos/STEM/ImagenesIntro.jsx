import React, { useEffect, useState } from 'react';

const ImagenesIntro = ({ currentIndex, changePoints }) => {
  const [images] = useState([
    'url_imagen_1',
    'url_imagen_2',
    'url_imagen_3',
    // ... otras imágenes
  ]);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambiar la imagen cuando el índice actual coincide con un punto de cambio
    if (changePoints.includes(currentIndex)) {
      setCurrentImage(currentImage + 1);
    }
  }, [currentIndex, currentImage, changePoints]);

  return (
    <div className="image-carousel">
      <img
        src={images[currentImage]}
        alt={`Imagen ${currentImage + 1}`}
        className="image-carousel"
      />
    </div>
  );
};

export default ImagenesIntro;