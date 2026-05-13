/* global React, BillVisualizer, BILL_STEPS, MiniBill */
// home-page.jsx — Mobile + Desktop Home layouts and a wordmark proposal set.

const { useState: useStateHP, useEffect: useEffectHP, useRef: useRefHP } = React;

// ─────────────────────────────────────────────
// Subject grid data
// ─────────────────────────────────────────────
const SUBJECTS = [
  { id: 'quant',     label: 'Quant',     hindi: 'गणित',     n: 84, c: 'var(--subj-quant)',     ink: 'var(--subj-quant-ink)' },
  { id: 'reasoning', label: 'Reasoning', hindi: 'तर्क',     n: 52, c: 'var(--subj-reasoning)', ink: 'var(--subj-reasoning-ink)' },
  { id: 'polity',    label: 'Polity',    hindi: 'राजव्यवस्था', n: 71, c: 'var(--subj-polity)',    ink: 'var(--subj-polity-ink)' },
  { id: 'history',   label: 'History',   hindi: 'इतिहास',   n: 96, c: 'var(--subj-history)',   ink: 'var(--subj-history-ink)' },
  { id: 'geography', label: 'Geography', hindi: 'भूगोल',    n: 64, c: 'var(--subj-geography)', ink: 'var(--subj-geography-ink)' },
  { id: 'economics', label: 'Economics', hindi: 'अर्थशास्त्र', n: 49, c: 'var(--subj-economics)', ink: 'var(--subj-economics-ink)' },
  { id: 'science',   label: 'Science',   hindi: 'विज्ञान',   n: 78, c: 'var(--subj-science)',   ink: 'var(--subj-science-ink)' },
];

// ─────────────────────────────────────────────
// Subject glyphs — simple geometric icons per subject
// ─────────────────────────────────────────────
function SubjectGlyph({ id, color = 'currentColor', size = 28 }) {
  const s = size;
  const props = { width: s, height: s, viewBox: '0 0 32 32', fill: 'none', stroke: color, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (id) {
    case 'quant': return (
      <svg {...props}>
        <rect x="5" y="5" width="22" height="22" rx="2" />
        <line x1="5" y1="13" x2="27" y2="13" />
        <line x1="13" y1="13" x2="13" y2="27" />
        <text x="9" y="11" fontSize="6" fill={color} stroke="none" fontFamily="JetBrains Mono">123</text>
      </svg>
    );
    case 'reasoning': return (
      <svg {...props}>
        <circle cx="12" cy="16" r="8" />
        <circle cx="20" cy="16" r="8" />
      </svg>
    );
    case 'polity': return (
      <svg {...props}>
        <path d="M4 26 L28 26" />
        <path d="M6 26 L6 14 M10 26 L10 14 M16 26 L16 14 M22 26 L22 14 M26 26 L26 14" />
        <path d="M4 14 L28 14 L16 6 Z" />
      </svg>
    );
    case 'history': return (
      <svg {...props}>
        <path d="M5 24 L11 14 L17 20 L23 8 L27 14" />
        <circle cx="11" cy="14" r="1.5" fill={color} />
        <circle cx="17" cy="20" r="1.5" fill={color} />
        <circle cx="23" cy="8"  r="1.5" fill={color} />
      </svg>
    );
    case 'geography': return (
      <svg {...props}>
        <circle cx="16" cy="16" r="11" />
        <path d="M5 16 L27 16" />
        <path d="M16 5 C 22 9, 22 23, 16 27 C 10 23, 10 9, 16 5" />
      </svg>
    );
    case 'economics': return (
      <svg {...props}>
        <path d="M5 23 L11 17 L15 19 L21 11 L27 13" />
        <path d="M5 23 L5 8" />
        <path d="M5 23 L27 23" />
        <path d="M22 9 L27 13 L23 16" />
      </svg>
    );
    case 'science': return (
      <svg {...props}>
        <circle cx="16" cy="16" r="2" />
        <ellipse cx="16" cy="16" rx="11" ry="4" />
        <ellipse cx="16" cy="16" rx="11" ry="4" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4" transform="rotate(120 16 16)" />
      </svg>
    );
    default: return null;
  }
}
window.SubjectGlyph = SubjectGlyph;
window.SUBJECTS = SUBJECTS;

// ─────────────────────────────────────────────
// Auto-cycling Hero Visualizer — reuses BillVisualizer
// ─────────────────────────────────────────────
function HeroAutoVisualizer() {
  const [idx, setIdx] = useStateHP(2);
  useEffectHP(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % BILL_STEPS.length), 2400);
    return () => clearInterval(t);
  }, []);
  return <BillVisualizer stepIdx={idx} playing={true} />;
}
window.HeroAutoVisualizer = HeroAutoVisualizer;

// ─────────────────────────────────────────────
// Subject card
// ─────────────────────────────────────────────
function SubjectCard({ s, layout = 'sq' }) {
  return (
    <a href="#" style={{
      position: 'relative', display: 'block',
      borderRadius: 16, padding: layout === 'wide' ? '14px 14px 14px 14px' : 14,
      background: `color-mix(in oklch, ${s.c} 9%, var(--paper))`,
      border: `1px solid color-mix(in oklch, ${s.c} 28%, transparent)`,
      textDecoration: 'none', color: 'inherit',
      overflow: 'hidden',
      transition: 'transform var(--dur-fast) var(--ease-out-soft), box-shadow var(--dur-fast)',
    }}>
      {/* faint dot pattern in subject color */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(${s.c} 1px, transparent 1px)`,
        backgroundSize: '14px 14px', opacity: .07,
        pointerEvents: 'none',
      }}/>
      <div style={{
        display: 'flex',
        flexDirection: layout === 'wide' ? 'row' : 'column',
        alignItems: layout === 'wide' ? 'center' : 'flex-start',
        gap: layout === 'wide' ? 12 : 22,
        position: 'relative',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: 'var(--paper)',
          border: `.5px solid color-mix(in oklch, ${s.c} 32%, transparent)`,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: s.ink, flex: 'none',
        }}>
          <SubjectGlyph id={s.id} color={s.ink} size={24} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 2,
          }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-.01em' }}>{s.label}</span>
            <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>{s.hindi}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span className="mono" style={{ fontSize: 11, color: s.ink, fontWeight: 600 }}>{s.n} visualizers</span>
          </div>
        </div>
      </div>
    </a>
  );
}
window.SubjectCard = SubjectCard;

// ─────────────────────────────────────────────
// MOBILE HOME
// ─────────────────────────────────────────────
function MobileHome() {
  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--paper)',
      overflowY: 'auto', overflowX: 'hidden',
    }}>
      {/* Header */}
      <header style={{
        padding: '14px var(--pad-x) 10px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Wordmark size={18} />
        <div style={{
          padding: '4px 8px 4px 6px', borderRadius: 999,
          background: 'color-mix(in oklch, var(--amber-500) 14%, var(--paper))',
          border: '.5px solid color-mix(in oklch, var(--amber-500) 28%, transparent)',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <span style={{ fontSize: 12 }}>🔥</span>
          <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--amber-700)' }}>Day 07</span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient" style={{
        padding: '8px var(--pad-x) 14px',
        position: 'relative',
      }}>
        <div style={{ marginBottom: 12 }}>
          <div className="mono" style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em',
            color: 'var(--indigo-700)', textTransform: 'uppercase',
            marginBottom: 8,
          }}>For UPSC · SSC · IBPS · RRB · State PSC</div>
          <h1 style={{
            margin: 0, fontSize: 'var(--t-display)',
            fontWeight: 800, letterSpacing: '-.03em', lineHeight: .98,
            color: 'var(--ink)',
          }}>Don&rsquo;t memorize.<br/><span style={{ color: 'var(--indigo-600)' }}>Watch it happen.</span></h1>
          <p style={{
            margin: '10px 0 0', fontSize: 14.5, color: 'var(--ink-2)',
            lineHeight: 1.5, maxWidth: 320,
          }}>
            Every concept on every government exam, taught as an interactive visual you can step through.
            <span style={{ color: 'var(--ink-3)' }}> Free. Always.</span>
          </p>
        </div>

        {/* Live visualizer (auto-cycling) */}
        <HeroAutoVisualizer />

        {/* Caption */}
        <div style={{
          marginTop: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontSize: 11.5, color: 'var(--ink-3)',
        }}>
          <span className="mono" style={{ letterSpacing: '.04em' }}>▶ AUTO · POLITY · 1 OF 247 VISUALIZERS</span>
          <a href="#" style={{ color: 'var(--indigo-600)', fontWeight: 700, textDecoration: 'none' }}>Open →</a>
        </div>
      </section>

      {/* Subject grid */}
      <section style={{ padding: '22px var(--pad-x) 14px' }}>
        <SectionTitle eyebrow="Pick a subject" title="Seven subjects, all visualized" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 10,
        }}>
          {SUBJECTS.map((s) => <SubjectCard key={s.id} s={s} />)}
          <div style={{
            gridColumn: 'span 2',
            padding: '12px 14px', borderRadius: 16,
            border: '.5px dashed var(--rule-2)',
            background: 'var(--paper-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            fontSize: 12.5, color: 'var(--ink-3)',
          }}>
            <span>State PSCs · MPSC · UPPSC · BPSC</span>
            <span style={{ color: 'var(--indigo-600)', fontWeight: 700 }}>See all →</span>
          </div>
        </div>
      </section>

      {/* Today's concept */}
      <section style={{ padding: '8px var(--pad-x) 14px' }}>
        <SectionTitle eyebrow="Today" title="Concept of the day" />
        <div style={{
          padding: 16, borderRadius: 16,
          background: 'var(--ink)', color: 'var(--paper)',
          border: '.5px solid var(--ink-2)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', right: -10, top: -10, opacity: .12,
            transform: 'rotate(8deg)',
          }}>
            <MiniBill stamped={true} progress={3} />
          </div>
          <span className="mono" style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '.1em',
            color: 'var(--amber-500)', textTransform: 'uppercase',
          }}>Polity · Art. 111</span>
          <div style={{
            margin: '6px 0 8px', fontSize: 20, fontWeight: 800, letterSpacing: '-.015em', lineHeight: 1.15,
          }}>Three options the President holds over every Bill</div>
          <div style={{ fontSize: 13, color: 'color-mix(in oklch, white 70%, transparent)', lineHeight: 1.5 }}>
            Assent. Withhold. Return (once). Tap to walk the 8 steps that get a Bill to her desk.
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 6, alignItems: 'center' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 12px', borderRadius: 10,
              background: 'var(--paper)', color: 'var(--ink)',
              fontSize: 13, fontWeight: 700,
            }}>Watch visualizer →</span>
            <span className="mono" style={{ fontSize: 10.5, color: 'color-mix(in oklch, white 55%, transparent)' }}>~6 MIN</span>
          </div>
        </div>
      </section>

      {/* Current affairs strip */}
      <section style={{ padding: '8px 0 14px' }}>
        <div style={{ padding: '0 var(--pad-x)' }}>
          <SectionTitle
            eyebrow="11 May 2026"
            title="Daily Current Affairs"
            right={<span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>PIB-SOURCED · 10 ITEMS</span>}
          />
        </div>
        <div style={{
          display: 'flex', gap: 10, overflowX: 'auto',
          padding: '0 var(--pad-x) 8px',
          scrollSnapType: 'x mandatory',
        }}>
          {[
            { tag: 'Schemes',  ink: 'var(--subj-economics-ink)', c: 'var(--subj-economics)', t: 'PM-KISAN 17th installment released', d: '₹20,000 cr disbursed to 9.5 cr farmers.', exam: ['SSC CGL', 'IBPS PO'] },
            { tag: 'Defence',  ink: 'var(--subj-polity-ink)',    c: 'var(--subj-polity)',    t: 'INS Arnala commissioned at Visakhapatnam', d: 'First in series of 8 ASW shallow-water craft.', exam: ['CDS', 'NDA'] },
            { tag: 'Polity',   ink: 'var(--subj-polity-ink)',    c: 'var(--subj-polity)',    t: 'Election Commission notifies Karnataka by-polls', d: 'Three Assembly seats to vote on 28 May.', exam: ['UPSC', 'KAS'] },
            { tag: 'Economy',  ink: 'var(--subj-economics-ink)', c: 'var(--subj-economics)', t: 'CPI eases to 3.18% in April', d: 'Lowest since Aug 2019; food inflation 1.85%.', exam: ['RBI Gr B', 'SBI PO'] },
          ].map((n, i) => (
            <article key={i} style={{
              flex: '0 0 76%', scrollSnapAlign: 'start',
              padding: 14, borderRadius: 14,
              background: 'var(--paper)', border: '.5px solid var(--rule)',
              boxShadow: 'var(--sh-1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  padding: '3px 7px 3px 4px', borderRadius: 4,
                  background: `color-mix(in oklch, ${n.c} 14%, var(--paper))`,
                  color: n.ink,
                  fontSize: 10.5, fontWeight: 700,
                  letterSpacing: '.04em', textTransform: 'uppercase',
                  fontFamily: 'JetBrains Mono, monospace',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: n.c }} />
                  {n.tag}
                </span>
                <span className="mono" style={{ fontSize: 9.5, color: 'var(--ink-4)' }}>PIB</span>
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 700, letterSpacing: '-.01em', lineHeight: 1.25, color: 'var(--ink)' }}>{n.t}</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.45 }}>{n.d}</div>
              <div style={{ display: 'flex', gap: 4, marginTop: 8, flexWrap: 'wrap' }}>
                {n.exam.map((e) => <span key={e} className="tag">{e}</span>)}
              </div>
            </article>
          ))}
          <div style={{ flex: '0 0 8px' }}/>
        </div>
      </section>

      {/* Streak/dashboard preview */}
      <section style={{ padding: '8px var(--pad-x) 14px' }}>
        <div style={{
          padding: 16, borderRadius: 16,
          background: 'linear-gradient(135deg, color-mix(in oklch, var(--indigo-600) 10%, var(--paper)), color-mix(in oklch, var(--amber-500) 8%, var(--paper)))',
          border: '.5px solid var(--rule)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div>
              <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', color: 'var(--indigo-700)', textTransform: 'uppercase' }}>Your streak</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
                <span className="mono" style={{ fontSize: 44, fontWeight: 800, color: 'var(--indigo-700)', letterSpacing: '-.04em', lineHeight: 1 }}>07</span>
                <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>days</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>Best ever: 19 · Anonymous · cookie-based</div>
            </div>
            <BadgePuck tier="bronze" />
          </div>
          <div style={{ display: 'flex', gap: 3, marginTop: 12 }}>
            {Array.from({ length: 14 }).map((_, i) => {
              const filled = i >= 7;
              return (
                <span key={i} style={{
                  flex: 1, height: 22, borderRadius: 4,
                  background: filled ? 'var(--indigo-600)' : 'color-mix(in oklch, var(--ink) 6%, transparent)',
                  border: i === 13 ? '1.5px dashed var(--indigo-600)' : 'none',
                }}/>
              );
            })}
          </div>
          <div className="mono" style={{
            display: 'flex', justifyContent: 'space-between',
            marginTop: 6, fontSize: 10, color: 'var(--ink-3)', letterSpacing: '.05em',
          }}>
            <span>WK 19</span><span>TODAY</span><span>WK 20</span>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section style={{
        padding: '18px var(--pad-x) 32px',
        textAlign: 'center', borderTop: '.5px solid var(--rule)', marginTop: 6,
      }}>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Sourced from</div>
        <div style={{
          marginTop: 8, display: 'flex', justifyContent: 'center',
          gap: 18, fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', flexWrap: 'wrap',
        }}>
          <span>PRSIndia</span>
          <span>·</span>
          <span>PIB</span>
          <span>·</span>
          <span>Parliament of India</span>
          <span>·</span>
          <span>RBI</span>
          <span>·</span>
          <span>NCERT</span>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ eyebrow, title, right }) {
  return (
    <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
      <div>
        <div className="mono" style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em',
          color: 'var(--ink-3)', textTransform: 'uppercase',
        }}>{eyebrow}</div>
        <h2 style={{
          margin: '2px 0 0', fontSize: 18, fontWeight: 800,
          letterSpacing: '-.015em', color: 'var(--ink)',
        }}>{title}</h2>
      </div>
      {right}
    </div>
  );
}
window.SectionTitle = SectionTitle;

function BadgePuck({ tier = 'bronze' }) {
  const tones = {
    bronze: { fg: '#92400e', bg: '#fde68a', ring: '#b45309' },
    silver: { fg: '#475569', bg: '#e2e8f0', ring: '#64748b' },
    gold:   { fg: '#92400e', bg: '#fef3c7', ring: '#d97706' },
  }[tier];
  return (
    <div style={{
      width: 56, height: 56, borderRadius: '50%',
      background: `radial-gradient(circle at 30% 30%, color-mix(in oklch, ${tones.bg} 70%, white), ${tones.bg})`,
      border: `2.5px solid ${tones.ring}`,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 6px 14px -6px rgba(0,0,0,.2), inset 0 -2px 4px rgba(0,0,0,.06)',
      flex: 'none',
    }}>
      <span className="mono" style={{ fontSize: 11, fontWeight: 800, color: tones.fg, letterSpacing: '.05em', textTransform: 'uppercase' }}>{tier}</span>
    </div>
  );
}
window.BadgePuck = BadgePuck;

// ─────────────────────────────────────────────
// Wordmark — three proposals
// ─────────────────────────────────────────────
function Wordmark({ size = 20, variant = 'mark' }) {
  // Default in-product wordmark: dot + "govtstudy"
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{
        width: size, height: size, borderRadius: '6px',
        background: 'var(--ink)',
        position: 'relative',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        color: 'var(--paper)',
        fontFamily: 'JetBrains Mono, monospace',
        fontWeight: 800, fontSize: size * .55,
      }}>gs</span>
      <span style={{
        fontWeight: 800, letterSpacing: '-.025em',
        fontSize: size * .95, color: 'var(--ink)',
      }}>govtstudy<span style={{ color: 'var(--indigo-600)' }}>.</span></span>
    </span>
  );
}
window.Wordmark = Wordmark;

function WordmarkProposals() {
  return (
    <div style={{
      width: 760, padding: 28, background: 'var(--paper)',
      borderRadius: 14, border: '.5px solid var(--rule)',
    }}>
      <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.08em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>Wordmark · 3 options</div>
      <h2 style={{ margin: '4px 0 18px', fontSize: 24, fontWeight: 800, letterSpacing: '-.02em' }}>Pick a mark — we&rsquo;ll set it on every page</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        {/* A — Mono ticket */}
        <div style={{
          padding: 20, borderRadius: 12, background: 'var(--paper-2)',
          border: '.5px solid var(--rule)', display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '.08em' }}>A · MONO TICKET</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0' }}>
            <span style={{
              padding: '5px 7px', borderRadius: 6, background: 'var(--ink)', color: 'var(--paper)',
              fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, fontSize: 14, letterSpacing: '.04em',
            }}>GS</span>
            <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-.025em' }}>govtstudy<span style={{ color: 'var(--indigo-600)' }}>.</span></span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Compact. Trustworthy. The indigo period nods to "answer".</div>
        </div>
        {/* B — Bracket */}
        <div style={{
          padding: 20, borderRadius: 12, background: 'var(--paper-2)',
          border: '.5px solid var(--rule)', display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '.08em' }}>B · BRACKET</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '10px 0' }}>
            <span className="mono" style={{ fontWeight: 700, fontSize: 22, color: 'var(--indigo-600)' }}>[</span>
            <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-.025em' }}>govt</span>
            <span style={{ fontWeight: 500, fontSize: 22, letterSpacing: '-.02em', color: 'var(--ink-3)' }}>study</span>
            <span className="mono" style={{ fontWeight: 700, fontSize: 22, color: 'var(--indigo-600)' }}>]</span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Codey, programmer-friendly. Reads as "the set of all govt exam studies".</div>
        </div>
        {/* C — Bar chart */}
        <div style={{
          padding: 20, borderRadius: 12, background: 'var(--paper-2)',
          border: '.5px solid var(--rule)', display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', letterSpacing: '.08em' }}>C · STEP GLYPH</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0' }}>
            <svg width="26" height="26" viewBox="0 0 26 26" style={{ flex: 'none' }}>
              <rect x="2"  y="16" width="5" height="8"  rx="1" fill="var(--ink)"/>
              <rect x="9"  y="11" width="5" height="13" rx="1" fill="var(--ink)"/>
              <rect x="16" y="4"  width="5" height="20" rx="1" fill="var(--indigo-600)"/>
            </svg>
            <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-.025em' }}>govtstudy</span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Three rising bars = each step of mastery. Reads at any size.</div>
        </div>
      </div>
    </div>
  );
}
window.WordmarkProposals = WordmarkProposals;

// ─────────────────────────────────────────────
// DESKTOP HOME
// ─────────────────────────────────────────────
function DesktopHome() {
  return (
    <div style={{
      width: '100%', height: '100%', background: 'var(--paper)',
      overflowY: 'auto',
    }}>
      {/* Top nav */}
      <header style={{
        padding: '14px 36px', borderBottom: '.5px solid var(--rule)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 5,
        background: 'color-mix(in oklch, var(--paper) 90%, transparent)',
        backdropFilter: 'blur(12px) saturate(140%)',
        WebkitBackdropFilter: 'blur(12px) saturate(140%)',
      }}>
        <Wordmark size={22} />
        <nav style={{ display: 'flex', gap: 24 }}>
          {['Subjects', 'Current Affairs', 'Practice', 'Dashboard', 'Exam Intel'].map((n, i) => (
            <a key={n} href="#" style={{
              fontSize: 13.5, fontWeight: 600, color: i === 0 ? 'var(--ink)' : 'var(--ink-2)',
              textDecoration: 'none',
            }}>{n}</a>
          ))}
        </nav>
        <div style={{
          padding: '5px 10px 5px 7px', borderRadius: 999,
          background: 'color-mix(in oklch, var(--amber-500) 14%, var(--paper))',
          border: '.5px solid color-mix(in oklch, var(--amber-500) 28%, transparent)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ fontSize: 12 }}>🔥</span>
          <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--amber-700)' }}>Day 07 streak</span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-gradient" style={{ padding: '40px 36px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <div className="mono" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '.12em',
              color: 'var(--indigo-700)', textTransform: 'uppercase', marginBottom: 14,
            }}>For UPSC · SSC · IBPS · RRB · CDS · State PSC</div>
            <h1 style={{
              margin: 0, fontSize: 64, fontWeight: 800,
              letterSpacing: '-.035em', lineHeight: .95, color: 'var(--ink)',
            }}>Don&rsquo;t memorize.<br/><span style={{ color: 'var(--indigo-600)' }}>Watch it happen.</span></h1>
            <p style={{
              margin: '18px 0 0', fontSize: 17, color: 'var(--ink-2)',
              lineHeight: 1.55, maxWidth: 520,
            }}>
              Every concept on every government exam, taught as an interactive visual you can
              step through. Free, ad-light, and built for slow 4G on a five-year-old phone.
            </p>
            <div style={{ marginTop: 26, display: 'flex', gap: 10, alignItems: 'center' }}>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 18px', borderRadius: 12,
                background: 'var(--ink)', color: 'var(--paper)',
                textDecoration: 'none', fontWeight: 700, fontSize: 14.5,
              }}>
                Start with Polity →
              </a>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 18px', borderRadius: 12,
                background: 'transparent', color: 'var(--ink)',
                textDecoration: 'none', fontWeight: 600, fontSize: 14.5,
                border: '.5px solid var(--rule-2)',
              }}>
                Browse 247 visualizers
              </a>
            </div>
            <div className="mono" style={{
              marginTop: 22, fontSize: 11, color: 'var(--ink-3)',
              letterSpacing: '.06em', display: 'flex', gap: 18, flexWrap: 'wrap',
            }}>
              <span>NO SIGNUP · COOKIE-BASED PROGRESS</span>
              <span>·</span>
              <span>WORKS ON 4G · &lt; 200KB PER PAGE</span>
            </div>
          </div>
          <div>
            <HeroAutoVisualizer />
            <div style={{
              marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              fontSize: 12, color: 'var(--ink-3)',
            }}>
              <span className="mono" style={{ letterSpacing: '.04em' }}>▶ LIVE PREVIEW · POLITY · ART. 107–111</span>
              <a href="#" style={{ color: 'var(--indigo-600)', fontWeight: 700, textDecoration: 'none' }}>Open this visualizer →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section style={{ padding: '40px 36px 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>Pick a subject</div>
            <h2 style={{ margin: '4px 0 0', fontSize: 30, fontWeight: 800, letterSpacing: '-.025em' }}>Seven subjects, all visualized</h2>
          </div>
          <span className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>247 visualizers · 1,820 problems</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {SUBJECTS.map((s, i) => (
            <div key={s.id} style={i === 0 ? { gridColumn: 'span 2' } : {}}>
              <SubjectCardLg s={s} feature={i === 0} />
            </div>
          ))}
        </div>
      </section>

      {/* Bento: today + current affairs + streak */}
      <section style={{ padding: '8px 36px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14 }}>
          {/* Today's concept */}
          <div style={{
            padding: 24, borderRadius: 16,
            background: 'var(--ink)', color: 'var(--paper)',
            position: 'relative', overflow: 'hidden', minHeight: 220,
          }}>
            <div style={{
              position: 'absolute', right: -20, bottom: -20, opacity: .14,
              transform: 'rotate(-12deg) scale(3)',
            }}><MiniBill stamped progress={3}/></div>
            <span className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.12em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Concept of the day · Polity</span>
            <div style={{ margin: '8px 0 10px', fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.1, maxWidth: 520 }}>
              Three options the President holds over every Bill
            </div>
            <div style={{ fontSize: 14, color: 'color-mix(in oklch, white 65%, transparent)', maxWidth: 520, lineHeight: 1.55 }}>
              Assent · Withhold · Return. We walk through Articles 107–111 in eight animated steps.
            </div>
            <a href="#" style={{
              marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 16px', borderRadius: 10,
              background: 'var(--paper)', color: 'var(--ink)',
              fontWeight: 700, fontSize: 14, textDecoration: 'none',
            }}>Watch visualizer →</a>
          </div>
          {/* Streak */}
          <div style={{
            padding: 20, borderRadius: 16,
            background: 'linear-gradient(135deg, color-mix(in oklch, var(--indigo-600) 10%, var(--paper)), color-mix(in oklch, var(--amber-500) 8%, var(--paper)))',
            border: '.5px solid var(--rule)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <div>
                <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', color: 'var(--indigo-700)', textTransform: 'uppercase' }}>Your streak</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
                  <span className="mono" style={{ fontSize: 56, fontWeight: 800, color: 'var(--indigo-700)', letterSpacing: '-.04em', lineHeight: 1 }}>07</span>
                  <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>days</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>Best ever: 19</div>
              </div>
              <BadgePuck tier="bronze" />
            </div>
            <div style={{ display: 'flex', gap: 4, marginTop: 16 }}>
              {Array.from({ length: 14 }).map((_, i) => {
                const filled = i >= 7;
                return (
                  <span key={i} style={{
                    flex: 1, height: 28, borderRadius: 5,
                    background: filled ? 'var(--indigo-600)' : 'color-mix(in oklch, var(--ink) 6%, transparent)',
                    border: i === 13 ? '1.5px dashed var(--indigo-600)' : 'none',
                  }}/>
                );
              })}
            </div>
            <div className="mono" style={{ marginTop: 6, fontSize: 10.5, color: 'var(--ink-3)', display: 'flex', justifyContent: 'space-between', letterSpacing: '.05em' }}>
              <span>WK 19</span><span>TODAY</span><span>WK 20</span>
            </div>
          </div>
        </div>

        {/* Current affairs row */}
        <div style={{ marginTop: 30 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 16 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>11 May 2026</div>
              <h2 style={{ margin: '4px 0 0', fontSize: 28, fontWeight: 800, letterSpacing: '-.02em' }}>Daily Current Affairs</h2>
            </div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', letterSpacing: '.06em' }}>PIB-SOURCED · 10 ITEMS · ~4 MIN</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {[
              { tag: 'Schemes',  ink: 'var(--subj-economics-ink)', c: 'var(--subj-economics)', t: 'PM-KISAN 17th installment released', d: '₹20,000 cr disbursed to 9.5 cr farmers.', exam: ['SSC CGL', 'IBPS PO'] },
              { tag: 'Defence',  ink: 'var(--subj-polity-ink)',    c: 'var(--subj-polity)',    t: 'INS Arnala commissioned at Visakhapatnam', d: 'First in series of 8 ASW shallow-water craft.', exam: ['CDS', 'NDA'] },
              { tag: 'Polity',   ink: 'var(--subj-polity-ink)',    c: 'var(--subj-polity)',    t: 'EC notifies Karnataka by-polls', d: 'Three Assembly seats to vote on 28 May.', exam: ['UPSC', 'KAS'] },
              { tag: 'Economy',  ink: 'var(--subj-economics-ink)', c: 'var(--subj-economics)', t: 'CPI eases to 3.18% in April', d: 'Lowest since Aug 2019; food inflation 1.85%.', exam: ['RBI Gr B', 'SBI PO'] },
            ].map((n, i) => (
              <article key={i} style={{
                padding: 16, borderRadius: 12,
                background: 'var(--paper)', border: '.5px solid var(--rule)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '3px 7px 3px 4px', borderRadius: 4,
                    background: `color-mix(in oklch, ${n.c} 14%, var(--paper))`,
                    color: n.ink,
                    fontSize: 10.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: n.c }} />
                    {n.tag}
                  </span>
                  <span className="mono" style={{ fontSize: 9.5, color: 'var(--ink-4)' }}>PIB</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.01em', lineHeight: 1.25 }}>{n.t}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 6, lineHeight: 1.5 }}>{n.d}</div>
                <div style={{ display: 'flex', gap: 4, marginTop: 12, flexWrap: 'wrap' }}>
                  {n.exam.map((e) => <span key={e} className="tag">{e}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer trust */}
      <footer style={{
        padding: '28px 36px', borderTop: '.5px solid var(--rule)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'var(--paper-2)', fontSize: 12, color: 'var(--ink-3)',
      }}>
        <span><Wordmark size={16} /></span>
        <span className="mono" style={{ letterSpacing: '.08em' }}>
          PRSINDIA · PIB · PARLIAMENT OF INDIA · RBI · NCERT
        </span>
        <span>© 2026 · Free forever</span>
      </footer>
    </div>
  );
}

// Larger subject card for desktop, with optional feature treatment
function SubjectCardLg({ s, feature }) {
  return (
    <a href="#" style={{
      position: 'relative', display: 'block',
      borderRadius: 18, padding: feature ? '22px 24px' : 18,
      background: `color-mix(in oklch, ${s.c} 9%, var(--paper))`,
      border: `1px solid color-mix(in oklch, ${s.c} 26%, transparent)`,
      textDecoration: 'none', color: 'inherit',
      minHeight: feature ? 180 : 130, overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(${s.c} 1px, transparent 1px)`,
        backgroundSize: '14px 14px', opacity: .06,
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'relative', height: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div style={{
          width: feature ? 56 : 44, height: feature ? 56 : 44, borderRadius: 14,
          background: 'var(--paper)',
          border: `.5px solid color-mix(in oklch, ${s.c} 32%, transparent)`,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: s.ink,
        }}>
          <SubjectGlyph id={s.id} color={s.ink} size={feature ? 32 : 24} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{
              fontSize: feature ? 26 : 18, fontWeight: 800,
              color: 'var(--ink)', letterSpacing: '-.02em',
            }}>{s.label}</span>
            <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{s.hindi}</span>
          </div>
          <div className="mono" style={{ marginTop: 4, fontSize: 11.5, color: s.ink, fontWeight: 600, letterSpacing: '.04em' }}>
            {s.n} VISUALIZERS
            {feature && ' · 312 PROBLEMS · LIVE'}
          </div>
        </div>
      </div>
    </a>
  );
}
window.SubjectCardLg = SubjectCardLg;
window.MobileHome = MobileHome;
window.DesktopHome = DesktopHome;
