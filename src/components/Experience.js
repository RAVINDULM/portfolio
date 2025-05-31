import React from "react";
import "./../styles/experience.css";

const Experience = ({ experience }) => (
      <section id="experience" className="experience">
    <h1>Experience</h1>
    {experience.map((job, index) => (
      <div key={index} className="job">
        <div className="job-info">
          <h3>Job Title</h3>
          <p>{job.company} | {job.role}</p>
          <span>{job.duration}</span>
        </div>
        <ul>
          <li>Lorem ipsum dolor sit amet...</li>
          <li>Vivamus facilisis ligula...</li>
        </ul>
      </div>
    ))}
  </section>  
);

export default Experience;
