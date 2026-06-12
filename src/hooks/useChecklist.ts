import { useState, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

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

interface State {
   checked: Record<string, 1>;
   open: Record<string, boolean>;
   hideCompleted: boolean;
}

export function useChecklist(userId?: string) {
   const initial = loadSettings();
   const [state, setState] = useState<State>({
      checked: loadChecked(),
      open: initial.open,
      hideCompleted: initial.hideCompleted,
   });
   const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
   const [synced, setSynced] = useState(false);

   if (userId && !synced) {
      setSynced(true);
      supabase.from('progress').select('*').eq('user_id', userId).single()
         .then(({ data }) => {
            if (data) {
               setState({
                  checked: data.checked || {},
                  open: data.open_sections || { story: true },
                  hideCompleted: data.hide_completed || false,
               });
               localStorage.setItem(KEY + ':checked', JSON.stringify(data.checked || {}));
            }
         });
   }

   // ✅ saveToCloud en useCallback
   const saveToCloud = useCallback((next: State) => {
      if (!userId) return;
      clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
         supabase.from('progress').upsert({
            user_id: userId,
            checked: next.checked,
            open_sections: next.open,
            hide_completed: next.hideCompleted,
            updated_at: new Date().toISOString(),
         });
      }, 800);
   }, [userId]);

   // ✅ persist en useCallback — dépend de saveToCloud
   const persist = useCallback((next: State) => {
      localStorage.setItem(KEY + ':checked', JSON.stringify(next.checked));
      localStorage.setItem(KEY + ':settings', JSON.stringify({ open: next.open, hideCompleted: next.hideCompleted }));
      saveToCloud(next);
   }, [saveToCloud]);

   // ✅ Tous les callbacks dépendent de persist
   const toggle = useCallback((id: string) => {
      setState(prev => {
         const checked = { ...prev.checked };
         if (checked[id]) delete checked[id]; else checked[id] = 1;
         const next = { ...prev, checked };
         persist(next);
         return next;
      });
   }, [persist]);

   const toggleOpen = useCallback((id: string) => {
      setState(prev => {
         const next = { ...prev, open: { ...prev.open, [id]: !prev.open[id] } };
         persist(next);
         return next;
      });
   }, [persist]);

   const setAll = useCallback((ids: string[], value: boolean) => {
      setState(prev => {
         const open: Record<string, boolean> = {};
         ids.forEach(id => { open[id] = value; });
         const next = { ...prev, open };
         persist(next);
         return next;
      });
   }, [persist]);

   const toggleHide = useCallback(() => {
      setState(prev => {
         const next = { ...prev, hideCompleted: !prev.hideCompleted };
         persist(next);
         return next;
      });
   }, [persist]);

   // ✅ reset utilise setState updater (plus de dépendance sur `state`)
   const reset = useCallback(() => {
      if (window.confirm('Réinitialiser toute la progression du Chapitre 1 ?')) {
         setState(prev => {
            const next = { ...prev, checked: {} };
            persist(next);
            return next;
         });
      }
   }, [persist]);

   return { ...state, toggle, toggleOpen, setAll, toggleHide, reset };
}