import { Content } from '../types';

export const content: Record<'en' | 'es', Content> = {
  en: {
    nav: {
      services: "Expertise",
      motionDesigns: "Motion Designs",
      about: "The Agency",
      blog: "Insights",
      contact: "Partner",
      cta: "Partner With Us"
    },
    hero: {
      headline: "Intelligence. Aesthetics. Impact.",
      subheadline: "We are the intersection of algorithmic precision and creative vision. A strategic growth partner for brands that demand dominance in the US and Mexico markets.",
      cta: "Our Approach"
    },
    services: {
      title: "Our Expertise",
      intro: "We do not offer generic services. We engineer bespoke growth ecosystems.",
      ai: {
        brandName: "Synapse AI™",
        title: "Practical AI Automation",
        description: "Simple, effective intelligence. We deploy accessible AI agents for Real Estate, Healthcare, Hospitality, and Professional Services. Our systems handle the busy work—scheduling, qualifying, and answering FAQs—so you can focus on closing.",
        features: ["24/7 Client Reception", "Instant Lead Qualification", "WhatsApp Integration", "Simple Implementation"]
      },
      seo: {
        title: "Strategic Visibility",
        description: "Market leadership is invisible without search dominance. We position your brand exactly where your highest-value clients are looking. This is not just technical SEO; it is digital real estate and long-term authority.",
        features: ["Market Positioning", "High-Intent Keywords", "Bilingual Authority", "Search Dominance"]
      },
      ads: {
        title: "Revenue Campaigns",
        description: "We don't buy media; we buy results. Our campaigns are laser-focused on generating qualified sales opportunities. From Google to Meta, we design systems that turn ad spend into measurable revenue.",
        features: ["Sales-First Strategy", "High-Value Acquisition", "Precision Funnels", "ROI Focus"]
      },
      ecommerce: {
        title: "Digital Retail",
        description: "Comprehensive infrastructure for modern commerce. We optimize the entire user journey—from acquisition to retention—maximizing Average Order Value through frictionless design.",
        features: ["Scalable Architecture", "Checkout Optimization", "Retention Loops", "Paid Acquisition"]
      }
    },
    motionDesigns: {
      hero: {
        title: "Motion Designs",
        subtitle: "Creative & Branding Division",
        intro: "The design arm of Motion Agency. We merge high-end aesthetics with conversion psychology to build brands that don't just look premium—they perform."
      },
      branding: {
        title: "Branding & Digital Identity",
        subtitle: "Agency Services",
        description: "We build the strategic and visual foundation your business needs before scaling. From the core identity to the digital footprint, we ensure absolute clarity and coherence across every customer touchpoint.",
        features: ["Brand Strategy & Identity Systems", "Brand Manuals & Tone of Voice", "High-Conversion Web Design", "Corporate Sales Presentations"],
        idealFor: "Ideal for: Businesses, Brands, and Corporate Projects requiring a solid foundation."
      },
      realEstate: {
        title: "Real Estate Developers",
        subtitle: "The Pre-Sale Formula",
        description: "A proven, repeatable system engineered specifically for residential developments. We align design, messaging, and sales psychology to create a friction-free path from blueprint to sold unit.",
        features: ["Real Estate Development Branding", "Property Development Websites", "Mobile-First Sales Presentations", "Physical Sales Assets (Flags, Banners)"],
        seoText: "Specialized in Real Estate Development Branding, Residential Project Marketing, and Pre-sale Marketing Strategies.",
        cta: "Start Developer Project"
      },
      download: {
        title: "Download Exclusive Brochure",
        subtitle: "Access our private portfolio and rate card for 2024.",
        cta: "Unlock Access",
        success: "Thank you. The presentation has been sent to your email."
      }
    },
    about: {
      title: "The Philosophy",
      philosophy: "We are not a vendor. We are a catalyst. Motion Agency exists to bridge the gap between high-end aesthetics and rigorous technological performance. We believe that true growth requires the courage to innovate and the discipline to execute perfectly. We partner with the few, not the many.",
      values: [
        { title: "Precision", desc: "We measure everything. Data dictates direction." },
        { title: "Elegance", desc: "Functionality without form is a missed opportunity." },
        { title: "Vision", desc: "We build for where the market is going, not where it is." }
      ]
    },
    contact: {
      title: "Start the Conversation",
      subtitle: "We are selective with our partnerships. If you are ready to scale, let's talk.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        budget: "Investment Range",
        message: "Tell us about your project",
        submit: "Request Briefing"
      }
    },
    blog: {
      title: "Perspective",
      subtitle: "Analysis on the future of business and technology.",
      posts: [
        {
          id: '1',
          title: "The Algorithmic Shift: Redefining SEO in 2024",
          excerpt: "Search is no longer just about keywords. It is about semantic authority.",
          category: "Strategy",
          date: "Oct 12, 2023",
          image: "https://picsum.photos/seed/tech1/800/600?grayscale",
          layout: "minimal",
          content: [],
          status: "published"
        },
        {
          id: '2',
          title: "Synapse AI™: Case Study in Real Estate Automation",
          excerpt: "How we reduced lead response time by 99% for a luxury developer.",
          category: "Case Study",
          date: "Nov 05, 2023",
          image: "https://picsum.photos/seed/build/800/600?grayscale",
          layout: "minimal",
          content: [],
          status: "published"
        },
        {
          id: '3',
          title: "The ROI of Aesthetics in Performance Marketing",
          excerpt: "Why premium design converts better in high-ticket industries.",
          category: "Design",
          date: "Nov 28, 2023",
          image: "https://picsum.photos/seed/chart/800/600?grayscale",
          layout: "minimal",
          content: [],
          status: "published"
        }
      ]
    },
    footer: {
      rights: "Motion Agency. Est 2024.",
      location: "Mexico City / Cabo San Lucas"
    }
  },
  es: {
    nav: {
      services: "Experiencia",
      motionDesigns: "Motion Designs",
      about: "La Agencia",
      blog: "Perspectiva",
      contact: "Alianzas",
      cta: "Asociarse"
    },
    hero: {
      headline: "Inteligencia. Estética. Impacto.",
      subheadline: "Somos la intersección entre precisión algorítmica y visión creativa. Un socio estratégico para marcas que exigen dominio en los mercados de EE.UU. y México.",
      cta: "Nuestro Enfoque"
    },
    services: {
      title: "Nuestra Experiencia",
      intro: "No ofrecemos servicios genéricos. Diseñamos ecosistemas de crecimiento a medida.",
      ai: {
        brandName: "Synapse AI™",
        title: "Automatización Práctica",
        description: "Inteligencia simple y efectiva. Implementamos agentes de IA para Inmobiliarias, Salud, Hospitalidad y Servicios Profesionales. Nuestros sistemas manejan el trabajo operativo—agendar, calificar y responder dudas—para que tú te enfoques en cerrar.",
        features: ["Recepción de Clientes 24/7", "Calificación Instantánea", "Integración con WhatsApp", "Implementación Rápida"]
      },
      seo: {
        title: "Visibilidad Estratégica",
        description: "El liderazgo de mercado es invisible sin dominio de búsqueda. Posicionamos tu marca exactamente donde tus clientes de mayor valor están buscando. No es solo SEO técnico; es bienes raíces digitales y autoridad a largo plazo.",
        features: ["Posicionamiento de Mercado", "Búsqueda de Alta Intención", "Autoridad Bilingüe", "Dominio Digital"]
      },
      ads: {
        title: "Campañas de Revenue",
        description: "No compramos medios; compramos resultados. Nuestras campañas están enfocadas en generar oportunidades de venta calificadas. Desde Google hasta Meta, diseñamos sistemas que convierten la inversión en ingresos medibles.",
        features: ["Estrategia de Ventas", "Adquisición de Alto Valor", "Embudos de Precisión", "Enfoque en ROI"]
      },
      ecommerce: {
        title: "Retail Digital",
        description: "Infraestructura integral para el comercio moderno. Optimizamos todo el viaje del usuario, desde la adquisición hasta la retención, maximizando el valor por pedido.",
        features: ["Arquitectura Escalable", "Optimización de Checkout", "Ciclos de Retención", "Adquisición Pagada"]
      }
    },
    motionDesigns: {
      hero: {
        title: "Motion Designs",
        subtitle: "División Creativa y de Branding",
        intro: "El brazo de diseño de Motion Agency. Fusionamos estética de alta gama con psicología de conversión para construir marcas que no solo se ven bien, sino que venden."
      },
      branding: {
        title: "Branding e Identidad Digital",
        subtitle: "Servicios de Agencia",
        description: "Construimos la base estratégica y visual que tu negocio necesita antes de escalar. Desde la identidad central hasta la huella digital, aseguramos claridad y coherencia absoluta en cada punto de contacto con el cliente.",
        features: ["Estrategia de Marca y Sistemas de Identidad", "Manuales de Marca y Tono de Voz", "Diseño Web de Alta Conversión", "Presentaciones de Ventas Corporativas"],
        idealFor: "Ideal para: Empresas, Marcas y Proyectos Corporativos que requieren una base sólida."
      },
      realEstate: {
        title: "Desarrolladores Inmobiliarios",
        subtitle: "La Fórmula de Preventa",
        description: "Un sistema probado y repetible diseñado específicamente para desarrollos residenciales. Alineamos diseño, mensaje y psicología de ventas para crear un camino sin fricción desde el plano hasta la unidad vendida.",
        features: ["Branding para Desarrollo Inmobiliario", "Sitios Web de Proyectos Residenciales", "Presentaciones de Ventas Móviles", "Activos de Venta Físicos (Banners, Vallas)"],
        seoText: "Especializados en Branding Inmobiliario, Marketing para Desarrollos Residenciales y Estrategias de Preventa.",
        cta: "Iniciar Proyecto Inmobiliario"
      },
      download: {
        title: "Descargar Brochure Exclusivo",
        subtitle: "Accede a nuestro portafolio privado y tarifas 2024.",
        cta: "Solicitar Acceso",
        success: "Gracias. La presentación ha sido enviada a tu correo."
      }
    },
    about: {
      title: "La Filosofía",
      philosophy: "No somos proveedores. Somos catalizadores. Motion Agency existe para cerrar la brecha entre la estética de alta gama y el rendimiento tecnológico riguroso. Creemos que el verdadero crecimiento requiere el coraje de innovar y la disciplina de ejecutar perfectamente. Nos asociamos con pocos, no con muchos.",
      values: [
        { title: "Precisión", desc: "Medimos todo. Los datos dictan la dirección." },
        { title: "Elegancia", desc: "La funcionalidad sin forma es una oportunidad perdida." },
        { title: "Visión", desc: "Construimos para donde va el mercado, no donde está." }
      ]
    },
    contact: {
      title: "Iniciar Conversación",
      subtitle: "Somos selectivos con nuestras alianzas. Si está listo para escalar, hablemos.",
      form: {
        name: "Nombre",
        email: "Email",
        company: "Empresa",
        budget: "Rango de Inversión",
        message: "Cuéntanos sobre tu proyecto",
        submit: "Solicitar Briefing"
      }
    },
    blog: {
      title: "Perspectiva",
      subtitle: "Análisis sobre el futuro de los negocios y la tecnología.",
      posts: [
        {
          id: '1',
          title: "El Cambio Algorítmico: Redefiniendo el SEO en 2024",
          excerpt: "La búsqueda ya no es solo sobre palabras clave. Es sobre autoridad semántica.",
          category: "Estrategia",
          date: "12 Oct, 2023",
          image: "https://picsum.photos/seed/tech1/800/600?grayscale",
          layout: "minimal",
          content: [],
          status: "published"
        },
        {
          id: '2',
          title: "Synapse AI™: Estudio de Caso en Automatización Inmobiliaria",
          excerpt: "Cómo redujimos el tiempo de respuesta en un 99% para un desarrollador de lujo.",
          category: "Estudio de Caso",
          date: "05 Nov, 2023",
          image: "https://picsum.photos/seed/build/800/600?grayscale",
          layout: "minimal",
          content: [],
          status: "published"
        },
        {
          id: '3',
          title: "El ROI de la Estética en Marketing de Rendimiento",
          excerpt: "Por qué el diseño premium convierte mejor en industrias de alto valor.",
          category: "Diseño",
          date: "28 Nov, 2023",
          image: "https://picsum.photos/seed/chart/800/600?grayscale",
          layout: "minimal",
          content: [],
          status: "published"
        }
      ]
    },
    footer: {
      rights: "Motion Agency. Est 2024.",
      location: "Ciudad de México / Cabo San Lucas"
    }
  }
};