export const translations = {
  lang: 'en',
  meta: {
    title: 'Ricardo Vögeli – Senior Frontend Engineer',
    description: 'Senior React Developer & IT Allrounder | Frontend & Application Support'
  },
  header: {
    title: 'Ricardo Vögeli',
    subtitle: 'Senior React Developer & IT Allrounder | Frontend & Application Support',
    portraitAlt: 'Portrait of Ricardo Vögeli'
  },
  sections: {
    contact: 'Contact',
    highlights: 'Highlights',
    technicalExpertise: 'Technical Skills',
    languages: 'Languages',
    aboutMe: 'About Me',
    shortProfile: 'Short Profile',
    workExperience: 'Professional Experience',
    education: 'Education'
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
    extendedCv: 'Extended CV Version',
    get extendedCvUrl() { return import.meta.env.PUBLIC_CV_LINK_EN || ''; }
  },
  highlights: [
    'React & TypeScript expert',
    'Performance optimization',
    'Strong UI/UX focus',
    'Clean Code & architecture',
    'Agile teamwork',
    'Scalable component design',
    'Strong problem-solving mindset'
  ],
  technicalExpertise: {
    frontend: 'Frontend:',
    state: 'State Management:',
    tools: 'Tools:',
    testing: 'Testing:',
    backend: 'Backend:',
    databases: 'Databases:'
  },
  languages: {
    german: 'German',
    english: 'English',
    spanish: 'Spanish',
    portuguese: 'Portuguese',
    native: 'Native'
  },
  aboutMe: {
    paragraph1: 'Senior Frontend Engineer focused on React, with more than 20 years of experience building scalable web applications. My work centers on performance, architecture, code quality and user-centric design. I have extensive experience collaborating closely with Backend, UX, QA and Product teams. Comfortable in agile environments and used to delivering end-to-end features with measurable business impact. Beyond coding, I bring a pragmatic \'hands-on\' mentality to troubleshooting and application support, ensuring long-term system stability.',
    paragraph2: 'Colleagues describe me as positive, reliable and team-oriented, often acting as a connecting and motivating force within the team.'
  },
  shortProfile: {
    items: [
      'Communicative and team-oriented',
      'Strong interpersonal skills',
      'Goal-driven and ambitious',
      'Fast learner with high adaptability',
      'Quick to react, thinks ahead and acts responsibly',
      'Reliable, resilient and hardworking',
      'Practical, hands-on mentality; takes initiative and works independently',
      'Structured and detail-oriented working style',
      'Technically curious, quick to learn new systems and tools'
    ]
  },
  workExperience: {
    freelance: {
      title: 'Lead Full Stack Developer',
      period: '12.2024 – Present',
      description1: 'Development of modern full-stack projects using Astro, Tailwind, React, Laravel and Supabase. Focus on architecture, performance and scalable UI components. Responsible for planning, technical decisions and full end-to-end implementation.',
      description2: 'Responsible for architecture, planning, development and continuous improvement.',
      mainProject: 'Main Project: Travix',
      mainProjectItems: [
        'Architecture (React + Supabase) for a modular travel-planner application',
        'Development of the Daily Planner, Expense Module and AI-powered route planning',
        'Implementation of an API layer, authentication flows and server-side sync mechanisms',
        'Creation of a professional UI/UX design system for mobile and desktop'
      ]
    },
    skycell: {
      title: 'SkyCell AG / Zurich – Frontend Engineer',
      period: '12.2018 – 11.2024',
      items: [
        'As one of the first developers, architected core React applications that remain in production today.',
        'Ensured code quality and team efficiency through code reviews, testing, and reusable component libraries.',
        'Drove technical evolution by leading refactoring initiatives and coordinating API design with the backend team.'
      ]
    },
    navyboot: {
      title: 'Navyboot AG / Zurich – Frontend Developer',
      period: '05.2015 – 12.2018',
      items: [
        'Implemented and maintained the e-commerce platform (Symfony/Bootstrap)',
        'UI/UX improvements and A/B testing → higher conversion and lower bounce rates',
        'Developed an automated reporting tool for internal processes',
        'Worked with Marketing, Product and Design teams on new features and campaigns'
      ]
    },
    olderExperience: {
      title: 'Earlier Experience',
      epets: 'ePets AG:',
      epetsDesc: 'Developed a full webshop (PHP, MySQL, jQuery)',
      car4you: 'car4you AG:',
      car4youDesc: 'B2B/B2C platform, migration to ASP.NET, API integrations',
      surfkitchen: 'Surfkitchen:',
      surfkitchenDesc: 'Customer portals & SMS services (ColdFusion, JS, SQL)'
    }
  },
  education: {
    casAdvanced: 'CAS Frontend Engineering Advanced',
    casAdvancedPeriod: ' – OST (2023–2024)',
    cas: 'CAS Frontend Engineering',
    casPeriod: ' – HSR (2015–2016)'
  }
} as const;

