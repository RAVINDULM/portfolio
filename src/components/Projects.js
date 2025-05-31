import React from "react";
import "./../styles/projects.css";

function Projects({ projects }) {
  return (
    <>
    <section id="projects" className="projects">
      <h2>Featured Project</h2>
      <div className="featured-project">
        <div className="project-image">[Image]</div>
        <div className="project-info">
          <h3>Project Name</h3>
          <p>Description of the project goes here...</p>
          <p className="tech">HTML CSS JS Figma React</p>
        </div>
      </div>
    </section>
     <section className="other-projects">
      <h2>Other Project</h2>
      <div className="project-grid">
        {projects.map((_, idx) => (
          <div key={idx} className="project-card">
            <h3>Project Name</h3>
            <p>Brief description...</p>
            <p className="tech">HTML CSS JS</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Projects;
