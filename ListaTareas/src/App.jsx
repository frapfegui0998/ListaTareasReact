import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tareas from './Tareas';
import Perfil from './Perfil';
import Home from './Home';
import Navbar from './Navbar'; 
function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lista' element={<Tareas />} />
          <Route path='/about' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
