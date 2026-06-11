interface RingProps {
   percent: number;
   size: number;
   stroke: number;
   track?: string;
   color?: string;
}

export function Ring({ percent, size, stroke, track, color }: RingProps) {
   const r = (size - stroke) / 2;
   const c = 2 * Math.PI * r;
   const offset = c * (1 - percent / 100);
   const center = size / 2;

   return (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
         <circle cx={center} cy={center} r={r} fill="none"
            stroke={track ?? 'var(--panel-hi)'} strokeWidth={stroke} />
         <circle cx={center} cy={center} r={r} fill="none"
            stroke={color ?? 'var(--accent)'} strokeWidth={stroke}
            strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
            transform={`rotate(-90 ${center} ${center})`}
            style={{ transition: 'stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)' }}
         />
      </svg>
   );
}