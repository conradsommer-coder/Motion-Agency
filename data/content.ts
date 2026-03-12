
import { Content } from '../types';

export const content: Record<'en' | 'es', Content> = {
  en: {
    nav: {
      services: "Expertise",
      about: "The Agency",
      contact: "Contact",
      cta: "Contact Us"
    },
    hero: {
      discreetH1: "Marketing Agency in Cabo San Lucas.",
      headline: "We Design Brands.\nWe Build Sales Systems.",
      subheadline: "Professional branding, digital advertising, and SEO positioning structured to help your business grow with clarity, credibility, and measurable performance.",
      cta: "Start a Project"
    },
    services: {
      title: "Expertise",
      intro: "We design brands, build sales systems, and position businesses for long-term growth.",
      ai: {
        brandName: "Brand & Sales Design",
        title: "Brand & Sales Design",
        description: "We design how your business looks, feels, and presents itself to the market.\n\nFrom your brand identity to your sales presentation and website, we build the visual and structural foundation that makes your business look professional — and ready to grow.",
        features: [
          "Brand Identity & Brand Manual",
          "Motion & Animation Design",
          "Corporate Sales Presentations",
          "Professionally Structured Websites",
          "Sales-Oriented Landing Pages"
        ],
        closingLine: "Professional design builds credibility."
      },
      seo: {
        title: "SEO, GEO & Google Ads Positioning",
        description: "If your business isn’t visible, it’s invisible.\n\nWe position your brand where high-intent clients are actively searching — through search engine optimization, geographic targeting, and strategic Google Ads campaigns.",
        features: [
          "Search Engine Optimization (SEO)",
          "GEO Targeting Strategy",
          "Google Search & Performance Ads",
          "Local Market Positioning",
          "Ongoing Optimization & Reporting"
        ],
        closingLine: "Visibility builds authority."
      },
      ads: {
        title: "Digital Advertising & Sales Funnels",
        description: "We build and manage sales-focused campaigns designed to generate qualified leads — not just traffic.\n\nFrom paid social advertising to fully structured sales funnels, we connect traffic with clear messaging and optimized landing pages.",
        features: [
          "Meta & Instagram Advertising",
          "Paid Traffic Strategy",
          "Funnel-Based Campaign Structure",
          "Landing Page Integration",
          "Conversion Tracking & Optimization"
        ],
        closingLine: "Campaigns generate revenue."
      },
      ecommerce: {
        title: "Digital Retail",
        description: "Comprehensive infrastructure for modern commerce. We optimize the entire user journey—from acquisition to retention—maximizing Average Order Value through frictionless design.",
        features: ["Scalable Architecture", "Checkout Optimization", "Retention Loops", "Paid Acquisition"]
      }
    },
    about: {
      title: "HELLO, WE ARE\nMOTION\nAND WE LOVE WHAT WE DO.",
      subheadline: "Love for our craft.",
      body: [
        "It’s what gets us up in the morning and keeps us focused long after the workday ends.",
        "We care about what we build — and about the people who trust us to build it.",
        "We are designers, strategists, and performance-driven thinkers. We believe details matter. We believe structure creates clarity. We believe growth should never be accidental.",
        "We build brands with intention. We build systems with discipline. We build partnerships for the long term.",
        "Because this isn’t just work. It’s what we do best."
      ],
      cta: "Let’s meet"
    },
    contact: {
      title: "Contact",
      subtitle: "We are selective with our partnerships. If you are ready to scale, let's talk.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        budget: "Investment Range",
        message: "Tell us about your project",
        submit: "Send Message"
      }
    },
    motionDesigns: {
      hero: {
        title: "Motion & Brand Systems",
        subtitle: "Design that Drives Performance",
        intro: "We bridge the gap between aesthetic excellence and conversion-focused design."
      },
      branding: {
        title: "Strategic Branding",
        subtitle: "Visual systems built for authority.",
        description: "Your brand is your most valuable asset. We design identities that command attention and communicate credibility from the first touchpoint.",
        idealFor: "Ideal for businesses looking to reposition or launch with high-end appeal.",
        features: ["Visual Identity", "Brand Guidelines", "Motion Graphics", "Interface Design"]
      },
      realEstate: {
        title: "Real Estate Formula",
        subtitle: "Optimized for conversion.",
        description: "We've developed a specialized design framework specifically for real estate developers and luxury properties.",
        seoText: "Search optimized architectural presentation.",
        cta: "View Strategy",
        features: ["Lead Capture Design", "Interactive Maps", "Unit Visualizers", "Project Brochures"]
      },
      download: {
        title: "Case Study & Resources",
        subtitle: "Download our latest guide on conversion-focused design.",
        cta: "Download Now",
        success: "Check your email for the link."
      }
    },
    // Adding blog localized content for English
    blog: {
      title: "Insights",
      subtitle: "Strategic thinking on branding, digital performance, and the future of sales systems."
    },
    footer: {
      rights: "Motion Agency. Est 2024.",
      location: "Mexico City / Cabo San Lucas"
    }
  },
  es: {
    nav: {
      services: "Expertise",
      about: "La Agencia",
      contact: "Contacto",
      cta: "Contáctanos"
    },
    hero: {
      discreetH1: "Agencia de Marketing en Cabo San Lucas.",
      headline: "Diseñamos Marcas.\nConstruimos Sistemas de Ventas.",
      subheadline: "Branding profesional, publicidad digital y posicionamiento SEO estructurado para ayudar a que su negocio crezca con claridad, credibilidad y rendimiento medible.",
      cta: "Iniciar Proyecto"
    },
    services: {
      title: "Expertise",
      intro: "Diseñamos marcas, construimos sistemas de ventas y posicionamos negocios para el crecimiento a largo plazo.",
      ai: {
        brandName: "Diseño de Marca y Ventas",
        title: "Diseño de Marca y Ventas",
        description: "Diseñamos cómo su negocio se ve, se siente y se presenta al mercado.\n\nDesde su identidad de marca hasta su presentación de ventas y su sitio web, construimos la base visual y estructural que hace que su negocio parezca profesional y esté listo para crecer.",
        features: [
          "Identidad de Marca y Manual de Marca",
          "Diseño de Motion & Animación",
          "Presentaciones de Ventas Corporativas",
          "Sitios Web Estructurados Profesionalmente",
          "Páginas de Destino Orientadas a Ventas"
        ],
        closingLine: "El diseño profesional genera credibilidad."
      },
      seo: {
        title: "Posicionamiento SEO, GEO y Google Ads",
        description: "Si su negocio no es visible, es invisible.\n\nPosicionamos su marca donde los clientes de alta intención están buscando activamente, a través de la optimización en motores de búsqueda, segmentación geográfica y campañas estratégicas de Google Ads.",
        features: [
          "Optimización de Motores de Búsqueda (SEO)",
          "Estrategia de Segmentación GEO",
          "Google Search y Performance Ads",
          "Posicionamiento en el Mercado Local",
          "Optimización e Informes Continuos"
        ],
        closingLine: "La visibilidad genera autoridad."
      },
      ads: {
        title: "Publicidad Digital y Embudos de Ventas",
        description: "Construimos y gestionamos campañas enfocadas en ventas diseñadas para generar leads calificados, no solo tráfico.\n\nDesde publicidad pagada en redes sociales hasta embudos de ventas completamente estructurados, conectamos el tráfico con mensajes claros y páginas de destino optimizadas.",
        features: [
          "Publicidad en Meta e Instagram",
          "Estrategia de Tráfico Pagado",
          "Estructura de Campaña Basada en Embudos",
          "Integración de Landing Pages",
          "Seguimiento y Optimización de Conversiones"
        ],
        closingLine: "Las campañas generan ingresos."
      },
      ecommerce: {
        title: "Retail Digital",
        description: "Infraestructura integral para el comercio moderno. Optimizamos todo el viaje del usuario, desde la adquisición hasta la retención, maximizando el valor por pedido.",
        features: ["Arquitectura Escalable", "Optimización de Checkout", "Ciclos de Retención", "Adquisición Pagada"]
      }
    },
    about: {
      title: "HOLA, SOMOS\nMOTION\nY AMAMOS LO QUE HACEMOS.",
      subheadline: "Amor por nuestro oficio.",
      body: [
        "Es lo que nos levanta por la mañana y nos mantiene enfocados mucho después de que termina la jornada laboral.",
        "Nos importa lo que construimos, y las personas que confían en nosotros para construirlo.",
        "Somos diseñadores, estrategas y pensadores impulsados por el rendimiento. Creemos que los detalles importan. Creemos que la estructura crea claridad. Creemos que el crecimiento nunca debe ser accidental.",
        "Construimos marcas con intención. Construimos sistemas con disciplina. Construimos asociaciones a largo plazo.",
        "Porque esto no es solo trabajo. Es lo que mejor sabemos hacer."
      ],
      cta: "Conozcámonos"
    },
    contact: {
      title: "Contacto",
      subtitle: "Somos selectivos con nuestras alianzas. Si está listo para escalar, hablemos.",
      form: {
        name: "Nombre",
        email: "Email",
        company: "Company",
        budget: "Investment Range",
        message: "Tell us about your project",
        submit: "Send Message"
      }
    },
    motionDesigns: {
      hero: {
        title: "Sistemas de Marca y Motion",
        subtitle: "Diseño que impulsa el rendimiento",
        intro: "Cerramos la brecha entre la excelencia estética y el diseño enfocado en la conversión."
      },
      branding: {
        title: "Branding Estratégico",
        subtitle: "Sistemas visuales construidos para la autoridad.",
        description: "Su marca es su activo más valioso. Diseñamos identidades que captan la atención y comunican credibilidad desde el primer punto de contacto.",
        idealFor: "Ideal para empresas que buscan reposicionarse o lanzarse con un atractivo de alta gama.",
        features: ["Identidad Visual", "Guías de Marca", "Gráficos en Movimiento", "Diseño de Interfaces"]
      },
      realEstate: {
        title: "Fórmula Inmobiliaria",
        subtitle: "Optimizado para la conversión.",
        description: "Hemos desarrollado un marco de diseño especializado específicamente para desarrolladores inmobiliarios y propiedades de lujo.",
        seoText: "Presentación arquitectónica optimizada para búsqueda.",
        cta: "Ver Estrategia",
        features: ["Diseño de Captura de Leads", "Mapas Interactivos", "Visualizadores de Unidades", "Folletos de Proyectos"]
      },
      download: {
        title: "Casos de Estudio y Recursos",
        subtitle: "Descargue nuestra última guía sobre diseño enfocado en la conversión.",
        cta: "Descargar Ahora",
        success: "Revise su correo electrónico para obtener el enlace."
      }
    },
    // Adding blog localized content for Spanish
    blog: {
      title: "Insights",
      subtitle: "Pensamiento estratégico sobre branding, rendimiento digital y el futuro de los sistemas de ventas."
    },
    footer: {
      rights: "Motion Agency. Est 2024.",
      location: "Ciudad de México / Cabo San Lucas"
    }
  }
};