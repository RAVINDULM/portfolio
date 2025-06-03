import React from "react";
import "./../styles/education.css";

const Education = ({ education }) => (
  <section id="education" className="education-section">
    <div className="section-title">
      <h1>Education</h1>
    </div>
    {education.map((edu, index) => (
      <div key={index} className="education-item">
        <div className="education-left">
          <img
            src={edu.logo || "/assets/university-logo.png"} // fallback to default
            alt="University Logo"
            className="education-logo"
          />
          <div className="education-details">
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="education-date">{edu.duration}</p>
          </div>
        </div>
        <div className="education-description">
          <ul>
            {edu.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
);

export default Education;
