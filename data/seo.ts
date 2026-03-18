import seoConfig from './seo.json';

export type SeoRouteKey = 'home' | 'services' | 'about' | 'contact' | 'motionDesigns';

export interface SeoEntry {
  path: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogType: 'website';
  twitterCard: 'summary' | 'summary_large_image';
}

interface SeoConfig {
  baseUrl: string;
  routes: Record<SeoRouteKey, SeoEntry>;
}

const typedSeoConfig = seoConfig as SeoConfig;

export const SEO_BASE_URL = typedSeoConfig.baseUrl;
export const seoByRoute = typedSeoConfig.routes;
