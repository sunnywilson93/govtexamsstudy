/* global React, BillVisualizer, BILL_STEPS */
// topic-page.jsx — full topic page chrome: header, tabs, visualizer area,
// step controller, descriptions, Tricks tab, Problems tab.

const { useState: useStateTP, useEffect: useEffectTP, useRef: useRefTP } = React;

// ─────────────────────────────────────────────
// Icons (inline SVG, Lucide-style strokes)
// ─────────────────────────────────────────────
const Ico = {
  back: (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  bookmark: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  share: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5L8.6 10.5"/></svg>,
  play: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M6 4l14 8-14 8z"/></svg>,
  pause: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>,
  prev: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M19 5v14l-11-7zM5 5h2v14H5z"/></svg>,
  next: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M5 5v14l11-7zM17 5h2v14h-2z"/></svg>,
  reset: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>,
  sparkle: (p) => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/></svg>,
  check: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20 6L9 17l-5-5"/></svg>,
  x: (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M18 6L6 18M6 6l12 12"/></svg>,
};

// ─────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────
function TopicHeader({ compact }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 5,
      padding: '12px var(--pad-x) 10px',
      background: 'color-mix(in oklch, var(--paper) 88%, transparent)',
      backdropFilter: 'blur(14px) saturate(140%)',
      WebkitBackdropFilter: 'blur(14px) saturate(140%)',
      borderBottom: '.5px solid var(--rule)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <button style={btnGhost}><Ico.back /></button>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span className="mono" style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '.06em',
            color: 'var(--ink-3)', textTransform: 'uppercase',
          }}>govtstudy</span>
        </div>
        <div style={{ display: 'flex', gap: 2 }}>
          <button style={btnGhost}><Ico.bookmark /></button>
          <button style={btnGhost}><Ico.share /></button>
        </div>
      </div>

      {!compact && (
        <div style={{ marginTop: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <span style={{ '--subj': 'var(--subj-polity)', '--subj-ink': 'var(--subj-polity-ink)' }} className="subj-pill">
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--subj-polity)' }} />
              Polity
            </span>
            <span className="tag">SSC CGL</span>
            <span className="tag">UPSC</span>
            <span className="tag">IBPS PO</span>
          </div>
          <h1 style={{
            margin: 0, fontSize: 'var(--t-h1)', fontWeight: 800, letterSpacing: '-.02em',
            lineHeight: 1.1, color: 'var(--ink)',
          }}>How a Bill becomes a Law</h1>
          <div style={{
            marginTop: 6, fontSize: 13, color: 'var(--ink-3)',
            display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap'
          }}>
            <span>8 steps</span>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--ink-4)' }} />
            <span>~6 min visualizer</span>
            <span style={{ width: 3, height: 3, borderRadius: 999, background: 'var(--ink-4)' }} />
            <span>Appeared 41× in past papers</span>
          </div>
        </div>
      )}
    </header>
  );
}

const btnGhost = {
  width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  borderRadius: 10, background: 'transparent', border: 0, cursor: 'pointer',
  color: 'var(--ink-2)',
};

// ─────────────────────────────────────────────
// Tabs
// ─────────────────────────────────────────────
function TabBar({ tab, setTab }) {
  const tabs = [
    { id: 'concept',  label: 'Concept',  badge: '8 steps' },
    { id: 'tricks',   label: 'Tricks',   badge: '4' },
    { id: 'problems', label: 'Problems', badge: '12' },
  ];
  return (
    <div style={{
      display: 'flex', gap: 4, padding: '0 var(--pad-x)',
      borderBottom: '.5px solid var(--rule)',
      background: 'var(--paper)',
      position: 'sticky', top: 0, zIndex: 4,
    }}>
      {tabs.map((t) => {
        const active = tab === t.id;
        return (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            position: 'relative', padding: '12px 6px',
            border: 0, background: 'transparent', cursor: 'pointer',
            color: active ? 'var(--ink)' : 'var(--ink-3)',
            fontSize: 14, fontWeight: active ? 700 : 500,
            display: 'flex', alignItems: 'center', gap: 6,
            letterSpacing: '-.005em',
          }}>
            {t.label}
            <span className="mono" style={{
              fontSize: 10, padding: '2px 5px', borderRadius: 4,
              background: active ? 'color-mix(in oklch, var(--subj-polity) 14%, var(--paper))' : 'var(--paper-2)',
              color: active ? 'var(--subj-polity-ink)' : 'var(--ink-3)',
              fontWeight: 700,
            }}>{t.badge}</span>
            {active && (
              <span style={{
                position: 'absolute', left: 0, right: 0, bottom: -.5, height: 2,
                background: 'var(--subj-polity)', borderRadius: 2,
              }}/>
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// Step controller (Prev / Play / Next / Reset + progress dots)
// ─────────────────────────────────────────────
function StepController({ idx, setIdx, playing, setPlaying, total }) {
  useEffectTP(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      if (idx < total - 1) setIdx(idx + 1);
      else setPlaying(false);
    }, 2200);
    return () => clearTimeout(t);
  }, [idx, playing, total]);

  return (
    <div style={{
      padding: '12px var(--pad-x)',
      borderTop: '.5px solid var(--rule)',
      background: 'var(--paper)',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      {/* progress dots */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => { setPlaying(false); setIdx(i); }} style={{
            flex: 1, height: 4, borderRadius: 2, border: 0, padding: 0, cursor: 'pointer',
            background: i <= idx ? 'var(--subj-polity)' : 'var(--rule)',
            transition: 'background var(--dur-fast)',
          }}/>
        ))}
        <span className="mono" style={{
          fontSize: 11, color: 'var(--ink-3)', minWidth: 32, textAlign: 'right'
        }}>{String(idx + 1).padStart(2,'0')}/{String(total).padStart(2,'0')}</span>
      </div>
      {/* buttons */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button onClick={() => { setPlaying(false); setIdx(Math.max(0, idx - 1)); }} style={ctrlBtn} disabled={idx === 0}>
          <Ico.prev /> <span>Prev</span>
        </button>
        <button onClick={() => setPlaying(!playing)} style={{
          ...ctrlBtn,
          background: 'var(--ink)', color: 'var(--paper)',
          flex: 1.4,
        }}>
          {playing ? <Ico.pause /> : <Ico.play />}
          <span>{playing ? 'Pause' : idx === total - 1 ? 'Replay' : 'Play'}</span>
        </button>
        <button onClick={() => { setPlaying(false); setIdx(Math.min(total - 1, idx + 1)); }} style={ctrlBtn} disabled={idx === total - 1}>
          <Ico.next /> <span>Next</span>
        </button>
        <button onClick={() => { setPlaying(false); setIdx(0); }} style={{ ...ctrlBtn, flex: 'none', minWidth: 36 }}>
          <Ico.reset />
        </button>
      </div>
    </div>
  );
}
const ctrlBtn = {
  flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
  height: 38, padding: '0 10px', borderRadius: 10,
  border: '.5px solid var(--rule-2)', background: 'var(--paper)',
  color: 'var(--ink)', fontSize: 13, fontWeight: 600, cursor: 'pointer',
};

// ─────────────────────────────────────────────
// Fact card (Did you know?)
// ─────────────────────────────────────────────
function FactCard({ fact }) {
  return (
    <div style={{
      margin: 'var(--pad-x)',
      borderRadius: 'var(--r-md)',
      padding: '12px 14px',
      background: 'color-mix(in oklch, var(--amber-500) 8%, var(--paper))',
      border: '.5px solid color-mix(in oklch, var(--amber-500) 30%, transparent)',
      display: 'flex', gap: 10, alignItems: 'flex-start',
    }}>
      <div style={{
        width: 24, height: 24, borderRadius: 8, flex: 'none',
        background: 'var(--amber-500)', color: '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}><Ico.sparkle /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <div className="mono" style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.08em',
          color: 'var(--amber-700)', textTransform: 'uppercase',
        }}>Did you know?</div>
        <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{fact}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CONCEPT TAB
// ─────────────────────────────────────────────
function ConceptTab({ idx, setIdx, playing, setPlaying }) {
  const total = BILL_STEPS.length;
  const step = BILL_STEPS[idx];
  return (
    <div>
      <div style={{ padding: 'var(--pad-x)' }}>
        <BillVisualizer stepIdx={idx} playing={playing} />
      </div>
      <FactCard fact={step.fact} />
      <StepController idx={idx} setIdx={setIdx} playing={playing} setPlaying={setPlaying} total={total} />
    </div>
  );
}

// ─────────────────────────────────────────────
// TRICKS TAB — mnemonics + key articles
// ─────────────────────────────────────────────
function TricksTab() {
  return (
    <div style={{ padding: 'var(--pad-x)', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Mnemonic */}
      <div style={{
        borderRadius: 'var(--r-lg)', padding: 16,
        background: 'linear-gradient(135deg, var(--indigo-50), color-mix(in oklch, var(--amber-500) 6%, var(--paper)))',
        border: '.5px solid var(--rule)',
      }}>
        <div className="mono" style={{
          fontSize: 10, fontWeight: 700, color: 'var(--indigo-600)',
          letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6,
        }}>Mnemonic · "DI TR PA" </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
          {[
            { l: 'D', w: 'Draft' },
            { l: 'I', w: 'Introduce' },
            { l: 'TR', w: 'Three Readings' },
            { l: 'PA', w: 'President Assent' },
            { l: '✓', w: 'Act' },
          ].map((m, i) => (
            <div key={i} style={{
              padding: '10px 4px', borderRadius: 10, textAlign: 'center',
              background: 'var(--paper)', border: '.5px solid var(--rule)',
            }}>
              <div className="mono" style={{ fontSize: 18, fontWeight: 800, color: 'var(--indigo-700)' }}>{m.l}</div>
              <div style={{ fontSize: 10.5, color: 'var(--ink-3)', marginTop: 2 }}>{m.w}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-2)', marginTop: 10, lineHeight: 1.5 }}>
          <b>Disha Ne Tin Roop Pakde Aap</b> — Hindi memory hook for the four legislative stages plus Act.
        </div>
      </div>

      {/* Key articles */}
      <div>
        <div className="mono" style={{
          fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)',
          letterSpacing: '.08em', textTransform: 'uppercase', margin: '6px 2px 8px',
        }}>Key Articles · Constitution of India</div>
        {[
          { a: 'Art. 107', t: 'Provisions as to introduction & passing of Bills' },
          { a: 'Art. 108', t: 'Joint sitting of both Houses (3 in history)' },
          { a: 'Art. 109', t: 'Special procedure for Money Bills' },
          { a: 'Art. 110', t: 'Definition of "Money Bills"' },
          { a: 'Art. 111', t: 'Assent to Bills — President’s 3 options' },
          { a: 'Art. 368', t: 'Special majority for Constitution Amendments' },
        ].map((row) => (
          <div key={row.a} style={{
            display: 'flex', alignItems: 'baseline', gap: 12,
            padding: '10px 0',
            borderBottom: '.5px dashed var(--rule)',
          }}>
            <span className="mono" style={{
              fontSize: 12, fontWeight: 700, color: 'var(--subj-polity-ink)',
              minWidth: 56,
            }}>{row.a}</span>
            <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>{row.t}</span>
          </div>
        ))}
      </div>

      {/* Compare table */}
      <div style={{
        borderRadius: 'var(--r-md)', overflow: 'hidden',
        border: '.5px solid var(--rule)',
      }}>
        <div style={{
          padding: '10px 12px', background: 'var(--paper-2)',
          fontSize: 12, fontWeight: 700, color: 'var(--ink-2)',
          letterSpacing: '-.005em',
        }}>Ordinary vs Money Bill — at a glance</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', fontSize: 12 }}>
          {[
            ['', 'Ordinary', 'Money'],
            ['Introduced in', 'Either House', 'Lok Sabha only'],
            ['Rajya Sabha', 'Equal power', '14 days · recommend only'],
            ['President can return?', 'Yes', 'No'],
            ['Joint sitting?', 'Yes (Art. 108)', 'Not required'],
          ].map((row, i) => (
            <React.Fragment key={i}>
              {row.map((cell, j) => (
                <div key={j} style={{
                  padding: '10px 12px',
                  background: i === 0 ? 'var(--paper-2)' : 'var(--paper)',
                  fontWeight: i === 0 || j === 0 ? 700 : 500,
                  color: i === 0 ? 'var(--ink-3)' : j === 0 ? 'var(--ink-2)' : 'var(--ink)',
                  fontSize: i === 0 ? 10.5 : 12,
                  textTransform: i === 0 ? 'uppercase' : 'none',
                  letterSpacing: i === 0 ? '.06em' : 0,
                  borderTop: i > 0 ? '.5px solid var(--rule)' : 0,
                  borderRight: j < 2 ? '.5px solid var(--rule)' : 0,
                }}>{cell}</div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROBLEMS TAB — MCQ stack
// ─────────────────────────────────────────────
const MCQS = [
  {
    q: 'A Money Bill, after being passed by the Lok Sabha, is sent to the Rajya Sabha. Within how many days must the Rajya Sabha return it?',
    options: ['7 days', '14 days', '21 days', '30 days'],
    correct: 1,
    article: 'Art. 109',
    why: 'Under Article 109(4), the Rajya Sabha has 14 days to return a Money Bill with or without recommendations. Beyond this, it is deemed passed.',
  },
  {
    q: 'Which of the following Bills cannot be returned by the President for reconsideration?',
    options: ['Ordinary Bill', 'Money Bill', 'Constitution Amendment Bill', 'Private Member’s Bill'],
    correct: 1,
    article: 'Art. 111',
    why: 'The President’s power to return a Bill under Art. 111 does not apply to Money Bills — they can only be assented to or withheld.',
  },
];

function ProblemsTab() {
  const [i, setI] = useStateTP(0);
  const [picked, setPicked] = useStateTP(null);
  const mcq = MCQS[i];
  const correct = picked === mcq.correct;
  return (
    <div style={{ padding: 'var(--pad-x)' }}>
      {/* Card */}
      <div style={{
        borderRadius: 'var(--r-lg)', padding: 16,
        background: 'var(--paper)', border: '.5px solid var(--rule)',
        boxShadow: 'var(--sh-2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span className="mono" style={{
            fontSize: 10.5, fontWeight: 700, color: 'var(--subj-polity-ink)',
            background: 'color-mix(in oklch, var(--subj-polity) 14%, var(--paper))',
            padding: '3px 6px', borderRadius: 4, letterSpacing: '.04em',
          }}>Q{String(i + 1).padStart(2,'0')} · {mcq.article}</span>
          <span className="tag">SSC CGL 2022</span>
        </div>
        <div style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.45, color: 'var(--ink)' }}>{mcq.q}</div>

        <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {mcq.options.map((opt, idx) => {
            const isPicked = picked === idx;
            const isAns = idx === mcq.correct;
            const reveal = picked !== null;
            const state = reveal ? (isAns ? 'correct' : isPicked ? 'wrong' : 'idle') : (isPicked ? 'idle' : 'idle');
            const border = reveal
              ? (isAns ? '#16a34a' : isPicked ? '#dc2626' : 'var(--rule-2)')
              : 'var(--rule-2)';
            const bg = reveal
              ? (isAns ? '#f0fdf4' : isPicked ? '#fef2f2' : 'var(--paper)')
              : 'var(--paper)';
            return (
              <button key={idx} disabled={picked !== null} onClick={() => setPicked(idx)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 12px', borderRadius: 12,
                border: `1.2px solid ${border}`, background: bg,
                color: 'var(--ink)', textAlign: 'left', cursor: picked === null ? 'pointer' : 'default',
                transition: 'all var(--dur-fast)',
              }}>
                <span className="mono" style={{
                  width: 22, height: 22, borderRadius: 999,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700,
                  background: reveal && isAns ? '#16a34a' : reveal && isPicked ? '#dc2626' : 'var(--paper-2)',
                  color: reveal && (isAns || isPicked) ? '#fff' : 'var(--ink-3)',
                }}>{reveal && isAns ? <Ico.check /> : reveal && isPicked ? <Ico.x /> : ['A','B','C','D'][idx]}</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{opt}</span>
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div style={{
            marginTop: 14, padding: '12px 12px',
            background: correct ? '#f0fdf4' : 'var(--paper-2)',
            border: `.5px solid ${correct ? '#86efac' : 'var(--rule)'}`,
            borderRadius: 12,
          }}>
            <div className="mono" style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
              color: correct ? '#15803d' : 'var(--ink-3)', marginBottom: 4,
            }}>{correct ? 'Correct' : 'Explanation'}</div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{mcq.why}</div>
            <button style={{
              marginTop: 10, padding: '8px 12px', borderRadius: 10,
              border: 0, background: 'var(--ink)', color: 'var(--paper)',
              fontSize: 12.5, fontWeight: 600, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }} onClick={() => { setPicked(null); setI((i + 1) % MCQS.length); }}>
              Next question <Ico.next />
            </button>
          </div>
        )}
      </div>

      {/* Ad slot (Practice Arena rule: only here in /practice routes) */}
      <div style={{
        marginTop: 16, padding: '10px 12px',
        border: '.5px dashed var(--rule-2)', borderRadius: 12,
        background: 'var(--paper-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <span className="mono" style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--ink-4)', letterSpacing: '.08em' }}>AD · 300×60</span>
          <span style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>One slot per MCQ session. Never inside visualizers.</span>
        </div>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-4)' }}>×</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Whole topic page (mobile-shape, scrollable inside artboard)
// ─────────────────────────────────────────────
function TopicPage({ height = 760 }) {
  const [tab, setTab] = useStateTP('concept');
  const [idx, setIdx] = useStateTP(0);
  const [playing, setPlaying] = useStateTP(false);

  return (
    <div style={{
      width: '100%', height,
      background: 'var(--paper)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: 'inherit',
    }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto' }}>
        <TopicHeader />
        <TabBar tab={tab} setTab={setTab} />
        {tab === 'concept'  && <ConceptTab idx={idx} setIdx={setIdx} playing={playing} setPlaying={setPlaying} />}
        {tab === 'tricks'   && <TricksTab />}
        {tab === 'problems' && <ProblemsTab />}
      </div>
    </div>
  );
}

window.TopicPage = TopicPage;
window.TopicHeader = TopicHeader;
window.TabBar = TabBar;
window.ConceptTab = ConceptTab;
window.TricksTab = TricksTab;
window.ProblemsTab = ProblemsTab;
window.StepController = StepController;
