import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTics = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tics");
  };

  return (
    <div className="card card-tics" onClick={handleClick}>
      <div className="card-image-tics">
        <div className="icon-container">
          <i className="fas fa-network-wired"></i>
        </div>
      </div>
      <div className="card-content-tics">
        <h3 className="card-title-tics">TICs</h3>
        <p className="card-text-tics">
          Explora el mundo de las Tecnologías de la Información y Comunicación 
          y su impacto en la educación y el desarrollo profesional.
        </p>
      </div>
    </div>
  );
};