export interface SkillCategory {
  title: string;
  items: string[];
  color: 'blue' | 'purple' | 'green' | 'amber' | 'slate' | 'red';
}

export interface Profile {
  id: 'frontend' | 'fullstack';
  subtitle: string;
  aboutMe: {
    paragraph1: string;
    paragraph2?: string;
  };
  skills: SkillCategory[];
  experienceHighlight: {
    title: string;
    description: string;
  };
}
