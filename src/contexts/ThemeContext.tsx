import { useState, useEffect } from 'react';
import { ThemeContext, THEMES } from './theme';
import type { ThemeKey } from './theme';

const STORAGE_KEY = 'tracker2:xeno:theme';

function applyTheme(key: ThemeKey) {
   const t = THEMES[key];
   if (!t) return;
   Object.entries(t.vars).forEach(([prop, val]) =>
      document.body.style.setProperty(prop, val)
   );
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   const [themeKey, setThemeKey] = useState<ThemeKey>(() => {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeKey | null;
      return saved && THEMES[saved] ? saved : 'azur';
   });

   useEffect(() => {
      applyTheme(themeKey);
      localStorage.setItem(STORAGE_KEY, themeKey);
   }, [themeKey]);

   return (
      <ThemeContext.Provider value={{ themeKey, setTheme: setThemeKey }}>
         {children}
      </ThemeContext.Provider>
   );
}