import { useState } from 'react';
import { Icon } from './Icon';
import { Ring } from './Ring';
import { CHAPTERS_DATA } from '../data/index';

interface HeaderProps {
   percent: number;
   done: number;
   total: number;
   isComplete: boolean;
   onReset: () => void;
   title: string;
   subtitle: string;
}

function ResetButton({ onReset }: { onReset: () => void }) {
   const [hover, setHover] = useState(false);
   return (
      <button onClick={onReset} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'transparent', border: '1px solid',
            borderColor: hover ? 'var(--accent-line)' : 'var(--border-2)',
            color: hover ? 'var(--text)' : 'var(--dim)',
            fontFamily: 'inherit', fontSize: '13px', fontWeight: 600,
            padding: '9px 14px', borderRadius: '10px', cursor: 'pointer', transition: 'all .15s',
         }}
      >
         <Icon name="rotate-ccw" size={15} /> Réinitialiser
      </button>
   );
}

export function Header({ percent, done, total, isComplete, onReset, title, subtitle }: HeaderProps) {
   return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
         <div style={{ position: 'relative', width: '78px', height: '78px', flexShrink: 0 }}>
            <Ring percent={percent} size={78} stroke={6} />
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
               <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '19px', color: 'var(--text)' }}>
                  {percent}%
               </div>
            </div>
         </div>

         <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--dim)', fontSize: '12.5px', fontWeight: 600 }}>
               <span style={{ color: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
                  <Icon name="gamepad-2" size={15} />
               </span>
               Xenoblade Chronicles: Definitive Edition
            </div>
            <h1 style={{ fontSize: '26px', fontWeight: 800, margin: '5px 0 0', letterSpacing: '-0.03em', lineHeight: 1.1, color: 'var(--text)' }}>
               {title}
            </h1>
            <div style={{ color: 'var(--dim)', fontSize: '13px', marginTop: '5px' }}>
               <span style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: 'var(--text-2)' }}>{done}</span> sur{' '}
               <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>{total}</span> tâches complétées · {subtitle}
            </div>
         </div>

         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {isComplete && (
               <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '12.5px',
                  fontWeight: 700, color: 'var(--accent)', background: 'var(--accent-soft)',
                  border: '1px solid var(--accent-line)', padding: '8px 13px', borderRadius: '10px',
                  animation: 'ringPulse 2s ease-in-out infinite',
               }}>
                  <Icon name="trophy" size={15} /> Chapitre complété !
               </span>
            )}
            <ResetButton onReset={onReset} />
         </div>
      </div>
   );
}

interface ChapterTabsProps {
   active: number;
   onSelect: (id: number) => void;
}

export function ChapterTabs({ active, onSelect }: ChapterTabsProps) {
   return (
      <div style={{ display: 'flex', gap: '7px', marginTop: '26px', flexWrap: 'wrap', borderBottom: '1px solid var(--border)', paddingBottom: '18px' }}>
         {CHAPTERS_DATA.map(ch => {
            const isActive = ch.id === active;
            return (
               <button key={ch.id}
                  onClick={() => !ch.locked && onSelect(ch.id)}
                  style={{
                     display: 'inline-flex', alignItems: 'center', gap: '7px',
                     fontFamily: 'inherit', fontSize: '13px', fontWeight: 600,
                     padding: '8px 15px', borderRadius: '9px', transition: 'all .15s',
                     cursor: ch.locked ? 'not-allowed' : 'pointer', border: '1px solid',
                     ...(isActive
                        ? { borderColor: 'transparent', background: 'var(--accent)', color: 'var(--on-accent)' }
                        : ch.locked
                           ? { borderColor: 'var(--border)', background: 'transparent', color: 'var(--faint)' }
                           : { borderColor: 'var(--border-2)', background: 'var(--panel)', color: 'var(--text-2)' }),
                  }}
               >
                  {ch.locked && <span style={{ display: 'grid', placeItems: 'center', color: 'var(--faint)' }}><Icon name="lock" size={12} /></span>}
                  Chapitre {ch.id}
               </button>
            );
         })}
      </div>
   );
}