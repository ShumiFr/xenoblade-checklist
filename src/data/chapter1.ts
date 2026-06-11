import type { SectionData } from '../types';

export const chapter1Sections: SectionData[] = [
   {
      id: 'story',
      icon: 'book-open',
      color: 'blue',
      title: 'Objectifs Story',
      items: [
         {
            id: 's1',
            label: 'Vaincre le Colony Krabble (combat tutoriel)',
            note: "Utilise Back Slash dans le dos et Light Heal pour soigner. Reyn → Turn Strike pour Break puis Topple.",
         },
         {
            id: 's2',
            label: 'Descendre vers le sud → ramasser le 1er Collectable (orbe bleu)',
            note: 'Débloque le Collectopaedia dans le menu.',
         },
         {
            id: 's3',
            label: 'Entrer dans Colony 9 (cinématique)',
         },
         {
            id: 's4',
            label: "Parler au Gem Man → recevoir Strength Up II et HP Up II",
            note: 'Équipe les gemmes immédiatement.',
         },
         {
            id: 's5',
            label: 'Aller au nord → débloquer Fortress Entrance → cinématique',
         },
         {
            id: 's6',
            label: 'Aller au Weapon Development Lab → cinématique (séquence Fiora)',
         },
         {
            id: 's7',
            label: '[FIORA] Livrer le repas à Shulk → aller à Outlook Park',
            note: "Monter les escaliers à l'ouest du Residential District.",
         },
         {
            id: 's8',
            label: 'Activer le Heart-to-Heart "Sunrise in the Park"',
            note: 'Réponses : "You and Dunban…" → "Kind of."',
            badges: [
               { variant: 'pink', text: 'Heart-to-Heart' },
               { variant: 'neutral', text: 'Affinité Shulk + Fiora' },
            ],
         },
         {
            id: 's9',
            label: 'Retourner au Weapon Dev Lab → Reyn rejoint définitivement',
         },
         {
            id: 's10',
            label: 'Monter les Arts et Skills de Shulk et Reyn',
            note: "Shulk → Back Slash + Intuition. Reyn → Wild Down + Hammer Beat + Enthusiasm (Heavy Armor).",
         },
         {
            id: 's11',
            label: 'Accepter TOUTES les quêtes de Colony 9 avant de partir',
            note: "Les quêtes des PNJ nommés boostent l'Affinité avec Reyn et Fiora.",
            badges: [{ variant: 'warning', text: 'Ne pas partir sans !' }],
         },
         {
            id: 's12',
            label: 'Aller à Tephra Cave (Main Entrance → chemin nord-est)',
            note: 'Fiora rejoint automatiquement à la grotte.',
         },
         {
            id: 's13',
            label: 'Activer le Heart-to-Heart "Enduring Friendship"',
            note: 'Réponses : "When we had that big fight?" → "Of course."',
            badges: [
               { variant: 'pink', text: 'Heart-to-Heart' },
               { variant: 'neutral', text: 'Affinité Verte Shulk + Reyn' },
            ],
         },
         {
            id: 's14',
            label: "Accepter [Monster Quest 4 – Parts 1-3] auprès du Soldat à l'entrée",
         },
         {
            id: 's15',
            label: 'Entrer dans Tephra Cave → Landmark Mag Mell Ruins (cinématique)',
         },
         {
            id: 's16',
            label: 'Explorer Warehouse 2 → trouver le Cylinder Hangar → entrer',
         },
         {
            id: 's17',
            label: 'BOSS : Ancient Machines ×2 (Niv. 8)',
            note: "Focus 1 ennemi à la fois. Attention à Final Defense Mode à faible HP → Chain Attack !",
            badges: [{ variant: 'warning', text: 'BOSS' }],
         },
         {
            id: 's18',
            label: 'Cinématiques finales → Chapitre 1 terminé !',
            badges: [{ variant: 'success', text: 'FIN CH.1' }],
         },
      ],
   },

   {
      id: 'landmarks',
      icon: 'map-pin',
      color: 'teal',
      title: 'Landmarks à débloquer',
      items: [
         { type: 'header', label: 'Colony 9' },
         { id: 'lm1', label: "Dunban's House", note: 'Nord de la zone de départ' },
         { id: 'lm2', label: 'Ether Light', note: 'Plaza commercial principal' },
         { id: 'lm3', label: "Gem Man's Stall", note: "À l'est d'Ether Light" },
         { id: 'lm4', label: 'Central Plaza', note: "Traverser le pont vers l'est" },
         { id: 'lm5', label: 'Fortress Entrance', note: 'Nord de Central Plaza — cinématique' },
         { id: 'lm6', label: 'Tranquil Square', note: 'Dans le Residential District' },
         { id: 'lm7', label: 'Residential District (entrée sud)', note: 'Zone sud de Colony 9' },
         { id: 'lm8', label: 'Outlook Park', note: "Escaliers à l'ouest du Residential — H2H ici" },
         { id: 'lm9', label: 'Main Entrance', note: 'Sortie ouest de Colony 9' },
         {
            id: 'lm10',
            label: 'Mechon Wreckage Site',
            note: 'Werner se trouve ici — ne pas oublier !',
            badges: [{ variant: 'time', text: 'Fast Travel requis' }],
         },
         { type: 'header', label: 'Tephra Cave' },
         { id: 'lm11', label: 'Tephra Cave Entrance (extérieur)', note: 'Chemin nord-est depuis Main Entrance' },
         { id: 'lm12', label: 'Mag Mell Ruins', note: "Chemin nord à l'intérieur — cinématique" },
         { id: 'lm13', label: 'Warehouse 2', note: 'Après la cinématique des ruines' },
      ],
   },

   {
      id: 'npcs',
      icon: 'users',
      color: 'cyan',
      title: 'PNJ à enregistrer — Colony 9 (45)',
      items: [
         { type: 'header', label: 'Tôt le matin — 06:00+' },
         {
            id: 'np1', label: 'Liliana',
            note: "Près de Dunban's House → débloque l'Affinity Chart (parler 2 fois !)",
            badges: [{ variant: 'time', text: '06:00+' }],
         },
         {
            id: 'np2', label: 'Dean',
            note: "Military District — donne \"Dean's Shady Request\" après la quête de Rocco",
            badges: [{ variant: 'time', text: '06:00+' }],
         },
         {
            id: 'np3', label: 'Dorothy',
            note: "Sud de Dunban's House",
            badges: [{ variant: 'time', text: '06:00+' }],
         },
         { type: 'header', label: 'Journée — 09:00 à 18:00' },
         {
            id: 'np4', label: 'Sonia',
            note: "Plaza central d'Ether Light",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np5', label: 'Giorgio',
            note: "Plaza central d'Ether Light. Quête 'A Curry Conundrum' après ✰✰",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np6', label: 'Rocco',
            note: "Nord d'Ether Light. Quête 'Rocco's Heartful Request' après ✰✰",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np7', label: 'Miller',
            note: "Niveau inférieur CACHÉ : traverser le bâtiment à droite du Gem Man puis sauter à gauche",
            badges: [{ variant: 'warning', text: 'Caché !' }, { variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np8', label: 'Paola',
            note: "Est/sud du Gem Man's Stall",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np9', label: 'Cheryl',
            note: "Chemin supérieur via escaliers d'Ether Light — uniquement avant 12:00 !",
            badges: [{ variant: 'warning', text: 'Avant 12:00 !' }],
         },
         {
            id: 'np10', label: 'Raoul',
            note: 'Military District, patrouille',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np11', label: 'Jan',
            note: 'Military District, nord',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np12', label: 'Emmy Leater',
            note: 'Partie nord du Military District',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np13', label: 'Kantz',
            note: 'Près de la porte principale',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np14', label: 'Kenny Rohan',
            note: 'Près de Tranquil Square. Peut trader Black Nectar dès 1✰',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np15', label: 'Betty',
            note: 'Près de Tranquil Square. Peut trader Medicinal Brog Oil dès 1✰',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np16', label: 'Francoise',
            note: 'Près de Tranquil Square',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np17', label: 'Suzanna',
            note: "Sud-ouest du Residential → quête 'Education-Minded Suzanna'",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np18', label: 'Narine',
            note: 'Sud-ouest du Residential (avec Suzanna)',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np19', label: 'Lukas',
            note: "Coin sud-ouest, près du pont. Quête 'Pride and Courage' après Lonely Niranira",
            badges: [{ variant: 'time', text: '09:00–15:00' }],
         },
         {
            id: 'np20', label: 'Moritz',
            note: 'Coin sud-ouest avec Lukas (fils de Suzanna)',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np21', label: 'Niranira',
            note: "Escaliers près du 2e Heart-to-Heart → quête 'Lonely Niranira'",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np22', label: 'Jackson',
            note: 'Milieu des maisons, près du balcon',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np23', label: 'Dionysis',
            note: "Residential District → quête 'The Key to a Long Life'",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'np24', label: 'Marcia',
            note: "Ether Light commercial — parler APRÈS que Reyn rejoigne le groupe",
            badges: [{ variant: 'warning', text: 'Après Reyn !' }, { variant: 'time', text: '09:00+' }],
         },
         { type: 'header', label: 'Soirée — 18:00+' },
         {
            id: 'np25', label: 'Oleksiy',
            note: "Chemin supérieur (là où était Cheryl le matin)",
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np26', label: 'Sesame',
            note: 'Zone sud (là où était Paola en journée)',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np27', label: 'Desiree',
            note: "Nord du warehouse d'Ether Light → quête 'The Broken Watch'",
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np28', label: 'Shura',
            note: "Plaza central d'Ether Light",
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np29', label: 'Leopold',
            note: 'Dans le plaza. Peut trader Medicinal Brog Oil dès 2✰',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np30', label: 'Sylviane',
            note: "Plaza central d'Ether Light",
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np31', label: 'Erik',
            note: 'Autour du Weapon Dev Lab',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np32', label: 'Arnaut',
            note: 'Autour du Weapon Dev Lab',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np33', label: 'Mefimefi',
            note: 'Autour du Weapon Dev Lab',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np34', label: 'Perrine',
            note: 'Autour du Weapon Dev Lab',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np35', label: 'Andreas',
            note: 'Place du Military District',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np36', label: 'Monica',
            note: 'Place du Military District',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np37', label: 'Nic',
            note: 'Place du Military District',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'np38', label: 'Jiroque',
            note: "Frappe un arbre dans Tranquil Square — nécessaire pour la quête de Marcia",
            badges: [{ variant: 'time', text: '18:00–03:00' }],
         },
         { type: 'header', label: 'Nuit — 21:00+' },
         {
            id: 'np39', label: 'Rosemary',
            note: "Autour du Gem Man's Stall",
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         {
            id: 'np40', label: 'King Squeeze',
            note: 'Là où Miller est en journée',
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         {
            id: 'np41', label: 'Minnie',
            note: "Près du Heart-to-Heart dans le Residential",
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         {
            id: 'np42', label: 'Zukazu',
            note: "Escaliers de Tranquil Square — quête après 'Biscuits for a Grandson'",
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         {
            id: 'np43', label: 'Jolele',
            note: 'Escaliers de Tranquil Square',
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         {
            id: 'np44', label: 'Peppino',
            note: "À l'est de Jolele",
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         { type: 'header', label: 'Emplacement spécial' },
         {
            id: 'np45', label: 'Werner',
            note: 'Fast Travel vers Mechon Wreckage Site — patrouille là-bas',
            badges: [{ variant: 'time', text: 'Fast Travel' }],
         },
      ],
   },

   {
      id: 'h2h',
      icon: 'heart',
      color: 'pink',
      title: 'Heart-to-Hearts — Chapitre 1',
      items: [
         {
            id: 'h1',
            label: 'Sunrise in the Park',
            note: "Lieu : Outlook Park · Shulk + Fiora · Affinité Jaune · Réponses : \"You and Dunban…\" → \"Kind of.\"",
            badges: [{ variant: 'info', text: 'Shulk + Fiora' }, { variant: 'neutral', text: 'Affinité Jaune' }],
         },
         {
            id: 'h2',
            label: 'Enduring Friendship',
            note: "Lieu : Tephra Cave Entrance · Shulk + Reyn · Affinité Verte · Réponses : \"When we had that big fight?\" → \"Of course.\"",
            badges: [{ variant: 'info', text: 'Shulk + Reyn' }, { variant: 'neutral', text: 'Affinité Verte' }],
         },
         {
            id: 'h3',
            label: '[BLOQUÉ] H2H dans le Residential District',
            note: "Accessible plus tard dans l'aventure.",
            badges: [{ variant: 'neutral', text: 'Disponible plus tard' }],
         },
         {
            id: 'h4',
            label: '[BLOQUÉ] H2H au Cylinder Hangar',
            note: "Accessible plus tard dans l'aventure.",
            badges: [{ variant: 'neutral', text: 'Disponible plus tard' }],
         },
      ],
   },

   {
      id: 'uquests',
      icon: 'scroll-text',
      color: 'orange',
      title: 'Quêtes Uniques — Colony 9',
      items: [
         { type: 'header', label: 'Disponibles dès que Reyn rejoint' },
         {
            id: 'uq1',
            label: 'The Key to a Long Life',
            note: "[Dionysis, Residential] Collecter Medicinal Brog Oil sur les Brogs (la nuit) OU trader avec Betty (1✰) ou Leopold (2✰).",
         },
         {
            id: 'uq2',
            label: 'Biscuits for a Grandson',
            note: "[Marcia, Ether Light, 09:00+] Livrer les biscuits à Jiroque (Tranquil Square, 18:00–03:00) puis retourner à Marcia. Débloque la quête de Zukazu.",
            badges: [{ variant: 'warning', text: 'Parler à Marcia après Reyn !' }],
         },
         {
            id: 'uq3',
            label: 'Education-Minded Suzanna',
            note: "[Suzanna, Residential] Collecter Black Nectar (Skeeters dans Tephra Cave) OU trader avec Kenny Rohan. Débloque 'Education-Crazy Suzanna'.",
         },
         {
            id: 'uq4',
            label: 'Lonely Niranira',
            note: "[Niranira, Residential, escaliers] Livrer sa lettre à Lukas (pont sud-ouest, 09:00–15:00) puis retourner. Débloque 'Pride and Courage'.",
         },
         {
            id: 'uq5',
            label: 'The Broken Watch',
            note: "[Desiree, 18:00+] Collecter 3x Blue Chains dans Colony 9, réparer au Weapon Dev Lab, retourner à Desiree.",
            badges: [{ variant: 'info', text: '3× Blue Chains' }],
         },
         { type: 'header', label: 'Disponibles après ✰✰ Affinité Colony 9' },
         {
            id: 'uq6',
            label: 'A Curry Conundrum',
            note: "[Giorgio, Ether Light, journée] Collecter 5x Dance Apples dans les prairies. Débloque 'Overworked and Underpaid'.",
            badges: [{ variant: 'warning', text: 'Requis ✰✰' }],
         },
         {
            id: 'uq7',
            label: "A Young Captain's Request",
            note: "[Emmy Leater, Military District] Trouver Miller : Gem Man's Stall → traverser le bâtiment → sauter à gauche vers le niveau inférieur.",
            badges: [{ variant: 'warning', text: 'Requis ✰✰' }],
         },
         {
            id: 'uq8',
            label: "Rocco's Heartful Request",
            note: "[Rocco, Gem Man's Stall, journée] Porter le souvenir cassé à Dean. Débloque immédiatement 'Dean's Shady Request'.",
            badges: [{ variant: 'warning', text: 'Requis ✰✰' }],
         },
         {
            id: 'uq9',
            label: "Dean's Shady Request",
            note: "[Dean, Military District, après Rocco's] Récupérer 2x Shin Geckos dans Tephra Cave (crevasse du mur OUEST après les Brogs).",
            badges: [{ variant: 'info', text: 'Shin Geckos → Tephra Cave' }],
         },
         {
            id: 'uq10',
            label: 'Pride and Courage',
            note: "[Lukas, Residential] Trouver Niranira à Hazzai Cape (est de Colony 9, contourner Anti-Air Battery 3). Puis : Lukas → Moritz → Lukas.",
            badges: [
               { variant: 'warning', text: '✰✰ requis' },
               { variant: 'warning', text: '⚠️ Ennemis Niv.70+ côté est !' },
            ],
         },
      ],
   },

   {
      id: 'gquests',
      icon: 'list-checks',
      color: 'violet',
      title: 'Quêtes Collection / Monstres / Recherche',
      items: [
         { type: 'header', label: 'Military District' },
         {
            id: 'gq1', label: '[Material Quest 1]',
            note: 'Du Nopon Résident près des escaliers du Weapon Dev Lab',
            badges: [{ variant: 'time', text: '06:00+' }],
         },
         {
            id: 'gq2', label: '[Monster Quest 2 – Parts 1, 2, 3]',
            note: 'Du Soldat Defence Force (Military District, journée)',
            badges: [{ variant: 'time', text: 'Journée' }],
         },
         {
            id: 'gq3', label: '[Challenge 1]',
            note: 'Du Soldat Defence Force (bord est du fort)',
            badges: [{ variant: 'time', text: 'Journée' }],
         },
         {
            id: 'gq4', label: '[Monster Quest 1 – Parts 1, 2, 3]',
            note: 'Du Soldat Defence Force (nord du district)',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'gq5', label: '[Challenge 3]',
            note: 'Du Soldat Defence Force (sud du district)',
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         { type: 'header', label: 'Central Plaza' },
         {
            id: 'gq6', label: '[Search Quest 1]',
            note: 'Du résident dans le coin sud-est de Central Plaza',
         },
         { type: 'header', label: 'Residential District' },
         {
            id: 'gq7', label: '[Collection Quest 3] + [Collection Quest 4]',
            note: "Du résident à l'ouest depuis l'entrée du Residential",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'gq8', label: '[Search Quest 2]',
            note: 'Du Nopon Résident dans le Residential',
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'gq9', label: '[Material Quest 4]',
            note: 'Du résident au nord du Residential',
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         {
            id: 'gq10', label: '[Search Quest 4]',
            note: 'Du résident près de Peppino (Tranquil Square)',
            badges: [{ variant: 'time', text: '21:00+' }],
         },
         { type: 'header', label: 'Ether Light / Commercial District' },
         {
            id: 'gq11', label: '[Material Quest 2]',
            note: "Du résident au nord-est d'Ether Light",
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'gq12', label: '[Collection Quest 2]',
            note: "Du résident à l'ouest via la factory d'Ether Light",
            badges: [{ variant: 'time', text: '18:00+' }],
         },
         {
            id: 'gq13', label: '[Collection Quest 1]',
            note: "Du résident près de Marcia / Ether Light",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'gq14', label: '[Challenge 2] + [Challenge 4]',
            note: "Des résidents proches d'Ether Light (Challenge 4 = tuer Wallslide Gwynry dans Tephra Cave)",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'gq15', label: '[Search Quest 3]',
            note: "Du résident proche d'Ether Light",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'gq16', label: '[Monster Quest 3 – Parts 1, 2, 3, 4]',
            note: "Du résident proche d'Ether Light",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         {
            id: 'gq17', label: '[Material Quest 3]',
            note: "Du résident proche d'Ether Light",
            badges: [{ variant: 'time', text: '09:00+' }],
         },
         { type: 'header', label: "Tephra Cave — avant d'entrer" },
         {
            id: 'gq18', label: '[Monster Quest 4 – Parts 1, 2, 3]',
            note: "Du Soldat Defence Force à l'entrée de la grotte",
            badges: [{ variant: 'info', text: "Avant d'entrer !" }],
         },
      ],
   },

   {
      id: 'monsters',
      icon: 'sword',
      color: 'red',
      title: 'Monstres Uniques — Tephra Cave',
      items: [
         {
            id: 'um1',
            label: 'Cellar Bugworm (Niv. 10) — groupe de Caterpiles, chemin principal',
            note: "Être Niv.12+ recommandé. 'Toxin Shower' inflige Poison → sauvegarder avant ! Récompense : possible Heavy Armor pour Reyn.",
            badges: [{ variant: 'warning', text: 'Être Niv.12+ !' }],
         },
         {
            id: 'um2',
            label: 'Mining Patrichev — chemin est après les Singing Brogs',
            note: "Un Bunnit, plus accessible. Affinity Coin garanti + Gold Chest.",
         },
         {
            id: 'um3',
            label: 'Wallslide Gwynry (Niv. 9) — chemin sud de Warehouse 2',
            note: "Requis pour [Challenge 4]. Son 'Knock-Down Spin' peut Topple les personnages.",
            badges: [{ variant: 'info', text: 'Requis pour Challenge 4' }],
         },
      ],
   },

   {
      id: 'collect',
      icon: 'leaf',
      color: 'green',
      title: 'Collectopaedia & Objets Clés',
      items: [
         { type: 'header', label: 'Collectopaedia — Colony 9' },
         {
            id: 'cp1',
            label: 'Compléter la page Colony 9 du Collectopaedia',
            note: "Récompenses : Carbon Driver (arme pour Reyn !) + plusieurs Gemmes.",
            badges: [{ variant: 'success', text: 'Récompense : Carbon Driver !' }],
         },
         { type: 'header', label: 'Collectopaedia — Tephra Cave' },
         {
            id: 'cp2',
            label: 'Compléter la page Tephra Cave du Collectopaedia',
            note: "Récompense : Warrior Cuisses. Sortir et rentrer dans la grotte pour faire réapparaître les collectables.",
            badges: [{ variant: 'success', text: 'Récompense : Warrior Cuisses' }],
         },
         { type: 'header', label: 'Objets clés à récupérer' },
         {
            id: 'cp3',
            label: 'Shin Gecko ×2 — crevasse dans le mur OUEST de Tephra Cave',
            note: "Nécessaires pour 'Dean's Shady Request'. Chercher après les Singing Brogs.",
            badges: [{ variant: 'warning', text: 'Quête Dean' }],
         },
         {
            id: 'cp4',
            label: 'Blue Chains ×3 — collectables dans Colony 9',
            note: "Nécessaires pour 'The Broken Watch' (Desiree).",
            badges: [{ variant: 'warning', text: 'Quête Desiree' }],
         },
         {
            id: 'cp5',
            label: 'Dance Apples ×5 — prairies autour de Colony 9',
            note: "Nécessaires pour 'A Curry Conundrum' (Giorgio).",
            badges: [{ variant: 'warning', text: 'Quête Giorgio' }],
         },
         {
            id: 'cp6',
            label: 'Medicinal Brog Oil — Brogs la nuit autour de Colony 9',
            note: "Pour 'The Key to a Long Life' (Dionysis). Alternative : trader avec Betty (1✰) ou Leopold (2✰).",
            badges: [{ variant: 'warning', text: 'Quête Dionysis' }],
         },
         {
            id: 'cp7',
            label: 'Black Nectar — Skeeters dans Tephra Cave OU trade Kenny Rohan',
            note: "Pour 'Education-Minded Suzanna'. Le plus simple : trader avec Kenny Rohan directement.",
            badges: [{ variant: 'warning', text: 'Quête Suzanna' }],
         },
      ],
   },
];