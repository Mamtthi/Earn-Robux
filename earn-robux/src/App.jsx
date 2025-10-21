import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Task from "./pages/Task/Task";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useSessionPoints from "./hooks/useSessionPoints";


function App() {
  const { sessionPoints, totalPoints, addPoints } = useSessionPoints();
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/task/*" element={ <Task addPoints={addPoints}/> } />
            <Route path="/dashboard" element={ <Dashboard sessionPoints={sessionPoints} totalPoints={totalPoints} /> } /> 
            <Route path="/contact" element={ <Contact/> } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
