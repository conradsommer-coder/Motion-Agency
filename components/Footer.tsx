import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Linkedin, Instagram, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tighter mb-2 font-serif text-white">MOTION AGENCY.</h3>
          <p className="text-neutral-500 text-xs uppercase tracking-widest">{t.footer.location}</p>
        </div>

        <div className="flex space-x-8">
            <a href="#" className="text-neutral-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Linkedin size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-neutral-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="/contact" className="text-neutral-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"><Mail size={20} strokeWidth={1.5} /></a>
        </div>

        <div className="text-neutral-600 text-xs text-center md:text-right font-medium flex flex-col items-center md:items-end gap-2">
          <p>{t.footer.rights}</p>
          <Link to="/login" className="opacity-0 hover:opacity-20 transition-opacity">
            <Lock size={10} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;