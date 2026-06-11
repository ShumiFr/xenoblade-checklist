export type BadgeVariant = 'time' | 'warning' | 'info' | 'success' | 'neutral' | 'pink';

export interface Badge {
   variant: BadgeVariant;
   text: string;
}

export interface ChecklistItemData {
   id: string;
   label: string;
   note?: string;
   badges?: Badge[];
}

export interface GroupHeaderData {
   type: 'header';
   label: string;
}

export type SectionItem = ChecklistItemData | GroupHeaderData;

export type SectionColor = 'blue' | 'teal' | 'cyan' | 'pink' | 'orange' | 'violet' | 'red' | 'green';

export type SectionIconKey =
   | 'book-open'
   | 'map-pin'
   | 'users'
   | 'heart'
   | 'scroll-text'
   | 'list-checks'
   | 'sword'
   | 'leaf';

export interface SectionData {
   id: string;
   title: string;
   icon: SectionIconKey;
   color: SectionColor;
   items: SectionItem[];
}

export function isGroupHeader(item: SectionItem): item is GroupHeaderData {
   return 'type' in item && item.type === 'header';
}