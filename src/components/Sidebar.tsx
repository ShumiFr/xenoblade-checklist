import { Lock, CheckSquare } from 'lucide-react';
import { useTheme } from '../contexts/useTheme';
import { THEMES } from '../contexts/theme';
import type { ThemeKey } from '../contexts/theme';

interface Game {
   id: string;
   name: string;
   icon: string;
   locked: boolean;
}

const GAMES: Game[] = [
   { id: 'xenoblade', name: 'Xenoblade Chronicles: DE', icon: '⚔️', locked: false },
   { id: 'persona5', name: 'Persona 5 Royal', icon: '🎭', locked: true },
   { id: 'elden', name: 'Elden Ring', icon: '💀', locked: true },
];

interface Props {
   activeGame: string;
   onSelectGame: (id: string) => void;
}

export function Sidebar({ activeGame, onSelectGame }: Props) {
   const { themeKey, theme, setTheme } = useTheme();

   return (
      <aside
         className="fixed left-0 top-0 h-screen w-56 border-r flex-col hidden lg:flex z-10 transition-colors duration-300"
         style={{ backgroundColor: theme.sidebarBg, borderRightColor: theme.cardBorder }}
      >
         {/* Logo */}
         <div className="p-4 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5">
               <div className={`w-8 h-8 rounded-xl ${theme.accent} flex items-center justify-center hrink-0`}>
                  <CheckSquare size={16} className="text-white" />
               </div>
               <div>
                  <p className="text-sm font-semibold text-slate-100 leading-none mb-0.5">
                     Completionist
                  </p>
                  <p className="text-xs text-slate-500">100% tracker</p>
               </div>
            </div>
         </div>

         {/* Bibliothèque — scrollable */}
         <div className="flex-1 p-3 overflow-y-auto">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 px-2 mb-2">
               Bibliothèque
            </p>
            <div className="space-y-0.5">
               {GAMES.map(game => {
                  const isActive = game.id === activeGame;
                  return (
                     <button
                        key={game.id}
                        onClick={() => !game.locked && onSelectGame(game.id)}
                        disabled={game.locked}
                        className={`
                  w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors
                  ${isActive
                              ? 'bg-slate-800/80 text-slate-100'
                              : game.locked
                                 ? 'text-slate-600 cursor-not-allowed'
                                 : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                           }
                `}
                     >
                        <span className="text-sm shrink-0">{game.icon}</span>
                        <span className="flex-1 truncate text-xs">{game.name}</span>
                        {game.locked && <Lock size={11} className="text-slate-700 shrink-0" />}
                     </button>
                  );
               })}
            </div>
         </div>

         {/* Thème — toujours visible en bas */}
         <div className="p-4 border-t border-slate-800 shrink-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">
               Thème
            </p>
            <div className="flex items-center gap-2">
               {(Object.keys(THEMES) as ThemeKey[]).map(key => (
                  <button
                     key={key}
                     onClick={() => setTheme(key)}
                     className={`
                        w-5 h-5 rounded-full ${THEMES[key].dot} transition-transform hover:scale-110
                        ${themeKey === key ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-white scale-110' : ''}
                     `}
                  />
               ))}
            </div>
         </div>
      </aside>
   );
}