import React from "react";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">J</div>
      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#featured-blogs">Blogs</a></li>
        {/* <li><a href="#contact">Contact</a></li> */}
      </ul>
      <div className="navbar__buttons">
        <button className="btn-outline">Resume</button>
        <button className="btn-filled"><a href="#contact">Contact Me</a></button>
      </div>
    </nav>
  );
};

export default Navbar;
