import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Task from "./pages/Task";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/task" element={ <Task/> } />
            <Route path="/dashboard" element={ <Dashboard/> } /> 
            <Route path="/contact" element={ <Contact/> } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
