import {
   BookOpen, MapPin, Users, Heart, ScrollText, ListChecks, Swords, Leaf,
   Search, EyeOff, ChevronsUpDown, ChevronsDownUp, RotateCcw, Trophy,
   ChevronDown, Check, Lock, Gamepad2, Palette, CircleCheckBig,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
   'book-open': BookOpen, 'map-pin': MapPin, 'users': Users, 'heart': Heart,
   'scroll-text': ScrollText, 'list-checks': ListChecks, 'swords': Swords, 'leaf': Leaf,
   'search': Search, 'eye-off': EyeOff, 'chevrons-up-down': ChevronsUpDown,
   'chevrons-down-up': ChevronsDownUp, 'rotate-ccw': RotateCcw, 'trophy': Trophy,
   'chevron-down': ChevronDown, 'check': Check, 'lock': Lock,
   'gamepad-2': Gamepad2, 'palette': Palette, 'circle-check-big': CircleCheckBig,
};

interface Props {
   name: string;
   size?: number;
   strokeWidth?: number;
   className?: string;
}

export function Icon({ name, size = 18, strokeWidth = 2, className }: Props) {
   const Cmp = MAP[name];
   if (!Cmp) return null;
   return <Cmp size={size} strokeWidth={strokeWidth} className={className} style={{ display: 'block', flexShrink: 0 }} />;
}