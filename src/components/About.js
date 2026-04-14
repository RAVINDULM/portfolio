import React from 'react';
import { motion } from 'framer-motion';


const About = ({ bio }) => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
    <p className="text-[#8ba3c1] text-xs font-bold uppercase tracking-[0.2em] pt-1">About</p>
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <p className="text-[#c7d7f0] text-lg leading-relaxed">{bio}</p>
    </motion.div>
  </div>
);

export default About;
