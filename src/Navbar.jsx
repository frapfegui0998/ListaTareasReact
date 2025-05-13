import React from "react";
import { Link } from "react-router";
import './Navbar.css';

function Navbar(){
  return (
    <nav>
      <ul>
        <li>
          <Link className= "navbar-link" to="/">Home</Link>
        </li>
        <li>
          <Link className= "navbar-link" to="/lista">Tareas</Link>
        </li>
        <li>
          <Link className= "navbar-link" to="/about">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;