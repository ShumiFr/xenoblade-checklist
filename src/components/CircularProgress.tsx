import { useTheme } from '../contexts/useTheme';

interface Props {
   checked: number;
   total: number;
   size?: number;
}

export function CircularProgress({ checked, total, size = 88 }: Props) {
   const { theme } = useTheme();
   const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
   const radius = 36;
   const circumference = 2 * Math.PI * radius;
   const offset = circumference - (pct / 100) * circumference;

   return (
      <div className="relative shrink-0" style={{ width: size, height: size }}>
         <svg width={size} height={size} className="-rotate-90">
            <circle
               cx={size / 2} cy={size / 2} r={radius}
               fill="none" stroke="currentColor" strokeWidth="7"
               className="text-slate-800"
            />
            <circle
               cx={size / 2} cy={size / 2} r={radius}
               fill="none" stroke="currentColor" strokeWidth="7"
               strokeLinecap="round"
               strokeDasharray={circumference}
               strokeDashoffset={offset}
               className={`${theme.circle} transition-all duration-500 ease-out`}
            />
         </svg>
         <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-slate-200">{pct}%</span>
         </div>
      </div>
   );
}