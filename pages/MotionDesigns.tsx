import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Download, Layers, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS } from '../data/assets';

const MotionDesigns: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [downloadState, setDownloadState] = useState<'idle' | 'success'>('idle');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      setDownloadState('success');
      console.log("Download requested for:", email);
    }
  };

  return (
    <div className="w-full bg-neutral-950">
      {/* Visual Header */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Restored Hands on Tablet image with full opacity and dark overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${ASSETS.motionDesignsHero})` }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
            <span className="block text-xs font-bold tracking-[0.4em] text-white uppercase mb-6 border border-white/20 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
                {t.motionDesigns.hero.subtitle}
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-medium text-white mb-8 tracking-tight">
                {t.motionDesigns.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
                {t.motionDesigns.hero.intro}
            </p>
        </motion.div>
      </div>

      {/* SECTION 1: BRANDING & IDENTITY (Agency Side) */}
      <section className="py-32 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-6 block">01 / Agency Services</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">{t.motionDesigns.branding.title}</h2>
                    <p className="text-2xl text-neutral-400 font-serif italic mb-8">"{t.motionDesigns.branding.subtitle}"</p>
                    <p className="text-neutral-400 leading-relaxed mb-10 text-lg">{t.motionDesigns.branding.description}</p>
                    
                    <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-sm">
                        <p className="text-white font-medium text-sm tracking-wide">{t.motionDesigns.branding.idealFor}</p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 gap-4">
                     {t.motionDesigns.branding.features.map((feature, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-6 p-8 border border-neutral-800 hover:border-neutral-600 bg-neutral-900/20 transition-colors group"
                        >
                            <PenTool strokeWidth={1} className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors" />
                            <span className="text-xl font-light text-neutral-200">{feature}</span>
                        </motion.div>
                     ))}
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: REAL ESTATE DEVELOPERS (Formula Side) */}
      <section className="py-32 bg-neutral-900 text-white relative overflow-hidden">
        {/* Subtle texture for architectural feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
                     {t.motionDesigns.realEstate.features.map((feature, idx) => (
                        <motion.div 
                            key={idx} 
                            whileHover={{ backgroundColor: '#000000' }}
                            className="flex flex-col gap-6 p-10 bg-neutral-950 transition-colors"
                        >
                            <Layers strokeWidth={1} className="w-8 h-8 text-neutral-500" />
                            <span className="text-lg font-medium text-white leading-tight">{feature}</span>
                        </motion.div>
                     ))}
                </div>
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                >
                    <span className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-6 block">02 / Proven System</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">{t.motionDesigns.realEstate.title}</h2>
                    <p className="text-2xl text-neutral-400 font-serif italic mb-8">"{t.motionDesigns.realEstate.subtitle}"</p>
                    <p className="text-neutral-400 leading-relaxed mb-10 text-lg font-light">{t.motionDesigns.realEstate.description}</p>
                    
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-10 border-l border-neutral-700 pl-4 py-1">
                        {t.motionDesigns.realEstate.seoText}
                    </p>

                    <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-neutral-200 transition-colors">
                        {t.motionDesigns.realEstate.cta} <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Download Section - Minimal */}
      <div className="py-32 bg-neutral-950">
         <div className="max-w-xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif text-white mb-4">{t.motionDesigns.download.title}</h2>
            <p className="text-neutral-500 mb-10">{t.motionDesigns.download.subtitle}</p>
            
            {downloadState === 'idle' ? (
              <form onSubmit={handleDownload} className="flex flex-col gap-4">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your work email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-b border-neutral-800 text-white px-2 py-4 w-full focus:outline-none focus:border-white transition-colors text-center placeholder:text-neutral-600"
                />
                <button 
                  type="submit"
                  className="mt-6 bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mx-auto w-fit"
                >
                  {t.motionDesigns.download.cta} <Download size={14} />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-6 bg-neutral-900 border border-neutral-800 text-white inline-flex items-center gap-3"
              >
                <CheckCircle2 className="text-green-500" size={20} />
                <p className="text-sm font-medium">{t.motionDesigns.download.success}</p>
              </motion.div>
            )}
         </div>
      </div>
    </div>
  );
};

export default MotionDesigns;