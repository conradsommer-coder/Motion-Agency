export type Language = 'en' | 'es';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author?: string;
  layout: 'minimal' | 'magazine';
  content: ContentBlock[];
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
}

export interface MotionSubSection {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface Content {
  nav: {
    services: string;
    motionDesigns: string;
    about: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
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
  motionDesigns: {
    hero: {
      title: string;
      subtitle: string;
      intro: string;
    };
    branding: MotionSubSection & { idealFor: string };
    realEstate: MotionSubSection & { seoText: string; cta: string };
    download: {
      title: string;
      subtitle: string;
      cta: string;
      success: string;
    };
  };
  about: {
    title: string;
    philosophy: string;
    values: { title: string; desc: string }[];
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
  blog: {
    title: string;
    subtitle: string;
    posts: BlogPost[];
  };
  footer: {
    rights: string;
    location: string;
  };
}
