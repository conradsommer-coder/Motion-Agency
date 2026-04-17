'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full pt-40 pb-32 min-h-screen bg-neutral-950">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">{t.contact.title}</h1>
          <p className="text-xl text-neutral-500 font-light">{t.contact.subtitle}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
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
                <option value="" className="bg-neutral-950">Select Range</option>
                <option value="low" className="bg-neutral-950">$3,000 - $5,000 USD</option>
                <option value="medium" className="bg-neutral-950">$5,000 - $10,000 USD</option>
                <option value="high" className="bg-neutral-950">$10,000+ USD</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 group">
            <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">{t.contact.form.message}</label>
            <textarea
              required
              rows={1}
              className="w-full bg-transparent border-b border-neutral-800 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 resize-none overflow-hidden"
              onInput={(e) => {
                e.currentTarget.style.height = 'auto';
                e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
              }}
            ></textarea>
          </div>

          <div className="pt-12 text-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-4 px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors w-full md:w-auto"
            >
              {submitted ? 'Message Sent' : t.contact.form.submit}
              {!submitted && <Send size={14} />}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
