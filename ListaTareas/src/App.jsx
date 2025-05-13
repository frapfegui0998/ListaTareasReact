import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tareas from './Tareas';
import Perfil from './Perfil';

function App() {
  
  return (
    <>
      <Tareas/>
      <Perfil/>
    </>
  )
}

export default App
