import React from "react";
import "./../styles/projects.css";
import { FaGithub } from "react-icons/fa";

function Projects({ projects }) {
  return (
    <>
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Project</h2>
        <div className="featured-project">
          <img src="https://github.com/RAVINDULM/beauty-craft/raw/main/public/logo/bannerWhiteBgLessH.png" alt="Project" className="project-image"/>
          <div className="project-info">
            <h3>Beauty Craft</h3>
            <p>Beauty Craft mainly focuses on efficient and user-friendly reservation management as well as managing the organizational work of beauty salons requiring minimum user effort and time.</p>
            <p className="tech">HTML • CSS • JS • Figma • PHP • MySQL</p>
            <a
              href="https://github.com/RAVINDULM/beauty-craft"
              target="_blank"
              rel="noopener noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      <section className="other-projects">
        <h2 className="section-title">Other Projects</h2>
        <div className="project-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.title || "Project Name"}</h3>
              <p>{project.description || "Brief description..."}</p>
              <p className="tech">{project.tech || "HTML • CSS • JS"}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon-card"
              >
                <FaGithub />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
