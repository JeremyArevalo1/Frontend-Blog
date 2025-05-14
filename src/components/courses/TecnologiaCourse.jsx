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
        <div className="image-overlay-tecnologia"></div>
        <div className="icon-container-tecnologia">
          <i className="fas fa-tools-tecnologia"></i>
        </div>
        <div className="category-tag-tecnologia">Práctico</div>
      </div>
      <div className="card-content-tecnologia">
        <div className="card-meta-tecnologia">
          <span className="duration-tecnologia">8 semanas</span>
          <span className="level-tecnologia">Facil</span>
        </div>
        <h3 className="card-title-tecnologia">Tecnologia</h3>
        <p className="card-text-tecnologia">
          Aprende haciendo con nuestros talleres prácticos diseñados para 
          fortalecer tus habilidades técnicas y creativas.
        </p>
        <div className="card-footer-tecnologia">
          <span className="author-tecnologia">Por: Equipo Educativo</span>
          <button className="action-button-tecnologia">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
};