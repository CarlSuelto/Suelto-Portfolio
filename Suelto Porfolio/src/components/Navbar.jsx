import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">cvbs.</div>
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