
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  // Fixed: Cast cubic-bezier array to tuple to satisfy Framer Motion types
  const easeOutExpo: [number, number, number, number] = [0.19, 1, 0.22, 1];

  return (
    <div className="w-full bg-black text-white pt-40 pb-32 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Main Headline */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo }}
            className="mb-20"
        >
            <h1 className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-8 block font-bold">
                About Motion Agency
            </h1>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[0.9] text-white whitespace-pre-line uppercase">
                {t.about.title}
            </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
            className="mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-serif italic text-neutral-400">
                {t.about.subheadline}
            </h2>
        </motion.div>

        {/* Body Content */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: easeOutExpo }}
            className="max-w-3xl mx-auto space-y-10"
        >
            {t.about.body.map((paragraph, idx) => (
                <p key={idx} className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
                    {paragraph}
                </p>
            ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOutExpo }}
            className="mt-24"
        >
            <Link 
                to="/contact" 
                className="inline-flex items-center gap-6 px-16 py-6 bg-black text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
            >
                {t.about.cta} <ArrowRight size={18} />
            </Link>
        </motion.div>

      </div>

      {/* Subtle Visual Element to maintain premium editorial feel */}
      <div className="mt-40 border-t border-neutral-100 pt-20 flex justify-center opacity-30 pointer-events-none">
          <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.5em] text-neutral-400">
              <span>Precision</span>
              <span>•</span>
              <span>Clarity</span>
              <span>•</span>
              <span>Discipline</span>
          </div>
      </div>
    </div>
  );
};

export default About;
