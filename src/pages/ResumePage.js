import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import resumeData from '../data/resumeData';

const ResumePage = () => (
  <main className="min-h-screen pt-24 pb-32">
    <div className="max-w-5xl mx-auto px-6 lg:px-12 mb-24">
      <Link to="/" className="inline-flex items-center text-[#8ba3c1] text-sm hover:text-[#e8f0ff] transition-colors mb-14 group">
        <ArrowLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <p className="text-[#8ba3c1] text-xs font-bold uppercase tracking-[0.25em] mb-4">Resume</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#e8f0ff] leading-none">
            {resumeData.name.split(' ')[0]}<br />
            <span className="text-[#8ba3c1]">{resumeData.name.split(' ').slice(1).join(' ')}</span>
          </h1>
        </div>
        <a href="#" className="group flex items-center gap-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-900/40 self-start md:self-auto">
          <Download size={16} />
          Download PDF
        </a>
      </div>
    </div>

    <div className="max-w-5xl mx-auto px-6 lg:px-12 divide-y divide-blue-900/20">
      <section className="py-20"><About bio={resumeData.about} /></section>
      <section className="py-20"><Experience experience={resumeData.experience} /></section>
      <section className="py-20"><Education education={resumeData.education} /></section>
      <section className="py-20"><Projects projects={resumeData.projects} /></section>
      <section className="py-20"><Skills skills={resumeData.skills} /></section>
    </div>
  </main>
);

export default ResumePage;
