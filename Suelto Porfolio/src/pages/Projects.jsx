import React from 'react';
import { useFetchProjects } from '../hooks/useFetchProjects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { projects, loading, error } = useFetchProjects();

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <p className="section-subtitle">Real-time dynamic data pulled from Supabase backend.</p>

      {loading && <div className="loader">Loading dynamic portfolio items...</div>}
      {error && <div className="error-msg">Error loading projects: {error}</div>}

      {!loading && !error && (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;