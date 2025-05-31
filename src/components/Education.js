import React from "react";
import "./../styles/education.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <h1 className="section-title">Education</h1>

      <div className="education-item">
        <div className="education-left">
          <img
            src="/assets/university-logo.png"  // replace with your logo path
            alt="University Logo"
            className="education-logo"
          />
          <div className="education-details">
            <h3 className="degree">Master of Computer Science</h3>
            <p className="institution">Sabaragamuwa University of Sri Lanka</p>
            <p className="education-date">2023 – 2025</p>
          </div>
        </div>
        <div className="education-description">
          <ul>
            <li>Focused on Cloud Computing, DevOps, and Software Architecture.</li>
            <li>Conducted research on distributed systems and scalable applications.</li>
            <li>Completed coursework in advanced algorithms and machine learning.</li>
          </ul>
        </div>
      </div>

      <div className="education-item">
        <div className="education-left">
          <img
            src="/assets/bachelor-logo.png"  // replace with your logo path
            alt="University Logo"
            className="education-logo"
          />
          <div className="education-details">
            <h3 className="degree">BSc in Computer Science</h3>
            <p className="institution">University of Colombo</p>
            <p className="education-date">2017 – 2021</p>
          </div>
        </div>
        <div className="education-description">
          <ul>
            <li>Specialized in software development and data structures.</li>
            <li>Built multiple web-based projects using JavaScript and Java.</li>
            <li>Graduated with a Second Class Lower Division.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
