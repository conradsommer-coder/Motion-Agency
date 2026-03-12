import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Search, TrendingUp, ArrowRight, PenTool, Layers, BarChart3, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const ServiceBlock = ({ 
    icon: Icon, 
    title, 
    description, 
    features, 
    closingLine
  }: { 
    icon: any, 
    title: string, 
    description: string, 
    features: string[], 
    closingLine?: string
  }) => (
    <div className="p-8 md:p-10 border border-neutral-900 bg-neutral-950 text-white hover:border-neutral-700 transition-all duration-500 flex flex-col h-full group">
      <div className="flex items-center gap-6 mb-8">
        <Icon size={28} strokeWidth={1} className="text-neutral-500 group-hover:text-white transition-colors" />
        <h3 className="text-xl md:text-2xl font-serif">{title}</h3>
      </div>
      <p className="leading-relaxed mb-8 text-neutral-400 text-sm whitespace-pre-line font-light">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <motion.li 
            key={idx} 
            whileHover={{ x: 5 }}
            className="flex items-start gap-3 cursor-default"
          >
            <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0 bg-neutral-700 group-hover:bg-white transition-colors"></span>
            <span className="text-xs tracking-wide text-neutral-400 group-hover:text-neutral-200 transition-colors">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {closingLine && (
        <div className="pt-6 border-t border-neutral-900">
            <p className="text-xs font-serif italic mb-6 text-neutral-400">
                {closingLine}
            </p>
            <Link to="/contact" className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-white hover:text-neutral-400 transition-colors">
                {language === 'en' ? 'Book a Consultation' : 'Solicitar una Consulta'} <ArrowRight size={12} className="ml-2" />
            </Link>
        </div>
      )}
    </div>
  );

  const servicesList = [
    {
        icon: PenTool,
        title: language === 'en' ? "Brand" : "Marca",
        description: language === 'en' ? "Strategic visual identity systems built for authority and long-term credibility." : "Sistemas de identidad visual estratégica construidos para la autoridad y la credibilidad a largo plazo.",
        features: language === 'en' ? ["Visual Identity", "Brand Manual", "Motion Graphics"] : ["Identidad Visual", "Manual de Marca", "Motion Graphics"],
        closingLine: language === 'en' ? "Design builds credibility." : "El diseño genera credibilidad."
    },
    {
        icon: TrendingUp,
        title: language === 'en' ? "Sales" : "Ventas",
        description: language === 'en' ? "High-performance sales systems and presentations designed to convert prospects into clients." : "Sistemas de ventas de alto rendimiento y presentaciones diseñadas para convertir prospectos en clientes.",
        features: language === 'en' ? ["Sales Presentations", "Lead Capture", "Conversion Logic"] : ["Presentaciones de Ventas", "Captura de Leads", "Lógica de Conversión"],
        closingLine: language === 'en' ? "Structure creates growth." : "La estructura crea crecimiento."
    },
    {
        icon: Layers,
        title: language === 'en' ? "Design" : "Diseño",
        description: language === 'en' ? "Premium digital design for websites and landing pages that prioritize user experience and conversion." : "Diseño digital premium para sitios web y landing pages que priorizan la experiencia del usuario y la conversión.",
        features: language === 'en' ? ["UI/UX Design", "Landing Pages", "Web Architecture"] : ["Diseño UI/UX", "Landing Pages", "Arquitectura Web"],
        closingLine: language === 'en' ? "Details matter." : "Los detalles importan."
    },
    {
        icon: BarChart3,
        title: language === 'en' ? "Digital Advertisement" : "Publicidad Digital",
        description: language === 'en' ? "Paid media strategies across Meta, Instagram, and Google focused on ROI and lead quality." : "Estrategias de medios pagados en Meta, Instagram y Google enfocadas en el ROI y la calidad de los leads.",
        features: language === 'en' ? ["Meta Ads", "Google Ads", "Paid Strategy"] : ["Meta Ads", "Google Ads", "Estrategia Pagada"],
        closingLine: language === 'en' ? "Campaigns generate revenue." : "Las campañas generan ingresos."
    },
    {
        icon: Search,
        title: language === 'en' ? "SEO & GEO (Google)" : "SEO y GEO (Google)",
        description: language === 'en' ? "Strategic positioning to ensure your business is visible exactly where your clients are searching." : "Posicionamiento estratégico para asegurar que su negocio sea visible exactamente donde sus clientes están buscando.",
        features: language === 'en' ? ["Organic Search", "GEO Targeting", "Local SEO"] : ["Búsqueda Orgánica", "Segmentación GEO", "SEO Local"],
        closingLine: language === 'en' ? "Visibility builds authority." : "La visibilidad genera autoridad."
    },
    {
        icon: Target,
        title: language === 'en' ? "Ads Position" : "Posicionamiento de Ads",
        description: language === 'en' ? "Advanced optimization of ad placements and performance to maximize market share and visibility." : "Optimización avanzada de la ubicación y el rendimiento de los anuncios para maximizar la cuota de mercado y la visibilidad.",
        features: language === 'en' ? ["Placement Optimization", "Performance Tracking", "Market Analysis"] : ["Optimización de Ubicación", "Seguimiento de Rendimiento", "Análisis de Mercado"],
        closingLine: language === 'en' ? "Precision is performance." : "La precisión es rendimiento."
    }
  ];

  return (
    <div className="w-full pt-40 pb-32 bg-black min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-4 block font-bold"
          >
            Marketing Services & Growth Systems
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif text-white mb-8"
          >
            {t.services.title}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-2xl text-neutral-400 max-w-2xl font-light"
          >
            {t.services.intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
            {servicesList.map((service, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    whileHover={{ 
                        y: -10, 
                        scale: 1.01,
                        transition: { duration: 0.4, ease: [0.19, 1, 0.22, 1] } 
                    }}
                    className="h-full"
                >
                    <ServiceBlock 
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        features={service.features}
                        closingLine={service.closingLine}
                    />
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;