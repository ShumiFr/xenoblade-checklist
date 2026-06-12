import { useState, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

const STORAGE_KEY = 'tracker2:xeno:progress';

interface ChapterProgress {
   checked: Record<string, 1>;
   open: Record<string, boolean>;
   hideCompleted: boolean;
}

type AllProgress = Record<string, ChapterProgress>;

function defaultProgress(): ChapterProgress {
   return { checked: {}, open: { story: true }, hideCompleted: false };
}

function loadAll(): AllProgress {
   try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
         const oldChecked = localStorage.getItem('tracker2:xeno:ch1:checked');
         const oldSettings = localStorage.getItem('tracker2:xeno:ch1:settings');
         if (oldChecked) {
            return {
               '1': {
                  checked: JSON.parse(oldChecked),
                  open: oldSettings ? JSON.parse(oldSettings).open || { story: true } : { story: true },
                  hideCompleted: oldSettings ? JSON.parse(oldSettings).hideCompleted || false : false,
               },
            };
         }
         return {};
      }
      const parsed = JSON.parse(raw);
      if (parsed.checked || parsed.open || parsed.hideCompleted) {
         return { '1': parsed as ChapterProgress };
      }
      return parsed as AllProgress;
   } catch { return {}; }
}

export function useChecklist(userId?: string, chapterId: number = 1) {
   const chKey = chapterId.toString();
   const [allProgress, setAllProgress] = useState<AllProgress>(loadAll);
   const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
   const [synced, setSynced] = useState(false);

   const current: ChapterProgress = allProgress[chKey] ?? defaultProgress();

   if (userId && !synced) {
      setSynced(true);
      supabase.from('progress').select('checked').eq('user_id', userId).maybeSingle()
         .then(({ data }) => {
            if (!data?.checked) return;
            const remote = data.checked as AllProgress;
            const isOldFormat = 'checked' in remote || 'open' in remote;
            const normalized: AllProgress = isOldFormat
               ? { '1': remote as unknown as ChapterProgress }
               : remote;
            setAllProgress(normalized);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
         });
   }

   const saveToCloud = useCallback((next: AllProgress) => {
      if (!userId) return;
      clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
         supabase.from('progress').upsert({
            user_id: userId,
            checked: next,
            updated_at: new Date().toISOString(),
         });
      }, 800);
   }, [userId]);

   const update = useCallback((updater: (prev: ChapterProgress) => ChapterProgress) => {
      setAllProgress(prev => {
         const ch = prev[chKey] ?? defaultProgress();
         const updated = updater(ch);
         const next = { ...prev, [chKey]: updated };
         localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
         saveToCloud(next);
         return next;
      });
   }, [chKey, saveToCloud]);

   const toggle = useCallback((id: string) => {
      update(ch => {
         const checked = { ...ch.checked };
         if (checked[id]) delete checked[id]; else checked[id] = 1;
         return { ...ch, checked };
      });
   }, [update]);

   const toggleOpen = useCallback((id: string) => {
      update(ch => ({ ...ch, open: { ...ch.open, [id]: !ch.open[id] } }));
   }, [update]);

   const setAll = useCallback((ids: string[], value: boolean) => {
      update(ch => {
         const open: Record<string, boolean> = {};
         ids.forEach(id => { open[id] = value; });
         return { ...ch, open };
      });
   }, [update]);

   const toggleHide = useCallback(() => {
      update(ch => ({ ...ch, hideCompleted: !ch.hideCompleted }));
   }, [update]);

   const reset = useCallback(() => {
      if (window.confirm(`Réinitialiser la progression du Chapitre ${chapterId} ?`)) {
         update(() => defaultProgress());
      }
   }, [update, chapterId]);

   return { ...current, toggle, toggleOpen, setAll, toggleHide, reset };
}