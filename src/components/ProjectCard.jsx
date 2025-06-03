import React, { useState } from 'react';
import '../styles/ProjectCard.css';

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image">
        {/* <span className="project-image-placeholder">Project Image</span> */}
        {project.image ? (
          <img 
            src={project.image} 
            alt={`${project.title} preview`}
            className={`project-img ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <span className="project-image-placeholder">Project Image</span>
        )}
      </div>
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className={`project-link ${isHovered ? 'visible' : ''}`}>
          <button className="view-project-button">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="view-project-button"
          >
            View Project
            <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;