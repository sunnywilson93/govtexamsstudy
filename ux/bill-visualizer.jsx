/* global React */
// bill-visualizer.jsx — "How a Bill Becomes Law" step-by-step visualizer.
// Three chambers (Lok Sabha → Rajya Sabha → Rashtrapati Bhavan).
// A Bill icon physically travels between them; vote tallies count up;
// a stamp lands at the end. Mobile-first; auto-scales to its container.

const { useState, useEffect, useRef, useMemo } = React;

const BILL_STEPS = [
  {
    id: 'draft', house: null, lane: 'pre',
    title: 'Drafting', tag: 'Pre-legislative',
    body: 'A Bill is drafted by the concerned Ministry (or a Private Member) after stakeholder consultation.',
    fact: 'Most Bills in India are introduced by the Government — these are called Public Bills.',
  },
  {
    id: 'intro', house: 'lok', lane: 'lok',
    title: 'Introduction · First Reading', tag: 'Art. 107',
    body: 'The Bill is introduced in Lok Sabha. Only the title and objectives are read — no debate yet.',
    fact: 'Money Bills (Art. 110) can ONLY be introduced in Lok Sabha, with the President’s prior recommendation.',
  },
  {
    id: 'lok-debate', house: 'lok', lane: 'lok',
    title: 'Second Reading — Lok Sabha', tag: 'Art. 107',
    body: 'Clause-by-clause discussion. Amendments may be moved. The Bill may be referred to a Standing Committee.',
    fact: 'Standing Committees scrutinise Bills line-by-line away from the public eye — they’re where the real work happens.',
  },
  {
    id: 'lok-pass', house: 'lok', lane: 'lok',
    title: 'Third Reading — passed by Lok Sabha', tag: 'Art. 100',
    body: 'A final vote. Simple majority of members present and voting is enough for an ordinary Bill.',
    vote: { for: 318, against: 196, abstain: 29, total: 543, label: 'Lok Sabha vote' },
    fact: 'Constitutional Amendment Bills need a special majority — two-thirds of members present + majority of total strength.',
  },
  {
    id: 'rajya-arrive', house: 'rajya', lane: 'rajya',
    title: 'Transmitted to Rajya Sabha', tag: 'Art. 109 / 111',
    body: 'The Bill travels to the Upper House. Rajya Sabha repeats the three readings.',
    fact: 'For Money Bills, Rajya Sabha has only 14 days and can recommend — not reject — amendments.',
  },
  {
    id: 'rajya-pass', house: 'rajya', lane: 'rajya',
    title: 'Passed by Rajya Sabha', tag: 'Art. 100',
    body: 'Both Houses must pass identical text. If they disagree, the President may summon a joint sitting.',
    vote: { for: 162, against: 73, abstain: 10, total: 245, label: 'Rajya Sabha vote' },
    fact: 'Joint sittings (Art. 108) have been called only 3 times in Indian history — Dowry Prohibition, Banking Service, POTA.',
  },
  {
    id: 'president', house: 'president', lane: 'pres',
    title: 'Presented to the President', tag: 'Art. 111',
    body: 'The President may assent, withhold assent, or return the Bill (if not a Money Bill) for reconsideration.',
    fact: 'If returned and re-passed by Parliament, the President MUST give assent. No second return.',
  },
  {
    id: 'act', house: 'president', lane: 'pres',
    title: 'Becomes an Act of Parliament', tag: 'Art. 111',
    body: 'On Presidential assent, the Bill becomes law and is published in the Gazette of India.',
    fact: 'Acts come into force on a date notified by the Government — sometimes years after assent.',
  },
];

// ─────────────────────────────────────────────
// Bill SVG — folded document with red ribbon
// ─────────────────────────────────────────────
function BillIcon({ size = 44, stamped = false }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 40 48" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="paper-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdfbf3" />
          <stop offset="1" stopColor="#f1ecd9" />
        </linearGradient>
      </defs>
      <path d="M4 3 L30 3 L36 9 L36 45 L4 45 Z" fill="url(#paper-grad)" stroke="#2d2a25" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M30 3 L30 9 L36 9" fill="none" stroke="#2d2a25" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Text lines */}
      <rect x="9"  y="15" width="18" height="1.6" fill="#2d2a25" opacity=".7" />
      <rect x="9"  y="20" width="22" height="1.6" fill="#2d2a25" opacity=".5" />
      <rect x="9"  y="25" width="14" height="1.6" fill="#2d2a25" opacity=".5" />
      <rect x="9"  y="30" width="20" height="1.6" fill="#2d2a25" opacity=".5" />
      <rect x="9"  y="35" width="11" height="1.6" fill="#2d2a25" opacity=".5" />
      {/* Red ribbon */}
      <rect x="22" y="-2" width="5" height="14" fill="#dc2626" />
      <path d="M22 12 L24.5 9 L27 12 Z" fill="#dc2626" />
      {stamped && (
        <g transform="translate(20,30) rotate(-14)">
          <circle r="9" fill="none" stroke="#dc2626" strokeWidth="1.6" />
          <text textAnchor="middle" y="-1" fill="#dc2626" fontSize="4.2" fontWeight="800" fontFamily="JetBrains Mono">ASSENT</text>
          <text textAnchor="middle" y="4" fill="#dc2626" fontSize="3" fontFamily="JetBrains Mono">PRESIDENT</text>
        </g>
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────
// Vote bar — counts up
// ─────────────────────────────────────────────
function VoteBar({ vote, active }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!active) { setT(0); return; }
    let raf, t0 = performance.now();
    const dur = 1100;
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      setT(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, vote]);
  if (!vote) return null;
  const eased = 1 - Math.pow(1 - t, 3);
  const f = Math.round(vote.for * eased);
  const a = Math.round(vote.against * eased);
  const ab = Math.round(vote.abstain * eased);
  const total = vote.for + vote.against + vote.abstain;
  const pf = (vote.for / total) * 100;
  const pa = (vote.against / total) * 100;
  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>{vote.label}</span>
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{total}/{vote.total}</span>
      </div>
      <div style={{ display: 'flex', height: 10, borderRadius: 3, overflow: 'hidden', background: 'var(--rule)' }}>
        <div style={{ width: `${pf * eased}%`, background: '#16a34a', transition: 'width var(--dur-base) var(--ease-out-soft)' }} />
        <div style={{ width: `${pa * eased}%`, background: '#dc2626', transition: 'width var(--dur-base) var(--ease-out-soft)' }} />
      </div>
      <div className="mono" style={{ display: 'flex', gap: 14, marginTop: 6, fontSize: 11, color: 'var(--ink-2)' }}>
        <span><span style={{ color: '#16a34a' }}>▮</span> Aye {f}</span>
        <span><span style={{ color: '#dc2626' }}>▮</span> Nay {a}</span>
        <span style={{ color: 'var(--ink-3)' }}>Abst {ab}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Chamber — one of the 3 rooms the Bill passes through
// ─────────────────────────────────────────────
function Chamber({ kind, label, sub, seats, accent, active, completed, children }) {
  return (
    <div
      style={{
        position: 'relative',
        border: `1.5px ${active ? 'solid' : 'dashed'} ${active ? accent : 'var(--rule-2)'}`,
        background: active ? `color-mix(in oklch, ${accent} 7%, var(--paper))` : 'var(--paper)',
        borderRadius: 'var(--r-md)',
        padding: '14px 14px 12px',
        transition: 'all var(--dur-base) var(--ease-out-soft)',
        boxShadow: active ? 'var(--sh-2)' : 'none',
      }}
      data-active={active || undefined}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <ChamberGlyph kind={kind} accent={accent} active={active} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: '-.01em', color: 'var(--ink)' }}>{label}</div>
            <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', letterSpacing: '.04em', textTransform: 'uppercase' }}>{sub}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {completed && (
            <span style={{
              fontSize: 10, fontWeight: 700, color: '#15803d', background: '#dcfce7',
              padding: '3px 6px', borderRadius: 4, letterSpacing: '.04em'
            }}>PASSED</span>
          )}
          <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>{seats}</span>
        </div>
      </div>
      <div style={{ marginTop: 10, minHeight: 22 }}>
        {children}
      </div>
    </div>
  );
}

function ChamberGlyph({ kind, accent, active }) {
  const c = active ? accent : 'var(--ink-3)';
  if (kind === 'lok') {
    // Semi-circle of seats
    return (
      <svg width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke={c} strokeWidth="1.5">
        <path d="M4 24 A12 12 0 0 1 28 24" />
        <path d="M7 24 A9 9 0 0 1 25 24" />
        <path d="M10 24 A6 6 0 0 1 22 24" />
        <line x1="4" y1="24" x2="28" y2="24" />
      </g></svg>
    );
  }
  if (kind === 'rajya') {
    // Rectangular chamber
    return (
      <svg width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke={c} strokeWidth="1.5">
        <rect x="5" y="9" width="22" height="15" rx="1.5" />
        <line x1="5" y1="14" x2="27" y2="14" />
        <line x1="5" y1="19" x2="27" y2="19" />
        <line x1="16" y1="9"  x2="16" y2="24" />
      </g></svg>
    );
  }
  // President / Rashtrapati Bhavan
  return (
    <svg width="32" height="32" viewBox="0 0 32 32"><g fill="none" stroke={c} strokeWidth="1.5">
      <path d="M16 4 L26 12 L26 26 L6 26 L6 12 Z" />
      <circle cx="16" cy="2.5" r="1" fill={c} />
      <line x1="16" y1="2.5" x2="16" y2="6" />
      <rect x="14" y="18" width="4" height="8" />
    </g></svg>
  );
}

// ─────────────────────────────────────────────
// Main visualizer
// ─────────────────────────────────────────────
function BillVisualizer({ stepIdx = 0, playing = false }) {
  const step = BILL_STEPS[stepIdx];
  const lokDone   = stepIdx >= 4;
  const rajyaDone = stepIdx >= 6;
  const presDone  = stepIdx >= 7;

  // Determine bill position lane: pre | lok | rajya | pres
  const lane = step.lane;
  const stamped = stepIdx >= 7;

  return (
    <div style={{
      position: 'relative',
      padding: 16,
      borderRadius: 'var(--r-lg)',
      background: 'var(--paper-2)',
      border: '.5px solid var(--rule)',
      overflow: 'hidden',
    }} className="dot-bg">

      {/* Stage frame */}
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 10 }}>

        {/* Left rail with traveling bill */}
        <div style={{ position: 'relative', minHeight: 360 }}>
          <div style={{
            position: 'absolute', left: '50%', top: 18, bottom: 18,
            width: 0, borderLeft: '1.5px dashed var(--rule-2)', transform: 'translateX(-.5px)'
          }} />
          {/* Lane anchors (invisible refs) */}
          {/* Bill itself */}
          <div
            className="motion-only"
            style={{
              position: 'absolute',
              left: '50%',
              top: lane === 'pre' ? 4 : lane === 'lok' ? 70 : lane === 'rajya' ? 200 : 330,
              transform: `translate(-50%, 0) rotate(${stamped ? '-6deg' : '0deg'})`,
              transition: 'top var(--dur-slow) var(--ease-in-out-snap), transform var(--dur-base) var(--ease-out-soft)',
              filter: 'drop-shadow(0 6px 8px rgba(28,25,23,.18))',
              zIndex: 3,
            }}
          >
            <BillIcon size={40} stamped={stamped} />
          </div>
          {/* Travel-trail dots */}
          {['pre','lok','rajya','pres'].map((l, i) => {
            const order = { pre:0, lok:1, rajya:2, pres:3 };
            const done = order[lane] >= i;
            return (
              <div key={l} style={{
                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                top: i === 0 ? 4 : i === 1 ? 70 : i === 2 ? 200 : 330,
                width: 12, height: 12, borderRadius: 999,
                background: done ? 'var(--subj-polity)' : 'var(--paper)',
                border: `2px solid ${done ? 'var(--subj-polity)' : 'var(--rule-2)'}`,
                transition: 'background var(--dur-base), border-color var(--dur-base)',
                zIndex: 1,
              }}/>
            );
          })}
        </div>

        {/* Right: chamber stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Chamber
            kind="lok" label="Lok Sabha" sub="House of the People"
            seats="543 seats" accent="var(--subj-polity)"
            active={lane === 'lok' || (lane === 'pre' && false)}
            completed={lokDone}
          >
            {lane === 'lok' && (
              <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                {step.id === 'intro' && 'Speaker reads the title of the Bill. No debate. Voice vote on motion to introduce.'}
                {step.id === 'lok-debate' && 'Members debate clauses. Amendments tabled. Possibly referred to Standing Committee.'}
                {step.id === 'lok-pass' && 'Final vote on the Bill as a whole.'}
                <VoteBar vote={step.vote} active={step.id === 'lok-pass'} />
              </div>
            )}
            {lokDone && lane !== 'lok' && (
              <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }} className="mono">
                AYE 318 · NAY 196 · ABST 29
              </div>
            )}
          </Chamber>

          <Chamber
            kind="rajya" label="Rajya Sabha" sub="Council of States"
            seats="245 seats" accent="var(--subj-polity)"
            active={lane === 'rajya'}
            completed={rajyaDone}
          >
            {lane === 'rajya' && (
              <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                {step.id === 'rajya-arrive' && 'Three readings, mirroring Lok Sabha. Both Houses must pass identical text.'}
                {step.id === 'rajya-pass' && 'Final vote in the Upper House.'}
                <VoteBar vote={step.vote} active={step.id === 'rajya-pass'} />
              </div>
            )}
            {rajyaDone && lane !== 'rajya' && (
              <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }} className="mono">
                AYE 162 · NAY 73 · ABST 10
              </div>
            )}
          </Chamber>

          <Chamber
            kind="president" label="Rashtrapati Bhavan" sub="President of India"
            seats="Art. 111" accent="var(--subj-polity)"
            active={lane === 'pres'}
            completed={presDone}
          >
            {lane === 'pres' && (
              <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                {step.id === 'president' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <div>The President has three options:</div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>
                      ▸ ASSENT &nbsp; ▸ WITHHOLD &nbsp; ▸ RETURN
                    </div>
                  </div>
                )}
                {step.id === 'act' && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '6px 10px', borderRadius: 999,
                    background: '#dcfce7', color: '#15803d',
                    fontWeight: 700, fontSize: 12, letterSpacing: '.02em',
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: '#16a34a' }} />
                    Notified in the Gazette of India
                  </div>
                )}
              </div>
            )}
          </Chamber>
        </div>
      </div>

      {/* Step caption strip */}
      <div style={{
        marginTop: 14, padding: '10px 12px',
        background: 'var(--paper)', border: '.5px solid var(--rule)',
        borderRadius: 'var(--r-sm)',
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="mono" style={{
            fontSize: 10.5, fontWeight: 700, color: 'var(--subj-polity-ink)',
            background: 'color-mix(in oklch, var(--subj-polity) 14%, var(--paper))',
            padding: '3px 6px', borderRadius: 4, letterSpacing: '.04em',
          }}>{step.tag}</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{step.title}</span>
        </div>
        <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>{step.body}</div>
      </div>
    </div>
  );
}

window.BILL_STEPS = BILL_STEPS;
window.BillVisualizer = BillVisualizer;
