import { chapter1Modules } from './chapter1';
import { chapter2Modules } from './chapter2';
import type { ModuleData } from '../types';

export interface ChapterInfo {
   id: number;
   title: string;
   subtitle: string;
   locked: boolean;
   modules: ModuleData[];
}

export const CHAPTERS_DATA: ChapterInfo[] = [
   {
      id: 1,
      title: 'Chapitre 1 — Le Réveil du Monado',
      subtitle: 'Colony 9 & Tephra Cave',
      locked: false,
      modules: chapter1Modules,
   },
   {
      id: 2,
      title: "Chapitre 2 — L'Invasion des Mechon",
      subtitle: 'Colony 9 (Revisité)',
      locked: false,
      modules: chapter2Modules,
   },
   { id: 3, title: 'Chapitre 3 — Tephra Cave (Revisité)', subtitle: 'À venir…', locked: true, modules: [] },
   { id: 4, title: "Chapitre 4 — La Jambe du Bionis", subtitle: 'À venir…', locked: true, modules: [] },
   { id: 5, title: "Chapitre 5 — La Mine d'Éther", subtitle: 'À venir…', locked: true, modules: [] },
];