import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: "Swift-Tasks",
      description: "This simple, performant task manager uses localStorage for automatic data persistence, ideal for managing development sprints and beyond. You'll never forget a coding task again. ",
      tags: ["JavaScript", "CSS3", "HTML"],
      link: "https://swift-tasks.vercel.app/",
      image: "/images/swift-tasks.png",
    },
    {
      title: "DELA Water Billing System",
      description: "Leveraging Django & React, this water billing app provides a performant and intuitive platform for precise consumption tracking and billing.",
      tags: ["React", "JavaScript", "Django", "Python", "CSS3", "SQLite3"],
      link: "https://github.com/dan-verse/DELA",
      image: "/images/dela.png",
    },
    {
      title: "My Portfolio",
      description: "Explore my portfolio to see my work in action across the various projects.",
      tags: ["HTML", "CSS3", "ReactJs"],
      link: "https://github.com/dan-verse/dan4d",
      image: "images/portfolio.PNG",
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span>My Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;