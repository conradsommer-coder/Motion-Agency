import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, BarChart3, PenTool, ArrowDown, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ASSETS } from '../data/assets';
import SeoHead from '../components/SeoHead';

// High-Contrast Hover Card Component for Expertise
const ServiceHoverCard = ({ icon: Icon, title, desc, bullets, closing, index }: { icon: any, title: string, desc: string, bullets: string[], closing: string, index: number }) => {
  const { language } = useLanguage();
  return (
    <div className="group relative bg-neutral-950 p-10 flex flex-col justify-between border-r border-b border-neutral-900 hover:bg-white transition-all duration-500 ease-out-expo min-h-[600px]">
      <div>
        <div className="flex justify-between items-start mb-12">
          <Icon strokeWidth={1} className="w-12 h-12 text-neutral-500 group-hover:text-black transition-colors duration-500" />
          <span className="text-neutral-800 font-mono text-xs group-hover:text-neutral-400 transition-colors duration-500">0{index + 1}</span>
        </div>
        
        <h3 className="text-3xl font-serif text-white mb-6 leading-tight group-hover:text-black transition-colors duration-500">
          {title}
        </h3>
        
        <p className="text-neutral-500 text-sm leading-relaxed mb-8 group-hover:text-neutral-700 transition-colors duration-500">
          {desc}
        </p>

        <ul className="space-y-4 mb-10">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-1 h-1 bg-neutral-800 group-hover:bg-black rounded-full flex-shrink-0 transition-colors duration-500"></span>
              <span className="text-[11px] uppercase tracking-wider font-medium text-neutral-500 group-hover:text-black transition-colors duration-500">
                {bullet.replace('• ', '')}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 border-t border-neutral-900 group-hover:border-neutral-200 transition-colors duration-500">
        <p className="text-neutral-400 font-serif italic text-sm mb-6 group-hover:text-black transition-colors duration-500">
          "{closing}"
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest border-b border-white/20 pb-1 group-hover:text-black group-hover:border-black transition-all duration-500">
          {language === 'en' ? 'Book a Consultation' : 'Solicitar una Consulta'} <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const easeOutExpo: [number, number, number, number] = [0.19, 1, 0.22, 1];

  const revealOnScroll = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 1, ease: easeOutExpo }
    },
    viewport: { once: true, margin: "-10%" }
  };

  const contentEN = {
    whyTitle: "We Don’t Operate Like a Traditional Agency.",
    whyTagline: "Structure over improvisation.",
    whyPillars: [
      { label: "Design", value: "Credibility" },
      { label: "Campaigns", value: "Revenue" },
      { label: "Positioning", value: "Authority" }
    ],
    whyText: "Most agencies separate branding, advertising, and SEO into isolated silos. We integrate them into a single, high-performance growth system.\n\nWhen every touchpoint is aligned, growth ceases to be an accident and becomes a predictable result of structure.",
    whoTitle: "Who We Work With",
    whoText: "We partner with businesses that are serious about growth.",
    whoSectors: ["Real Estate Developers", "Professional Services", "Hospitality Brands", "Healthcare & Clinics", "High-Ticket Businesses"],
    whoClosing: "We’re not built for everyone.\nWe’re built for brands ready to scale.",
    processTitle: "Structured. Strategic. Measurable.",
    processSteps: [
      { id: "01", title: "Strategic Diagnostic", desc: "We analyze your current position, goals, and opportunities." },
      { id: "02", title: "System Design", desc: "We define the right mix of branding, advertising, and positioning." },
      { id: "03", title: "Execution", desc: "We build and implement with precision." },
      { id: "04", title: "Optimization", desc: "We refine using real data and performance metrics." },
      { id: "05", title: "Scale", desc: "Once the system performs, we expand." }
    ],
    processClosing: "Clarity eliminates improvisation.\nStructure creates growth.",
    aboutText: "Motion Agency is a growth-focused digital agency built for businesses that value structure, clarity, and measurable performance.\n\nWe believe:\n\nProfessional design builds credibility.\nStructured campaigns build revenue.\nStrategic positioning builds authority.\n\nGrowth isn’t accidental.\nIt’s built.",
    ctaTitle: "Ready to Build With Structure?",
    ctaButton: "Start a Project"
  };

  const contentES = {
    whyTitle: "No operamos como una agencia tradicional.",
    whyTagline: "Estructura sobre improvisación.",
    whyPillars: [
      { label: "Diseño", value: "Credibilidad" },
      { label: "Campañas", value: "Ingresos" },
      { label: "Posicionamiento", value: "Autoridad" }
    ],
    whyText: "La mayoría de las agencias separan el branding, la publicidad y el SEO en silos aislados. Nosotros los integramos en un único sistema de crecimiento de alto rendimiento.\n\nCuando cada punto de contacto está alineado, el crecimiento deja de ser un accidente y se convierte en un resultado predecible de la estructura.",
    whoTitle: "Con quién trabajamos",
    whoText: "Nos asociamos con empresas que se toman en serio el crecimiento.",
    whoSectors: ["Desarrolladores Inmobiliarios", "Servicios Profesionales", "Marcas de Hospitalidad", "Salud y Clínicas", "Negocios de Alto Valor"],
    whoClosing: "No estamos hechos para todos.\nEstamos hechos para marcas listas para escalar.",
    processTitle: "Estructurado. Estratégico. Medible.",
    processSteps: [
      { id: "01", title: "Diagnóstico Estratégico", desc: "Analizamos su posición actual, metas y oportunidades." },
      { id: "02", title: "Diseño del Sistema", desc: "Definimos la mezcla adecuada de branding, publicidad y posicionamiento." },
      { id: "03", title: "Ejecución", desc: "Construimos e implementamos con precisión." },
      { id: "04", title: "Optimización", desc: "Refinamos utilizando datos reales y métricas de rendimiento." },
      { id: "05", title: "Escalabilidad", desc: "Una vez que el sistema rinde, nos expandimos." }
    ],
    processClosing: "La claridad elimina la improvisación.\nLa estructura crea crecimiento.",
    aboutText: "Motion Agency es una agencia digital enfocada en el crecimiento, construida para empresas que valoran la estructura, la claridad y el rendimiento medible.\n\nCreemos:\n\nEl diseño profesional genera credibilidad.\nLas campañas estructuradas generan ingresos.\nEl posicionamiento estratégico genera autoridad.\n\nEl crecimiento no es accidental.\nSe construye.",
    ctaTitle: "¿Listo para construir con estructura?",
    ctaButton: "Iniciar un Proyecto"
  };

  const c = language === 'en' ? contentEN : contentES;

  return (
    <div className="w-full">
      <SeoHead route="home" />
      {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
      <section ref={heroRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale brightness-50"
            >
                <source src={ASSETS.heroVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-neutral-950/70"></div>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-60 md:pt-20 flex flex-col justify-center md:justify-end h-full pb-20 md:pb-32">
            <div className="max-w-4xl">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeOutExpo }}
                    className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-neutral-500 uppercase mb-6 block"
                >
                    {t.hero.discreetH1}
                </motion.h1>
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: easeOutExpo }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[0.9] text-white mb-10 whitespace-pre-line"
                >
                    {t.hero.headline}
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: easeOutExpo }}
                    className="flex flex-col md:flex-row items-start md:items-end gap-10"
                >
                     <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed font-light">
                        {t.hero.subheadline}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact" className="group flex items-center justify-center gap-4 px-10 py-5 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300">
                            {c.ctaButton} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="flex items-center justify-center gap-4 px-10 py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
                            {language === 'en' ? 'View Services' : 'Ver Servicios'}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 2. SERVICES (EXPERTISE) SECTION */}
      <section className="py-32 bg-neutral-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div {...revealOnScroll} className="mb-20">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500 mb-4 block">Specialized growth</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white">{t.services.title}</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-900">
             <ServiceHoverCard 
                index={0}
                icon={PenTool}
                title={t.services.ai.brandName}
                desc={t.services.ai.description}
                bullets={t.services.ai.features}
                closing={language === 'en' ? "Professional design builds credibility." : "El diseño profesional genera credibilidad."}
             />
             <ServiceHoverCard 
                index={1}
                icon={BarChart3}
                title={t.services.ads.title}
                desc={t.services.ads.description}
                bullets={t.services.ads.features}
                closing={language === 'en' ? "Campaigns generate revenue." : "Las campañas generan ingresos."}
             />
             <ServiceHoverCard 
                index={2}
                icon={Search}
                title={t.services.seo.title}
                desc={t.services.seo.description}
                bullets={t.services.seo.features}
                closing={language === 'en' ? "Visibility builds authority." : "La visibilidad genera autoridad."}
             />
          </div>
        </div>
      </section>

      {/* 3. REDESIGNED WHY MOTION AGENCY SECTION (WHITE BACKGROUND) */}
      <section className="py-60 bg-white text-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                {/* Left Header Col */}
                <motion.div {...revealOnScroll} className="lg:col-span-5">
                    <span className="text-neutral-400 font-mono text-xs uppercase tracking-[0.4em] mb-8 block">
                        {c.whyTagline}
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black leading-[0.85] tracking-tight">
                        {c.whyTitle}
                    </h2>
                </motion.div>

                {/* Right Content Col */}
                <motion.div 
                    {...revealOnScroll}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center"
                >
                    <div className="space-y-12">
                        {/* Logic breakdown */}
                        <div className="grid grid-cols-1 gap-6 pb-12 border-b border-neutral-100">
                            {c.whyPillars.map((pillar, i) => (
                                <div key={i} className="flex items-baseline justify-between group">
                                    <span className="text-neutral-400 font-mono text-xs uppercase tracking-widest">{pillar.label}</span>
                                    <div className="flex-grow mx-4 border-b border-dotted border-neutral-200 group-hover:border-black transition-colors duration-500"></div>
                                    <span className="text-2xl font-serif italic text-black">{pillar.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Detailed Copy */}
                        <p className="text-xl md:text-2xl text-neutral-600 font-light leading-relaxed max-w-xl">
                            {c.whyText}
                        </p>

                        {/* Contact Link */}
                        <Link to="/contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-black group border-b border-black/10 pb-2 hover:border-black transition-all">
                             {language === 'en' ? 'Learn the logic' : 'Conoce la lógica'} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 4. WHO WE WORK WITH SECTION */}
      <section className="py-40 bg-neutral-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <motion.div {...revealOnScroll}>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-10">{c.whoTitle}</h2>
                    <p className="text-xl text-neutral-400 font-light mb-12">{c.whoText}</p>
                    <div className="space-y-4 mb-16">
                        {c.whoSectors.map((sector, idx) => (
                            <div key={idx} className="flex items-center gap-4 text-white text-lg font-serif italic border-b border-neutral-900 pb-4">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                {sector}
                            </div>
                        ))}
                    </div>
                    <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest whitespace-pre-line leading-loose">
                        {c.whoClosing}
                    </p>
                    <div className="mt-12">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-medium">
                            We operate from Cabo.
                        </span>
                    </div>
                </motion.div>
                <motion.div 
                    {...revealOnScroll}
                    className="relative aspect-square"
                >
                    <img 
                        src={ASSETS.whoWeWorkWith} 
                        alt="Aerial view of Cabo San Lucas coastline Baja California Sur where Motion Agency operates"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>
        </div>
      </section>

      {/* 5. OUR PROCESS SECTION */}
      <section className="py-40 bg-neutral-900 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.div {...revealOnScroll} className="text-center mb-24">
                <h2 className="text-4xl md:text-7xl font-serif text-white mb-6">{c.processTitle}</h2>
                <div className="h-px w-24 bg-white/20 mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-neutral-800">
                {c.processSteps.map((step, idx) => (
                    <motion.div 
                        key={idx}
                        {...revealOnScroll}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-neutral-950 p-10 h-full flex flex-col justify-between group hover:bg-white transition-all duration-500 ease-out-expo"
                    >
                        <div className="transition-all duration-500">
                            <span className="text-neutral-700 font-mono text-xs block mb-8 group-hover:text-neutral-400 transition-colors duration-500">
                                {step.id}
                            </span>
                            <h3 className="text-xl font-serif text-white mb-6 group-hover:text-black transition-colors duration-500">
                                {step.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-700 transition-colors duration-500">
                                {step.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div {...revealOnScroll} className="mt-20 text-center">
                <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-[0.4em] whitespace-pre-line leading-relaxed">
                    {c.processClosing}
                </p>
            </motion.div>
        </div>
      </section>

      {/* 6. ABOUT MOTION SECTION */}
      <section className="py-40 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div {...revealOnScroll}>
                <span className="text-neutral-700 font-mono text-xs uppercase tracking-widest block mb-8">Establishment</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-12">About Motion</h2>
                <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed whitespace-pre-line">
                    {c.aboutText}
                </p>
            </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-60 bg-white text-black relative border-t border-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div {...revealOnScroll}>
                <h2 className="text-5xl md:text-8xl font-serif leading-none mb-12">{c.ctaTitle}</h2>
                <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-6 px-16 py-6 bg-black text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
                >
                    {c.ctaButton} <ArrowRight size={18} />
                </Link>
            </motion.div>
        </div>
        
        {/* Subtle background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-neutral-100/50 -z-0 pointer-events-none whitespace-nowrap">
            Motion Agency
        </div>
      </section>
    </div>
  );
};

export default Home;
