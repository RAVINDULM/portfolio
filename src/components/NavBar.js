import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import resumeData from '../data/resumeData';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#050a14]/80 backdrop-blur-md border-b border-blue-900/30' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-lg font-black tracking-tight hover:opacity-80 transition-opacity">
          <span className="text-[#e8f0ff]">ravindu</span>
          <span className="text-[#3b82f6]">.dev</span>
        </Link>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/resume" className="text-sm font-medium text-[#8ba3c1] hover:text-[#e8f0ff] transition-colors">
            Resume
          </Link>
          <a
            href="#orbit-focus"
            className="group flex items-center gap-2 bg-[#3b82f6] text-white px-6 py-2.5 text-sm font-bold rounded-full hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-900/40"
          >
            Try Orbit Focus <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <button className="md:hidden text-[#e8f0ff]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#050a14]/95 backdrop-blur-md border-b border-blue-900/20 px-6 py-10 md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              <Link to="/resume" className="text-xl font-bold text-[#e8f0ff]" onClick={() => setIsMobileMenuOpen(false)}>
                Resume
              </Link>
              <a href="#orbit-focus" className="bg-[#3b82f6] text-white px-10 py-4 text-lg font-black rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                Try Orbit Focus
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
