import { Lock } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';

export interface Chapter {
   id: number;
   label: string;
   locked: boolean;
}

interface Props {
   chapters: Chapter[];
   activeId: number;
   onSelect: (id: number) => void;
}

export function ChapterTabs({ chapters, activeId, onSelect }: Props) {
   const { theme } = useTheme();

   return (
      <div className="flex items-center gap-2 mb-6 flex-wrap">
         {chapters.map(chapter => {
            const isActive = chapter.id === activeId;
            return (
               <button
                  key={chapter.id}
                  onClick={() => !chapter.locked && onSelect(chapter.id)}
                  disabled={chapter.locked}
                  className={`
              flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium
              transition-colors border
              ${isActive
                        ? `${theme.accent} ${theme.border} text-white`
                        : chapter.locked
                           ? 'bg-transparent border-slate-800 text-slate-600 cursor-not-allowed'
                           : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                     }
            `}
               >
                  {chapter.locked && <Lock size={11} className="shrink-0" />}
                  {chapter.label}
               </button>
            );
         })}
      </div>
   );
}