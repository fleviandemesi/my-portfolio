// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css'; // Import the CSS file for styling

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
