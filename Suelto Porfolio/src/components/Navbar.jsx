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
      
      <div className="nav-right-container" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <ul className="nav-links">
          <li><a href="#home" className="nav-item">Home</a></li>
          <li><a href="#about" className="nav-item">About</a></li>
          <li><a href="#projects" className="nav-item">Projects</a></li>
          <li><a href="#contact" className="nav-item">Contact</a></li>
        </ul>
        
        {/* 🚀 NEW: Signature Supabase-themed Action Button */}
        <a href="#footer" className="btn-primary-supabase hire-me-nav-btn">
          <span>Hire Me</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="14" height="14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;