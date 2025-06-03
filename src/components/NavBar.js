import React from "react";
import "./../styles/navbar.css";
import { Image } from "antd";
import Logo from "./../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image src={Logo} alt="logo" className="navbar__logo" width={50} />
      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#featured-blogs">Blogs</a></li>
      </ul>
      <div className="navbar__buttons">
        <a
          href="https://drive.google.com/file/d/10hql_FhG0CkXr9SosxezO1y0kMgxk6a2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-outline">Resume</button>
        </a>
        <a href="#contact"><button className="btn-filled">Contact Me</button></a>
      </div>
    </nav>
  );
};

export default Navbar;
