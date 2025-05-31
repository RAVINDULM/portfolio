import React from "react";
import "./../styles/contact.css";
// import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-details">
        <div className="contact-item">
          {/* <FaEnvelope className="icon" /> */}
          <span>youremail@example.com</span>
        </div>
        <div className="contact-item">
          {/* <FaPhoneAlt className="icon" /> */}
          <span>+94 712 345 678</span>
        </div>
        <div className="contact-item">
          {/* <FaMapMarkerAlt className="icon" /> */}
          <span>Colombo, Sri Lanka</span>
        </div>
      </div>

      <div className="contact-socials">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          {/* <FaGithub /> */}
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          {/* <FaLinkedin /> */}
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          {/* <FaTwitter /> */}
        </a>
        {/* Add more social icons here if needed */}
      </div>
    </section>
  );
}

export default Contact;
