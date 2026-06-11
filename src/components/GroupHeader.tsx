interface Props {
   label: string;
}

export function GroupHeader({ label }: Props) {
   return (
      <div className="flex items-center gap-3 px-3.5 pt-3 pb-1">
         <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            {label}
         </span>
         <div className="flex-1 h-px bg-slate-800" />
      </div>
   );
}