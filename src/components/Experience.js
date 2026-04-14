import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Experience = ({ experience }) => (
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
    <p className="text-[#8ba3c1] text-xs font-bold uppercase tracking-[0.2em] pt-1">Experience</p>
    <div className="space-y-16">
      {experience.map((job, index) => (
        <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="flex items-center gap-4">
              {job.companyLogo && (
                <div className="w-8 h-8 border border-blue-900/30 flex items-center justify-center flex-shrink-0 overflow-hidden rounded bg-blue-950/30">
                  <img src={job.companyLogo} alt={job.company} className="w-full h-full object-contain" />
                </div>
              )}
              <div>
                <h3 className="text-[#e8f0ff] font-bold text-lg">{job.role}</h3>
                <p className="text-[#8ba3c1] text-sm">{job.company}</p>
              </div>
            </div>
            <span className="text-[#8ba3c1] text-xs font-mono flex items-center gap-2 flex-shrink-0">
              <Calendar size={11} /> {job.duration}
            </span>
          </div>
          <p className="text-[#8ba3c1] text-xs font-mono uppercase tracking-widest border-l-2 border-[#3b82f6]/30 pl-3">
            {job.techStack}
          </p>
          <ul className="space-y-3">
            {job.workList.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#8ba3c1] text-sm leading-relaxed">
                <span className="text-[#06b6d4]/60 mt-1.5 flex-shrink-0">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Experience;
