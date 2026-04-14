import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../data/resumeData';

const BrandSection = () => (
  <section className="max-w-5xl mx-auto px-6 lg:px-12 py-32 border-t border-blue-900/20">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        className="text-[#8ba3c1] text-xs font-bold uppercase tracking-[0.2em] pt-1">
        About Me
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
        <p className="text-[#e8f0ff] text-2xl md:text-3xl font-medium leading-snug">{resumeData.brand.philosophy}</p>
        <p className="text-[#8ba3c1] text-lg leading-relaxed">
          Based in Sri Lanka — building scalable, highly-performant software with a focus on developer productivity tools and SaaS ecosystems.
        </p>
        <p className="text-[#8ba3c1] text-lg leading-relaxed">
          When I'm not shipping products, I'm exploring deep work systems, distributed architecture, and the future of building software.
        </p>
      </motion.div>
    </div>
  </section>
);

export default BrandSection;
