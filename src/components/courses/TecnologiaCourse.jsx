import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTecnologia = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tecnologia");
  };

  return (
    <div className="card card-tecnologia" onClick={handleClick}>
      <div className="card-image-tecnologia">
        <div className="icon-container">
          <i className="fas fa-microchip"></i>
        </div>
      </div>
      <div className="card-content-tecnologia">
        <h3 className="card-title-tecnologia">Tecnología</h3>
        <p className="card-text-tecnologia">
          Descubre los últimos avances tecnológicos y cómo están transformando 
          nuestra forma de aprender y enseñar en el mundo moderno.
        </p>
      </div>
    </div>
  );
};