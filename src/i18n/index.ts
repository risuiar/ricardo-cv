import { translations as de } from './de';
import { translations as en } from './en';
import { translations as es } from './es';

export type Translations = typeof de;
export type Lang = 'de' | 'en' | 'es';

export const languages: { code: Lang; name: string; nativeName: string }[] = [
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' }
];

export const defaultLang: Lang = 'en';

export const translations: Record<Lang, Translations> = {
  de,
  en,
  es
};

export function getTranslations(lang: Lang = defaultLang): Translations {
  return translations[lang] || translations[defaultLang];
}

