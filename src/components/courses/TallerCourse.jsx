import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTaller = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/taller");
  };

  return (
    <div className="card card-taller" onClick={handleClick}>
      <div className="card-image-taller">
        <div className="image-overlay"></div>
        <div className="icon-container">
          <i className="fas fa-tools"></i>
        </div>
        <div className="category-tag">Práctico</div>
      </div>
      <div className="card-content-taller">
        <div className="card-meta">
          <span className="duration">12 semanas</span>
          <span className="level">Intermedio</span>
        </div>
        <h3 className="card-title-taller">Taller</h3>
        <p className="card-text-taller">
          Aprende haciendo con nuestros talleres prácticos diseñados para 
          fortalecer tus habilidades técnicas y creativas.
        </p>
        <div className="card-footer">
          <span className="author">Por: Equipo Educativo</span>
          <button className="action-button">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
};