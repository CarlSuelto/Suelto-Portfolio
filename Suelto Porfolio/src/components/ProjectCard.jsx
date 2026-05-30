import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image_url || 'https://via.placeholder.com/300x180'} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tech_stack?.map((tech, index) => (
            <span key={index} className="tag">{tech}</span>
          ))}
        </div>
        <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="btn-link">
          View Live Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;