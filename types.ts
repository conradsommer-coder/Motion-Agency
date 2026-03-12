
export type Language = 'en' | 'es';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string; // Cover image
  author?: string;
  layout: 'minimal' | 'magazine'; // Design style
  content: ContentBlock[]; // Dynamic content
  status: 'published' | 'draft';
}

export type ContentBlock = 
  | { type: 'text'; value: string }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'quote'; value: string; author?: string }
  | { type: 'heading'; value: string };

export interface ServiceDetail {
  title: string;
  description: string;
  features: string[];
  closingLine?: string;
}

export interface Content {
  nav: {
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    discreetH1: string;
    headline: string;
    subheadline: string;
    cta: string;
  };
  services: {
    title: string;
    intro: string;
    ai: ServiceDetail & { brandName: string };
    seo: ServiceDetail;
    ads: ServiceDetail;
    ecommerce: ServiceDetail;
  };
  about: {
    title: string;
    subheadline: string;
    body: string[];
    cta: string;
    philosophy?: string; 
    values?: { title: string; desc: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      budget: string;
      message: string;
      submit: string;
    };
  };
  // Adding motionDesigns property to the Content interface
  motionDesigns: {
    hero: {
      title: string;
      subtitle: string;
      intro: string;
    };
    branding: {
      title: string;
      subtitle: string;
      description: string;
      idealFor: string;
      features: string[];
    };
    realEstate: {
      title: string;
      subtitle: string;
      description: string;
      seoText: string;
      cta: string;
      features: string[];
    };
    download: {
      title: string;
      subtitle: string;
      cta: string;
      success: string;
    };
  };
  // Adding blog property for localized headers on the Blog index page
  blog: {
    title: string;
    subtitle: string;
  };
  footer: {
    rights: string;
    location: string;
  };
}