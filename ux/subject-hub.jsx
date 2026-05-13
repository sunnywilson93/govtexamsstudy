/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio */
// subject-hub.jsx — Polity subject hub: mobile + desktop, in one design_canvas.

const { useState: useStateSH, useEffect: useEffectSH } = React;

const TWEAK_DEFAULTS_SH = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "density": "regular",
  "motion": "regular",
  "personality": "studious"
}/*EDITMODE-END*/;

// ─── Modules in Polity ──────────────────────
const MODULES = [
  { id: 'preamble',    title: 'Preamble & Constitution', n: 8,  done: 8,  icon: 'pre' },
  { id: 'rights',      title: 'Fundamental Rights',      n: 14, done: 11, icon: 'rights' },
  { id: 'dpsp',        title: 'DPSP & Duties',           n: 7,  done: 4,  icon: 'dpsp' },
  { id: 'parliament',  title: 'Parliament',              n: 12, done: 5,  icon: 'parl', current: true },
  { id: 'executive',   title: 'Executive',               n: 10, done: 0,  icon: 'exec' },
  { id: 'judiciary',   title: 'Judiciary',               n: 9,  done: 0,  icon: 'jud' },
  { id: 'federalism',  title: 'Centre–State Relations',  n: 6,  done: 0,  icon: 'fed' },
  { id: 'local',       title: 'Local Government',        n: 5,  done: 0,  icon: 'local' },
];

const PARLIAMENT_TOPICS = [
  { id: 'comp',     title: 'Composition of Parliament',    article: 'Art. 79–88', mins: 5, level: 'Basics',     status: 'done', exam: ['SSC CGL','UPSC'] },
  { id: 'bill',     title: 'How a Bill becomes a Law',     article: 'Art. 107–111', mins: 6, level: 'Core',     status: 'active', exam: ['UPSC','IBPS PO','SSC'] },
  { id: 'money',    title: 'Money Bills vs Financial Bills', article: 'Art. 110',  mins: 4, level: 'Compare',    status: 'next', exam: ['UPSC CSE','RBI'] },
  { id: 'joint',    title: 'Joint Sittings',               article: 'Art. 108', mins: 3, level: 'Edge case',     status: 'todo', exam: ['UPSC'] },
  { id: 'antidef',  title: 'Anti-Defection Law',           article: '10th Sched.', mins: 5, level: 'Core',       status: 'todo', exam: ['UPSC','State PSC'] },
  { id: 'sessions', title: 'Sessions, Quorum & Adjournment', article: 'Art. 85', mins: 3, level: 'Basics',      status: 'todo', exam: ['SSC CGL'] },
  { id: 'comm',     title: 'Parliamentary Committees',     article: 'Various',   mins: 5, level: 'Core',         status: 'todo', exam: ['UPSC CSE'] },
  { id: 'priv',     title: 'Privileges of Members',        article: 'Art. 105',  mins: 4, level: 'Edge case',    status: 'todo', exam: ['UPSC'] },
];

// ─── Mini topic glyph ──────────────────────
function TopicMini({ topic }) {
  // Simple per-topic geometric sketch in subject color
  const c = 'var(--subj-polity)';
  switch (topic.id) {
    case 'bill':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48" fill="none">
          <rect x="2" y="4" width="14" height="40" rx="2" stroke={c} strokeWidth="1.4" />
          <rect x="23" y="4" width="14" height="40" rx="2" stroke={c} strokeWidth="1.4" />
          <rect x="44" y="4" width="14" height="40" rx="2" stroke={c} strokeWidth="1.4" />
          <circle cx="9"  cy="38" r="2.2" fill={c} />
          <circle cx="30" cy="24" r="2.2" fill={c} />
          <circle cx="51" cy="10" r="2.2" fill={c} />
          <path d="M11 38 L28 24" stroke={c} strokeWidth="1.2" strokeDasharray="2 3" />
          <path d="M32 24 L49 10" stroke={c} strokeWidth="1.2" strokeDasharray="2 3" />
        </svg>
      );
    case 'comp':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48"><g fill="none" stroke={c} strokeWidth="1.4">
          <path d="M6 38 A24 24 0 0 1 54 38" />
          <path d="M12 38 A18 18 0 0 1 48 38" />
          <path d="M18 38 A12 12 0 0 1 42 38" />
          <line x1="6" y1="38" x2="54" y2="38" />
        </g></svg>
      );
    case 'money':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48"><g fill="none" stroke={c} strokeWidth="1.4">
          <rect x="6" y="8" width="22" height="32" rx="2" />
          <rect x="32" y="8" width="22" height="32" rx="2" strokeDasharray="3 3"/>
          <text x="17" y="29" fontSize="9" fill={c} stroke="none" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">M</text>
          <text x="43" y="29" fontSize="9" fill={c} stroke="none" fontFamily="JetBrains Mono" textAnchor="middle" fontWeight="700">F</text>
        </g></svg>
      );
    case 'joint':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48"><g fill="none" stroke={c} strokeWidth="1.4">
          <circle cx="20" cy="24" r="10" />
          <circle cx="40" cy="24" r="10" />
        </g></svg>
      );
    case 'antidef':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48"><g fill="none" stroke={c} strokeWidth="1.4">
          <path d="M8 38 L20 14 L32 28 L44 8" />
          <path d="M44 8 L44 16 M44 8 L36 8" />
          <circle cx="20" cy="14" r="1.8" fill={c}/>
          <circle cx="32" cy="28" r="1.8" fill={c}/>
        </g></svg>
      );
    case 'sessions':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48"><g fill="none" stroke={c} strokeWidth="1.4">
          <circle cx="30" cy="24" r="14" />
          <path d="M30 14 L30 24 L38 28" />
        </g></svg>
      );
    case 'comm':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48"><g fill="none" stroke={c} strokeWidth="1.4">
          <rect x="6" y="14" width="14" height="20" rx="2"/>
          <rect x="23" y="8" width="14" height="32" rx="2"/>
          <rect x="40" y="18" width="14" height="14" rx="2"/>
        </g></svg>
      );
    case 'priv':
      return (
        <svg width="60" height="48" viewBox="0 0 60 48"><g fill="none" stroke={c} strokeWidth="1.4">
          <path d="M30 6 L46 14 L42 32 L30 42 L18 32 L14 14 Z" />
          <path d="M24 22 L29 27 L37 18" />
        </g></svg>
      );
    default: return null;
  }
}

function ModuleChip({ m }) {
  const active = m.current;
  const pct = Math.round((m.done / m.n) * 100);
  return (
    <button style={{
      padding: '10px 12px', borderRadius: 12,
      border: active ? '1px solid color-mix(in oklch, var(--subj-polity) 40%, transparent)' : '.5px solid var(--rule)',
      background: active ? 'color-mix(in oklch, var(--subj-polity) 7%, var(--paper))' : 'var(--paper)',
      cursor: 'pointer', textAlign: 'left',
      display: 'flex', flexDirection: 'column', gap: 6, flex: 'none',
      minWidth: 156,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{m.title}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{
          flex: 1, height: 4, borderRadius: 2,
          background: 'var(--rule)', position: 'relative', overflow: 'hidden',
        }}>
          <span style={{
            position: 'absolute', inset: 0,
            width: `${pct}%`,
            background: pct === 100 ? '#16a34a' : 'var(--subj-polity)',
          }}/>
        </span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{m.done}/{m.n}</span>
      </div>
    </button>
  );
}

function TopicRow({ t }) {
  const status = t.status;
  const dot = {
    done:   { c: '#16a34a', label: 'Done' },
    active: { c: 'var(--subj-polity)', label: 'In progress' },
    next:   { c: 'var(--indigo-600)', label: 'Up next' },
    todo:   { c: 'var(--rule-2)', label: 'To do' },
  }[status];
  return (
    <a href="#" style={{
      display: 'flex', alignItems: 'center', gap: 14,
      padding: '14px var(--pad-x)',
      borderBottom: '.5px solid var(--rule)',
      textDecoration: 'none', color: 'inherit',
      background: status === 'active' ? 'color-mix(in oklch, var(--subj-polity) 4%, var(--paper))' : 'var(--paper)',
      position: 'relative',
    }}>
      {status === 'active' && (
        <span style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
          background: 'var(--subj-polity)',
        }}/>
      )}
      <div style={{
        width: 60, height: 48, borderRadius: 10, flex: 'none',
        background: 'var(--paper-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '.5px solid var(--rule)',
      }}>
        <TopicMini topic={t} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: dot.c }} />
          <span className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{dot.label} · {t.level}</span>
        </div>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-.01em', lineHeight: 1.25 }}>{t.title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--subj-polity-ink)', fontWeight: 600 }}>{t.article}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--ink-4)' }} />
          <span style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>{t.mins} min visualizer</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end', flex: 'none' }}>
        {t.exam.slice(0, 2).map((e) => <span key={e} className="tag">{e}</span>)}
      </div>
    </a>
  );
}

// ─── MOBILE HUB ──────────────────────
function MobileSubjectHub() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper)', overflowY: 'auto' }}>
      {/* Subject hero */}
      <section style={{
        padding: '14px var(--pad-x) 18px',
        background: 'color-mix(in oklch, var(--subj-polity) 10%, var(--paper))',
        position: 'relative', overflow: 'hidden',
        borderBottom: '.5px solid var(--rule)',
      }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: .5, pointerEvents: 'none' }}/>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <button style={{
              width: 34, height: 34, borderRadius: 10, border: 0, background: 'var(--paper)',
              boxShadow: 'var(--sh-1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>govtstudy / subject</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16,
              background: 'var(--paper)', border: '.5px solid color-mix(in oklch, var(--subj-polity) 30%, transparent)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--subj-polity-ink)',
            }}>
              <window.SubjectGlyph id="polity" color="currentColor" size={34} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 30, fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)' }}>Polity</h1>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', marginTop: 2 }}>राजव्यवस्था · Constitution of India</div>
            </div>
          </div>

          <div style={{ marginTop: 14, display: 'flex', gap: 18, fontSize: 12, color: 'var(--ink-2)' }}>
            <span><b className="mono" style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)' }}>71</b><br/>visualizers</span>
            <span><b className="mono" style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)' }}>312</b><br/>problems</span>
            <span><b className="mono" style={{ fontSize: 18, fontWeight: 800, color: '#16a34a' }}>18%</b><br/>complete</span>
          </div>
        </div>
      </section>

      {/* Continue card */}
      <section style={{ padding: '14px var(--pad-x) 4px' }}>
        <a href="#" style={{
          display: 'block', padding: 14, borderRadius: 14,
          background: 'var(--ink)', color: 'var(--paper)', textDecoration: 'none',
          position: 'relative', overflow: 'hidden',
        }}>
          <span className="mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Resume · 2 min left</span>
          <div style={{ margin: '4px 0 4px', fontSize: 18, fontWeight: 800, letterSpacing: '-.015em' }}>How a Bill becomes a Law</div>
          <div style={{ fontSize: 12, color: 'color-mix(in oklch, white 65%, transparent)' }}>You left off at step 3 — Lok Sabha second reading.</div>
          <div style={{
            marginTop: 10, height: 4, borderRadius: 2,
            background: 'color-mix(in oklch, white 12%, transparent)',
            position: 'relative', overflow: 'hidden',
          }}>
            <span style={{ position: 'absolute', inset: 0, width: '38%', background: 'var(--amber-500)' }}/>
          </div>
        </a>
      </section>

      {/* Module chips */}
      <section style={{ paddingTop: 14 }}>
        <div style={{ padding: '0 var(--pad-x)', marginBottom: 10 }}>
          <window.SectionTitle eyebrow="Modules" title="8 modules in Polity" />
        </div>
        <div style={{
          display: 'flex', gap: 10, overflowX: 'auto',
          padding: '0 var(--pad-x) 14px',
          scrollSnapType: 'x mandatory',
        }}>
          {MODULES.map((m) => <div key={m.id} style={{ scrollSnapAlign: 'start' }}><ModuleChip m={m} /></div>)}
          <div style={{ flex: '0 0 8px' }}/>
        </div>
      </section>

      {/* Topic list (Parliament) */}
      <section style={{ paddingTop: 4 }}>
        <div style={{ padding: '6px var(--pad-x) 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div>
            <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--subj-polity-ink)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Parliament · current module</div>
            <h2 style={{ margin: '2px 0 0', fontSize: 18, fontWeight: 800, letterSpacing: '-.015em' }}>12 topics · 5 done</h2>
          </div>
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>41 MIN TOTAL</span>
        </div>
        {PARLIAMENT_TOPICS.map((t) => <TopicRow key={t.id} t={t} />)}
      </section>

      {/* Path to mastery teaser */}
      <section style={{ padding: '18px var(--pad-x) 32px' }}>
        <div style={{
          padding: 16, borderRadius: 16,
          background: 'linear-gradient(135deg, color-mix(in oklch, var(--indigo-600) 9%, var(--paper)), var(--paper))',
          border: '.5px solid var(--rule)',
        }}>
          <span className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--indigo-700)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Path to mastery</span>
          <div style={{ margin: '4px 0 6px', fontSize: 17, fontWeight: 800, letterSpacing: '-.015em' }}>Finish Parliament → unlock the Mock Test</div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-3)', lineHeight: 1.5 }}>7 more topics. ~28 minutes. Then you can take the SSC CGL Parliament sectional — generated from past papers.</div>
        </div>
      </section>
    </div>
  );
}

// ─── DESKTOP HUB ──────────────────────
function DesktopSubjectHub() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper)', overflowY: 'auto' }}>
      <header style={{
        padding: '14px 36px', borderBottom: '.5px solid var(--rule)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 5,
        background: 'color-mix(in oklch, var(--paper) 90%, transparent)',
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
      }}>
        <window.Wordmark size={22} />
        <nav style={{ display: 'flex', gap: 24 }}>
          {['Subjects', 'Current Affairs', 'Practice', 'Dashboard', 'Exam Intel'].map((n, i) => (
            <a key={n} href="#" style={{ fontSize: 13.5, fontWeight: 600, color: i === 0 ? 'var(--ink)' : 'var(--ink-2)', textDecoration: 'none' }}>{n}</a>
          ))}
        </nav>
        <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--amber-700)' }}>🔥 Day 07</span>
      </header>

      {/* Subject hero */}
      <section style={{
        padding: '34px 36px 28px',
        background: 'color-mix(in oklch, var(--subj-polity) 8%, var(--paper))',
        borderBottom: '.5px solid var(--rule)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: .5, pointerEvents: 'none' }}/>
        <div style={{ position: 'relative', display: 'flex', gap: 36, alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-3)' }}>SUBJECT · POLITY · राजव्यवस्था</div>
            <h1 style={{ margin: '6px 0 0', fontSize: 56, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1 }}>
              The Constitution, <span style={{ color: 'var(--subj-polity-ink)' }}>visualized.</span>
            </h1>
            <p style={{ margin: '14px 0 0', fontSize: 16, color: 'var(--ink-2)', maxWidth: 540, lineHeight: 1.5 }}>
              Every article you need for UPSC, SSC and IBPS — taught as an animated step-through.
              No more memorizing Schedules in the dark.
            </p>
          </div>
          <div style={{
            padding: '18px 22px', borderRadius: 16,
            background: 'var(--paper)', border: '.5px solid var(--rule)',
            display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 28,
            boxShadow: 'var(--sh-2)',
          }}>
            <Stat n="71"  l="visualizers" />
            <Stat n="312" l="problems" />
            <Stat n="18%" l="complete" tint="#16a34a" />
          </div>
        </div>
      </section>

      <section style={{ padding: '28px 36px 0', display: 'grid', gridTemplateColumns: '260px 1fr 320px', gap: 28 }}>
        {/* Left: module list */}
        <aside>
          <div className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Modules</div>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {MODULES.map((m) => (
              <button key={m.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 10px', borderRadius: 10, gap: 8,
                background: m.current ? 'color-mix(in oklch, var(--subj-polity) 8%, var(--paper))' : 'transparent',
                border: m.current ? '.5px solid color-mix(in oklch, var(--subj-polity) 30%, transparent)' : '.5px solid transparent',
                cursor: 'pointer', textAlign: 'left',
              }}>
                <span style={{ fontSize: 13, fontWeight: m.current ? 700 : 500, color: 'var(--ink)' }}>{m.title}</span>
                <span className="mono" style={{ fontSize: 10.5, color: m.done === m.n ? '#16a34a' : 'var(--ink-3)' }}>{m.done}/{m.n}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* Middle: topic grid */}
        <main>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--subj-polity-ink)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Module · Parliament</div>
              <h2 style={{ margin: '4px 0 0', fontSize: 28, fontWeight: 800, letterSpacing: '-.025em' }}>12 topics · 5 done</h2>
            </div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>41 MIN · 87 PROBLEMS</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {PARLIAMENT_TOPICS.map((t) => <TopicCard key={t.id} t={t} />)}
          </div>
        </main>

        {/* Right: continue + path */}
        <aside>
          <a href="#" style={{
            display: 'block', padding: 18, borderRadius: 16,
            background: 'var(--ink)', color: 'var(--paper)', textDecoration: 'none',
            position: 'relative', overflow: 'hidden',
          }}>
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Resume · 2 min left</span>
            <div style={{ margin: '6px 0 6px', fontSize: 22, fontWeight: 800, letterSpacing: '-.015em', lineHeight: 1.15 }}>How a Bill becomes a Law</div>
            <div style={{ fontSize: 12.5, color: 'color-mix(in oklch, white 65%, transparent)' }}>Step 3 of 8 — Lok Sabha second reading.</div>
            <div style={{ marginTop: 14, height: 5, borderRadius: 3, background: 'color-mix(in oklch, white 12%, transparent)', position: 'relative', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', inset: 0, width: '38%', background: 'var(--amber-500)' }}/>
            </div>
          </a>
          <div style={{
            marginTop: 14, padding: 16, borderRadius: 14,
            background: 'linear-gradient(135deg, color-mix(in oklch, var(--indigo-600) 9%, var(--paper)), var(--paper))',
            border: '.5px solid var(--rule)',
          }}>
            <span className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--indigo-700)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Path to mastery</span>
            <div style={{ margin: '4px 0 6px', fontSize: 15, fontWeight: 800, letterSpacing: '-.015em' }}>Finish Parliament → unlock the SSC CGL Sectional</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>7 more topics · ~28 minutes</div>
            <div style={{ marginTop: 10, display: 'flex', gap: 3 }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} style={{
                  flex: 1, height: 8, borderRadius: 2,
                  background: i < 5 ? 'var(--subj-polity)' : 'var(--rule)',
                }}/>
              ))}
            </div>
          </div>

          {/* Exam coverage */}
          <div style={{ marginTop: 14, padding: 16, borderRadius: 14, border: '.5px solid var(--rule)', background: 'var(--paper)' }}>
            <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Coverage by exam</div>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { e: 'UPSC CSE',     pct: 92 },
                { e: 'SSC CGL',      pct: 78 },
                { e: 'IBPS PO',      pct: 64 },
                { e: 'State PSC',    pct: 71 },
                { e: 'RRB NTPC',     pct: 55 },
              ].map((r) => (
                <div key={r.e} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                  <span style={{ minWidth: 80, color: 'var(--ink-2)', fontWeight: 600 }}>{r.e}</span>
                  <span style={{ flex: 1, height: 5, borderRadius: 2, background: 'var(--rule)', position: 'relative' }}>
                    <span style={{ position: 'absolute', inset: 0, width: `${r.pct}%`, background: 'var(--subj-polity)' }}/>
                  </span>
                  <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', minWidth: 28, textAlign: 'right' }}>{r.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
      <div style={{ height: 40 }}/>
    </div>
  );
}

function Stat({ n, l, tint }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 30, fontWeight: 800, color: tint || 'var(--ink)', letterSpacing: '-.03em', lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 2 }}>{l}</div>
    </div>
  );
}

function TopicCard({ t }) {
  const status = t.status;
  const dot = {
    done:   { c: '#16a34a', label: 'Done' },
    active: { c: 'var(--subj-polity)', label: 'In progress' },
    next:   { c: 'var(--indigo-600)', label: 'Up next' },
    todo:   { c: 'var(--rule-2)', label: 'To do' },
  }[status];
  return (
    <a href="#" style={{
      display: 'flex', gap: 14, padding: 14, borderRadius: 14,
      background: status === 'active' ? 'color-mix(in oklch, var(--subj-polity) 6%, var(--paper))' : 'var(--paper)',
      border: status === 'active' ? '1px solid color-mix(in oklch, var(--subj-polity) 35%, transparent)' : '.5px solid var(--rule)',
      textDecoration: 'none', color: 'inherit',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        width: 72, height: 56, borderRadius: 10, flex: 'none',
        background: 'var(--paper-2)', border: '.5px solid var(--rule)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <TopicMini topic={t} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: dot.c }} />
          <span className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.06em', textTransform: 'uppercase' }}>{dot.label} · {t.level}</span>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-.01em', lineHeight: 1.25 }}>{t.title}</div>
        <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--subj-polity-ink)', fontWeight: 600 }}>{t.article}</span>
          <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--ink-4)' }} />
          <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>{t.mins} min</span>
          <span style={{ flex: 1 }}/>
          {t.exam.slice(0, 1).map((e) => <span key={e} className="tag">{e}</span>)}
        </div>
      </div>
    </a>
  );
}

// ─── Phone + Browser shells (compact local versions) ──────────────────────
function PhoneShellSH({ children, width = 400, height = 820 }) {
  return (
    <div style={{ width, height, background: '#0c0a09', borderRadius: 44, padding: 10, boxShadow: '0 30px 60px -24px rgba(28,25,23,.25), inset 0 0 0 1px rgba(255,255,255,.06)', position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)', width: 96, height: 28, borderRadius: 999, background: '#000', zIndex: 10 }}/>
      <div style={{ width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden', background: 'var(--paper)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 44, padding: '14px 28px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: 'var(--ink)', zIndex: 6, pointerEvents: 'none' }} className="mono">
          <span>9:41</span>
          <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }}>
            <svg width="16" height="10" viewBox="0 0 16 10"><g fill="currentColor"><rect x="0" y="6" width="3" height="4"/><rect x="4" y="4" width="3" height="6"/><rect x="8" y="2" width="3" height="8"/><rect x="12" y="0" width="3" height="10"/></g></svg>
            <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="0" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="2" y="2" width="13" height="6" fill="currentColor"/><rect x="19" y="3" width="2" height="4" rx=".6" fill="currentColor"/></svg>
          </span>
        </div>
        <div style={{ paddingTop: 44, height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  );
}

function BrowserShellSH({ children, width = 1300, height = 820 }) {
  return (
    <div style={{ width, height, borderRadius: 14, overflow: 'hidden', background: 'var(--paper)', border: '.5px solid var(--rule)', boxShadow: '0 30px 60px -24px rgba(28,25,23,.18)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 38, padding: '0 12px', background: 'var(--paper-2)', borderBottom: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ed6a5e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#f4bf4f' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#62c554' }} />
        </span>
        <div style={{ flex: 1, height: 22, borderRadius: 6, background: 'var(--paper)', border: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: 11.5, color: 'var(--ink-3)' }} className="mono">govtstudy.org/polity</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function SubjectHubApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_SH);
  useEffectSH(() => {
    const root = document.documentElement;
    root.dataset.theme = t.theme;
    root.dataset.density = t.density;
    root.dataset.motion = t.motion;
    root.dataset.personality = t.personality;
  }, [t.theme, t.density, t.motion, t.personality]);

  return (
    <>
      <window.DesignCanvas>
        <window.DCSection id="hub-mobile" title="Subject Hub · mobile" subtitle="Polity. Continue card, module chips, topic list with status dots.">
          <window.DCArtboard id="mob-hub" label="Polity · mobile" width={400} height={820}>
            <PhoneShellSH width={400} height={820}><MobileSubjectHub /></PhoneShellSH>
          </window.DCArtboard>
        </window.DCSection>
        <window.DCSection id="hub-desktop" title="Subject Hub · desktop" subtitle="Three-column. Module rail · topic grid · resume + coverage.">
          <window.DCArtboard id="dsk-hub" label="Polity · desktop" width={1320} height={840}>
            <BrowserShellSH width={1320} height={840}><DesktopSubjectHub /></BrowserShellSH>
          </window.DCArtboard>
        </window.DCSection>
      </window.DesignCanvas>

      <TweaksPanel>
        <TweakSection label="Personality" />
        <TweakRadio label="Tone" value={t.personality} options={['studious', 'editorial', 'gamelike']} onChange={(v) => setTweak('personality', v)} />
        <TweakSection label="Theme" />
        <TweakRadio label="Theme" value={t.theme} options={['light', 'dark']} onChange={(v) => setTweak('theme', v)} />
        <TweakSection label="Density" />
        <TweakRadio label="Density" value={t.density} options={['compact', 'regular', 'comfy']} onChange={(v) => setTweak('density', v)} />
        <TweakSection label="Motion" />
        <TweakRadio label="Intensity" value={t.motion} options={['subtle', 'regular', 'lively']} onChange={(v) => setTweak('motion', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SubjectHubApp />);
