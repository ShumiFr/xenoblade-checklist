import { useState } from 'react';
import { Gamepad2, RotateCcw } from 'lucide-react';
import { chapter1Sections } from './data/chapter1';
import { Section } from './components/Section';
import { CircularProgress } from './components/CircularProgress';
import { Toolbar } from './components/Toolbar';
import { ChapterTabs } from './components/ChapterTabs';
import { Sidebar } from './components/Sidebar';
import { useChecklist } from './hooks/useChecklist';
import { useTheme } from './contexts/useTheme';
import { isGroupHeader, type ChecklistItemData } from './types';
import type { Chapter } from './components/ChapterTabs';

const CHAPTERS: Chapter[] = [
  { id: 1, label: 'Chapitre 1', locked: false },
  { id: 2, label: 'Chapitre 2', locked: true },
  { id: 3, label: 'Chapitre 3', locked: true },
  { id: 4, label: 'Chapitre 4', locked: true },
  { id: 5, label: 'Chapitre 5', locked: true },
];

export default function App() {
  const { checked, toggle, reset } = useChecklist();
  const { theme } = useTheme();

  const [activeGame, setActiveGame] = useState('xenoblade');
  const [activeChapter, setActiveChapter] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['story']));

  const toggleSection = (id: string) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const expandAll = () => setOpenSections(new Set(chapter1Sections.map(s => s.id)));
  const collapseAll = () => setOpenSections(new Set());

  const allItems = chapter1Sections
    .flatMap(s => s.items)
    .filter((item): item is ChecklistItemData => !isGroupHeader(item));
  const checkedCount = allItems.filter(item => checked.has(item.id)).length;

  const storySection = chapter1Sections.filter(s => s.id === 'story');
  const secondarySections = chapter1Sections.filter(s => s.id !== 'story');

  const sectionProps = (id: string) => ({
    checked,
    onToggle: toggle,
    isOpen: openSections.has(id),
    onToggleOpen: () => toggleSection(id),
    searchQuery,
    hideCompleted,
  });

  return (
    <div
      className="flex min-h-screen transition-colors duration-300"
      style={{ background: theme.bodyGradient }}
    >

      {/* Sidebar */}
      <Sidebar activeGame={activeGame} onSelectGame={setActiveGame} />

      {/* Contenu principal */}
      <main className="flex-1 min-w-0 overflow-auto lg:ml-56">
        <div className="max-w-5xl mx-auto px-6 py-8 pb-20">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start gap-5">
              <CircularProgress checked={checkedCount} total={allItems.length} />
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <Gamepad2 size={14} className={`${theme.circle} shrink-0`} />
                  <span className="text-xs text-slate-500 font-medium">
                    Xenoblade Chronicles: Definitive Edition
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-slate-100 tracking-tight leading-tight mb-1.5">
                  Chapitre 1 — Le Réveil du Monado
                </h1>
                <p className="text-sm text-slate-500">
                  {checkedCount} sur {allItems.length} tâches complétées dans ce chapitre
                </p>
              </div>
              <button
                onClick={reset}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-200 px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors shrink-0 mt-1"
              >
                <RotateCcw size={13} />
                Réinitialiser
              </button>
            </div>
          </div>

          {/* Onglets */}
          <ChapterTabs
            chapters={CHAPTERS}
            activeId={activeChapter}
            onSelect={setActiveChapter}
          />

          {/* Toolbar */}
          <Toolbar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            hideCompleted={hideCompleted}
            onToggleHideCompleted={() => setHideCompleted(prev => !prev)}
            onExpandAll={expandAll}
            onCollapseAll={collapseAll}
          />

          {/* Layout 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:items-start">
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-1 mb-3">
                Histoire principale
              </p>
              {storySection.map(section => (
                <Section key={section.id} section={section} {...sectionProps(section.id)} />
              ))}
            </div>
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-1 mb-3">
                Contenu secondaire
              </p>
              {secondarySections.map(section => (
                <Section key={section.id} section={section} {...sectionProps(section.id)} />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}