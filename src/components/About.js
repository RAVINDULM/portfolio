import React from "react";
import "./../styles/about.css";
import profileImage from "../../src/assets/profile.jpg";

const About = ({ bio }) => (
  <section id="about" className="about">
    <h1>About Me</h1>
    <div className="about-content">
      <div className="about-text">
        <p>{bio}</p>
      </div>
      <div className="about-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </div>
  </section>
);

export default About;
