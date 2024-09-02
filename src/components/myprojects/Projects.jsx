// src/components/myprojects/Projects.jsx
import React from 'react';
import ProjectCard from '../ProjectCard';
import './Projects.css'; // Import the CSS file for styling

const projects = [
  {
    title: 'Medilab',
    description: 'A medical laboratory management system.',
    link: 'https://github.com/fleviandemesi/Medilab' // Link to GitHub repository
  },
  {
    title: 'SneakerApp',
    description: 'An app for sneaker enthusiasts to track and buy sneakers.',
    link: 'https://github.com/fleviandemesi/SneakerApp' // Link to GitHub repository
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
