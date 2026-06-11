import { Check } from 'lucide-react';
import { useState } from 'react';
import { Badge } from './Badge';
import { useTheme } from '../contexts/useTheme';
import type { ChecklistItemData } from '../types';

interface Props {
   item: ChecklistItemData;
   isChecked: boolean;
   onToggle: (id: string) => void;
}

export function ChecklistItem({ item, isChecked, onToggle }: Props) {
   const { theme } = useTheme();
   const [hovered, setHovered] = useState(false);

   return (
      <label
         className="flex items-start gap-2.5 px-3.5 py-2 cursor-pointer transition-colors"
         style={{ backgroundColor: hovered ? theme.itemHover : 'transparent' }}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}
      >
         {/* Checkbox custom */}
         <div
            onClick={() => onToggle(item.id)}
            className={`
          mt-0.5 w-4 h-4 rounded shrink-0 border flex items-center justify-center
          transition-colors cursor-pointer
          ${isChecked
                  ? `${theme.accent} border-transparent`
                  : 'bg-transparent border-slate-600 hover:border-slate-400'
               }
        `}
         >
            {isChecked && <Check size={10} className="text-white stroke-3" />}
         </div>

         <div className="flex-1 min-w-0">
            <p className={`text-sm leading-relaxed transition-colors ${isChecked ? 'line-through text-slate-600' : 'text-slate-300'
               }`}>
               {item.badges?.map((badge, i) => <Badge key={i} {...badge} />)}
               {item.label}
            </p>
            {item.note && (
               <p className={`text-xs mt-0.5 leading-relaxed ${isChecked ? 'text-slate-700' : 'text-slate-500'
                  }`}>
                  {item.note}
               </p>
            )}
         </div>
      </label>
   );
}