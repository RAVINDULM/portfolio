import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import resumeData from '../data/resumeData';

const Contact = () => (
  <div className="max-w-5xl mx-auto px-6 lg:px-12 py-32 border-t border-blue-900/20">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">
      <p className="text-[#8ba3c1] text-xs font-bold uppercase tracking-[0.2em] pt-1">Contact</p>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#e8f0ff] mb-4">
            Let's build something <span className="text-[#8ba3c1]">together.</span>
          </h2>
          <p className="text-[#8ba3c1] text-lg leading-relaxed">
            Have a SaaS idea or need an engineering consultant? Let's talk.
          </p>
        </div>
        <div className="space-y-3">
          {[
            { icon: <Mail size={16} />, label: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
            { icon: <FaLinkedin size={16} />, label: 'LinkedIn', href: resumeData.contact.linkedin },
            { icon: <FaGithub size={16} />, label: 'GitHub', href: resumeData.contact.github },
          ].map(({ icon, label, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer"
              className="group flex items-center justify-between border border-blue-900/30 bg-blue-950/10 px-6 py-5 rounded-xl hover:border-[#3b82f6]/40 hover:bg-blue-500/5 transition-all"
            >
              <div className="flex items-center gap-4 text-[#8ba3c1] group-hover:text-[#e8f0ff] transition-colors">
                {icon}<span className="font-semibold">{label}</span>
              </div>
              <ArrowRight size={15} className="text-[#8ba3c1]/30 group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default Contact;
