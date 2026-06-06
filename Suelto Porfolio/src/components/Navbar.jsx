import React from 'react';
import ThemeToggle from './ThemeToggle'; 

const Navbar = () => {
  return (
    /* 💡 CHANGED: Navbar background and text now use variables */
    <nav className="navbar" style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="nav-logo jumping-letters">
        <span>c</span>
        <span>v</span>
        <span>b</span>
        <span>s</span>
        <span>.</span>
      </div>
      
      <div className="nav-right-container" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <ul className="nav-links">
          {/* 💡 CHANGED: Explicit style overrides to ensure links read text tokens */}
          <li><a href="#home" className="nav-item" style={{ color: 'var(--text-primary)' }}>Home</a></li>
          <li><a href="#about" className="nav-item" style={{ color: 'var(--text-primary)' }}>About</a></li>
          <li><a href="#projects" className="nav-item" style={{ color: 'var(--text-primary)' }}>Projects</a></li>
          <li><a href="#contact" className="nav-item" style={{ color: 'var(--text-primary)' }}>Contact</a></li>
        </ul>
        
        {/* 💡 CHANGED: Repositioned elements inside a flex wrapper to swap their order */}
        <div className="nav-actions-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          
          {/* 1. Action Button ("Hire Me" is now on the left) */}
          <a href="#footer" className="btn-primary-supabase hire-me-nav-btn">
            <span>Hire Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="14" height="14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>

          {/* 2. Theme Toggle (Now on the far right edge) */}
          <ThemeToggle />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;