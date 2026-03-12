import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-12">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tighter mb-3 font-serif text-white uppercase">MOTION AGENCY.</h3>
          <p className="text-neutral-400 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Marketing Agency in Cabo San Lucas, Baja California Sur</p>
          <p className="text-neutral-600 text-[9px] uppercase tracking-[0.3em]">Branding • Digital Advertising • SEO • Sales Systems</p>
        </div>

        <div className="flex justify-center">
            <a 
              href="https://www.instagram.com/motionagency/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-neutral-500 hover:text-white transition-colors transform hover:-translate-y-1 duration-300"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
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