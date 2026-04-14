import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumeData from '../data/resumeData';

const Footer = () => (
  <footer className="max-w-7xl mx-auto px-6 lg:px-12 py-8 border-t border-blue-900/20">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#8ba3c1]">
      <div className="flex items-center gap-1 text-base font-black">
        <span className="text-[#e8f0ff]">ravindu</span>
        <span className="text-[#3b82f6]">.dev</span>
      </div>
      <div className="flex items-center space-x-8">
        <Link to="/resume" className="hover:text-[#e8f0ff] transition-colors">Resume</Link>
        <a href="#orbit-focus" className="hover:text-[#e8f0ff] transition-colors">Orbit Focus</a>
        <a href={`mailto:${resumeData.contact.email}`} className="hover:text-[#e8f0ff] transition-colors">Email</a>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors">
          <FaLinkedin size={15} />
        </a>
        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition-colors">
          <FaGithub size={15} />
        </a>
      </div>
      <p className="text-xs">© {new Date().getFullYear()} {resumeData.name}</p>
    </div>
  </footer>
);

export default Footer;
