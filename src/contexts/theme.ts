import { createContext } from 'react';

export type ThemeKey = 'azur' | 'emeraude' | 'ambre' | 'amethyste';

export interface ThemeDef {
   name: string;
   dot: string;
   vars: Record<string, string>;
}

export const THEMES: Record<ThemeKey, ThemeDef> = {
   azur: {
      name: 'Azur', dot: '#5b8def',
      vars: {
         '--accent': '#5b8def', '--accent-2': '#3f72e0',
         '--accent-soft': 'rgba(91,141,239,0.12)', '--accent-line': 'rgba(91,141,239,0.32)',
         '--on-accent': '#08101f', '--bg': '#0a0c11', '--panel': '#0f1218',
         '--panel-2': '#13171f', '--panel-hi': '#181d27',
         '--border': 'rgba(255,255,255,0.06)', '--border-2': 'rgba(255,255,255,0.09)',
         '--text': '#e9ecf2', '--text-2': '#b6bdca', '--dim': '#79808f', '--faint': '#535a68',
         '--row-hover': 'rgba(255,255,255,0.025)',
      },
   },
   emeraude: {
      name: 'Émeraude', dot: '#36c79b',
      vars: {
         '--accent': '#36c79b', '--accent-2': '#1faa82',
         '--accent-soft': 'rgba(54,199,155,0.12)', '--accent-line': 'rgba(54,199,155,0.32)',
         '--on-accent': '#04130d', '--bg': '#080b0a', '--panel': '#0d1311',
         '--panel-2': '#111a16', '--panel-hi': '#15201b',
         '--border': 'rgba(255,255,255,0.06)', '--border-2': 'rgba(255,255,255,0.09)',
         '--text': '#e7efeb', '--text-2': '#b1c0ba', '--dim': '#76867f', '--faint': '#4f5e58',
         '--row-hover': 'rgba(255,255,255,0.025)',
      },
   },
   ambre: {
      name: 'Ambre', dot: '#e0a44a',
      vars: {
         '--accent': '#e0a44a', '--accent-2': '#c9872c',
         '--accent-soft': 'rgba(224,164,74,0.13)', '--accent-line': 'rgba(224,164,74,0.32)',
         '--on-accent': '#160f04', '--bg': '#0c0a07', '--panel': '#13110c',
         '--panel-2': '#1a1610', '--panel-hi': '#211b12',
         '--border': 'rgba(255,255,255,0.065)', '--border-2': 'rgba(255,255,255,0.1)',
         '--text': '#efe9df', '--text-2': '#c4baa9', '--dim': '#8a8073', '--faint': '#5e5648',
         '--row-hover': 'rgba(255,255,255,0.028)',
      },
   },
   amethyste: {
      name: 'Améthyste', dot: '#9a86ff',
      vars: {
         '--accent': '#9a86ff', '--accent-2': '#7c63f0',
         '--accent-soft': 'rgba(154,134,255,0.13)', '--accent-line': 'rgba(154,134,255,0.34)',
         '--on-accent': '#0d0820', '--bg': '#0a090f', '--panel': '#100f17',
         '--panel-2': '#15131f', '--panel-hi': '#1b1826',
         '--border': 'rgba(255,255,255,0.06)', '--border-2': 'rgba(255,255,255,0.09)',
         '--text': '#eae8f3', '--text-2': '#bbb6cd', '--dim': '#7d7991', '--faint': '#565267',
         '--row-hover': 'rgba(255,255,255,0.025)',
      },
   },
};

export interface ThemeContextValue {
   themeKey: ThemeKey;
   setTheme: (key: ThemeKey) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);