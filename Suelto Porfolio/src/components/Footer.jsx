import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    /* The critical 'id="footer"' is right here! */
    <footer id="footer" className="supabase-footer">
      <div className="footer-container-centered">
        
        <div className="footer-top-grid">
          {/* Brand/System Status Column */}
          <div className="footer-brand-column">
            <div className="footer-logo">sueltocvb<span> ...</span></div>
            <p className="footer-tagline">Building lightweight, secure web applications backed by scalable database architectures.</p>
            {/* Supabase Style Active Ping Indicator Node */}
            <div className="system-status-pill">
              <span className="ping-dot"></span>
              <span className="status-text">All Systems Operational</span>
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

        <div className="footer-divider-line"></div>
        <div className="footer-bottom-flex">
          <p className="copyright-text">
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