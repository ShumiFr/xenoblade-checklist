import { useState } from 'react';

const STORAGE_KEY = 'xc-de-checklist-v1';

export function useChecklist() {
   const [checked, setChecked] = useState<Set<string>>(() => {
      // Initialisation lazy : on lit le localStorage une seule fois
      try {
         const saved = localStorage.getItem(STORAGE_KEY);
         return new Set<string>(saved ? JSON.parse(saved) : []);
      } catch {
         return new Set<string>();
      }
   });

   const toggle = (id: string) => {
      setChecked(prev => {
         const next = new Set(prev);
         if (next.has(id)) {
            next.delete(id);
         } else {
            next.add(id);
         }
         // On persiste immédiatement à chaque toggle
         localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
         return next;
      });
   };

   const reset = () => {
      setChecked(new Set());
      localStorage.removeItem(STORAGE_KEY);
   };

   return { checked, toggle, reset };
}