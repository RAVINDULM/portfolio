import React from "react";
import "./../styles/contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMedium
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>

      <p className="contact-intro">
        Feel free to reach out via email, phone, or connect with me on social media.
      </p>

      <div className="contact-grid">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>ravindu.kp@gmail.com</span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <span>+94 76 6581 992</span>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <span>75/52A, Doowawaththa Rd, Polwaththa, Pannipitiya, Sri Lanka</span>
        </div>
      </div>

      <div className="contact-socials">
        <a href="https://github.com/RAVINDULM" target="_blank" rel="noopener noreferrer" className="github">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ravindu-madhubhashana-2040b01a5/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <FaLinkedin />
        </a>
        <a href="https://medium.com/@ravindu.kp" target="_blank" rel="noopener noreferrer" className="medium">
          <FaMedium />
        </a>
      </div>
    </section>
  );
}

export default Contact;
