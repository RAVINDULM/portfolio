import React from "react";
import "./../styles/about.css";

const About = ({ bio }) => (
   <section id="about" className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          {bio}
        </p>
        <div className="about-image">[Image]</div>
      </div>
    </section>
);

export default About;
