import React, { useState } from 'react';
import "./ToggleImage.css"


function ToggleImage() {
  const [showImage, setShowImage] = useState(false);

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="container">
  {showImage && (
    <div className="image-container">
      <img src="/public/imagenes/teclado.png" alt="Teclado de referencia" />
    </div>
  )}
  <div className="button-container">
    <button onClick={toggleImage}>
      {showImage ? 'Ocultar teclado' : 'Mostrar teclado'}
    </button>
  </div>
</div>
  );
}

export { ToggleImage};