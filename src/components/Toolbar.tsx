import { Search, ChevronsDown, ChevronsUp } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';

interface Props {
   searchQuery: string;
   onSearchChange: (q: string) => void;
   hideCompleted: boolean;
   onToggleHideCompleted: () => void;
   onExpandAll: () => void;
   onCollapseAll: () => void;
}

export function Toolbar({
   searchQuery,
   onSearchChange,
   hideCompleted,
   onToggleHideCompleted,
   onExpandAll,
   onCollapseAll,
}: Props) {
   const { theme } = useTheme();
   return (
      <div className="flex items-center gap-3 mb-6 flex-wrap">


         {/* Barre de recherche */}
         <div className="relative flex-1 min-w-48">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            <input
               type="text"
               placeholder="Rechercher une tâche, un PNJ..."
               value={searchQuery}
               onChange={e => onSearchChange(e.target.value)}
               className="w-full bg-slate-800/60 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-300 placeholder-slate-500 focus:outline-none focus:border-slate-500 transition-colors"
            />
         </div>

         {/* Toggle masquer terminées */}
         <button
            onClick={onToggleHideCompleted}
            className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors shrink-0"
         >
            <span className={`relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 shrink-0 ${hideCompleted ? theme.toggle : 'bg-slate-700'}`} >
               <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 shadow-sm ${hideCompleted ? 'translate-x-5' : 'translate-x-0'}`} />
            </span>
            Masquer les terminées
         </button>

         {/* Expand / Collapse all */}
         <div className="flex items-center gap-1.5 shrink-0">
            <button
               onClick={onExpandAll}
               className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
               <ChevronsDown size={14} />
               Tout déplier
            </button>
            <button
               onClick={onCollapseAll}
               className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
            >
               <ChevronsUp size={14} />
               Tout replier
            </button>
         </div>

      </div>
   );
}