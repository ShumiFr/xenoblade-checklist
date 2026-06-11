import { useState } from 'react';
import { Icon } from './Icon';

interface Props {
   query: string;
   onSearch: (v: string) => void;
   hideCompleted: boolean;
   onToggleHide: () => void;
   onExpandAll: () => void;
   onCollapseAll: () => void;
}

function ToolBtn({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
   const [hover, setHover] = useState(false);
   return (
      <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            background: 'var(--panel)', border: '1px solid',
            borderColor: hover ? 'var(--accent-line)' : 'var(--border-2)',
            color: hover ? 'var(--text)' : 'var(--dim)',
            fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600,
            padding: '9px 13px', borderRadius: '10px', cursor: 'pointer', transition: 'all .15s',
         }}
      >
         <Icon name={icon} size={15} /> {label}
      </button>
   );
}

export function Toolbar({ query, onSearch, hideCompleted, onToggleHide, onExpandAll, onCollapseAll }: Props) {
   const [focus, setFocus] = useState(false);

   return (
      <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
         {/* Recherche */}
         <div style={{ position: 'relative', flex: 1, minWidth: '230px', maxWidth: '400px' }}>
            <span style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--faint)', pointerEvents: 'none', display: 'grid' }}>
               <Icon name="search" size={16} />
            </span>
            <input value={query} onChange={e => onSearch(e.target.value)}
               onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
               placeholder="Rechercher une tâche, un PNJ, une quête…"
               style={{
                  width: '100%', background: 'var(--panel)',
                  border: `1px solid ${focus ? 'var(--accent-line)' : 'var(--border-2)'}`,
                  borderRadius: '11px', color: 'var(--text)', fontFamily: 'inherit',
                  fontSize: '13.5px', padding: '11px 14px 11px 40px', outline: 'none', transition: 'border-color .15s',
               }}
            />
         </div>

         {/* Toggle */}
         <button onClick={onToggleHide} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '13px', fontWeight: 600, color: 'var(--text-2)', padding: '6px 2px' }}>
            <span style={{ display: 'inline-block', width: '36px', height: '21px', borderRadius: '999px', position: 'relative', flexShrink: 0, transition: 'background .2s', border: '1px solid var(--border-2)', background: hideCompleted ? 'var(--accent)' : 'var(--panel-hi)' }}>
               <span style={{ position: 'absolute', top: '2px', left: '2px', width: '15px', height: '15px', borderRadius: '50%', background: '#fff', transition: 'transform .2s', transform: `translateX(${hideCompleted ? '15px' : '0'})` }} />
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', color: 'var(--dim)' }}>
               <Icon name="eye-off" size={15} /> Masquer les tâches terminées
            </span>
         </button>

         <div style={{ flex: 1 }} />
         <div style={{ display: 'flex', gap: '8px' }}>
            <ToolBtn icon="chevrons-up-down" label="Tout déplier" onClick={onExpandAll} />
            <ToolBtn icon="chevrons-down-up" label="Tout replier" onClick={onCollapseAll} />
         </div>
      </div>
   );
}