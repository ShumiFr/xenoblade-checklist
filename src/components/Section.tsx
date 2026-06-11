import { useState, useMemo } from 'react';
import { Icon } from './Icon';
import { Ring } from './Ring';
import { ChecklistItem } from './ChecklistItem';
import { rgba } from '../lib/tags';
import type { ModuleData } from '../types';

interface Props {
   module: ModuleData;
   checked: Record<string, 1>;
   isOpen: boolean;
   onToggleOpen: (id: string) => void;
   onToggleItem: (id: string) => void;
   query: string;
   hideCompleted: boolean;
}

export function Section({ module, checked, isOpen, onToggleOpen, onToggleItem, query, hideCompleted }: Props) {
   const [hover, setHover] = useState(false);
   const q = query.trim().toLowerCase();

   const total = module.items.length;
   const done = module.items.filter(it => checked[it.id]).length;
   const mp = total ? Math.round((done / total) * 100) : 0;

   const visibleItems = useMemo(() => {
      let items = module.items;
      if (q) items = items.filter(it =>
         (it.label + ' ' + (it.desc || '') + ' ' + (it.tags || []).map(t => t.text).join(' '))
            .toLowerCase().includes(q)
      );
      if (hideCompleted) items = items.filter(it => !checked[it.id]);
      return items;
   }, [module.items, q, hideCompleted, checked]);

   const open = q ? visibleItems.length > 0 : isOpen;

   return (
      <div style={{ background: 'var(--panel)', border: '1px solid var(--border)', borderRadius: '15px', overflow: 'hidden' }}>
         <button onClick={() => onToggleOpen(module.id)}
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            style={{
               background: hover ? 'var(--row-hover)' : 'transparent',
               border: 'none', margin: 0, cursor: 'pointer', width: '100%',
               display: 'flex', alignItems: 'center', gap: '13px',
               padding: '15px 17px', color: 'inherit', fontFamily: 'inherit',
               textAlign: 'left', transition: 'background .15s',
            }}
         >
            {/* Tuile colorée */}
            <span style={{
               width: '34px', height: '34px', borderRadius: '9px',
               background: rgba(module.color, 0.14), border: `1px solid ${rgba(module.color, 0.34)}`,
               display: 'grid', placeItems: 'center', flexShrink: 0, color: module.color,
            }}>
               <Icon name={module.icon} size={17} />
            </span>

            {/* Titre + compteur */}
            <span style={{ minWidth: 0 }}>
               <span style={{ display: 'block', fontWeight: 700, fontSize: '14.5px', letterSpacing: '-0.01em' }}>
                  {module.title}
               </span>
               <span style={{ display: 'block', fontSize: '12px', color: 'var(--dim)', marginTop: '1px' }}>
                  {done} / {total} complété{done > 1 ? 's' : ''}
               </span>
            </span>
            <span style={{ flex: 1 }} />

            {/* Mini ring */}
            <span style={{ display: 'grid', placeItems: 'center', opacity: done > 0 ? 1 : 0.5 }}>
               <Ring percent={mp} size={26} stroke={3.2} />
            </span>

            {/* Chevron */}
            <span style={{ display: 'inline-grid', transition: 'transform .25s', transform: `rotate(${open ? 180 : 0}deg)`, color: 'var(--dim)', placeItems: 'center' }}>
               <Icon name="chevron-down" size={17} />
            </span>
         </button>

         {open && (
            <div style={{ borderTop: '1px solid var(--border)', padding: '5px 7px 8px' }}>
               {visibleItems.map(item => (
                  <ChecklistItem key={item.id} item={item} isChecked={!!checked[item.id]} onToggle={onToggleItem} />
               ))}
               {visibleItems.length === 0 && (
                  <div style={{ padding: '13px 11px', color: 'var(--dim)', fontSize: '13px' }}>Aucune tâche à afficher.</div>
               )}
            </div>
         )}
      </div>
   );
}