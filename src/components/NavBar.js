import React from "react";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">J</div>
      <ul className="navbar__links">
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#project">project</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="navbar__buttons">
        <button className="btn-outline">Resume</button>
        <button className="btn-filled">Hire Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
