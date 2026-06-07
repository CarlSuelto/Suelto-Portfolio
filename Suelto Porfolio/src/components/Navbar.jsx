import React from 'react';
import ThemeToggle from './ThemeToggle'; 

const Navbar = () => {
  return (
    /* Navbar container using design tokens */
    <nav className="navbar" style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-subtle)' }}>
      {/* 💡 INJECTED: Temporary localized style tag for infinite keyframe animations */}
      <style>{`
        @keyframes infiniteTextWave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50%); }
        }
        @keyframes infiniteArrowGlide {
          0% { transform: translate(0, 0); opacity: 1; }
          45% { transform: translate(4px, -4px); opacity: 1; }
          46% { transform: translate(4px, -4px); opacity: 0; }
          55% { transform: translate(-4px, 4px); opacity: 0; }
          60% { transform: translate(-4px, 4px); opacity: 1; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        
        /* Interactive Hover Triggers */
        .infinite-hire-link:hover .text-stack {
          animation: infiniteTextWave 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .infinite-hire-link:hover .arrow-icon {
          animation: infiniteArrowGlide 1.5s ease-in-out infinite;
          color: var(--brand-emerald) !important;
        }
      `}</style>

      <div className="nav-logo jumping-letters">
        <span>c</span>
        <span>v</span>
        <span>b</span>
        <span>s</span>
        <span>.</span>
      </div>
      
      <div className="nav-right-container" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <ul className="nav-links">
          <li><a href="#home" className="nav-item" style={{ color: 'var(--text-primary)' }}>Home</a></li>
          <li><a href="#about" className="nav-item" style={{ color: 'var(--text-primary)' }}>About</a></li>
          <li><a href="#projects" className="nav-item" style={{ color: 'var(--text-primary)' }}>Projects</a></li>
          <li><a href="#contact" className="nav-item" style={{ color: 'var(--text-primary)' }}>Contact</a></li>
        </ul>
        
        {/* Actions wrapper with the increased 1.75rem spacing */}
        <div className="nav-actions-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          
          {/* Infinite Animated Calligraphy "Hire Me" Button */}
          <a 
            href="#footer" 
            className="infinite-hire-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.15rem', 
              fontFamily: '"Playfair Display", "Georgia", "Garamond", "Times New Roman", serif',
              fontStyle: 'italic',
              overflow: 'hidden',
              padding: '2px 0',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--brand-emerald)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            {/* Height-bounded mask container for the sliding text effect */}
            <div style={{ height: '28px', overflow: 'hidden', position: 'relative' }}>
              <div 
                className="text-stack" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  transform: 'translateY(0)'
                }}
              >
                {/* Resting State Text */}
                <span style={{ color: 'var(--text-primary)', height: '28px', display: 'block', paddingRight: '2px' }}>
                  Hire Me
                </span>
                {/* Hover State Text */}
                <span style={{ color: 'var(--brand-emerald)', height: '28px', display: 'block', paddingRight: '2px' }}>
                  Hire Me
                </span>
              </div>
            </div>
            
            <svg 
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5" 
              stroke="currentColor" 
              width="14" 
              height="14"
              style={{ 
                color: 'var(--text-primary)',
                alignSelf: 'center',
                marginTop: '2px',
                display: 'block'
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>

          {/* 2. Theme Toggle Icon */}
          <ThemeToggle />
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;