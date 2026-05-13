/* global React, ReactDOM, TopicPage, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle */
// app.jsx — composes the topic page into a design_canvas with mobile + desktop
// artboards, applies global tweaks, wraps in browser/iOS frames.

const { useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "density": "regular",
  "motion": "regular",
  "personality": "studious"
}/*EDITMODE-END*/;

// ─────────────────────────────────────────────
// iPhone-ish bezel (kept simple — we're not using ios_frame to allow
// a slimmer presentation inside a canvas card)
// ─────────────────────────────────────────────
function PhoneShell({ children, width = 380, height = 800 }) {
  return (
    <div style={{
      width, height,
      background: '#0c0a09',
      borderRadius: 44,
      padding: 10,
      boxShadow: '0 30px 60px -24px rgba(28,25,23,.25), 0 2px 4px rgba(0,0,0,.15), inset 0 0 0 1px rgba(255,255,255,.06)',
      position: 'relative',
    }}>
      {/* Dynamic island */}
      <div style={{
        position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)',
        width: 96, height: 28, borderRadius: 999, background: '#000', zIndex: 10,
      }}/>
      <div style={{
        width: '100%', height: '100%',
        borderRadius: 36, overflow: 'hidden',
        background: 'var(--paper)',
        position: 'relative',
      }}>
        {/* Status bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 44,
          padding: '14px 28px 0', display: 'flex',
          alignItems: 'flex-start', justifyContent: 'space-between',
          fontSize: 13, fontWeight: 600, color: 'var(--ink)',
          zIndex: 6, pointerEvents: 'none',
        }} className="mono">
          <span>9:41</span>
          <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }}>
            <svg width="16" height="10" viewBox="0 0 16 10"><g fill="currentColor"><rect x="0" y="6" width="3" height="4"/><rect x="4" y="4" width="3" height="6"/><rect x="8" y="2" width="3" height="8"/><rect x="12" y="0" width="3" height="10"/></g></svg>
            <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="0" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="2" y="2" width="13" height="6" fill="currentColor"/><rect x="19" y="3" width="2" height="4" rx=".6" fill="currentColor"/></svg>
          </span>
        </div>
        <div style={{ paddingTop: 44, height: '100%', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Desktop browser chrome
// ─────────────────────────────────────────────
function BrowserShell({ children, width = 1180, height = 760 }) {
  return (
    <div style={{
      width, height, borderRadius: 14, overflow: 'hidden',
      background: 'var(--paper)',
      border: '.5px solid var(--rule)',
      boxShadow: '0 30px 60px -24px rgba(28,25,23,.18), 0 2px 4px rgba(0,0,0,.05)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{
        height: 38, padding: '0 12px',
        background: 'var(--paper-2)',
        borderBottom: '.5px solid var(--rule)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ed6a5e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#f4bf4f' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#62c554' }} />
        </span>
        <div style={{
          flex: 1, height: 22, borderRadius: 6,
          background: 'var(--paper)', border: '.5px solid var(--rule)',
          display: 'flex', alignItems: 'center', padding: '0 10px',
          fontSize: 11.5, color: 'var(--ink-3)',
        }} className="mono">
          govtstudy.org/polity/legislative-process/how-a-bill-becomes-law
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Desktop topic layout — sidebar + main (uses same shared components)
// ─────────────────────────────────────────────
function DesktopTopicLayout() {
  const [tab, setTab] = React.useState('concept');
  const [idx, setIdx] = React.useState(2);
  const [playing, setPlaying] = React.useState(false);
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'grid', gridTemplateColumns: '260px 1fr 320px',
      background: 'var(--paper)',
      minHeight: 0,
    }}>
      {/* Left rail: topic outline */}
      <aside style={{
        borderRight: '.5px solid var(--rule)',
        padding: '20px 18px',
        background: 'var(--paper-2)',
        overflowY: 'auto',
      }}>
        <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Polity / Legislative Process</div>
        <h2 style={{ fontSize: 17, fontWeight: 800, margin: '4px 0 14px', letterSpacing: '-.01em' }}>Module: Parliament</h2>
        {[
          { t: 'Composition of Parliament', d: false },
          { t: 'How a Bill becomes a Law', d: 'active' },
          { t: 'Money Bills vs Financial Bills', d: false },
          { t: 'Joint Sittings (Art. 108)', d: false },
          { t: 'Anti-Defection Law', d: false },
          { t: 'Parliamentary Committees', d: false },
        ].map((row) => (
          <div key={row.t} style={{
            padding: '8px 10px', borderRadius: 8, marginBottom: 2,
            background: row.d === 'active' ? 'var(--paper)' : 'transparent',
            border: row.d === 'active' ? '.5px solid var(--rule)' : '.5px solid transparent',
            display: 'flex', gap: 8, alignItems: 'center',
            fontSize: 13, color: row.d === 'active' ? 'var(--ink)' : 'var(--ink-2)',
            fontWeight: row.d === 'active' ? 700 : 500,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999,
              background: row.d === 'active' ? 'var(--subj-polity)' : 'var(--rule-2)'
            }}/>
            {row.t}
          </div>
        ))}
        <div style={{
          marginTop: 18, padding: 12, borderRadius: 12,
          background: 'color-mix(in oklch, var(--indigo-600) 6%, var(--paper))',
          border: '.5px solid color-mix(in oklch, var(--indigo-600) 18%, transparent)',
        }}>
          <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--indigo-700)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Streak</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
            <span className="mono" style={{ fontSize: 28, fontWeight: 800, color: 'var(--indigo-700)' }}>07</span>
            <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>days</span>
          </div>
          <div style={{ display: 'flex', gap: 3, marginTop: 6 }}>
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i} style={{ flex: 1, height: 5, borderRadius: 2, background: 'var(--indigo-600)' }}/>
            ))}
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <header style={{
          padding: '18px 28px 14px',
          borderBottom: '.5px solid var(--rule)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <span style={{ '--subj': 'var(--subj-polity)', '--subj-ink': 'var(--subj-polity-ink)' }} className="subj-pill">
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--subj-polity)' }} />
              Polity
            </span>
            <span className="tag">SSC CGL</span>
            <span className="tag">UPSC CSE</span>
            <span className="tag">IBPS PO</span>
            <span className="tag">RRB NTPC</span>
          </div>
          <h1 style={{
            margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: '-.025em',
            lineHeight: 1.05,
          }}>How a Bill becomes a Law</h1>
          <div style={{ marginTop: 8, fontSize: 13, color: 'var(--ink-3)', display: 'flex', gap: 12, alignItems: 'center' }}>
            <span>8 steps · ~6 min visualizer</span>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--ink-4)' }} />
            <span>Appeared 41× in past papers (2014–2024)</span>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--ink-4)' }} />
            <span>Source: <span className="mono">PRSIndia · Parliament of India</span></span>
          </div>
        </header>
        <window.TabBar tab={tab} setTab={setTab} />
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
          {tab === 'concept'  && <window.ConceptTab idx={idx} setIdx={setIdx} playing={playing} setPlaying={setPlaying} />}
          {tab === 'tricks'   && <window.TricksTab />}
          {tab === 'problems' && <window.ProblemsTab />}
        </div>
      </main>

      {/* Right rail: at-a-glance + step jumper */}
      <aside style={{
        borderLeft: '.5px solid var(--rule)',
        padding: '20px 18px',
        overflowY: 'auto',
        background: 'var(--paper)',
      }}>
        <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Steps</div>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {window.BILL_STEPS.map((s, i) => {
            const active = i === idx;
            const done = i < idx;
            return (
              <button key={s.id} onClick={() => setIdx(i)} style={{
                textAlign: 'left', padding: '8px 10px', borderRadius: 8,
                border: '.5px solid', borderColor: active ? 'color-mix(in oklch, var(--subj-polity) 30%, transparent)' : 'transparent',
                background: active ? 'color-mix(in oklch, var(--subj-polity) 7%, var(--paper))' : 'transparent',
                cursor: 'pointer', display: 'flex', gap: 10, alignItems: 'flex-start',
              }}>
                <span className="mono" style={{
                  width: 18, height: 18, borderRadius: 999,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: done ? 'var(--subj-polity)' : active ? 'var(--subj-polity)' : 'var(--rule)',
                  color: '#fff', fontSize: 10, fontWeight: 700, flex: 'none', marginTop: 1,
                }}>{i + 1}</span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <span style={{ fontSize: 12.5, fontWeight: active ? 700 : 500, color: 'var(--ink)' }}>{s.title}</span>
                  <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{s.tag}</span>
                </span>
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

// ─────────────────────────────────────────────
// Visual language card — for the design canvas
// ─────────────────────────────────────────────
function LanguageCard() {
  return (
    <div style={{
      width: 760, padding: '28px 28px 20px',
      background: 'var(--paper)',
      borderRadius: 14, border: '.5px solid var(--rule)',
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>
      <div>
        <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.08em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>Visual Language</div>
        <h2 style={{ margin: '4px 0 0', fontSize: 26, fontWeight: 800, letterSpacing: '-.02em' }}>Studious-playful · concept-first</h2>
        <p style={{ margin: '6px 0 0', color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.55, maxWidth: 580 }}>
          Inter + JetBrains Mono. Warm paper neutrals. Subject-colored accents, never decoration.
          Diagrams are geometric (chambers, lanes, dashed connectors) — no characters, no stock photography.
          Every animation has a still-frame fallback for <span className="mono">prefers-reduced-motion</span>.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 18 }}>
        {/* Type scale */}
        <div>
          <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>Type scale · Inter</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              { s: 32, w: 800, t: 'Display · 32/800' },
              { s: 24, w: 800, t: 'H1 · 24/800' },
              { s: 18, w: 700, t: 'H2 · 18/700' },
              { s: 14, w: 500, t: 'Body · 14/500' },
              { s: 11, w: 600, t: 'Mono · 11/600 (JetBrains)' , mono: true },
            ].map((r, i) => (
              <div key={i} className={r.mono ? 'mono' : ''} style={{ fontSize: r.s, fontWeight: r.w, letterSpacing: r.s >= 24 ? '-.02em' : 0 }}>
                {r.t}
              </div>
            ))}
          </div>
        </div>

        {/* Subject palette */}
        <div>
          <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>Subjects</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              ['Quant',     'var(--subj-quant)',     'var(--subj-quant-ink)'],
              ['Reasoning', 'var(--subj-reasoning)', 'var(--subj-reasoning-ink)'],
              ['Polity',    'var(--subj-polity)',    'var(--subj-polity-ink)'],
              ['History',   'var(--subj-history)',   'var(--subj-history-ink)'],
              ['Geography', 'var(--subj-geography)', 'var(--subj-geography-ink)'],
              ['Economics', 'var(--subj-economics)', 'var(--subj-economics-ink)'],
              ['Science',   'var(--subj-science)',   'var(--subj-science-ink)'],
            ].map(([n, c, ink]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 18, height: 18, borderRadius: 5, background: c, border: '.5px solid var(--rule)' }}/>
                <span style={{ fontSize: 12, fontWeight: 600, minWidth: 70 }}>{n}</span>
                <span className="mono" style={{ fontSize: 10.5, color: ink }}>{n === 'History' ? '*ink-darkened*' : ''}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Motion principles */}
        <div>
          <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 8 }}>Motion</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
            <div><b>Concept first</b> — motion explains state changes, never decorates.</div>
            <div><b>Travel</b> — content moves through space (e.g. Bill between chambers).</div>
            <div><b>Tally</b> — numbers count up to anchor scale.</div>
            <div><b>Stamp</b> — terminal, satisfying confirmation.</div>
            <div className="mono" style={{ marginTop: 4, color: 'var(--ink-3)' }}>
              fast 220ms · base 380ms · slow 700ms<br/>
              ease (.22,.61,.36,1)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Root app
// ─────────────────────────────────────────────
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffectApp(() => {
    const root = document.documentElement;
    root.dataset.theme = t.theme;
    root.dataset.density = t.density;
    root.dataset.motion = t.motion;
    root.dataset.personality = t.personality;
  }, [t.theme, t.density, t.motion, t.personality]);

  return (
    <>
      <window.DesignCanvas>
        <window.DCSection id="visual-language" title="Visual Language" subtitle="What we&rsquo;re committing to before any pixels go to staging.">
          <window.DCArtboard id="lang" label="Foundation" width={760} height={500}>
            <LanguageCard />
          </window.DCArtboard>
        </window.DCSection>

        <window.DCSection id="topic-mobile" title="Topic page · mobile" subtitle="Concept / Tricks / Problems. Tap into any tab. Open fullscreen to interact.">
          <window.DCArtboard id="mobile-concept" label="Concept · step 3 of 8" width={400} height={820}>
            <PhoneShell width={400} height={820}>
              <TopicPage height={820 - 44 - 20} />
            </PhoneShell>
          </window.DCArtboard>
          <window.DCArtboard id="mobile-tricks" label="Tricks" width={400} height={820}>
            <PhoneShell width={400} height={820}>
              <MobileSingleTab tab="tricks" />
            </PhoneShell>
          </window.DCArtboard>
          <window.DCArtboard id="mobile-problems" label="Problems · answered" width={400} height={820}>
            <PhoneShell width={400} height={820}>
              <MobileSingleTab tab="problems" />
            </PhoneShell>
          </window.DCArtboard>
        </window.DCSection>

        <window.DCSection id="topic-desktop" title="Topic page · desktop" subtitle="Three-column adaptation. The visualizer remains the focal point.">
          <window.DCArtboard id="desktop-concept" label="Desktop · 1280" width={1200} height={780}>
            <BrowserShell width={1200} height={780}>
              <DesktopTopicLayout />
            </BrowserShell>
          </window.DCArtboard>
        </window.DCSection>

        <window.DCSection id="kit" title="Component kit" subtitle="Reusable atoms used across every module.">
          <window.DCArtboard id="kit-step" label="Step controller" width={400} height={120}>
            <KitStepController />
          </window.DCArtboard>
          <window.DCArtboard id="kit-mcq" label="MCQ states" width={400} height={520}>
            <KitMCQStates />
          </window.DCArtboard>
          <window.DCArtboard id="kit-bill" label="Bill icon · 4 stages" width={400} height={220}>
            <KitBillStages />
          </window.DCArtboard>
        </window.DCSection>
      </window.DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Personality" />
        <TweakRadio label="Tone" value={t.personality}
          options={['studious', 'editorial', 'gamelike']}
          onChange={(v) => setTweak('personality', v)} />
        <TweakSection label="Theme" />
        <TweakRadio label="Theme" value={t.theme}
          options={['light', 'dark']}
          onChange={(v) => setTweak('theme', v)} />
        <TweakSection label="Density" />
        <TweakRadio label="Density" value={t.density}
          options={['compact', 'regular', 'comfy']}
          onChange={(v) => setTweak('density', v)} />
        <TweakSection label="Motion" />
        <TweakRadio label="Intensity" value={t.motion}
          options={['subtle', 'regular', 'lively']}
          onChange={(v) => setTweak('motion', v)} />
      </TweaksPanel>
    </>
  );
}

// ─────────────────────────────────────────────
// Mobile single-tab convenience (so canvas can show all three)
// ─────────────────────────────────────────────
function MobileSingleTab({ tab }) {
  const [t, setT] = React.useState(tab);
  const [idx, setIdx] = React.useState(2);
  const [playing, setPlaying] = React.useState(false);
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      background: 'var(--paper)',
    }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <window.TopicHeader />
        <window.TabBar tab={t} setTab={setT} />
        {t === 'concept'  && <window.ConceptTab idx={idx} setIdx={setIdx} playing={playing} setPlaying={setPlaying} />}
        {t === 'tricks'   && <window.TricksTab />}
        {t === 'problems' && <PreAnsweredProblems />}
      </div>
    </div>
  );
}

function PreAnsweredProblems() {
  // Render Problems with the correct answer pre-selected
  const PT = window.ProblemsTab;
  // We render the actual tab — initial state has nothing picked.
  // To show the "answered" variant we fake a click after mount.
  React.useEffect(() => {
    const t = setTimeout(() => {
      const btn = document.querySelectorAll('[data-mock-pre-answer] button')[1];
      if (btn) btn.click();
    }, 100);
    return () => clearTimeout(t);
  }, []);
  return <div data-mock-pre-answer><PT /></div>;
}

// ─────────────────────────────────────────────
// Component kit cards
// ─────────────────────────────────────────────
function KitStepController() {
  const [idx, setIdx] = React.useState(3);
  const [playing, setPlaying] = React.useState(false);
  return (
    <div style={{ width: '100%', height: '100%', padding: 12, background: 'var(--paper-2)', borderRadius: 14, overflow: 'hidden' }}>
      <window.StepController idx={idx} setIdx={setIdx} playing={playing} setPlaying={setPlaying} total={8} />
    </div>
  );
}

function KitMCQStates() {
  return (
    <div style={{ width: '100%', height: '100%', padding: 14, background: 'var(--paper-2)', borderRadius: 14, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {[
        { state: 'idle', label: 'A · idle' },
        { state: 'hover', label: 'B · focused' },
        { state: 'correct', label: 'C · correct' },
        { state: 'wrong', label: 'D · wrong' },
      ].map((s) => {
        const border = s.state === 'correct' ? '#16a34a' : s.state === 'wrong' ? '#dc2626' : s.state === 'hover' ? 'var(--ink)' : 'var(--rule-2)';
        const bg = s.state === 'correct' ? '#f0fdf4' : s.state === 'wrong' ? '#fef2f2' : 'var(--paper)';
        return (
          <div key={s.state} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px', borderRadius: 12,
            border: `1.4px solid ${border}`, background: bg,
          }}>
            <span className="mono" style={{
              width: 22, height: 22, borderRadius: 999,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700,
              background: s.state === 'correct' ? '#16a34a' : s.state === 'wrong' ? '#dc2626' : 'var(--paper-2)',
              color: ['correct','wrong'].includes(s.state) ? '#fff' : 'var(--ink-3)',
            }}>{s.state === 'correct' ? '✓' : s.state === 'wrong' ? '✕' : 'A'}</span>
            <span style={{ fontSize: 13.5, fontWeight: 500, flex: 1 }}>14 days</span>
            <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function KitBillStages() {
  const stages = [
    { label: 'Drafted', stamped: false, t: 0 },
    { label: 'In Parliament', stamped: false, t: 1 },
    { label: 'With President', stamped: false, t: 2 },
    { label: 'Act', stamped: true, t: 3 },
  ];
  // BillIcon is scoped to bill-visualizer.jsx so we recreate a mini version here
  return (
    <div style={{
      width: '100%', height: '100%', padding: 14, borderRadius: 14,
      background: 'var(--paper-2)',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
      alignItems: 'center',
    }}>
      {stages.map((s, i) => (
        <div key={i} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          padding: 12, borderRadius: 12,
          background: 'var(--paper)', border: '.5px solid var(--rule)',
        }}>
          <div style={{ filter: `drop-shadow(0 4px 6px rgba(28,25,23,.12))` }}>
            <window.MiniBill stamped={s.stamped} progress={s.t} />
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink)' }}>{s.label}</div>
          <div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-3)', letterSpacing: '.06em' }}>STAGE {i + 1}/4</div>
        </div>
      ))}
    </div>
  );
}

window.App = App;
window.MobileSingleTab = MobileSingleTab;

// Mini Bill helper — re-uses the SVG ratio from the visualizer
window.MiniBill = function ({ stamped, progress }) {
  const tints = ['#9ca3af', '#fbbf24', '#fb923c', '#16a34a'];
  return (
    <svg width="40" height="48" viewBox="0 0 40 48">
      <defs>
        <linearGradient id={`g-${progress}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdfbf3"/>
          <stop offset="1" stopColor="#f1ecd9"/>
        </linearGradient>
      </defs>
      <path d="M4 3 L30 3 L36 9 L36 45 L4 45 Z" fill={`url(#g-${progress})`} stroke="#2d2a25" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M30 3 L30 9 L36 9" fill="none" stroke="#2d2a25" strokeWidth="1.2" />
      <rect x="9"  y="15" width="18" height="1.6" fill="#2d2a25" opacity=".5" />
      <rect x="9"  y="20" width="22" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="9"  y="25" width="14" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="9"  y="30" width="20" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="9"  y="35" width="11" height="1.6" fill="#2d2a25" opacity=".4" />
      <rect x="22" y="-2" width="5" height="14" fill={tints[progress]} />
      <path d="M22 12 L24.5 9 L27 12 Z" fill={tints[progress]} />
      {stamped && (
        <g transform="translate(20,30) rotate(-14)">
          <circle r="9" fill="none" stroke="#dc2626" strokeWidth="1.4" />
          <text textAnchor="middle" y="-1" fill="#dc2626" fontSize="4.2" fontWeight="800" fontFamily="JetBrains Mono">ASSENT</text>
          <text textAnchor="middle" y="4" fill="#dc2626" fontSize="3" fontFamily="JetBrains Mono">PRESIDENT</text>
        </g>
      )}
    </svg>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
