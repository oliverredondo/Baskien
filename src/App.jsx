import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import History from './pages/History'
import Practical from './pages/Practical'
import WhatToDo from './pages/WhatToDo'
import Navbar from './components/NavBar/Navbar';
import "./components/NavBar/Navbar.css"
import { Route, Routes } from "react-router-dom"
  

function App() {


  return (
    <>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="history" element={<History />} />
      <Route path="practical-information" element={<Practical />} />
      <Route path="what-to-do" element={<WhatToDo />} />
    </Routes>
    </div>
      
    </>
  )
}

export default App;
