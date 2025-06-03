import React from "react";
import "./../styles/experience.css";
import {companyLogos} from "../assets/ICanLanka.png";
const Experience = ({ experience }) => (
  <section id="experience" className="experience-section">
    <div className="section-title">
      <h1>Experience</h1>
    </div>
    {experience.map((job, index) => (
      <div key={index} className="experience-item">
        <div className="experience-left">
          <img
            src={job.companyLogo} // Replace with dynamic path if available
            alt="Company Logo"
            className="experience-logo"
          />
          <div className="experience-details">
            <h3 className="job-role">{job.role}</h3>
            <p className="company">{job.company}</p>
            <p className="experience-date">{job.duration}</p>
            <p className="tech-stack">Tech Stack: {job.techStack}</p>
          </div>
        </div>
        <div className="experience-description">
          <ul>
            {job.workList.map((workItem, i) => (
              <li key={i}>{workItem}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
);

export default Experience;
