import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  // Check local storage or default to dark theme
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    // Apply the custom theme token attribute to the root document html element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Interative Theme Mode"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        color: 'var(--text-primary)',
        padding: '10px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontWeight: '500',
        fontSize: '0.9rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--brand-emerald)'}
      onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
    >
      {theme === 'dark' ? (
        <>
          {/* Sun Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="18" height="18" style={{ color: 'var(--brand-emerald)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.62 6.38l1.58-1.58M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
          </svg>
          <span>Light Mode</span>
        </>
      ) : (
        <>
          {/* Moon Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="18" height="18" style={{ color: 'var(--brand-emerald)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;