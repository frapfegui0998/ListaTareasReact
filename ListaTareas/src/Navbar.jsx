import React from "react";
import { Link } from "react-router";

function Navbar(){
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lista">Tareas</Link>
        </li>
        <li>
          <Link to="/about">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;