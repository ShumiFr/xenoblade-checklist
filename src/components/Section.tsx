import { useMemo } from 'react';
import {
   ChevronDown, BookOpen, MapPin, Users, Heart,
   ScrollText, ListChecks, Sword, Leaf,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ChecklistItem } from './ChecklistItem';
import { GroupHeader } from './GroupHeader';
import { isGroupHeader } from '../types';
import { useTheme } from '../contexts/useTheme';
import type { SectionData, SectionColor, SectionIconKey } from '../types';

interface Props {
   section: SectionData;
   checked: Set<string>;
   onToggle: (id: string) => void;
   isOpen: boolean;
   onToggleOpen: () => void;
   searchQuery: string;
   hideCompleted: boolean;
}

const ICON_MAP: Record<SectionIconKey, LucideIcon> = {
   'book-open': BookOpen,
   'map-pin': MapPin,
   'users': Users,
   'heart': Heart,
   'scroll-text': ScrollText,
   'list-checks': ListChecks,
   'sword': Sword,
   'leaf': Leaf,
};

const COLOR_MAP: Record<SectionColor, { bg: string; icon: string }> = {
   blue: { bg: 'bg-blue-950', icon: 'text-blue-400' },
   teal: { bg: 'bg-teal-950', icon: 'text-teal-400' },
   cyan: { bg: 'bg-cyan-950', icon: 'text-cyan-400' },
   pink: { bg: 'bg-pink-950', icon: 'text-pink-400' },
   violet: { bg: 'bg-violet-950', icon: 'text-violet-400' },
   orange: { bg: 'bg-orange-950', icon: 'text-orange-400' },
   red: { bg: 'bg-red-950', icon: 'text-red-400' },
   green: { bg: 'bg-green-950', icon: 'text-green-400' },
};

function MiniProgress({ checked, total }: { checked: number; total: number }) {
   const { theme } = useTheme();
   const pct = total > 0 ? checked / total : 0;
   const radius = 10;
   const circumference = 2 * Math.PI * radius;
   const offset = circumference - pct * circumference;

   return (
      <div className="relative w-7 h-7 shrink-0">
         <svg width="28" height="28" className="-rotate-90">
            <circle cx="14" cy="14" r={radius}
               fill="none" stroke="currentColor" strokeWidth="2.5"
               className="text-slate-700"
            />
            <circle cx="14" cy="14" r={radius}
               fill="none" stroke="currentColor" strokeWidth="2.5"
               strokeLinecap="round"
               strokeDasharray={circumference}
               strokeDashoffset={offset}
               className={`${theme.circle} transition-all duration-500`}
            />
         </svg>
      </div>
   );
}

export function Section({
   section, checked, onToggle,
   isOpen, onToggleOpen,
   searchQuery, hideCompleted,
}: Props) {
   const { theme } = useTheme();
   const hasActiveFilter = searchQuery.trim() !== '' || hideCompleted;

   const visibleItems = useMemo(() => {
      if (!hasActiveFilter) return section.items;
      return section.items.filter(item => {
         // Headers : on les garde si pas de recherche active (juste hideCompleted)
         if (isGroupHeader(item)) return searchQuery.trim() === '';
         if (hideCompleted && checked.has(item.id)) return false;
         if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            return (
               item.label.toLowerCase().includes(q) ||
               item.note?.toLowerCase().includes(q) ||
               item.badges?.some(b => b.text.toLowerCase().includes(q))
            );
         }
         return true;
      });
   }, [section.items, searchQuery, hideCompleted, checked, hasActiveFilter]);

   const allCheckable = section.items.filter(item => !isGroupHeader(item));
   const checkedCount = allCheckable.filter(
      item => !isGroupHeader(item) && checked.has(item.id)
   ).length;

   if (hasActiveFilter && visibleItems.length === 0) return null;

   const effectivelyOpen = searchQuery.trim() !== '' ? true : isOpen;
   const Icon = ICON_MAP[section.icon];
   const colors = COLOR_MAP[section.color];

   return (
      <div
         className="rounded-xl overflow-hidden border"
         style={{ borderColor: theme.cardBorder }}
      >
         {/* Header */}
         <button
            onClick={onToggleOpen}
            className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:brightness-125"
            style={{ backgroundColor: theme.cardBg }}
         >
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${colors.bg}`}>
               <Icon size={18} className={colors.icon} />
            </div>

            <div className="flex-1 min-w-0">
               <p className="text-sm font-medium text-slate-200 truncate">{section.title}</p>
               <p className="text-xs text-slate-500 mt-0.5">
                  {checkedCount} / {allCheckable.length} complétés
               </p>
            </div>

            {/* Mini cercle de progression */}
            <MiniProgress checked={checkedCount} total={allCheckable.length} />

            <ChevronDown
               size={16}
               className={`text-slate-500 shrink-0 transition-transform duration-200 ${effectivelyOpen ? 'rotate-180' : ''
                  }`}
            />
         </button>

         {/* Corps */}
         {effectivelyOpen && (
            <div
               className="border-t py-1"
               style={{ backgroundColor: theme.cardBodyBg, borderColor: theme.cardBorder }}
            >
               {visibleItems.map((item, index) =>
                  isGroupHeader(item) ? (
                     <GroupHeader key={index} label={item.label} />
                  ) : (
                     <ChecklistItem
                        key={item.id}
                        item={item}
                        isChecked={checked.has(item.id)}
                        onToggle={onToggle}
                     />
                  )
               )}
            </div>
         )}
      </div>
   );
}