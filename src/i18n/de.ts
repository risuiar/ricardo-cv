export const translations = {
  lang: 'de',
  meta: {
    title: 'Ricardo Vögeli – Senior Frontend Engineer',
    description: 'Senior React Developer & IT Allrounder | Frontend & Application Support'
  },
  header: {
    title: 'Ricardo Vögeli',
    subtitle: 'Senior React Entwickler & IT Allrounder | Frontend & Application Support',
    portraitAlt: 'Portrait von Ricardo Vögeli'
  },
  sections: {
    contact: 'Kontakt',
    highlights: 'Highlights',
    technicalExpertise: 'Technische Expertise',
    languages: 'Sprachen',
    aboutMe: 'Über mich',
    shortProfile: 'Kurzprofil',
    workExperience: 'Berufserfahrung',
    education: 'Ausbildung'
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
    extendedCv: 'Erweiterte CV-Version',
    get extendedCvUrl() { return import.meta.env.PUBLIC_CV_LINK_DE || ''; }
  },
  highlights: [
    'React & TypeScript Experte',
    'Performance-Optimierung',
    'UI/UX-Fokus',
    'Sauberer, wartbarer Code & klare Architektur',
    'Agile Zusammenarbeit',
    'Skalierbares Komponenten-Design',
    'Ausgeprägte Lösungsorientierung'
  ],
  technicalExpertise: {
    frontend: 'Frontend:',
    state: 'State:',
    tools: 'Tools:',
    testing: 'Testing:',
    backend: 'Backend:',
    databases: 'Datenbanken:'
  },
  languages: {
    german: 'Deutsch',
    english: 'Englisch',
    spanish: 'Spanisch',
    portuguese: 'Portugiesisch',
    native: 'Muttersprache'
  },
  aboutMe: {
    // paragraph1: 'Senior Frontend Engineer mit Schwerpunkt React und über 20 Jahren Erfahrung in der Entwicklung skalierbarer Webanwendungen. Fokus auf Performance, Architektur, Code-Qualität und nutzerzentriertem Design. Erfahrung in der engen Zusammenarbeit mit Backend-, UX-, QA- und Produktteams. Routiniert in agilen Umgebungen und in der Umsetzung von End-to-End-Features mit messbarem Geschäftsnutzen.',
    // paragraph2: 'Ich bringe eine positive, verlässliche und teamorientierte Arbeitsweise mit, und werde oft als verbindende und motivierende Kraft im Team wahrgenommen.',
    // paragraph3: 'Ich bringe eine zuverlässige, lösungsorientierte Arbeitsweise mit und suche ein Umfeld, in dem ich sowohl technisch als auch menschlich echten Mehrwert schaffen kann.'
    paragraph1: 'Senior Frontend Engineer mit über 20 Jahren Erfahrung und einer Leidenschaft für Pixel-Perfect UI und erstklassige User Experience (UX). Experte in React und modernen Web-Technologien, mit einem starken Fokus auf Performance und die Brücke zwischen Design und Engineering. Erfahrung in der Entwicklung skalierbarer Architekturen bei Premium-Marken wie Navyboot und SkyCell. Aktuell vertiefe ich meine Expertise in Next.js und Server-Side-Rendering durch komplexe persönliche Projekte. Neben der Entwicklung bringe ich eine pragmatische \'Hands-on\'-Mentalität für Troubleshooting und Application Support mit, um langfristige Systemstabilität zu gewährleisten.',
  },
  shortProfile: {
    items: [
      'Kommunikativ und teamorientiert',
      'Hohe soziale Kompetenz',
      'Zielorientiert und ehrgeizig',
      'Sehr lernfähig und aufnahmestark',
      'Reaktionsschnell, denkt mit und handelt verantwortungsbewusst',
      'Zuverlässig, belastbar und fleissig',
      'Praktische „Macher"-Mentalität, packt Aufgaben selbstständig an',
      'Strukturierte und gewissenhafte Arbeitsweise',
      'Technisch interessiert, schnelle Einarbeitung in neue Systeme'
    ]
  },
  workExperience: {
    freelance: {
      title: 'Lead Full Stack Developer',
      period: '12.2024 – heute',
      description1: 'Entwicklung moderner Fullstack-Projekte mit Astro, Tailwind, React, Laravel und Supabase. Fokus auf Architektur, Performance und skalierbare UI-Komponenten. Verantwortlich für Planung, technische Entscheidungen und End-to-End Umsetzung.',
      description2: 'Verantwortlich für Architektur, Planung, Umsetzung und kontinuierliche Verbesserung.',
      mainProject: 'Hauptprojekt: Travix (AI-gestützter Reiseplaner)',
      mainProjectItems: [
        'Architektur (React + Supabase) für eine modulare Travel-Planer-App',
        'Entwicklung des Daily Planners, Ausgabenmoduls und AI-gestützter Routenplanung',
        'Aufbau eines API-Layers, Auth-Flows und serverseitigen Sync-Mechanismen',
        'Umsetzung eines professionellen UI/UX-Designsystems für Mobile & Desktop'
      ]
    },
    skycell: {
      title: 'SkyCell AG / Zürich – Frontend Engineer',
      period: '12.2018 – 11.2024',
      items: [
        'Als einer der ersten Entwickler massgeblich am Aufbau kritischer React-Applikationen beteiligt, die heute noch genutzt werden.',
        'Sicherte Code-Qualität und Team-Effizienz durch Code Reviews, Testing und wiederverwendbare Komponenten.',
        'Trieb die technische Weiterentwicklung durch Refactoring und enge API-Abstimmung mit dem Backend voran.'
      ]
    },
    navyboot: {
      title: 'Navyboot AG / Zürich – Frontend Entwickler',
      period: '05.2015 – 12.2018',
      items: [
        'Umsetzung & Wartung des E-Commerce Webshops (Symfony/Bootstrap)',
        'UI-/UX-Optimierungen & A/B-Tests → bessere Conversion & niedrigere Absprungraten',
        'Entwicklung eines Reporting-Tools zur Automatisierung von Prozessen',
        'Zusammenarbeit mit Marketing-, Produkt- und Designteams für neue Features & Kampagnen'
      ]
    },
    olderExperience: {
      title: 'Ältere Berufserfahrung',
      epets: 'ePets AG:',
      epetsDesc: 'Entwicklung eines kompletten Webshops (PHP, MySQL, jQuery)',
      car4you: 'car4you AG:',
      car4youDesc: 'B2B/B2C-Plattform, Migration auf ASP.NET, API-Integrationen',
      surfkitchen: 'Surfkitchen:',
      surfkitchenDesc: 'Kundenportale & SMS-Services (ColdFusion, JS, SQL)'
    }
  },
  education: {
    casAdvanced: 'CAS Frontend Engineering Advanced',
    casAdvancedPeriod: ' – OST (2023–2024)',
    cas: 'CAS Frontend Engineering',
    casPeriod: ' – HSR (2015–2016)'
  }
} as const;

