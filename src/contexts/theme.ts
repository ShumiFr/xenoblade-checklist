import { createContext } from 'react';

export type ThemeKey = 'blue' | 'green' | 'amber' | 'violet';

export interface ThemeColors {
   accent: string;
   circle: string;
   border: string;
   toggle: string;
   dot: string;
   bodyGradient: string; // CSS gradient complet
   sidebarBg: string;
   cardBg: string;
   cardBodyBg: string;
   cardBorder: string;
   itemHover: string;
}

export const THEMES: Record<ThemeKey, ThemeColors> = {
   blue: {
      accent: 'bg-blue-600', circle: 'text-blue-500', border: 'border-blue-600', toggle: 'bg-blue-600', dot: 'bg-blue-500',
      bodyGradient: 'radial-gradient(ellipse at top, #0d1b2e 0%, #020817 55%)',
      sidebarBg: '#080f1e',
      cardBg: '#0d1628',
      cardBodyBg: '#08101e',
      cardBorder: '#1a2845',
      itemHover: '#0f1c35',
   },
   green: {
      accent: 'bg-green-600', circle: 'text-green-500', border: 'border-green-600', toggle: 'bg-green-600', dot: 'bg-green-500',
      bodyGradient: 'radial-gradient(ellipse at top, #071d0f 0%, #020d06 55%)',
      sidebarBg: '#051508',
      cardBg: '#091a0e',
      cardBodyBg: '#051009',
      cardBorder: '#14301a',
      itemHover: '#0c1f10',
   },
   amber: {
      accent: 'bg-amber-600', circle: 'text-amber-500', border: 'border-amber-600', toggle: 'bg-amber-600', dot: 'bg-amber-500',
      bodyGradient: 'radial-gradient(ellipse at top, #1f1304 0%, #0a0602 55%)',
      sidebarBg: '#120d04',
      cardBg: '#1c1306',
      cardBodyBg: '#100b03',
      cardBorder: '#2e1e08',
      itemHover: '#201508',
   },
   violet: {
      accent: 'bg-violet-600', circle: 'text-violet-500', border: 'border-violet-600', toggle: 'bg-violet-600', dot: 'bg-violet-500',
      bodyGradient: 'radial-gradient(ellipse at top, #12073a 0%, #050212 55%)',
      sidebarBg: '#0a0520',
      cardBg: '#110830',
      cardBodyBg: '#09051e',
      cardBorder: '#231055',
      itemHover: '#140a38',
   },
};

export interface ThemeContextValue {
   themeKey: ThemeKey;
   theme: ThemeColors;
   setTheme: (key: ThemeKey) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);