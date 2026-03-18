import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import SeoHead from '../components/SeoHead';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const headline = language === 'en' 
    ? "Strategic Growth Starts with a Conversation." 
    : "El Crecimiento Estratégico Comienza con una Conversación.";

  return (
    <div className="w-full pt-40 pb-32 min-h-screen bg-black">
      <SeoHead route="contact" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h1 className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-6 block font-bold">
                Contact Motion Agency
            </h1>
            <span className="text-xs font-bold tracking-[0.4em] text-neutral-500 uppercase mb-4 block">
                {language === 'en' ? 'Direct Access' : 'Acceso Directo'}
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight">
                {headline}
            </h2>
            <p className="text-xl text-neutral-400 font-light max-w-2xl mx-auto">
                {t.contact.subtitle}
            </p>
        </motion.div>

        {/* Calendly Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-32 bg-neutral-950/50 border border-neutral-900 rounded-sm overflow-hidden"
        >
            <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/motionagency/30-min-consultation" 
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
        </motion.div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-serif text-white mb-4">
                    {language === 'en' ? 'Prefer to write?' : '¿Prefieres escribir?'}
                </h2>
                <div className="h-px w-12 bg-neutral-800 mx-auto"></div>
            </motion.div>

            <motion.form 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                onSubmit={handleSubmit} 
                className="space-y-12"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4 group">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{t.contact.form.name}</label>
                        <input required type="text" className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-white transition-all duration-300" />
                    </div>
                    <div className="space-y-4 group">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{t.contact.form.email}</label>
                        <input required type="email" className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-white transition-all duration-300" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4 group">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{t.contact.form.company}</label>
                        <input type="text" className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-white transition-all duration-300" />
                    </div>
                    <div className="space-y-4 group">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{t.contact.form.budget}</label>
                        <select className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 appearance-none rounded-none">
                            <option value="">Select Range</option>
                            <option value="low">$3,000 - $5,000 USD</option>
                            <option value="medium">$5,000 - $10,000 USD</option>
                            <option value="high">$10,000+ USD</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4 group">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{t.contact.form.message}</label>
                    <textarea required rows={1} className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 resize-none overflow-hidden" onInput={(e) => { e.currentTarget.style.height = "auto"; e.currentTarget.style.height = e.currentTarget.scrollHeight + "px" }}></textarea>
                </div>

                <div className="pt-12 text-center">
                    <button 
                        type="submit" 
                        className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors w-full md:w-auto"
                    >
                        {submitted ? "Message Sent" : t.contact.form.submit}
                        {!submitted && <Send size={14} />}
                    </button>
                </div>
            </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
