export const translations = {
  lang: 'es',
  meta: {
    title: 'Ricardo Vögeli – Senior Frontend Engineer',
    description: 'Desarrollador Senior React & IT Generalista | Frontend & Soporte de Aplicaciones'
  },
  header: {
    title: 'Ricardo Vögeli',
    subtitle: 'Desarrollador Senior React & IT Generalista | Frontend & Soporte de Aplicaciones',
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
    nationality: 'Nacionalidad: Suiza / Argentina',
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
    native: 'Nativo',
    professional: 'Fluido',
    b1: 'B1',
    b2: 'B2'
  },
  aboutMe: {
    paragraph1: '<strong>Senior Frontend Engineer & Especialista en IT</strong> Desarrollador apasionado con enfoque en React, Next.js y Pixel-Perfect UI. Con más de 20 años de experiencia y una sólida formación continua en HSR y OST (dos títulos CAS), combino la tecnología web moderna con la capacidad pragmática de resolución de problemas de un especialista en IT.',
    paragraph2: 'Priorizo la arquitectura limpia, el rendimiento y las soluciones sostenibles. Zúrich ha sido mi hogar durante más de 20 años y busco un compromiso a largo plazo donde pueda aportar valor con mi experiencia y mentalidad práctica.'
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
      title: 'Desarrollador Full Stack Lead (Proyecto Freelance)',
      period: '12.2024 – presente',
      description1: 'Desarrollo de proyectos Fullstack modernos con Next.js, Astro, Tailwind, React, Laravel y Supabase. Enfoque en arquitectura, rendimiento y componentes UI escalables. Responsable de la planificación, decisiones técnicas y la implementación completa de cada proyecto.',
      description2: 'Responsable de la arquitectura, planificación, desarrollo y mejora continua.',
      mainProject: 'Proyecto principal: Travix',
      mainProjectItems: [
        'Arquitectura de una nueva aplicación web escalable utilizando Next.js 14 (App Router) para mejorar el SEO y el rendimiento',
        'Arquitectura (React + Supabase) para una app modular de planificación de viajes',
        'Desarrollo del Daily Planner, módulo de gastos y planificación de rutas asistida por IA',
        'Creación de un API-layer, flujos de autenticación y mecanismos de sincronización en servidor',
        'Implementación de un sistema de diseño profesional para móvil y escritorio'
      ]
    },
    skycell: {
      title: 'SkyCell AG / Zúrich – Frontend Engineer',
      period: '12.2018 – 11.2024',
      items: [
        'Como uno de los primeros desarrolladores, arquitecté aplicaciones React críticas que siguen en producción hoy.',
        'Aseguré la calidad del código mediante code reviews, testing y bibliotecas de componentes reutilizables.',
        'Impulsé la evolución técnica liderando refactorizaciones y coordinando el diseño de APIs con el backend.'
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
  },
  application: {
    title: 'Carta de Aplicación',
    recipient: 'Destinatario',
    recipientPlaceholder: 'ej. B3 Gruppe AG',
    address: 'Dirección',
    addressPlaceholder: 'ej. Ilgenstrasse 7\nCH-9200 Gossau',
    subject: 'Asunto',
    subjectPlaceholder: 'ej. Aplicación como Software Developer',
    content: 'Contenido',
    contentPlaceholder: 'Su texto de aplicación aquí...',
    print: 'Imprimir',
    save: 'Guardar',
    saved: '¡Guardado!'
  },
  drivingLicense: {
    pageTitle: 'Licencia de Conducir – Ricardo Vögeli',
    title: 'Licencia de Conducir'
  }
} as const;

