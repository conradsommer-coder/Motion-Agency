import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-neutral-950 pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header - Editorial Style */}
        <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-12 mb-24 md:mb-40 border-b border-neutral-900 pb-12">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-7xl md:text-[8rem] font-serif text-white leading-none"
            >
                {t.about.title}
            </motion.h1>
            <span className="text-sm font-mono text-neutral-500 tracking-widest uppercase">
                / Est. 2024
            </span>
        </div>

        {/* Philosophy - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40 items-start">
            <div className="lg:col-span-4">
                 <span className="block w-12 h-1 bg-white mb-8"></span>
                 <p className="text-neutral-500 font-mono text-xs uppercase tracking-wider">
                     The Agency Standard
                 </p>
            </div>
            <div className="lg:col-span-8">
                <p className="text-3xl md:text-5xl leading-tight font-serif text-neutral-300 font-light">
                    "{t.about.philosophy}"
                </p>
            </div>
        </div>

        {/* Visual Break */}
        <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full h-[70vh] bg-neutral-900 overflow-hidden mb-40"
        >
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Agency Environment" className="w-full h-full object-cover grayscale opacity-50" />
        </motion.div>

        {/* Values - Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {t.about.values.map((value, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group border-t border-neutral-900 pt-8"
                >
                    <span className="text-xs font-mono text-neutral-500 mb-6 block">0{idx + 1}</span>
                    <h3 className="text-3xl font-serif text-white mb-6">{value.title}</h3>
                    <p className="text-neutral-500 text-lg leading-relaxed font-light group-hover:text-white transition-colors duration-500">{value.desc}</p>
                </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default About;