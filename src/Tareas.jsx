import React, { useState } from "react";
import "./Tareas.css";

const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <button onClick={toggleFormulario}>
        {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      {mostrarFormulario && (
        <form onSubmit={agregarTarea}>
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Añadir nueva tarea"
          />
          <button type="submit">Añadir</button>
        </form>
      )}
      <ul className="tareas-lista">
        {tareas.map((tarea, index) => (
          <li className="tareas-item" key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;