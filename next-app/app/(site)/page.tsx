'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Bot, BarChart3, Globe, Zap, ArrowDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FlipCard = ({ icon: Icon, title, desc, index }: { icon: React.ElementType; title: string; desc: string; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[400px] w-full cursor-pointer relative group"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-neutral-950 p-10 flex flex-col justify-between border-r border-b border-neutral-900 group-hover:bg-neutral-900 transition-colors duration-500"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="flex justify-between items-start">
            <Icon strokeWidth={1} className="w-12 h-12 text-neutral-500 group-hover:text-white transition-colors duration-500" />
            <span className="text-neutral-800 font-mono text-xs">0{index + 1}</span>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-white mb-4 leading-tight">{title}</h3>
            <div className="w-8 h-[1px] bg-neutral-800 mb-4 group-hover:w-16 transition-all duration-500"></div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-neutral-400 transition-colors">
              Explore
            </p>
          </div>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-white p-10 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="flex justify-between items-center mb-8">
              <Icon strokeWidth={1.5} className="w-6 h-6 text-black" />
              <span className="text-neutral-400 font-mono text-xs">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-serif text-black mb-4">{title}</h3>
            <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
          </div>
          <div className="flex items-center gap-2 text-black text-xs font-bold uppercase tracking-widest border-b border-black/20 pb-1 w-fit">
            Learn More <ArrowRight size={14} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const easeOutExpo = [0.19, 1, 0.22, 1];

  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: easeOutExpo },
    },
  };

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const revealOnScroll = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: easeOutExpo },
    },
    viewport: { once: true, margin: '-10%' },
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section ref={heroRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate High Rise Abstract"
            className="w-full h-full object-cover grayscale brightness-50 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90"></div>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-20 flex flex-col justify-end h-full pb-32">
          <motion.div initial="initial" animate="animate" variants={stagger} className="max-w-4xl">
            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-medium tracking-tight leading-[0.9] text-white mb-8"
            >
              Intelligence.<br />
              <span className="italic text-neutral-400">Aesthetics.</span><br />
              Impact.
            </motion.h1>
            <motion.div variants={fadeIn} className="flex flex-col md:flex-row items-start md:items-end gap-8">
              <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed font-light">
                {t.hero.subheadline}
              </p>
              <Link
                href="/services"
                className="group flex items-center gap-4 px-8 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300"
              >
                {t.hero.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Teaser */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            {...revealOnScroll}
            className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-neutral-900 pb-8"
          >
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-4 block">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">{t.services.title}</h2>
            </div>
            <Link href="/services" className="hidden md:flex items-center text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors group">
              View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-900">
            {[
              { icon: Bot, title: t.services.ai.brandName, desc: t.services.ai.description },
              { icon: Globe, title: 'SEO Authority', desc: t.services.seo.description },
              { icon: BarChart3, title: 'Performance Ads', desc: t.services.ads.description },
              { icon: Zap, title: 'E-Commerce', desc: t.services.ecommerce.description },
            ].map((service, i) => (
              <FlipCard key={i} icon={service.icon} title={service.title} desc={service.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Motion Designs Teaser */}
      <section className="py-32 bg-neutral-900 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeOutExpo }}
              className="order-2 lg:order-1 relative overflow-hidden aspect-[4/3] group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop"
                alt="Architecture"
                className="w-full h-full object-cover grayscale transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-6 block">Specialized Division</span>
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-none">
                Motion<br />Designs.
              </h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed mb-10 max-w-md">
                {t.motionDesigns.hero.intro}
              </p>
              <Link
                href="/motion-designs"
                className="inline-block border-b border-white pb-1 text-white font-bold text-sm uppercase tracking-widest hover:text-neutral-400 hover:border-neutral-400 transition-colors"
              >
                Explore Division
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
