import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

const Projects = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
    <p className="text-[#8ba3c1] text-xs font-bold uppercase tracking-[0.2em] pt-1">Projects</p>
    <div className="divide-y divide-blue-900/20">
      {projects.map((project, index) => (
        <motion.div key={project.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="flex flex-col sm:flex-row sm:items-start justify-between py-8 group"
        >
          <div className="flex-1 pr-8">
            <h3 className="text-[#e8f0ff] font-bold text-lg mb-2 group-hover:text-[#3b82f6] transition-colors">{project.title}</h3>
            <p className="text-[#8ba3c1] leading-relaxed text-sm">{project.description}</p>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0 flex-shrink-0">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#8ba3c1] hover:text-[#3b82f6] transition-colors">
              <FaGithub size={17} />
            </a>
            <a href="#" className="text-[#8ba3c1] hover:text-[#06b6d4] transition-colors">
              <ExternalLink size={17} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Projects;
