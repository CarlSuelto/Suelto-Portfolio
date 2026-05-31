import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="nav-logo jumping-letters">
  <span>c</span>
  <span>v</span>
  <span>b</span>
  <span>s</span>
  <span>.</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home" className="nav-item">Home</a></li>
        <li><a href="#about" className="nav-item">About</a></li>
        <li><a href="#projects" className="nav-item">Projects</a></li>
        <li><a href="#contact" className="nav-item">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;