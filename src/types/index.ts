export type TagType = 'h2h' | 'aff' | 'warn' | 'boss' | 'default';

export interface Tag {
   text: string;
   type: TagType;
}

export interface ChecklistItemData {
   id: string;
   label: string;
   desc?: string;
   tags?: Tag[];
}

export type ModuleIconKey =
   | 'book-open' | 'map-pin' | 'users' | 'heart'
   | 'scroll-text' | 'list-checks' | 'swords' | 'leaf';

export interface ModuleData {
   id: string;
   col: 'left' | 'right';
   icon: ModuleIconKey;
   color: string;   // hex
   title: string;
   items: ChecklistItemData[];
}