import React from "react";
import { useNavigate } from "react-router-dom";

export const CardTaller = () => {
  const navigate = useNavigate();

const handleClick = () => {
  const courseName = "Taller"; // Usamos el nombre del curso
  navigate(`/tallerPage/${courseName}`);
};

  return (
    <div className="card card-taller" onClick={handleClick}>
      <div className="card-image-taller">
        <div className="image-overlay-taller"></div>
        <div className="icon-container-taller">
          <i className="fas fa-tools-taller"></i>
        </div>
        <div className="category-tag-taller">Práctico</div>
      </div>
      <div className="card-content-taller">
        <div className="card-meta-taller">
          <span className="duration-taller">12 semanas</span>
          <span className="level-taller">Intermedio</span>
        </div>
        <h3 className="card-title-taller">Taller</h3>
        <p className="card-text-taller">
          Aprende haciendo con nuestros talleres prácticos diseñados para 
          fortalecer tus habilidades técnicas y creativas.
        </p>
        <div className="card-footer-taller">
          <span className="author-taller">Por: Equipo Educativo</span>
          <button className="action-button-taller">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
};