import React from "react";
import { CardTaller } from "../../components/courses/TallerCourse";
import { CardTecnologia } from "../../components/courses/TecnologiaCourse";
import { CardTics } from "../../components/courses/TicsCourse";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="main-container">
      <header className="main-header">
        <h1 className="header-title-main">Blog de Aprendizaje Orientado a Informatica</h1>
        <p className="header-subtitle-main">Explora nuestras áreas de conocimiento especializado</p>
      </header>
      <div className="cards-container">
        <CardTaller />
        <CardTecnologia />
        <CardTics />
      </div>
      </div>
  );
};