import React from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Dart'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Redux'] },
  { category: 'Backend', items: ['Spring Boot', 'Node.js', 'REST APIs', 'WebSockets'] },
  { category: 'Data & Infra', items: ['MySQL', 'MongoDB', 'Redis', 'AWS', 'GCP', 'Docker'] },
];

const Skills = () => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
    <p className="text-[#8ba3c1] text-xs font-bold uppercase tracking-[0.2em] pt-1">Skills</p>
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="grid grid-cols-2 gap-10"
    >
      {SKILLS.map(({ category, items }) => (
        <div key={category}>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#06b6d4] mb-5">{category}</h3>
          <ul className="space-y-2">
            {items.map(skill => (
              <li key={skill} className="text-[#c7d7f0] text-sm font-medium">{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  </div>
);

export default Skills;
