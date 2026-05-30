import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Carl Suelto. Built with React & Supabase.</p>
      </footer>
    </div>
  );
}

export default App;