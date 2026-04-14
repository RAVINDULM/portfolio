import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import resumeData from '../data/resumeData';

const OrbitFocusFeature = () => {
  const product = resumeData.saasProducts.find(p => p.slug === 'orbit-focus');

  return (
    <section id="orbit-focus" className="max-w-5xl mx-auto px-6 lg:px-12 py-32">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-xs font-bold tracking-[0.25em] uppercase text-[#8ba3c1] mb-6"
      >
        Flagship Product
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#e8f0ff] leading-none mb-6">
          {product.name}<span className="text-[#3b82f6]">.</span>
        </h2>
        <p className="text-[#8ba3c1] text-xl md:text-2xl max-w-2xl mx-auto leading-snug">
          {product.tagline}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8ba3c1] mb-4">The Problem</p>
            <p className="text-[#c7d7f0] text-lg leading-relaxed">{product.problem}</p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#8ba3c1] mb-4">The Solution</p>
            <p className="text-[#c7d7f0] text-lg leading-relaxed">{product.solution}</p>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <a
              href={product.waitlistUrl}
              className="group inline-flex items-center gap-2 bg-[#3b82f6] text-white px-8 py-4 font-black rounded-full hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-900/40"
            >
              Join Waitlist <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-[#8ba3c1] text-sm border border-blue-500/20 px-3 py-1 rounded-full">{product.status}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="divide-y divide-blue-900/20"
        >
          {product.features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-start gap-5 py-6 group"
            >
              <CheckCircle2 size={16} className="text-[#06b6d4] mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-[#e8f0ff] font-bold mb-1">{feature.title}</h4>
                <p className="text-[#8ba3c1] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}

          <div className="pt-6 flex flex-wrap gap-2">
            {product.tech.map(t => (
              <span key={t} className="text-xs border border-blue-500/20 text-[#8ba3c1] px-3 py-1.5 rounded-full font-mono">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrbitFocusFeature;
