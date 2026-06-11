import { useState } from 'react';
import { Icon } from './Icon';
import { tagStyle, tagDotStyle } from '../lib/tags';
import type { ChecklistItemData } from '../types';

interface Props {
   item: ChecklistItemData;
   isChecked: boolean;
   onToggle: (id: string) => void;
}

export function ChecklistItem({ item, isChecked, onToggle }: Props) {
   const [hover, setHover] = useState(false);

   return (
      <div role="button" onClick={() => onToggle(item.id)}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
            display: 'flex', gap: '13px', alignItems: 'flex-start',
            padding: '10px 11px', borderRadius: '10px', cursor: 'pointer',
            transition: 'background .12s',
            background: hover ? 'var(--row-hover)' : 'transparent',
         }}
      >
         {/* Checkbox */}
         <span style={{
            marginTop: '1px', width: '20px', height: '20px', borderRadius: '6px',
            border: '1.75px solid var(--border-2)', display: 'grid', placeItems: 'center',
            flexShrink: 0, transition: 'all .15s',
            ...(isChecked ? { borderColor: 'var(--accent)', background: 'var(--accent)' } : {}),
         }}>
            <span style={{ display: 'grid', color: 'var(--on-accent)', opacity: isChecked ? 1 : 0, transform: `scale(${isChecked ? 1 : 0.6})`, transition: 'all .15s' }}>
               <Icon name="check" size={13} strokeWidth={3} />
            </span>
         </span>

         {/* Contenu */}
         <span style={{ minWidth: 0, flex: 1 }}>
            <span style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '7px' }}>
               {item.tags?.map((tag, i) => (
                  <span key={i} style={tagStyle(tag.type)}>
                     <span style={tagDotStyle(tag.type)} />
                     {tag.text}
                  </span>
               ))}
               <span style={{
                  fontSize: '14px', lineHeight: 1.45,
                  ...(isChecked
                     ? { color: 'var(--faint)', textDecoration: 'line-through', textDecorationColor: 'var(--faint)' }
                     : { color: 'var(--text)' }),
               }}>
                  {item.label}
               </span>
            </span>
            {item.desc && (
               <span style={{ display: 'block', fontSize: '12.5px', color: 'var(--dim)', lineHeight: 1.55, marginTop: '3px', opacity: isChecked ? 0.45 : 1 }}>
                  {item.desc}
               </span>
            )}
         </span>
      </div>
   );
}