import { useState, useCallback } from 'react';

const KEY = 'tracker2:xeno:ch1';

function loadChecked(): Record<string, 1> {
   try { return JSON.parse(localStorage.getItem(KEY + ':checked') || '{}'); }
   catch { return {}; }
}
function loadSettings() {
   try {
      const s = JSON.parse(localStorage.getItem(KEY + ':settings') || '{}');
      return { open: s.open || { story: true }, hideCompleted: !!s.hideCompleted };
   } catch { return { open: { story: true }, hideCompleted: false }; }
}

export function useChecklist() {
   const [checked, setChecked] = useState<Record<string, 1>>(loadChecked);
   const initial = loadSettings();
   const [open, setOpen] = useState<Record<string, boolean>>(initial.open);
   const [hideCompleted, setHideCompleted] = useState(initial.hideCompleted);

   const persistChecked = (next: Record<string, 1>) => {
      try { localStorage.setItem(KEY + ':checked', JSON.stringify(next)); } catch { /**/ }
   };
   const persistSettings = (o: Record<string, boolean>, h: boolean) => {
      try { localStorage.setItem(KEY + ':settings', JSON.stringify({ open: o, hideCompleted: h })); } catch { /**/ }
   };

   const toggle = useCallback((id: string) => {
      setChecked(prev => {
         const next = { ...prev };
         if (next[id]) delete next[id]; else next[id] = 1;
         persistChecked(next);
         return next;
      });
   }, []);

   const toggleOpen = useCallback((id: string) => {
      setOpen(prev => {
         const next = { ...prev, [id]: !prev[id] };
         persistSettings(next, hideCompleted);
         return next;
      });
   }, [hideCompleted]);

   const setAll = useCallback((ids: string[], value: boolean) => {
      setOpen(() => {
         const next: Record<string, boolean> = {};
         ids.forEach(id => { next[id] = value; });
         persistSettings(next, hideCompleted);
         return next;
      });
   }, [hideCompleted]);

   const toggleHide = useCallback(() => {
      setHideCompleted(prev => {
         const next = !prev;
         persistSettings(open, next);
         return next;
      });
   }, [open]);

   const reset = useCallback(() => {
      if (window.confirm('Réinitialiser toute la progression du Chapitre 1 ?')) {
         setChecked({});
         persistChecked({});
      }
   }, []);

   return { checked, open, hideCompleted, toggle, toggleOpen, setAll, toggleHide, reset };
}