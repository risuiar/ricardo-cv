export const translations = {
  lang: 'es',
  meta: {
    title: 'Ricardo Vögeli – Senior Frontend Engineer',
    description: 'Senior Frontend Engineer con experiencia en Backend'
  },
  header: {
    title: 'Ricardo Vögeli',
    subtitle: 'Senior Frontend Engineer con experiencia en Backend',
    portraitAlt: 'Retrato de Ricardo Vögeli'
  },
  sections: {
    contact: 'Contacto',
    highlights: 'Puntos destacados',
    technicalExpertise: 'Experiencia técnica',
    languages: 'Idiomas',
    aboutMe: 'Sobre mí',
    shortProfile: 'Perfil corto',
    workExperience: 'Experiencia profesional',
    education: 'Formación'
  },
  contact: {
    get address() { return import.meta.env.PUBLIC_CONTACT_ADDRESS || ''; },
    get city() { return import.meta.env.PUBLIC_CONTACT_CITY || ''; },
    get email() { return import.meta.env.PUBLIC_CONTACT_EMAIL || ''; },
    get phone() { return import.meta.env.PUBLIC_CONTACT_PHONE || ''; },
    linkedin: 'LinkedIn',
    github: 'GitHub',
    website: 'ricardovoegeli.dev',
    get websiteUrl() { return import.meta.env.PUBLIC_CONTACT_WEBSITE || 'https://ricardovoegeli.dev'; },
    extendedCv: 'Versión CV Extendida',
    get extendedCvUrl() { return import.meta.env.PUBLIC_CV_LINK_EN || ''; }
  },
  highlights: [
    'React y TypeScript experto',
    'Optimización de rendimiento',
    'Enfoque en UI/UX',
    'Clean Code y arquitectura',
    'Trabajo ágil en equipo',
    'Diseño escalable de componentes',
    'Mentalidad fuerte para resolver problemas'
  ],
  technicalExpertise: {
    frontend: 'Frontend:',
    state: 'State Management:',
    tools: 'Herramientas:',
    testing: 'Testing:',
    backend: 'Backend:',
    databases: 'Bases de datos:'
  },
  languages: {
    german: 'Alemán',
    english: 'Inglés',
    spanish: 'Español',
    portuguese: 'Portugués',
    native: 'Nativo'
  },
  aboutMe: {
    paragraph1: 'Senior Frontend Engineer especializado en React, con más de 20 años de experiencia desarrollando aplicaciones web escalables. Me centro en rendimiento, arquitectura, calidad de código y diseño orientado al usuario. Tengo amplia experiencia trabajando de forma estrecha con equipos de Backend, UX, QA y Producto. Acostumbrado a entornos ágiles y a entregar funcionalidades end-to-end con impacto claro en el negocio.',
    paragraph2: 'Me caracterizo por una actitud positiva, confiable y enfocada en el trabajo en equipo. A menudo se me reconoce como un punto de unión y motivación dentro del equipo.'
  },
  shortProfile: {
    items: [
      'Comunicativo y orientado al trabajo en equipo',
      'Alta competencia social',
      'Orientado a objetivos y ambicioso',
      'Muy capaz de aprender y adaptarse rápidamente',
      'Reacciona rápido, piensa por adelantado y actúa con responsabilidad',
      'Confiable, resiliente y trabajador',
      'Enfoque práctico, aborda tareas de forma independiente',
      'Estilo de trabajo estructurado y minucioso',
      'Interés técnico y rápida adaptación a nuevos sistemas'
    ]
  },
  workExperience: {
    freelance: {
      title: 'Freelance / Proyectos personales',
      period: '12.2024 – presente',
      description1: 'Desarrollo de proyectos Fullstack modernos con Astro, Tailwind, React, Laravel y Supabase. Enfoque en arquitectura, rendimiento y componentes UI escalables. Responsable de la planificación, decisiones técnicas y la implementación completa de cada proyecto.',
      description2: 'Responsable de la arquitectura, planificación, desarrollo y mejora continua.',
      mainProject: 'Proyecto principal: Travix',
      mainProjectItems: [
        'Arquitectura (React + Supabase) para una app modular de planificación de viajes',
        'Desarrollo del Daily Planner, módulo de gastos y planificación de rutas asistida por IA',
        'Creación de un API-layer, flujos de autenticación y mecanismos de sincronización en servidor',
        'Implementación de un sistema de diseño profesional para móvil y escritorio'
      ]
    },
    skycell: {
      title: 'SkyCell AG / Zúrich – Senior Frontend Engineer',
      period: '12.2018 – 11.2024',
      items: [
        'Desarrollo de componentes React modulares → mejora del tiempo de carga en un 30%',
        'Introducción de TypeScript, linting y testing → releases más estables y menos bugs',
        'Optimización de la gestión de datos (React Query) → ~40% menos consumo de API',
        'Integración de APIs REST complejas y flujos de datos en tiempo real',
        'Responsable de code reviews, arquitectura y documentación técnica',
        'Trabajo cercano con equipos de Producto, UX y Backend para definir y entregar funcionalidades'
      ]
    },
    navyboot: {
      title: 'Navyboot AG / Zúrich – Frontend Developer',
      period: '05.2015 – 12.2018',
      items: [
        'Implementación y mantenimiento del e-commerce (Symfony/Bootstrap)',
        'Optimización de UI/UX y A/B testing → mejor conversión y menos rebotes',
        'Desarrollo de una herramienta de reporting para automatizar procesos',
        'Colaboración con equipos de Marketing, Producto y Diseño en nuevas funcionalidades y campañas'
      ]
    },
    olderExperience: {
      title: 'Experiencia anterior',
      epets: 'ePets AG:',
      epetsDesc: 'Desarrollo completo de un webshop (PHP, MySQL, jQuery)',
      car4you: 'car4you AG:',
      car4youDesc: 'Plataforma B2B/B2C, migración a ASP.NET, integraciones API',
      surfkitchen: 'Surfkitchen:',
      surfkitchenDesc: 'Portales de clientes y servicios SMS (ColdFusion, JS, SQL)'
    }
  },
  education: {
    casAdvanced: 'CAS Frontend Engineering Advanced',
    casAdvancedPeriod: ' – OST (2023–2024)',
    cas: 'CAS Frontend Engineering',
    casPeriod: ' – HSR (2015–2016)'
  }
} as const;

