import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTics = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tics");
  };

  return (
    <div className="card card-practica" onClick={handleClick}>
      <div className="card-image-practica">
        <div className="image-overlay-practica"></div>
        <div className="icon-container-practica">
          <i className="fas fa-tools-practica"></i>
        </div>
        <div className="category-tag-practica">Práctico</div>
      </div>
      <div className="card-content-practica">
        <div className="card-meta-practica">
          <span className="duration-practica">6 semanas</span>
          <span className="level-practica">Dificil</span>
        </div>
        <h3 className="card-title-practica">Practica Supervisada</h3>
        <p className="card-text-practica">
          Aprende haciendo con nuestros talleres prácticos diseñados para 
          fortalecer tus habilidades técnicas y creativas.
        </p>
        <div className="card-footer-practica">
          <span className="author-practica">Por: Equipo Educativo</span>
          <button className="action-button-practica">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
};