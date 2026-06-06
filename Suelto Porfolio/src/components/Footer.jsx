import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    /* 💡 CHANGED: Added dynamic theme styles for background, text, and border matching */
    <footer 
      id="footer" 
      className="supabase-footer" 
      style={{ 
        backgroundColor: 'var(--bg-main)', 
        color: 'var(--text-primary)', 
        borderTop: '1px solid var(--border-subtle)',
        padding: '48px 40px 24px 40px',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* 💡 CHANGED: Local style overrides to ensure inner links and text update cleanly */}
      <style>{`
        .footer-links-column h4 {
          color: var(--text-primary) !important;
          margin-bottom: 16px;
          font-size: 1rem;
        }
        .footer-links-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links-column ul li {
          margin-bottom: 10px;
          font-size: 0.9rem;
        }
        .footer-links-column a {
          color: var(--text-secondary) !important;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-links-column a:hover {
          color: var(--brand-emerald) !important;
        }
        .meta-info-item {
          color: var(--text-secondary);
        }
        .meta-label {
          color: var(--text-primary);
          font-weight: 500;
        }
        .footer-security-badge code {
          background-color: var(--bg-card) !important;
          color: var(--brand-emerald) !important;
          border: 1px solid var(--border-subtle) !important;
          padding: 4px 8px;
          borderRadius: 4px;
          font-size: 0.8rem;
        }
      `}</style>

      <div className="footer-container-centered" style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        <div className="footer-top-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Brand/System Status Column */}
          <div className="footer-brand-column">
            <div className="footer-logo" style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '12px', color: 'var(--text-primary)' }}>
              sueltocvb<span style={{ color: 'var(--brand-emerald)' }}> ...</span>
            </div>
            <p className="footer-tagline" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              Building lightweight, secure web applications backed by scalable database architectures.
            </p>
            {/* Supabase Style Active Ping Indicator Node */}
            <div className="system-status-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-subtle)', padding: '6px 12px', borderRadius: '20px' }}>
              <span className="ping-dot" style={{ width: '8px', height: '8px', backgroundColor: 'var(--brand-emerald)', borderRadius: '50%', display: 'inline-block' }}></span>
              <span className="status-text" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>All Systems Operational</span>
            </div>
          </div>

          {/* Quick Core Engine Links Column */}
          <div className="footer-links-column">
            <h4>System Map</h4>
            <ul>
              <li><a href="#home">Home Base</a></li>
              <li><a href="#about">About Core</a></li>
              <li><a href="#projects">Project Registry</a></li>
              <li><a href="#contact">Contact Pipeline</a></li>
            </ul>
          </div>

          {/* Academic / Location Quick Meta Column */}
          <div className="footer-links-column">
            <h4>Environment Info</h4>
            <ul>
              <li className="meta-info-item">
                <span className="meta-label">Degree:</span> DIT - Asian College
              </li>
              <li className="meta-info-item">
                <span className="meta-label">Campus:</span> Asian College
              </li>
              <li className="meta-info-item">
                <span className="meta-label">Engine:</span> React + Vite
              </li>
            </ul>
          </div>
        </div>

        {/* 💡 CHANGED: Divider line links up with thematic border tokens */}
        <div className="footer-divider-line" style={{ height: '1px', backgroundColor: 'var(--border-subtle)', marginBottom: '24px' }}></div>
        
        <div className="footer-bottom-flex" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p className="copyright-text" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>
            &copy; {currentYear} Carl Vincent B. Suelto. All rights reserved.
          </p>
          <div className="footer-security-badge">
            <code>Authenticated via Supabase OpenSSL API</code>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;