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
    nationality: 'Nationalität: Schweiz / Argentinien',
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
    native: 'Muttersprache',
    professional: 'Fliessend',
    b1: 'B1',
    b2: 'B2'
  },
  aboutMe: {
    paragraph1: '<strong>Senior Frontend Engineer & IT-Spezialist</strong> mit Leidenschaft für React, Next.js und Pixel-Perfect UI. Mit über 20 Jahren Erfahrung und fundierter Weiterbildung an HSR und OST (zwei CAS-Abschlüsse) verbinde ich moderne Webtechnologie mit der Umsetzungskraft eines erfahrenen Ingenieurs.',
    paragraph2: 'Mein Fokus liegt auf Clean Architecture, Performance und nachhaltigen Lösungen. Zürich ist seit über 20 Jahren mein Zuhause, und ich suche ein langfristiges Engagement, bei dem ich durch meine Erfahrung und Hands-on-Mentalität echten Mehrwert schaffen kann.',
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
      title: 'Lead Full Stack Developer (Freelance Projekt)',
      period: '12.2024 – heute',
      description1: 'Entwicklung moderner Fullstack-Projekte mit Astro, Tailwind, React, Laravel und Supabase. Fokus auf Architektur, Performance und skalierbare UI-Komponenten. Verantwortlich für Planung, technische Entscheidungen und End-to-End Umsetzung.',
      description2: 'Verantwortlich für Architektur, Planung, Umsetzung und kontinuierliche Verbesserung.',
      mainProject: 'Hauptprojekt: Travix (AI-gestützter Reiseplaner)',
      mainProjectItems: [
        'Architektur einer Hochleistungs-Single-Page-Application (SPA) mit React und Vite für eine optimierte Developer Experience und extrem schnelle Ladezeiten (High Lighthouse Score / Core Web Vitals).',
        'Entwicklung einer modularen Client-Side-Architektur mit React und Supabase, mit Fokus auf Komponenten-Wiederverwendbarkeit und skalierbares State-Management.',
        'Entwicklung des Daily Planners, Ausgabenmoduls und AI-gestützter Routenplanung',
        'Aufbau eines API-Layers, Auth-Flows und serverseitigen Sync-Mechanismen',
        'Umsetzung eines professionellen UI/UX-Designsystems für Mobile & Desktop'
      ]
    },
    skycell: {
      title: 'SkyCell AG / Zürich – Frontend Engineer',
      period: '12.2018 – 11.2024',
      items: [
        'Als einer der ersten Entwickler massgeblich am Aufbau der Core-Architektur beteiligt, die sich über 6 Jahre erfolgreich skalieren liess.',
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
  },
  application: {
    title: 'Bewerbungsschreiben',
    recipient: 'Empfänger',
    recipientPlaceholder: 'z.B. B3 Gruppe AG',
    address: 'Adresse',
    addressPlaceholder: 'z.B. Ilgenstrasse 7\nCH-9200 Gossau',
    subject: 'Betreff',
    subjectPlaceholder: 'z.B. Bewerbung als Software Developer',
    content: 'Inhalt',
    contentPlaceholder: 'Ihr Bewerbungstext hier...',
    print: 'Drucken',
    save: 'Speichern',
    saved: 'Gespeichert!'
  },
  drivingLicense: {
    pageTitle: 'Führerschein – Ricardo Vögeli',
    title: 'Führerschein'
  }
} as const;

