import { useState } from 'react'
import './App.css'
import LandingComponent from './components/landing/LandingComponent';
import Navbar from './components/NavBar/Navbar';
import "./components/NavBar/Navbar.css"

  

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <LandingComponent />
      
    </>
  )
}

export default App;
