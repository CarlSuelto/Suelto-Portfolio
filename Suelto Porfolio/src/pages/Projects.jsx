import React, { useState } from 'react';
import { useFetchProjects } from '../hooks/useFetchProjects';
import ProjectCard from '../components/ProjectCard';


const Projects = () => {
  const { projects, loading, error } = useFetchProjects();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'projects', 'achievements'

  // Hardcoded achievements data array following your profile's data structures
  const achievements = [
    {
      id: 'ach-1',
      title: 'Responsive Web Design Certification',
      issuer: 'FREECODECAMP',
      date: 'Certified',
      image: new URL('../assets/Responsive web.png', import.meta.url).href,
      description: 'This course teaches the fundamentals of HTML and CSS, including modern layout, design, accessibility, and responsive web development. You will build practical projects and gain the skills to create professional, user-friendly webpages'
    },
    {
      id: 'ach-2',
      title: 'Computer Systems Servicing NCII',
      issuer: 'Online Verification',
      date: 'Completed',
      image: new URL('../assets/NCII CSS.png', import.meta.url).href,
      description: 'Demonstrated 4 core competencies in setting up computer networks, configuring servers, and maintaining hardware systems infrastructure.'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header-block">
        <h2>Portfolio & Milestones</h2>
        <p className="section-subtitle">Real-time dynamic data pulled from Supabase backend alongside verified credentials.</p>
      </div>

      {/* Control Tabs to filter view states */}
      <div className="portfolio-tab-row">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Show All
        </button>
        <button 
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects ({projects ? projects.length : 0})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements ({achievements.length})
        </button>
      </div>

      {/* PROJECT LOADING/ERROR HANDLERS */}
      {(activeTab === 'all' || activeTab === 'projects') && loading && (
        <div className="loader">Loading dynamic portfolio items...</div>
      )}
      {(activeTab === 'all' || activeTab === 'projects') && error && (
        <div className="error-msg">Error loading projects: {error}</div>
      )}

      {/* SYSTEM GRID DISPLAY */}
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
            <div className="achievements-box-grid">
              {achievements.map((item) => (
                <div key={item.id} className="supabase-card achievement-item-card">
                  <div className="achievement-badge-row">
                    <span className="badge-issuer">{item.issuer}</span>
                    <span className="badge-date">{item.date}</span>
                  </div>
                  {/**/}
                  <div className="achievement-image-wrapper">
                    <img 
                      src={item.image || '/Responsive web.png'}
                      alt={item.title} 
                      className="achievement-card-img" 
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="achievement-status-footer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="verified-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>System Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;