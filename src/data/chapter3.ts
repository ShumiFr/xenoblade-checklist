import type { ModuleData } from '../types';

export const chapter3Modules: ModuleData[] = [
   {
      id: 'story',
      col: 'left',
      icon: 'book-open',
      color: '#5b8def',
      title: 'Objectifs Story',
      items: [
         {
            id: 'c3-s1',
            label: 'Cinématiques d\'ouverture → Gem Crafting débloqué',
            desc: 'Visiter le Gem Man\'s Stall pour se familiariser avec le système de craft. Plus l\'Affinité entre Shulk et Reyn est haute, meilleures sont les gemmes.',
         },
         {
            id: 'c3-s2',
            label: 'Accepter TOUTES les nouvelles quêtes de Colony 9 avant de partir',
            desc: 'De nombreuses quêtes post-invasion sont maintenant disponibles. Ne pas partir sans les avoir toutes acceptées.',
            tags: [{ text: 'Priorité absolue', type: 'warn' }],
         },
         {
            id: 'c3-s3',
            label: 'Fast Travel → Mag Mell Ruins (Tephra Cave)',
            desc: 'Accepter [Missing in Action] + [Arachno Silk Fundraising] auprès du Soldat sur la rampe à l\'ouest.',
         },
         {
            id: 'c3-s4',
            label: 'Aller à l\'est → Escape Pod Bay (cutscene) → accepter les quêtes',
            desc: 'Accepter [Collection Quest 1 & 2] + [Material Quest 1 & 2] auprès du Soldat. Après Missing in Action complété : accepter [The Lost Pendant].',
         },
         {
            id: 'c3-s5',
            label: 'Explorer Tephra Cavern → débloquer Spring of Grief Landmark',
            desc: 'Descendre au fond du lac. Collecter les cristaux pour le Gem Crafting. Tuer les Desert Krabbles (pinces) + Noble Brog pour les Material Quests.',
         },
         {
            id: 'c3-s6',
            label: 'Passer l\'heure en nuit → ramasser le Tephra Drop au Spring of Grief',
            desc: 'Nécessaire pour les quêtes Monica et Andreas. Le Tephra Drop apparaît uniquement la nuit.',
            tags: [{ text: 'Nuit uniquement', type: 'default' }],
         },
         {
            id: 'c3-s7',
            label: 'Repérer le Heart-to-Heart au nord du Spring of Grief',
            desc: 'Les personnages nécessaires ne sont pas encore disponibles. Le noter pour plus tard.',
            tags: [{ text: 'Plus tard', type: 'default' }],
         },
         {
            id: 'c3-s8',
            label: 'Prendre la sortie sud → zone Arachnos → MARCHER lentement',
            desc: 'Les Arachnos s\'aggroent au son ! Marcher doucement pour éviter les combats. Collecte l\'Arachno Silk au passage.',
         },
         {
            id: 'c3-s9',
            label: 'Cutscene → Embuscade Arachnos → combattre Directors + Soldiers',
            desc: 'Monado Buster frappe plusieurs ennemis alignés. Les Director Arachnos ont plus de HP mais restent faciles. Après le combat : Fast Travel.',
         },
         {
            id: 'c3-s10',
            label: 'Fast Travel → Escape Pod Bay → accepter [Clearing Obstructions]',
         },
         {
            id: 'c3-s11',
            label: 'Accepter [A Thank You] → Soldat à l\'ouest de la rampe de Mag Mell Ruins',
         },
         {
            id: 'c3-s12',
            label: 'Ramasser la Tatty Armour → chemin nord après la zone Arachnos',
            desc: '1er item pour la quête "Mementos of a Lost Son" (Cheryl). Ne pas la rater !',
            tags: [{ text: 'Quête Cheryl', type: 'warn' }],
         },
         {
            id: 'c3-s13',
            label: 'Continuer seul avec Shulk → marcher doucement devant les Arachnos',
            desc: 'Shulk est seul. Marcher lentement pour éviter l\'aggro sonore. Grimper les lianes quand disponibles.',
         },
         {
            id: 'c3-s14',
            label: 'Débloquer le Landmark Villa Lake → grimper les lianes → retrouver Reyn → SAUVEGARDER',
            tags: [{ text: 'Sauvegarder !', type: 'warn' }],
         },
         {
            id: 'c3-s15',
            label: 'BOSS : Arachno Queen (Niv. 12) + Pods (Niv. 7) + Soldier Arachnos',
            desc: 'Monado Shield contre Arachno Crush I (visible dans les visions). Monado Buster sur les groupes. Shadow Eye + Back Slash sur la Reine. Éviter Binding Web (Bind), Dive Impact (zone Topple).',
            tags: [{ text: 'BOSS', type: 'boss' }, { text: 'Niv. 14+ conseillé', type: 'boss' }],
         },
         {
            id: 'c3-s16',
            label: 'Après le boss → tutoriel Monado Shield + Skill Links débloqués',
            desc: 'Configurer des Skill Links entre Shulk et Reyn via les Affinity Coins. Nouveau Monado Art : Shield.',
         },
         {
            id: 'c3-s17',
            label: 'Explorer Villa Lake → tuer Gluttonous Eugen (Niv. 11) au centre du lac',
         },
         {
            id: 'c3-s18',
            label: 'Ramasser le Lost Pendant au coin nord-ouest de Villa Lake',
            desc: 'Pour la quête "The Lost Pendant". Ne pas quitter Villa Lake sans l\'avoir ramassé.',
            tags: [{ text: 'Quête Soldat', type: 'warn' }],
         },
         {
            id: 'c3-s19',
            label: 'Retourner à Colony 9 → remettre toutes les quêtes complétées',
            desc: 'Lost Pendant → Soldat Cylinder Hangar. Tephra Drop → Monica (Soil Gear) OU Andreas (Soil Boots). Emmy Leater → A Young Captain\'s Rise.',
         },
         {
            id: 'c3-s20',
            label: 'A Young Captain\'s Rise → tuer Lurker Krabble ou Lurker Brog au Spring of Grief',
            desc: 'Ennemis exclusifs à la quête (ne respawnent pas). Retourner à Emmy Leater.',
         },
         {
            id: 'c3-s21',
            label: 'Accepter The Plan - Execution (Sesame, 18:00, près du Gem Man\'s Stall)',
            desc: 'L\'ennemi ciblé est trop puissant maintenant → accepter et attendre.',
            tags: [{ text: 'Plus tard', type: 'default' }],
         },
         {
            id: 'c3-s22',
            label: 'Retourner à Villa Lake → aller à l\'ouest → examiner les toiles d\'araignée → cutscene → Fin Ch.3 !',
            tags: [{ text: 'FIN CH.3', type: 'aff' }],
         },
      ],
   },

   {
      id: 'colony9-quests',
      col: 'right',
      icon: 'scroll-text',
      color: '#e0a44a',
      title: 'Nouvelles Quêtes — Colony 9 (post-invasion)',
      items: [
         {
            id: 'c3-q1',
            label: 'Overworked and Underpaid',
            desc: '[Giorgio, Ether Light] Route A : 3 Fresh Armu Milk (Baby Armus sur la plage nord) ou trade Marcia → récompense : HP Up II Gem. Route B : 3 Insanity Mints (Tephra Cave) + Paola → Ether Def Up II Gem. Route B améliore la relation Giorgio↔Paola.',
         },
         {
            id: 'c3-q2',
            label: 'Flattened Flowers',
            desc: '[Françoise, Tranquil Square] Collecter 5 Dawn Hydrangeas dans Colony 9 → remettre à Françoise. Puis parler à Arnaut : "You should ask her yourself" = Happily Married / "She\'s doing fine" = Near Divorce.',
            tags: [{ text: 'Choix affinité', type: 'h2h' }],
         },
         {
            id: 'c3-q3',
            label: 'Education-Crazy Suzanna',
            desc: '[Suzanna, Residential] 2 Heavy Bunniv Iron → drop des Iron Bunniv ou du Unique Monster Mining Patrichev dans Tephra Cave.',
         },
         {
            id: 'c3-q4',
            label: 'Paola and Narine',
            desc: '[Narine, Tranquil Square] Accepter maintenant (20 000 EXP) mais impossible à compléter : nécessite une affinité Shulk↔Reyn très élevée. Laisser en cours.',
            tags: [{ text: 'Plus tard', type: 'default' }],
         },
         {
            id: 'c3-q5',
            label: 'Mementos of a Lost Son',
            desc: '[Cheryl, niveau supérieur Ether Light, journée] 3 items dans différents lieux. 1er : Tatty Armour dans Tephra Cave (après la zone Arachnos). Les 2 autres sont dans des zones ultérieures.',
            tags: [{ text: 'Tatty Armour → Tephra Cave', type: 'default' }],
         },
         {
            id: 'c3-q6',
            label: 'Liliana\'s Sincere Request',
            desc: '[Liliana, Dunban\'s House] Récupérer un objet à Agora Shore (Tephra Cave), gardé par Gentle Rodriguez (Niv. 40 !). Trick : l\'aggroer → fuir → se glisser derrière quand il retourne → saisir l\'objet. Remettre à Sonia puis Liliana.',
            tags: [{ text: 'Gentle Rodriguez Niv.40 !', type: 'boss' }],
         },
         {
            id: 'c3-q7',
            label: 'An Impoverished Critic + Financial Planning',
            desc: '[Leopold, Ether Light] Confronter King Squeeze (21:00–06:00). Route Leopold : 5 Caterpile Poison (Caterpiles Tephra Cave ou trade Françoise 1✰) → Ranger Boots. Route Sylviane : Top Secret Orders → Quark Boots.',
            tags: [{ text: 'Choix : Leopold ou Sylviane', type: 'h2h' }],
         },
         {
            id: 'c3-q8',
            label: 'The Plan - Preparation',
            desc: '[Sesame, Commercial District, nuit] 2 Croaking Brog Bags (Singing Brogs dans Tephra Cave) OU trade Nic → récupérer Sealed Package de Betty → remettre à Sesame.',
            tags: [{ text: 'Nuit uniquement', type: 'default' }],
         },
         {
            id: 'c3-q9',
            label: 'The Plan - The Night Before',
            desc: '[Sesame, après Preparation, affinité Colony 9 requise] 2 Iron Krabble Shells (Colony Krabbles) OU trade Mefimefi (2✰) → parler à Kenny Rohan à 09:00 → retourner à Sesame.',
            tags: [{ text: 'Affinité Colony 9 requise', type: 'warn' }],
         },
         {
            id: 'c3-q10',
            label: 'Romantic Notions of a Girl / Romantic Notions of a Boy',
            desc: '[Monica (18:00+, Military District) OU Andreas (au sud)] Les deux demandent un Tephra Drop la nuit dans Tephra Cave. Choisir l\'un ou l\'autre — impacte la relation Monica↔Andreas.',
            tags: [{ text: 'Exclusif : Monica OU Andreas', type: 'h2h' }],
         },
         {
            id: 'c3-q11',
            label: 'A Young Captain\'s Suffering',
            desc: '[Emmy Leater, Fortress Entrance, journée] Tuer 5 Wind Vangs dans Tephra Cavern. Débloque A Young Captain\'s Rise.',
         },
         {
            id: 'c3-q12',
            label: 'A Young Captain\'s Rise',
            desc: '[Emmy Leater, après Suffering] Tuer le Lurker Krabble ou Lurker Brog au Spring of Grief (Tephra Cave). Ennemis exclusifs à la quête. Débloque A Young Captain\'s Challenge.',
         },
      ],
   },

   {
      id: 'tephra-quests',
      col: 'right',
      icon: 'list-checks',
      color: '#9a86ff',
      title: 'Quêtes — Tephra Cave',
      items: [
         {
            id: 'c3-tq1',
            label: '[Missing in Action]',
            desc: 'Soldat à la rampe ouest de Mag Mell Ruins. Débloque [The Lost Pendant] une fois complété.',
         },
         {
            id: 'c3-tq2',
            label: '[Arachno Silk Fundraising]',
            desc: 'Soldat à la rampe ouest de Mag Mell Ruins. Arachno Silk en drop des Worker Arachnos ou Arachno Pods dans Tephra Cave.',
         },
         {
            id: 'c3-tq3',
            label: '[Collection Quest 1] + [Collection Quest 2]',
            desc: 'Soldat à l\'Escape Pod Bay (aller à l\'est depuis Mag Mell Ruins).',
         },
         {
            id: 'c3-tq4',
            label: '[Material Quest 1] + [Material Quest 2]',
            desc: 'Soldat à l\'Escape Pod Bay. Matériaux : Desert Krabble Pincers + Noble Brog (Spring of Grief).',
         },
         {
            id: 'c3-tq5',
            label: '[The Lost Pendant]',
            desc: 'Disponible après Missing in Action. Le pendant est dans le coin nord-ouest de Villa Lake. Remettre au Soldat au Cylinder Hangar (Colony 9).',
            tags: [{ text: 'Après Missing in Action', type: 'default' }],
         },
         {
            id: 'c3-tq6',
            label: '[Clearing Obstructions]',
            desc: 'Disponible après l\'Arachno Attack. Soldat à l\'Escape Pod Bay. Tuer des Arachnos dans la zone de Villa Lake.',
            tags: [{ text: 'Après Arachno Attack', type: 'default' }],
         },
         {
            id: 'c3-tq7',
            label: '[A Thank You]',
            desc: 'Disponible après l\'Arachno Attack. Soldat à l\'ouest de la rampe Mag Mell Ruins.',
            tags: [{ text: 'Après Arachno Attack', type: 'default' }],
         },
      ],
   },

   {
      id: 'landmarks',
      col: 'right',
      icon: 'map-pin',
      color: '#36c79b',
      title: 'Landmarks à débloquer — Tephra Cave',
      items: [
         {
            id: 'c3-lm1',
            label: 'Escape Pod Bay',
            desc: 'À l\'est de Mag Mell Ruins, cutscene automatique.',
         },
         {
            id: 'c3-lm2',
            label: 'Spring of Grief',
            desc: 'Descendre au fond de Tephra Cavern. Cristaux pour le Gem Crafting, Tephra Drop la nuit.',
         },
         {
            id: 'c3-lm3',
            label: 'Villa Lake',
            desc: 'Après le passage seul de Shulk. Débloquer en courant vers le nord après les lianes.',
         },
      ],
   },

   {
      id: 'monsters',
      col: 'right',
      icon: 'swords',
      color: '#ef6b6b',
      title: 'Monstres Uniques — Tephra Cave Ch.3',
      items: [
         {
            id: 'c3-um1',
            label: 'Solid Konev (Niv. 10) — Spring of Grief / Tephra Cavern',
            desc: 'Tuer d\'abord les Desert Krabbles autour. Attention à "Ether Break II" → knockdown + Daze sur le groupe. Shulk doit encourager Reyn immédiatement après.',
            tags: [{ text: 'Niv.12+ conseillé', type: 'boss' }],
         },
         {
            id: 'c3-um2',
            label: 'Gluttonous Eugen (Niv. 11) — Villa Lake, centre du lac',
            desc: 'Accessible après le boss Arachno Queen. Plus facile qu\'elle. Affinity Coin garanti.',
         },
         {
            id: 'c3-um3',
            label: 'Gentle Rodriguez (Niv. 40) — Agora Shore, Tephra Cave',
            desc: 'Gardien de l\'objet pour la quête Liliana. Trop fort pour être tué maintenant. Trick : aggroer → fuir → se faufiler derrière quand il retourne à sa place → saisir l\'objet rapidement.',
            tags: [{ text: 'Niv.40 — Ne pas combattre', type: 'boss' }],
         },
         {
            id: 'c3-um4',
            label: 'Lurker Krabble / Lurker Brog — Spring of Grief',
            desc: 'Ennemis exclusifs à la quête A Young Captain\'s Rise. N\'apparaissent qu\'avec la quête active. Ne respawnent pas.',
            tags: [{ text: 'Quest Unique', type: 'default' }],
         },
      ],
   },

   {
      id: 'collectibles',
      col: 'right',
      icon: 'leaf',
      color: '#5cc98a',
      title: 'Objets clés & Collectopaedia',
      items: [
         {
            id: 'c3-co1',
            label: 'Tephra Drop — Spring of Grief, la nuit',
            desc: 'Nécessaire pour les quêtes Romantic Notions (Monica ou Andreas). Changer l\'heure en nuit avant de le ramasser.',
            tags: [{ text: 'Nuit uniquement', type: 'warn' }],
         },
         {
            id: 'c3-co2',
            label: 'Tatty Armour — chemin nord après la zone Arachnos',
            desc: '1er des 3 items pour "Mementos of a Lost Son" (Cheryl). À ne pas rater pendant l\'exploration.',
            tags: [{ text: 'Quête Cheryl', type: 'warn' }],
         },
         {
            id: 'c3-co3',
            label: 'Lost Pendant — coin nord-ouest de Villa Lake',
            desc: 'Pour la quête [The Lost Pendant]. À remettre au Soldat dans le Cylinder Hangar (Colony 9).',
            tags: [{ text: 'Quête Soldat', type: 'warn' }],
         },
         {
            id: 'c3-co4',
            label: 'Insanity Mints ×3 — Tephra Cave (route B Overworked and Underpaid)',
            desc: 'Si tu fais la Route B de la quête de Giorgio. Visibles sur la carte avec la quête active.',
            tags: [{ text: 'Route B Giorgio', type: 'default' }],
         },
         {
            id: 'c3-co5',
            label: 'Cristaux Ether — Spring of Grief',
            desc: 'À collecter pour le Gem Crafting. Interagir avec les formations de cristaux brillants.',
         },
         {
            id: 'c3-co6',
            label: 'Compléter le Collectopaedia Tephra Cave (si pas encore fait)',
            desc: 'Récompense : Warrior Cuisses. Les nouvelles zones de Tephra Cave ajoutent de nouveaux collectables. Sortir/rentrer pour les faire respawn.',
            tags: [{ text: 'Warrior Cuisses', type: 'aff' }],
         },
      ],
   },
];