import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TYPING_WORDS = ["I'm Ravindu.", 'Software engineer.', 'Developer at Orbit Focus.'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const speed = isDeleting ? 60 : 120;
    const pauseAtEnd = !isDeleting && displayText === currentWord ? 1800 : 0;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % TYPING_WORDS.length);
      } else {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }
    }, pauseAtEnd || speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

      {/* Role Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/5 text-[#8ba3c1] text-xs font-bold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Software Engineer · Researcher · Tutor
      </motion.div>

      {/* Main Heading with Typewriter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-8"
      >
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter text-[#e8f0ff] leading-none">
          <span className="text-[#3b82f6]">{displayText}</span>
          <span className="animate-cursor-blink text-[#06b6d4]">|</span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[#8ba3c1] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
      >
        Precision-driven, curiosity-fuelled. I build high-performance SaaS products and productivity tools for modern engineers who demand more from their software.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Link
          to="/resume"
          className="flex items-center gap-2 bg-white/5 border border-blue-500/20 text-[#e8f0ff] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-blue-500/10 hover:border-blue-500/40 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          View Resume
        </Link>
        <a
          href="mailto:ravindu.kp@gmail.com"
          className="flex items-center gap-2 bg-[#3b82f6] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-900/50"
        >
          Contact via email →
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-blue-400/50 to-transparent mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
