import type { Profile } from '../types/cv';
import type { Translations } from '../i18n';

export const getFrontendProfile = (t: Translations): Profile => ({
  id: 'frontend',
  subtitle: t.header.subtitle,
  aboutMe: {
    paragraph1: t.aboutMe.paragraph1,
    paragraph2: t.aboutMe.paragraph2
  },
  skills: [
    {
      title: t.technicalExpertise.frontend.replace(':', ''),
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'MUI'],
      color: 'blue'
    },
    {
      title: t.technicalExpertise.state.replace(':', ''),
      items: ['Redux', 'React Query'],
      color: 'purple'
    },
    {
      title: t.technicalExpertise.tools.replace(':', ''),
      items: ['Webpack', 'Vite', 'Git', 'CI/CD'],
      color: 'green'
    },
    {
      title: t.technicalExpertise.testing.replace(':', ''),
      items: ['Cypress', 'Jest', 'Playwright'],
      color: 'amber'
    },
    {
      title: t.technicalExpertise.backend.replace(':', ''),
      items: ['PHP', 'Node.js', 'Laravel', 'Symfony'],
      color: 'slate'
    },
    {
      title: t.technicalExpertise.databases.replace(':', ''),
      items: ['MySQL', 'PostgreSQL', 'Redis'],
      color: 'red'
    }
  ],
  experienceHighlight: {
    title: t.workExperience.freelance.title,
    description: t.workExperience.freelance.description1
  }
});

export const getFullStackProfile = (t: Translations): Profile => {
  const isDe = t.lang === 'de';
  const isEs = t.lang === 'es';

  return {
    id: 'fullstack',
    subtitle: isDe 
      ? 'Senior Full Stack Engineer | PHP (Laravel/Symfony) & React Experte'
      : isEs
        ? 'Senior Full Stack Engineer | Experto en PHP (Laravel/Symfony) y React'
        : 'Senior Full Stack Engineer | PHP (Laravel/Symfony) & React Expert',
    aboutMe: {
      paragraph1: isDe 
        ? '<strong>Vielseitiger Senior Engineer</strong> mit über 20 Jahren Erfahrung, der robuste <strong>Backend-Architektur</strong> (PHP, MySQL, Laravel) mit moderner <strong>Frontend-Entwicklung</strong> (React, TypeScript) verbindet. Experte darin, die Brücke zwischen Legacy-Systemen und modernen SPAs zu schlagen. Fokus auf skalierbare Lösungen, Clean Code und DevOps-Praktiken.'
        : isEs
          ? '<strong>Ingeniero Senior versátil</strong> con más de 20 años de experiencia combinando una robusta <strong>arquitectura Backend</strong> (PHP, MySQL, Laravel) con <strong>implementaciones Frontend</strong> modernas (React, TypeScript). Experto en cerrar la brecha entre sistemas legacy y SPAs modernas. Enfocado en soluciones escalables, código limpio y prácticas DevOps.'
          : '<strong>Versatile Senior Engineer</strong> with 20+ years of experience combining robust <strong>Backend architecture</strong> (PHP, MySQL, Laravel) with modern <strong>Frontend implementations</strong> (React, TypeScript). Expert in bridging the gap between legacy systems and modern SPAs. Focused on scalable solutions, clean code, and DevOps practices.'
    },
    skills: [
      {
        title: t.technicalExpertise.backend.replace(':', ''),
        items: ['PHP', 'Laravel', 'Symfony', 'Node.js', 'MySQL', 'PostgreSQL'],
        color: 'slate'
      },
      {
        title: t.technicalExpertise.frontend.replace(':', ''),
        items: ['React', 'TypeScript', 'Tailwind', 'Next.js'],
        color: 'blue'
      },
      {
        title: isDe ? 'DevOps & Tools' : isEs ? 'DevOps y Herramientas' : 'DevOps & Tools',
        items: ['Docker', 'Git', 'CI/CD', 'AWS', 'Linux'],
        color: 'green'
      }
    ],
    experienceHighlight: {
      title: isDe 
        ? 'Lead Full Stack Developer & Architect (Freelance)' 
        : isEs 
          ? 'Desarrollador Full Stack Lead y Arquitecto (Freelance)'
          : 'Lead Full Stack Developer & Architect (Freelance)',
      description: isDe
        ? 'Architektur und Entwicklung von \'Travix\', einer modernen Full-Stack-Plattform. Aufbau einer robusten API mit Node/Supabase und eines reaktiven Frontends mit React. Verantwortlich für Datenbankschemata, Authentifizierungs-Flows und serverseitige Logik bei gleichzeitiger Sicherstellung einer hochperformanten UI.'
        : isEs
          ? 'Arquitecturando \'Travix\', una plataforma full-stack. Construcción de una API robusta con Node/Supabase y un frontend reactivo con React. Gestión de esquemas de bases de datos, flujos de autenticación y lógica del lado del servidor, garantizando una interfaz de usuario de alto rendimiento.'
          : 'Architecting \'Travix\', a full-stack platform. Built a robust API with Node/Supabase and a reactive frontend with React. Managing database schemas, authentication flows, and server-side logic while ensuring high-performance UI.'
    }
  };
};
