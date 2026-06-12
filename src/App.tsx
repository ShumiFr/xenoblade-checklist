import { useState, useMemo } from 'react';
import { CHAPTERS_DATA } from './data/index';
import { Sidebar } from './components/Sidebar';
import { Header, ChapterTabs } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { Section } from './components/Section';
import { AuthGate } from './components/AuthGate';
import { useChecklist } from './hooks/useChecklist';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user, loading, signInWithEmail, signOut } = useAuth();
  const [activeChapter, setActiveChapter] = useState(1);
  const [query, setQuery] = useState('');

  const chapter = CHAPTERS_DATA.find(c => c.id === activeChapter) ?? CHAPTERS_DATA[0];

  const { checked, open, hideCompleted, toggle, toggleOpen, setAll, toggleHide, reset } =
    useChecklist(user?.id, activeChapter);

  const q = query.trim().toLowerCase();

  const { done, total, percent, isComplete } = useMemo(() => {
    let d = 0, t = 0;
    chapter.modules.forEach(m => m.items.forEach(it => { t++; if (checked[it.id]) d++; }));
    return { done: d, total: t, percent: t ? Math.round((d / t) * 100) : 0, isComplete: t > 0 && d === t };
  }, [checked, chapter]);

  const hasResults = (id: string) => {
    if (!q) return true;
    const m = chapter.modules.find(x => x.id === id);
    return m?.items.some(it =>
      (it.label + ' ' + (it.desc || '') + ' ' + (it.tags || []).map(t => t.text).join(' '))
        .toLowerCase().includes(q)
    ) ?? false;
  };

  const leftModules = chapter.modules.filter(m => m.col === 'left' && hasResults(m.id));
  const rightModules = chapter.modules.filter(m => m.col === 'right' && hasResults(m.id));
  const allIds = chapter.modules.map(m => m.id);

  const sectionProps = (id: string) => ({
    checked, isOpen: !!open[id],
    onToggleOpen: toggleOpen, onToggleItem: toggle,
    query, hideCompleted,
  });

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'var(--bg)', color: 'var(--dim)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      Chargement…
    </div>
  );

  if (!user) return <AuthGate onSignIn={signInWithEmail} />;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'radial-gradient(1200px 500px at 100% -140px, var(--accent-soft), transparent 62%), var(--bg)' }}>
      <Sidebar userEmail={user.email} onSignOut={signOut} />
      <main style={{ flex: 1, minWidth: 0 }}>
        <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '34px 36px 90px' }}>

          <Header
            percent={percent} done={done} total={total}
            isComplete={isComplete} onReset={reset}
            title={chapter.title} subtitle={chapter.subtitle}
          />

          <ChapterTabs active={activeChapter} onSelect={id => { setActiveChapter(id); setQuery(''); }} />

          <Toolbar query={query} onSearch={setQuery} hideCompleted={hideCompleted}
            onToggleHide={toggleHide} onExpandAll={() => setAll(allIds, true)} onCollapseAll={() => setAll(allIds, false)} />

          {chapter.modules.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--faint)', fontSize: '15px' }}>
              Ce chapitre sera disponible prochainement.
            </div>
          ) : (
            <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--faint)', fontWeight: 700, margin: '0 0 14px 2px' }}>
                  Histoire principale
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {leftModules.map(m => <Section key={m.id} module={m} {...sectionProps(m.id)} />)}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--faint)', fontWeight: 700, margin: '0 0 14px 2px' }}>
                  Contenu secondaire
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {rightModules.map(m => <Section key={m.id} module={m} {...sectionProps(m.id)} />)}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}