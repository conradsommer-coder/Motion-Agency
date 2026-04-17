'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Bot, Search, TrendingUp, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceBlock = ({
  icon: Icon,
  title,
  description,
  features,
  isPrimary = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
}) => (
  <div className={`p-10 md:p-14 border ${isPrimary ? 'border-neutral-800 bg-neutral-900 text-white' : 'border-neutral-900 bg-neutral-950 text-white'} hover:border-neutral-700 transition-all duration-500`}>
    <div className="flex items-center gap-6 mb-8">
      <Icon size={32} strokeWidth={1} className="text-white" />
      <h3 className="text-3xl font-serif">{title}</h3>
    </div>
    <p className={`leading-relaxed mb-10 text-lg ${isPrimary ? 'text-neutral-300' : 'text-neutral-400'}`}>{description}</p>
    <ul className="space-y-4">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-4">
          <span className={`w-1.5 h-1.5 rounded-full mt-2.5 ${isPrimary ? 'bg-white' : 'bg-neutral-600'}`}></span>
          <span className={`text-sm tracking-wide ${isPrimary ? 'text-neutral-300' : 'text-neutral-400'}`}>{feature}</span>
        </li>
      ))}
    </ul>
    {isPrimary && (
      <div className="mt-10 pt-8 border-t border-neutral-700">
        <Link href="/contact" className="inline-flex items-center text-sm font-bold uppercase tracking-wider hover:text-neutral-300 transition-colors">
          Book a Demo <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    )}
  </div>
);

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full pt-40 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif text-white mb-8"
          >
            {t.nav.services}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-neutral-400 max-w-2xl font-light"
          >
            {t.services.intro}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <ServiceBlock
              icon={Bot}
              title={t.services.ai.brandName}
              description={t.services.ai.description}
              features={t.services.ai.features}
              isPrimary={true}
            />
          </motion.div>

          {[
            { icon: Search, data: t.services.seo },
            { icon: TrendingUp, data: t.services.ads },
            { icon: ShoppingBag, data: t.services.ecommerce },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              className={idx === 2 ? 'lg:col-span-2' : ''}
            >
              <ServiceBlock
                icon={item.icon}
                title={item.data.title}
                description={item.data.description}
                features={item.data.features}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
