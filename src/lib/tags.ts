import type { TagType } from '../types';

export function rgba(hex: string, a: number): string {
   const h = hex.replace('#', '');
   const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
   const n = parseInt(full, 16);
   return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

export function tagColor(type: TagType): string {
   switch (type) {
      case 'h2h': return '#c79bff';
      case 'aff': return '#f0c66e';
      case 'warn': return '#ff8585';
      case 'boss': return '#f2a878';
      default: return '#aab2c0';
   }
}

export function tagStyle(type: TagType): React.CSSProperties {
   const c = tagColor(type);
   return {
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontSize: '11px', fontWeight: 700, letterSpacing: '0.01em',
      padding: '3px 9px 3px 7px', borderRadius: '7px', whiteSpace: 'nowrap',
      color: c, background: rgba(c, 0.16), border: `1px solid ${rgba(c, 0.42)}`,
   };
}

export function tagDotStyle(type: TagType): React.CSSProperties {
   const c = tagColor(type);
   return {
      width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
      background: c, boxShadow: `0 0 7px ${rgba(c, 0.9)}`,
   };
}