import { useState } from 'react';
import { ThemeContext, THEMES } from './theme';
import type { ThemeKey } from './theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   const [themeKey, setThemeKey] = useState<ThemeKey>('blue');

   return (
      <ThemeContext.Provider value={{ themeKey, theme: THEMES[themeKey], setTheme: setThemeKey }}>
         {children}
      </ThemeContext.Provider>
   );
}