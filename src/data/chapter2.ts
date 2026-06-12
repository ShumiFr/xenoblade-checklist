import type { ModuleData } from '../types';

export const chapter2Modules: ModuleData[] = [
   {
      id: 'story',
      col: 'left',
      icon: 'book-open',
      color: '#5b8def',
      title: 'Objectifs Story',
      items: [
         {
            id: 'c2-s1',
            label: "Sauter dans l'eau depuis les falaises de Tephra Cave",
            desc: "Skip Travel indisponible. Sauter du bord à gauche → Achievement 'Making Waves' débloqué.",
         },
         {
            id: 'c2-s2',
            label: 'Nager vers le sud-est → rejoindre la rive → Colony 9 (cinématique)',
         },
         {
            id: 'c2-s3',
            label: 'Tutoriel Mechon : vaincre le Mechon M63 (Niv. 6)',
            desc: 'Seul Topple permet de faire des dégâts → Turn Strike (Shulk) pour Break, puis Wild Down (Reyn) pour Topple.',
         },
         {
            id: 'c2-s4',
            label: 'Fuir les Mechon → aller au nord via Ether Light → Central Plaza (cinématique)',
            desc: "Utiliser l'icône Fuir (verte) sur la palette. Les Mechon sont trop résistants pour être combattus librement.",
         },
         {
            id: 'c2-s5',
            label: 'Aller au Military District → cinématique (lab inaccessible)',
         },
         {
            id: 'c2-s6',
            label: 'Se diriger vers le Residential District → combat Mechon M31 (Niv.4) + M51 (Niv.5)',
            desc: 'Break → Topple → Back Slash. Fiora quitte le groupe temporairement.',
         },
         {
            id: 'c2-s7',
            label: 'Dunban rejoint avec le Monado → switcher Dunban en chef de file',
            desc: 'Activer Monado Enchant immédiatement pour que Shulk et Reyn puissent infliger des dégâts.',
         },
         {
            id: 'c2-s8',
            label: 'Combattre Mechon M69 / M72 / M82 (Niv. 5-6) avec Dunban',
            desc: 'Monado Enchant en priorité → Monado Buster pour finir.',
         },
         {
            id: 'c2-s9',
            label: 'Continuer vers le sud via le Commercial District',
            desc: 'Pas besoin de combattre les Mechon en route → fuir directement.',
         },
         {
            id: 'c2-s10',
            label: 'Dunban perd le Monado → Shulk reçoit les Monado Arts',
            desc: "Monado Arts remplace Turn Strike. Monter le niveau de Monado Enchant si l'AP le permet.",
         },
         {
            id: 'c2-s11',
            label: 'BOSS Phase 1 : Metal Face (Niv. 10) — déflexion seulement, pas de dégâts possibles',
            desc: "Impossible d'infliger des dégâts au début. Laisser la cinématique se déclencher.",
            tags: [{ text: 'BOSS Phase 1', type: 'boss' }],
         },
         {
            id: 'c2-s12',
            label: 'BOSS Phase 2 : Chain Attack → Topple → Monado Buster → réduire à 50% HP',
            desc: "Monado Enchant en priorité absolue. Chain Attack pour créer le Topple rapidement. Killing Claw = gros dégâts + Str Down. Last Resort = Daze.",
            tags: [{ text: 'BOSS Phase 2', type: 'boss' }],
         },
         {
            id: 'c2-s13',
            label: 'Cinématiques finales → Chapitre 2 terminé !',
            desc: "Dunban rejoint définitivement l'équipe. La route vers le Bionis s'ouvre.",
            tags: [{ text: 'FIN CH.2', type: 'aff' }],
         },
      ],
   },

   {
      id: 'cleanup',
      col: 'right',
      icon: 'list-checks',
      color: '#9a86ff',
      title: 'Avant de quitter Colony 9 — checklist',
      items: [
         {
            id: 'c2-c1',
            label: 'Terminer toutes les quêtes Colony 9 du Chapitre 1 non complétées',
            desc: "Certaines quêtes (Pride and Courage, Dean's Shady Request…) sont plus faciles à finir maintenant avec Dunban dans l'équipe.",
            tags: [{ text: 'Priorité', type: 'warn' }],
         },
         {
            id: 'c2-c2',
            label: 'Compléter le Collectopaedia Colony 9 si pas encore fait',
            desc: 'Récompense : Carbon Driver (excellente arme pour Reyn). Sortir/rentrer dans Colony 9 pour faire respawn les collectables.',
            tags: [{ text: 'Carbon Driver', type: 'aff' }],
         },
         {
            id: 'c2-c3',
            label: 'Compléter le Collectopaedia Tephra Cave si pas encore fait',
            desc: 'Récompense : Warrior Cuisses.',
            tags: [{ text: 'Warrior Cuisses', type: 'aff' }],
         },
         {
            id: 'c2-c4',
            label: 'Monter l\'Affinité Colony 9 à ✰✰✰ si possible',
            desc: "Plus l'affinité est haute, plus de quêtes se débloquent. Parler 2 fois à chaque PNJ nommé, à des horaires différents.",
         },
         {
            id: 'c2-c5',
            label: 'Acheter/craft des gemmes utiles au Gem Man avant de partir',
            desc: "Agility Up + Strength Up pour Dunban. HP Up pour Reyn. Crafting avec le Gem Man devient plus rentable à mesure que le niveau monte.",
         },
         {
            id: 'c2-c6',
            label: 'Équiper Dunban avec le meilleur équipement disponible',
            desc: "Dunban utilise du Light Armor. Vérifier le Weapon Dev Lab et le marché pour ses armes. Il arrive souvent sous-équipé.",
            tags: [{ text: 'Dunban', type: 'default' }],
         },
         {
            id: 'c2-c7',
            label: 'Vérifier les quêtes encore actives dans le journal',
            desc: "Certaines quêtes Collection/Monstres peuvent être terminées maintenant. Remettre les objets collectés pendant Tephra Cave.",
         },
      ],
   },

   {
      id: 'h2h',
      col: 'right',
      icon: 'heart',
      color: '#f06ba8',
      title: 'Heart-to-Hearts — Colony 9 (état complet)',
      items: [
         {
            id: 'c2-h1',
            label: '✅ Sunrise in the Park — Outlook Park',
            desc: 'Shulk + Fiora · Affinité Jaune · Réponses : "You and Dunban…" → "Kind of." — Disponible dès Ch.1.',
            tags: [{ text: 'Ch.1', type: 'aff' }],
         },
         {
            id: 'c2-h2',
            label: '✅ Enduring Friendship — Tephra Cave Entrance',
            desc: 'Shulk + Reyn · Affinité Verte · Réponses : "When we had that big fight?" → "Of course." — Disponible dès Ch.1.',
            tags: [{ text: 'Ch.1', type: 'aff' }],
         },
         {
            id: 'c2-h3',
            label: '[FUTUR] Overlooking the Colony — Tephra Cave Entrance',
            desc: 'Sharla + Reyn · Affinité Lilas · Prérequis : Reconstruction Colony 6 démarrée. Disponible à partir du Ch.5.',
            tags: [{ text: 'Ch.5+', type: 'default' }],
         },
         {
            id: 'c2-h4',
            label: "[FUTUR] Fiora's Cooking — Dunban's House",
            desc: 'Fiora + Reyn · Affinité Verte · Prérequis : Après la Fallen Arm (Ch.12).',
            tags: [{ text: 'Ch.12+', type: 'default' }],
         },
         {
            id: 'c2-h5',
            label: "[FUTUR] A Heropon's Perspective — Mechon Wreckage Site",
            desc: 'Riki + Sharla · Affinité Lilas · Prérequis : Après Prison Island (Ch.9).',
            tags: [{ text: 'Ch.9+', type: 'default' }],
         },
         {
            id: 'c2-h6',
            label: '[FUTUR] Watching Over Them — Mechon Wreckage Site',
            desc: 'Dunban + Reyn · Affinité Rose · Prérequis : Après Galahad Fortress (Ch.11).',
            tags: [{ text: 'Ch.11+', type: 'default' }],
         },
         {
            id: 'c2-h7',
            label: '[FUTUR] Ancient Wreckage — Cylinder Hangar',
            desc: 'Melia + Reyn · Affinité Lilas · Prérequis : Après High Entia Tomb (Ch.8).',
            tags: [{ text: 'Ch.8+', type: 'default' }],
         },
      ],
   },

   {
      id: 'dunban',
      col: 'right',
      icon: 'users',
      color: '#4fb6e0',
      title: 'Dunban — Nouveau personnage',
      items: [
         {
            id: 'c2-d1',
            label: 'Arts prioritaires : Gale Slash, Soaring Tempest, Steel Strike',
            desc: 'Gale Slash depuis le flanc droit (×1.3 dégâts), Soaring Tempest depuis le flanc gauche. Steel Strike = Daze utile pour setup.',
         },
         {
            id: 'c2-d2',
            label: 'Skill Tree prioritaire : Enlightenment → bonus Agility et esquive',
            desc: "Dunban esquive naturellement les attaques si l'Agility est élevée. Hearten = boost ATK de l'équipe quand Dunban a de l'Affection.",
         },
         {
            id: 'c2-d3',
            label: 'Dunban utilise le Light Armor → très agile mais peu de défense physique',
            desc: 'Ne pas essayer de le faire tanker physiquement. Son rôle est DPS/esquive. Gemmes Agility Up > Armure.',
         },
         {
            id: 'c2-d4',
            label: 'Contre les Mechon : Monado Enchant (Shulk) obligatoire',
            desc: "Sans Enchant actif, Dunban ne peut pas blesser les Mechon. Hors combat Mechon, il est le DPS le plus efficace de l'équipe.",
         },
         {
            id: 'c2-d5',
            label: "Talent Art de Dunban : Worldly Slash — attaque puissante qui augmente avec l'Affection",
            desc: "Plus l'Affection de Dunban est haute (via les quêtes et les combats), plus Worldly Slash est puissant.",
         },
      ],
   },
];