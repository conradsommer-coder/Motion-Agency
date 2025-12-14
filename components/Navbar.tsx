import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { name: t.nav.services, path: '/services' },
    { name: t.nav.motionDesigns, path: '/motion-designs' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.blog, path: '/blog' },
    { name: t.nav.contact, path: '/contact' },
  ];

  // Animations
  const menuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: { 
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50 group relative">
             <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white relative z-10 mix-blend-difference">
                    MOTION AGENCY.
                </span>
             </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 hover:text-white transition-colors duration-300 group"
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out-expo group-hover:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''}`}></span>
            </Link>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="text-[10px] font-bold text-white border border-neutral-700 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-6 z-50">
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-white mix-blend-difference"
          >
            {language.toUpperCase()}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:opacity-50 transition-opacity mix-blend-difference">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
            >
                <div className="flex flex-col space-y-8 text-center">
                {navLinks.map((link) => (
                    <motion.div key={link.path} variants={itemVariants}>
                        <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="text-4xl md:text-5xl font-serif text-white hover:text-neutral-500 transition-colors block"
                        >
                        {link.name}
                        </Link>
                    </motion.div>
                ))}
                </div>
                
                <motion.div variants={itemVariants} className="mt-12 pt-12 border-t border-neutral-800 w-40 flex justify-center gap-6">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;