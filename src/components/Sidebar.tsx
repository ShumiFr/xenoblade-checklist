import { useState } from 'react';
import { Icon } from './Icon';
import { useTheme } from '../contexts/useTheme';
import { THEMES } from '../contexts/theme';
import type { ThemeKey } from '../contexts/theme';

const GAMES = [
   { name: 'Xenoblade Chronicles: DE', active: true, locked: false },
   { name: 'Persona 5 Royal', active: false, locked: true },
   { name: 'Elden Ring', active: false, locked: true },
];

interface Props {
   userEmail?: string;
   onSignOut: () => void;
}

function GameBtn({ name, active, locked }: { name: string; active: boolean; locked: boolean }) {
   const [hover, setHover] = useState(false);
   return (
      <button key={name}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
            width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '8px', fontFamily: 'inherit', fontSize: '13.5px', fontWeight: 600,
            padding: '9px 11px', borderRadius: '10px', textAlign: 'left',
            transition: 'all .15s', cursor: locked ? 'default' : 'pointer', border: '1px solid',
            ...(active
               ? { borderColor: 'var(--accent-line)', background: 'var(--accent-soft)', color: 'var(--text)' }
               : { borderColor: 'transparent', background: hover && !locked ? 'var(--row-hover)' : 'transparent', color: locked ? 'var(--faint)' : 'var(--text-2)' }),
         }}
      >
         <span style={{ display: 'flex', alignItems: 'center', gap: '11px', minWidth: 0 }}>
            <span style={{ flexShrink: 0, display: 'grid', placeItems: 'center', color: active ? 'var(--accent)' : 'var(--faint)' }}>
               <Icon name="gamepad-2" size={17} />
            </span>
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</span>
         </span>
         {locked && <span style={{ flexShrink: 0, display: 'grid', placeItems: 'center', color: 'var(--faint)' }}><Icon name="lock" size={13} /></span>}
      </button>
   );
}

export function Sidebar({ userEmail, onSignOut }: Props) {
   const { themeKey, setTheme } = useTheme();

   return (
      <aside style={{
         width: '252px', flexShrink: 0, borderRight: '1px solid var(--border)',
         position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column',
         padding: '20px 16px',
         background: 'color-mix(in srgb, var(--panel) 55%, transparent)',
         backdropFilter: 'blur(8px)',
      }}>
         {/* Brand */}
         <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '4px 8px 18px' }}>
            <div style={{
               width: '34px', height: '34px', borderRadius: '10px',
               background: 'linear-gradient(150deg, var(--accent), var(--accent-2))',
               display: 'grid', placeItems: 'center', color: '#fff',
               boxShadow: '0 6px 18px var(--accent-soft)',
            }}>
               <Icon name="circle-check-big" size={18} />
            </div>
            <div style={{ lineHeight: 1.1 }}>
               <div style={{ fontWeight: 800, fontSize: '14.5px', letterSpacing: '-0.02em' }}>Completionist</div>
               <div style={{ fontSize: '11px', color: 'var(--dim)', fontWeight: 500 }}>100% tracker</div>
            </div>
         </div>

         {/* Bibliothèque */}
         <div style={{ fontSize: '10.5px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--faint)', fontWeight: 700, padding: '8px 10px' }}>
            Bibliothèque
         </div>
         <nav style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {GAMES.map(g => <GameBtn key={g.name} {...g} />)}
         </nav>

         <div style={{ flex: 1 }} />

         <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', marginTop: '14px' }}>
            <div style={{ padding: '0 8px 10px' }}>
               <div style={{ fontSize: '11px', color: 'var(--faint)', fontWeight: 500, marginBottom: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {userEmail}
               </div>
               <button onClick={onSignOut} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  background: 'none', border: '1px solid var(--border-2)',
                  color: 'var(--dim)', fontFamily: 'inherit', fontSize: '12px',
                  fontWeight: 600, padding: '6px 11px', borderRadius: '8px',
                  cursor: 'pointer', transition: 'all .15s',
               }}>
                  <Icon name="rotate-ccw" size={13} /> Déconnexion
               </button>
            </div>
         </div>

         {/* Thème */}
         <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px', marginTop: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '2px 8px 10px', color: 'var(--dim)' }}>
               <Icon name="palette" size={15} />
               <span style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700 }}>Thème</span>
            </div>
            <div style={{ display: 'flex', gap: '8px', padding: '0 8px' }}>
               {(Object.keys(THEMES) as ThemeKey[]).map(k => (
                  <button key={k} title={THEMES[k].name} onClick={() => setTheme(k)} style={{
                     width: '22px', height: '22px', borderRadius: '7px', cursor: 'pointer',
                     padding: 0, background: THEMES[k].dot,
                     border: `2px solid ${themeKey === k ? 'var(--text)' : 'transparent'}`,
                     boxShadow: '0 0 0 1px var(--border-2)', transition: 'border-color .15s',
                  }} />
               ))}
            </div>
         </div>
      </aside>
   );
}