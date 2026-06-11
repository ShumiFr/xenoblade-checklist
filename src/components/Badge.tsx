import type { Badge as BadgeType } from '../types';

// Couleurs exactes de la maquette originale — fonds très sombres, texte saturé
const VARIANTS: Record<BadgeType['variant'], { bg: string; color: string; glow: string }> = {
   time: { bg: '#451a03', color: '#fb923c', glow: '0 0 6px #fb923c99' },
   warning: { bg: '#450a0a', color: '#f87171', glow: '0 0 6px #f8717199' },
   info: { bg: '#0c1a40', color: '#60a5fa', glow: '0 0 6px #60a5fa99' },
   success: { bg: '#052e16', color: '#4ade80', glow: '0 0 6px #4ade8099' },
   neutral: { bg: '#1e293b', color: '#94a3b8', glow: '0 0 6px #94a3b899' },
   pink: { bg: '#2d0a2e', color: '#e879f9', glow: '0 0 6px #e879f999' },
};

export function Badge({ variant, text }: BadgeType) {
   const v = VARIANTS[variant];

   return (
      <span
         className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mr-2 leading-none"
         style={{ backgroundColor: v.bg, color: v.color }}
      >
         <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: v.color, boxShadow: v.glow }}
         />
         {text}
      </span>
   );
}