import React from "react";
import "./../styles/skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>Postman</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
