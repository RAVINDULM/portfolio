import React from "react";
import "./../styles/header.css";
import Navbar from "./NavBar";

const Header = ({ name = "John Smith", role = "I design and build things." }) => {
  return (
    <>
    <Navbar />
        <header className="header" id="home">
      <div className="header__content">
        <h1>Hi, I’m <span className="name-highlight">{name}</span></h1>
        <p>{role}</p>
        <div className="scroll-down">
          <span>&darr;</span>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
