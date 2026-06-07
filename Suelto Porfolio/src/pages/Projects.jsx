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
    {
      id: 'ach-5',
      title: 'SIL (Job Internship)',
      issuer: 'ECE',
      date: 'Completed - June 2024',
      image: '/ece coc.png', 
      description: 'Successfully completed a 100 hrs SIL (Supervised Industry Learning) internship at ECE, gaining hands-on experience in IT support, network administration, and system maintenance.'
    },
    {
      id: 'ach-6',
      title: 'SIL (Job Internship)',
      issuer: 'Inspiro & Infocom',
      date: 'Completed - August 2025',
      image: '/inspiro.png', 
      description: 'Successfully completed a 200 hrs SIL (Supervised Industry Learning) internship at Inspiro & Infocom, gaining hands-on experience in IT support, network administration, and system maintenance.'
    },
    {
      id: 'ach-7',
      title: 'Search Engine Optimization (SEO) Seminar',
      issuer: 'ACSAT',
      date: 'Completed - Apr 2024',
      image: '/seo.png', 
      description: 'Attended a comprehensive seminar on Search Engine Optimization (SEO) covering keyword research, on-page and off-page optimization techniques, and SEO analytics tools to enhance website visibility and ranking.'
    },
  ];

  return (
    <section id="projects" className="projects-section" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-primary)', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
      
      <style>{`
        /* 💡 FIXED: Filter Tab Layout & Hover Fixes for Visibility */
        .portfolio-tab-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .tab-btn {
          background-color: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.9rem;
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .tab-btn.active {
          background-color: rgba(62, 207, 142, 0.1) !important;
          color: var(--brand-emerald) !important;
          border-color: var(--brand-emerald) !important;
        }
        /* High contrast dynamic hover state for unselected buttons */
        .tab-btn:not(.active):hover {
          background-color: var(--brand-emerald) !important;
          color: #ffffff !important;
          border-color: var(--brand-emerald) !important;
        }

        /* 3D Perspective Card Layout System */
        .forced-perspective-container {
          perspective: 1200px !important;
          height: 380px;
        }
        .forced-card-inner {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          transform-style: preserve-3d !important;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .forced-card-inner.is-flipped-active {
          transform: rotateY(180deg) !important;
        }
        .forced-face-front, .forced-face-back {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          backface-visibility: hidden !important;
          -webkit-backface-visibility: hidden !important;
          box-sizing: border-box !important;
          background-color: var(--bg-card) !important;
          border: 1px solid var(--border-subtle) !important;
          border-radius: 8px;
        }
        .forced-face-front {
          z-index: 2 !important;
          transform: rotateY(0deg) !important;
        }
        .forced-face-back {
          transform: rotateY(180deg) !important;
          z-index: 1 !important;
        }
        .front-card-body-content h4 {
          color: var(--text-primary) !important;
          margin-bottom: 8px;
        }
        .front-card-body-content p {
          color: var(--text-secondary) !important;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .badge-issuer {
          background-color: var(--bg-main) !important;
          color: var(--brand-emerald) !important;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .badge-date {
          color: var(--text-secondary) !important;
          font-size: 0.75rem;
        }

        .achievement-card-img {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
          transform: scale(1);
        }
        .forced-card-inner.is-flipped-active .achievement-card-img {
          transform: scale(1.02);
        }
        .forced-perspective-container:hover .forced-card-inner.is-flipped-active .achievement-card-img {
          transform: scale(1.08) !important;
        }
      `}</style>

      <div className="section-header-block" style={{ padding: '40px 40px 10px 40px', maxWidth: '1350px', margin: '0 auto' }}>
        <h2 style={{ color: 'var(--text-primary)' }}>Portfolio & Milestones</h2>
        <p className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>Real-time dynamic data pulled from Supabase backend alongside verified credentials.</p>
      </div>

      <div className="portfolio-tab-row" style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 40px 20px 40px' }}>
        <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>Show All</button>
        <button className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => setActiveTab('projects')}>Projects ({projects ? projects.length : 0})</button>
        <button className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>Achievements ({achievements.length})</button>
      </div>

      {(activeTab === 'all' || activeTab === 'projects') && loading && <div className="loader" style={{ color: 'var(--text-secondary)', padding: '40px' }}>Loading dynamic portfolio items...</div>}
      {(activeTab === 'all' || activeTab === 'projects') && error && <div className="error-msg" style={{ padding: '40px' }}>Error loading projects: {error}</div>}

      <div className="portfolio-master-layout-grid" style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 40px 40px 40px' }}>

        {(activeTab === 'all' || activeTab === 'projects') && !loading && !error && (
          <div className="projects-sub-column" style={{ marginBottom: '32px' }}>
            {activeTab === 'all' && <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px' }}>Featured Builds</h3>}
            <div className="projects-grid">
              {projects && projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'all' || activeTab === 'achievements') && (
          <div className="achievements-sub-column">
            {activeTab === 'all' && <h3 style={{ color: 'var(--text-primary)', marginBottom: '24px' }}>Academic & Technical Milestones with SIL Internships</h3>}
            
            <div className="achievements-box-grid custom-3d-deck" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
              {achievements.map((item) => {
                const isFlipped = flippedCardId === item.id;

                return (
                  <div 
                    key={item.id} 
                    className="forced-perspective-container"
                    onClick={() => handleCardClick(item.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={`forced-card-inner ${isFlipped ? 'is-flipped-active' : ''}`}>
                      
                      {/* FRONT VIEW PANEL */}
                      <div className="forced-face-front flip-card-front" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div className="achievement-badge-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <span className="badge-issuer">{item.issuer}</span>
                            <span className="badge-date">{item.date}</span>
                          </div>
                          
                          <div className="front-card-body-content">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>

                        <div className="achievement-status-footer action-hint-glow" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--brand-emerald)', marginTop: '12px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                          </svg>
                          <span>Click Card to view image document</span>
                        </div>
                      </div>

                      {/* BACK VIEW PANEL */}
                      <div className="forced-face-back flip-card-back" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px' }}>
                        <div className="achievement-image-wrapper" style={{ width: '100%', height: '260px', backgroundColor: '#09090b', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
                          <img 
                            src={item.image}
                            alt={item.title} 
                            className="achievement-card-img" 
                            loading="lazy"
                            style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                          />
                        </div>
                        
                        <div className="achievement-status-footer unflip-footer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--brand-emerald)' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" style={{ width: '16px', height: '16px' }}>
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