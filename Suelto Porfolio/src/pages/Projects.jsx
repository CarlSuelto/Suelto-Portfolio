import React, { useState } from 'react';
import { useFetchProjects } from '../hooks/useFetchProjects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { projects, loading, error } = useFetchProjects();
  const [activeTab, setActiveTab] = useState('all'); 
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  const achievements = [
    {
      id: 'ach-1',
      title: 'Responsive Web Design Certification',
      issuer: 'FREECODECAMP',
      date: 'Certified - 2025',
      image: '/Responsive web.png', 
      description: 'This course teaches the fundamentals of HTML and CSS including modern layout, design, accessibility, and responsive web development. You will build practical projects and gain the skills to create professional, user-friendly webpages.'
    },
    {
      id: 'ach-2',
      title: 'Computer Systems Servicing NC II',
      issuer: 'CSS NC II',
      date: 'Completed - 2026',
      image: '/NCII CSS.png', 
      description: 'Demonstrated 4 core competencies in setting up computer networks, configuring servers, and maintaining hardware systems infrastructure.'
    },
    {
      id: 'ach-3',
      title: 'Events Management Services NC III',
      issuer: 'EMS NC III',
      date: 'Completed - 2024',
      image: '/NCIII EMS.png', 
      description: 'Demonstrated 4 core competencies in event planning and coordination for successful event execution.'
    },
    {
      id: 'ach-4',
      title: 'OOPs in Java Programming Certification',
      issuer: 'OBJECTIVE PROGRAMMING',
      date: 'Completed - Nov 2025',
      image: '/OBJ Pro.png', 
      description: 'Mastered the principles of object-oriented programming in Java, including encapsulation, inheritance, and polymorphism.'
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header-block">
        <h2>Portfolio & Milestones</h2>
        <p className="section-subtitle">Real-time dynamic data pulled from Supabase backend alongside verified credentials.</p>
      </div>

      {/* Control Tabs */}
      <div className="portfolio-tab-row">
        <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Show All</button>
        <button className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projects ({projects ? projects.length : 0})</button>
        <button className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>Achievements ({achievements.length})</button>
      </div>

      {/* LOADING/ERROR HANDLERS */}
      {(activeTab === 'all' || activeTab === 'projects') && loading && <div className="loader">Loading dynamic portfolio items...</div>}
      {(activeTab === 'all' || activeTab === 'projects') && error && <div className="error-msg">Error loading projects: {error}</div>}

      <div className="portfolio-master-layout-grid">
        
        {/* Dynamic Project Streams */}
        {(activeTab === 'all' || activeTab === 'projects') && !loading && !error && (
          <div className="projects-sub-column">
            {activeTab === 'all' && <h3>Featured Builds</h3>}
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Structured Achievement Grid Boxes */}
        {(activeTab === 'all' || activeTab === 'achievements') && (
          <div className="achievements-sub-column">
            {activeTab === 'all' && <h3>Academic & Technical Milestones</h3>}
            
            <div className="achievements-box-grid custom-3d-deck">
              {achievements.map((item) => {
                const isFlipped = flippedCardId === item.id;

                return (
                  <div 
                    key={item.id} 
                    className={`flip-card-container ${isFlipped ? 'is-flipped' : ''}`}
                    onClick={() => handleCardClick(item.id)}
                    style={{ perspective: '1000px' }} // Ensures standard container perspective
                  >
                    <div 
                      className="flip-card-inner"
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.6s ease',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      
                      {/* FRONT VIEW PANEL */}
                      <div 
                        className="flip-card-front supabase-card achievement-item-card"
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          zIndex: isFlipped ? 1 : 2, // Forces front panel behind when flipped
                          visibility: isFlipped ? 'hidden' : 'visible' // Absolute safety switch
                        }}
                      >
                        <div className="achievement-badge-row">
                          <span className="badge-issuer">{item.issuer}</span>
                          <span className="badge-date">{item.date}</span>
                        </div>
                        
                        <div className="front-card-body-content">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>

                        <div className="achievement-status-footer action-hint-glow">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="verified-icon animation-spin-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                          </svg>
                          <span>Click Card to view image document</span>
                        </div>
                      </div>

                      {/* BACK VIEW PANEL */}
                      <div 
                        className="flip-card-back supabase-card achievement-item-card" 
                        style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          height: '100%', 
                          width: '100%', 
                          justifyContent: 'space-between', 
                          padding: '1.25rem', 
                          boxSizing: 'border-box',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          transform: 'rotateY(180deg)', // Keeps back content right-side-up
                          zIndex: isFlipped ? 2 : 1, // Pulls panel to front when active
                          visibility: isFlipped ? 'visible' : 'hidden' // Force renders canvas only when needed
                        }}
                      >
                        <div className="achievement-image-wrapper" style={{ width: '100%', height: '230px', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                          <img 
                            src={item.image}
                            alt={item.title} 
                            className="achievement-card-img" 
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                          />
                        </div>
                        
                        <div className="achievement-status-footer unflip-footer" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '1rem', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="verified-icon green-glow" style={{ width: '16px', height: '16px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>System Verified &bull; Click to exit view</span>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;