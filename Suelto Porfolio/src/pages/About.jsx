import React from 'react';

const About = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/CarlSuelto', 
      handle: '@CarlSuelto',
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/carl_suelto.26/', 
      handle: '@Carl_Suelto.26',
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.74 0 12s.014 3.333.072 4.617c.2 4.357 2.615 6.777 6.977 6.977 1.28.058 1.687.072 4.948.072s3.333-.014 4.617-.072c4.357-.2 6.777-2.615 6.977-6.977.058-1.28.072-1.687.072-4.948s-.014-3.333-.072-4.617c-.2-4.357-2.615-6.777-6.977-6.977C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/sueltoceeh26', 
      handle: 'Carl Vincent Bandoquillo Suelto',
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      url: 'https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new', 
      handle: 'cbsuelto.student@asiancollege.edu.ph',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      )
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@cloudy_ceeh26', 
      handle: '@cloudy_ceeh26', 
      icon: (
        <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.6 4.17 1.12 1.25 2.7 2.06 4.34 2.27v3.91c-1.28-.01-2.54-.3-3.7-.85-.85-.41-1.62-.97-2.24-1.66v6.23c.02 2.44-.9 4.85-2.6 6.56-1.92 1.93-4.66 2.9-7.39 2.54-2.22-.28-4.29-1.51-5.59-3.35C-.26 17.65-.4 14.8.46 12.3c.7-2.03 2.37-3.69 4.43-4.35 1.24-.4 2.56-.44 3.82-.13v3.98c-.8-.26-1.68-.2-2.43.16-.92.42-1.63 1.23-1.91 2.22-.38 1.3.1 2.74 1.15 3.52.92.7 2.14.86 3.2.43 1.01-.39 1.68-1.4 1.71-2.48V.02z"/>
        </svg>
      )
    }
  ];

  const techStack = [
    'React.js', 'JavaScript', 'Supabase', 'PostgreSQL', 
    'HTML5', 'CSS3', 'Git/GitHub', 'REST APIs', 
    'Vite', 'Node.js', 'UI/UX Design', 'Responsive Web'
  ];

  const hobbies = [
    { title: 'Coding Experiments', category: 'Development', imgSrc: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=400&q=80' },
    { title: 'Setup & Hardware', category: 'Tech Enthusiast', imgSrc: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80' },
    { title: 'Basketball', category: 'Sports', imgSrc: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=400&q=80' },
    { title: 'Mobile Gaming/Mobile Legends', category: 'Gaming', imgSrc: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80' },
    { title: 'Movie Marathons', category: 'Movies', imgSrc: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80' },
    { title: 'Walking & Exploring', category: 'Outdoors', imgSrc: 'https://images.unsplash.com/photo-1551632811-561730d1e442?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <section id="about" className="about-section" style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div className="about-header" style={{ marginBottom: '8px' }}>
        <h2>About Me</h2>
        <p className="section-subtitle">DIT Student & Web Developer</p>
      </div>

      {/* Row 1: Bio & Skills */}
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="supabase-card bio-box" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '16px' }}>My Mission</h3>
          <p>I am a passionate software developer specializing in modern JavaScript frameworks, responsive UI architecture, and cloud database integrations like Supabase.</p>
          <p style={{ marginTop: '16px' }}>My core goal is to write clean, scalable code that delivers exceptional user experiences.</p>
        </div>

        <div className="supabase-card skills-box" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '16px' }}>Core Competencies</h3>
          <ul className="skills-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0 }}>
            <li><code style={{ marginRight: '8px' }}>React.js</code> Hooks & State Management</li>
            <li><code style={{ marginRight: '8px' }}>Supabase</code> PostgreSQL Database Systems</li>
            <li><code style={{ marginRight: '8px' }}>RESTful APIs</code> Asynchronous Engineering</li>
            <li><code style={{ marginRight: '8px' }}>UI/UX Design</code> CSS Grid & Flexbox Systems</li>
          </ul>
        </div>
      </div>

      {/* Technical Ecosystem Marquee */}
      <div className="supabase-card carousel-section-card" style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '16px' }}>Technical Ecosystem and Skills Set</h3>
        <div className="tech-carousel-viewport">
          <div className="tech-carousel-track">
            {(() => {
              const getColorStyles = (tech) => {
                switch (tech.toLowerCase()) {
                  case 'react.js':
                  case 'vite':
                    return { '--badge-glow': 'rgba(97, 218, 251, 0.1)', '--badge-text': '#61dafb' };
                  case 'javascript':
                    return { '--badge-glow': 'rgba(247, 223, 30, 0.1)', '--badge-text': '#f7df1e' };
                  case 'supabase':
                  case 'postgresql':
                    return { '--badge-glow': 'rgba(62, 207, 142, 0.1)', '--badge-text': '#3ecf8e' };
                  case 'html5':
                    return { '--badge-glow': 'rgba(227, 79, 38, 0.1)', '--badge-text': '#e34f26' };
                  case 'css3':
                    return { '--badge-glow': 'rgba(21, 114, 182, 0.1)', '--badge-text': '#1572b6' };
                  case 'git/github':
                    return { '--badge-glow': 'rgba(240, 80, 51, 0.1)', '--badge-text': '#f05033' };
                  case 'node.js':
                    return { '--badge-glow': 'rgba(104, 160, 99, 0.1)', '--badge-text': '#68a063' };
                  default:
                    return { '--badge-glow': 'rgba(45, 212, 191, 0.1)', '--badge-text': '#2dd4bf' };
                }
              };

              return (
                <>
                  {techStack.map((tech, i) => (
                    <div key={`track1-${i}`} className="tech-badge color-aware" style={getColorStyles(tech)}>
                      <code>{tech}</code>
                    </div>
                  ))}
                  {techStack.map((tech, i) => (
                    <div key={`track2-${i}`} className="tech-badge color-aware" style={getColorStyles(tech)}>
                      <code>{tech}</code>
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Row 2: Metrics, Academic Background, and Hobbies Media Grid */}
      <div className="about-grid secondary-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
        
        {/* Box A: Quick Overview */}
        <div className="supabase-card metrics-box" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '16px' }}>Quick Overview</h3>
          <div className="metrics-display-container" style={{ display: 'flex', gap: '32px' }}>
            <div className="metric-item">
              <span className="metric-number" style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold', color: '#3ecf8e' }}>DIT</span>
              <span className="metric-label" style={{ color: '#a1a1aa' }}>Information Tech Degree</span>
            </div>
            <div className="metric-item">
              <span className="metric-number" style={{ display: 'block', fontSize: '1.5rem', fontWeight: 'bold', color: '#3ecf8e' }}>10+</span>
              <span className="metric-label" style={{ color: '#a1a1aa' }}>Projects Completed</span>
            </div>
          </div>
        </div>

        {/* Box B: Academic Background */}
        <div className="supabase-card background-box" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '16px' }}>Academic & Foundation</h3>
          <div className="timeline-stack">
            <div className="timeline-node">
              <div className="node-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <h4 style={{ margin: 0 }}>Asian College</h4>
                <span className="node-badge" style={{ backgroundColor: 'rgba(62, 207, 142, 0.1)', color: '#3ecf8e', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>Current</span>
              </div>
              <p className="node-desc" style={{ margin: 0, color: '#a1a1aa' }}>Department of Information Technology — pursuing modern computing systems architecture, databases, and structural coding practices.</p>
            </div>
          </div>
        </div>

        {/* Box C: Hobbies & Outlets with clean spacing */}
        <div className="supabase-card hobbies-box" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '8px' }}>Hobbies & Outlets</h3>
          <p style={{ fontSize: '0.9rem', color: '#a1a1aa', marginBottom: '20px' }}>
            What drives my creativity outside of formal coding curriculum parameters:
          </p>
          
          {/* Sub-grid optimized for 2 columns, auto-adjusting rows */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {hobbies.map((hobby, index) => (
              <div 
                key={index} 
                className="hobby-image-card"
                style={{
                  position: 'relative',
                  height: '130px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#18181b'
                }}
              >
                <img 
                  src={hobby.imgSrc} 
                  alt={hobby.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="hobby-card-img"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 25%, rgba(0, 0, 0, 0.1) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '12px'
                }}>
                  <span style={{ fontSize: '0.65rem', color: '#3ecf8e', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.05em' }}>{hobby.category}</span>
                  <h4 style={{ fontSize: '0.9rem', color: '#ffffff', margin: '4px 0 0 0', fontWeight: '500' }}>{hobby.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 3: Social Media Integrations */}
      <div className="social-section-wrapper" style={{ marginTop: '16px' }}>
        <h3 className="social-title" style={{ marginBottom: '20px' }}>Connect With Me</h3>
        <div className="social-grid" id="social" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="supabase-card social-item-box"
              style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', textDecoration: 'none' }}
            >
              <div className="social-icon-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ffffff' }}>
                <div className="button-icon" style={{ display: 'flex', alignItems: 'center' }}>{social.icon}</div>
                <h4 style={{ margin: 0 }}>{social.name}</h4>
              </div>
              <p className="social-handle" style={{ margin: 0, color: '#a1a1aa', fontSize: '0.85rem', wordBreak: 'break-all' }}>{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;