import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Aplicación de Lista de Tareas</h1>
      <p>Esta aplicación te permite gestionar tus tareas de manera sencilla.</p>
      <p>¿Qué deseas hacer?</p>
      <ul>
        <li>
          <Link to="/lista">Ir a la Lista de Tareas</Link>
        </li>
        <li>
          <Link to="/about">Ver el Perfil del Autor</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;