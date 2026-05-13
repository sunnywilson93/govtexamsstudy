/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio */
// practice-arena.jsx — MCQ with animated visual explanation. Ads live here ONLY.

const { useState: useStatePA, useEffect: useEffectPA, useRef: useRefPA } = React;

const TWEAK_DEFAULTS_PA = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "density": "regular",
  "motion": "regular",
  "personality": "studious"
}/*EDITMODE-END*/;

// ─── Question bank ──────────────────────────────────────
const QUESTIONS = [
  {
    id: 'q1',
    n: 3,
    topic: 'Parliament · Bills',
    article: 'Art. 110',
    exam: 'SSC CGL 2023',
    stem: 'Who is the final authority to certify a Bill as a Money Bill?',
    options: [
      { id: 'a', label: 'President of India' },
      { id: 'b', label: 'Speaker of the Lok Sabha' },
      { id: 'c', label: 'Chairman of the Rajya Sabha' },
      { id: 'd', label: 'Union Finance Minister' },
    ],
    correct: 'b',
    why: 'Under Art. 110(3), the Speaker’s decision on whether a Bill is a Money Bill is final and cannot be questioned in any court.',
    explain: 'speakerCertify',
  },
  {
    id: 'q2',
    n: 4,
    topic: 'Parliament · Joint sittings',
    article: 'Art. 108',
    exam: 'UPSC CSE Prelims',
    stem: 'Who presides over a joint sitting of both Houses of Parliament?',
    options: [
      { id: 'a', label: 'President of India' },
      { id: 'b', label: 'Vice-President' },
      { id: 'c', label: 'Speaker of the Lok Sabha' },
      { id: 'd', label: 'Senior-most member of Parliament' },
    ],
    correct: 'c',
    why: 'Per Art. 118(4), the Speaker of the Lok Sabha (or in their absence, the Deputy Speaker) presides over the joint sitting summoned under Art. 108.',
    explain: 'jointSitting',
  },
];

// ─── Mini animated explainers ──────────────────────────
function ExplainSpeakerCertify({ play }) {
  // Bill arrives → routed to one of 4 authorities → only Speaker stamps "Money Bill"
  const [stage, setStage] = useStatePA(0);
  useEffectPA(() => {
    if (!play) { setStage(0); return; }
    setStage(0);
    const t1 = setTimeout(() => setStage(1), 250);
    const t2 = setTimeout(() => setStage(2), 1150);
    const t3 = setTimeout(() => setStage(3), 2050);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [play]);

  const targets = [
    { id: 'a', label: 'President',     x: 20,  y: 78, ok: false },
    { id: 'b', label: 'Speaker LS',    x: 175, y: 78, ok: true },
    { id: 'c', label: 'Chairman RS',   x: 330, y: 78, ok: false },
    { id: 'd', label: 'Finance Min.',  x: 485, y: 78, ok: false },
  ];

  return (
    <svg viewBox="0 0 580 200" style={{ width: '100%', height: 'auto', maxHeight: 200 }}>
      <defs>
        <linearGradient id="paFade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--paper)"/>
          <stop offset="1" stopColor="var(--paper-2)"/>
        </linearGradient>
      </defs>
      {/* paper background */}
      <rect x="0" y="0" width="580" height="200" fill="url(#paFade)" rx="8"/>
      {/* Bill at top */}
      <g transform={`translate(${265 + (stage >= 2 ? 0 : 0)} ${10 + (stage >= 2 ? 0 : 0)})`}>
        <rect x="0" y="0" width="50" height="42" rx="3" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5"/>
        <line x1="6" y1="12" x2="44" y2="12" stroke="var(--ink-3)" strokeWidth="1"/>
        <line x1="6" y1="20" x2="44" y2="20" stroke="var(--ink-3)" strokeWidth="1"/>
        <line x1="6" y1="28" x2="32" y2="28" stroke="var(--ink-3)" strokeWidth="1"/>
        <text x="25" y="38" fontSize="8" textAnchor="middle" fill="var(--subj-polity-ink)" fontFamily="JetBrains Mono" fontWeight="700">BILL</text>
      </g>

      {/* Routes — dashed arrows fan out to 4 targets at stage>=1 */}
      {targets.map((t) => (
        <g key={t.id}>
          <path
            d={`M 290 56 Q ${(290 + t.x + 35) / 2} ${(56 + t.y - 4) / 2 - 12} ${t.x + 35} ${t.y - 4}`}
            stroke={t.ok ? 'var(--subj-polity)' : 'var(--rule-2)'}
            strokeWidth={t.ok ? 1.6 : 1.2}
            strokeDasharray="4 4"
            fill="none"
            style={{
              opacity: stage >= 1 ? 1 : 0,
              transition: 'opacity .35s ease',
            }}
          />
          <g
            transform={`translate(${t.x} ${t.y})`}
            style={{ opacity: stage >= 1 ? 1 : .3, transition: 'opacity .4s ease' }}
          >
            <rect
              x="0" y="0" width="70" height="34" rx="8"
              fill={stage >= 3 && t.ok ? 'color-mix(in oklch, var(--subj-polity) 14%, var(--paper))' : 'var(--paper)'}
              stroke={stage >= 3 ? (t.ok ? 'var(--subj-polity)' : 'var(--rule)') : 'var(--rule-2)'}
              strokeWidth={t.ok && stage >= 3 ? 1.8 : 1}
            />
            <text x="35" y="20" fontSize="10" textAnchor="middle" fill={stage >= 3 && t.ok ? 'var(--subj-polity-ink)' : 'var(--ink-2)'} fontWeight="700">{t.label}</text>
            {/* X or stamp */}
            {stage >= 3 && !t.ok && (
              <text x="35" y="-4" fontSize="14" textAnchor="middle" fill="var(--ink-4)" fontWeight="800">×</text>
            )}
            {stage >= 3 && t.ok && (
              <g transform="translate(35 -8)">
                <circle r="11" fill="var(--subj-polity)" />
                <text x="0" y="3" fontSize="7" textAnchor="middle" fill="white" fontFamily="JetBrains Mono" fontWeight="800">MONEY</text>
              </g>
            )}
          </g>
        </g>
      ))}

      {/* Caption */}
      <text x="290" y="172" fontSize="11" textAnchor="middle" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontWeight="600">
        {stage <= 1 ? 'Art. 110(3) — who certifies a Money Bill?' :
         stage === 2 ? 'The Bill is routed for certification…' :
         'Speaker’s certificate. Final. Cannot be challenged in court.'}
      </text>
    </svg>
  );
}

function ExplainJointSitting({ play }) {
  const [stage, setStage] = useStatePA(0);
  useEffectPA(() => {
    if (!play) { setStage(0); return; }
    setStage(0);
    const t1 = setTimeout(() => setStage(1), 250);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [play]);
  return (
    <svg viewBox="0 0 580 200" style={{ width: '100%', height: 'auto', maxHeight: 200 }}>
      <defs>
        <linearGradient id="paFade2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--paper)"/>
          <stop offset="1" stopColor="var(--paper-2)"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="580" height="200" fill="url(#paFade2)" rx="8"/>

      {/* Lok Sabha (left) */}
      <g transform="translate(40 30)" style={{ opacity: stage >= 1 ? 1 : .35, transition: 'opacity .3s ease' }}>
        <rect x="0" y="0" width="180" height="130" rx="10" fill="var(--paper)" stroke="var(--rule)" strokeWidth="1"/>
        <text x="90" y="18" fontSize="10" textAnchor="middle" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontWeight="700">LOK SABHA</text>
        {/* benches */}
        {Array.from({ length: 4 }).map((_, r) => (
          <g key={r} transform={`translate(20 ${36 + r * 18})`}>
            {Array.from({ length: 9 }).map((__, c) => (
              <circle key={c} cx={c * 18} cy={0} r="3" fill="var(--ink-2)" opacity=".6"/>
            ))}
          </g>
        ))}
      </g>

      {/* Rajya Sabha (right) */}
      <g transform="translate(360 30)" style={{ opacity: stage >= 1 ? 1 : .35, transition: 'opacity .3s ease' }}>
        <rect x="0" y="0" width="180" height="130" rx="10" fill="var(--paper)" stroke="var(--rule)" strokeWidth="1"/>
        <text x="90" y="18" fontSize="10" textAnchor="middle" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontWeight="700">RAJYA SABHA</text>
        {Array.from({ length: 3 }).map((_, r) => (
          <g key={r} transform={`translate(20 ${42 + r * 18})`}>
            {Array.from({ length: 9 }).map((__, c) => (
              <circle key={c} cx={c * 18} cy={0} r="3" fill="var(--ink-2)" opacity=".5"/>
            ))}
          </g>
        ))}
      </g>

      {/* Speaker (center) — moves from LS to center at stage>=2 */}
      <g style={{ transition: 'transform .6s cubic-bezier(.4,.05,.2,1)', transform: stage >= 2 ? 'translate(265px, 60px)' : 'translate(70px, 60px)' }}>
        <circle r="14" fill="var(--subj-polity)" />
        <text y="4" fontSize="9" textAnchor="middle" fill="white" fontFamily="JetBrains Mono" fontWeight="800">SPK</text>
        {stage >= 3 && (
          <g transform="translate(0 30)">
            <rect x="-34" y="0" width="68" height="14" rx="3" fill="var(--ink)"/>
            <text x="0" y="10" fontSize="8" textAnchor="middle" fill="white" fontFamily="JetBrains Mono" fontWeight="700">PRESIDES</text>
          </g>
        )}
      </g>

      <text x="290" y="186" fontSize="11" textAnchor="middle" fill="var(--ink-3)" fontFamily="JetBrains Mono" fontWeight="600">
        {stage <= 1 ? 'Houses deadlocked → Art. 108 joint sitting' :
         stage === 2 ? 'Speaker LS walks to the chair…' :
         'Speaker of Lok Sabha presides over the joint sitting.'}
      </text>
    </svg>
  );
}

const EXPLAINERS = { speakerCertify: ExplainSpeakerCertify, jointSitting: ExplainJointSitting };

// ─── MCQ Card ──────────────────────────────────────
function MCQCard({ q, picked, setPicked, submitted, onSubmit, onNext }) {
  return (
    <div style={{
      background: 'var(--paper)',
      borderRadius: 16,
      border: '.5px solid var(--rule)',
      padding: 18,
      boxShadow: 'var(--sh-1)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <span className="mono" style={{
            padding: '3px 8px', borderRadius: 4,
            background: 'color-mix(in oklch, var(--subj-polity) 14%, var(--paper))',
            color: 'var(--subj-polity-ink)',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
          }}>{q.topic}</span>
          <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>{q.article}</span>
        </div>
        <span className="tag">{q.exam}</span>
      </div>

      <p style={{ margin: '6px 0 16px', fontSize: 17, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-.01em', lineHeight: 1.35, textWrap: 'pretty' }}>
        Q{q.n}. {q.stem}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {q.options.map((o, i) => {
          const letter = String.fromCharCode(65 + i);
          const isPicked = picked === o.id;
          const isCorrect = o.id === q.correct;
          let state = 'idle';
          if (submitted) {
            if (isCorrect) state = 'correct';
            else if (isPicked) state = 'wrong';
            else state = 'fade';
          } else if (isPicked) state = 'picked';
          const palette = {
            idle:    { bg: 'var(--paper)',                                                            border: 'var(--rule)',                                              ink: 'var(--ink)',           dot: 'var(--rule-2)',                ledger: 'var(--ink-3)' },
            picked:  { bg: 'color-mix(in oklch, var(--indigo-600) 7%, var(--paper))',                 border: 'var(--indigo-600)',                                        ink: 'var(--ink)',           dot: 'var(--indigo-600)',            ledger: 'var(--indigo-700)' },
            correct: { bg: 'color-mix(in oklch, #16a34a 10%, var(--paper))',                          border: '#16a34a',                                                  ink: 'var(--ink)',           dot: '#16a34a',                       ledger: '#15803d' },
            wrong:   { bg: 'color-mix(in oklch, var(--subj-polity) 10%, var(--paper))',               border: 'var(--subj-polity)',                                       ink: 'var(--ink)',           dot: 'var(--subj-polity)',            ledger: 'var(--subj-polity-ink)' },
            fade:    { bg: 'var(--paper)',                                                            border: 'var(--rule)',                                              ink: 'var(--ink-3)',         dot: 'var(--rule-2)',                ledger: 'var(--ink-4)' },
          }[state];
          return (
            <button
              key={o.id}
              onClick={() => !submitted && setPicked(o.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 14px', borderRadius: 12,
                background: palette.bg, border: `1px solid ${palette.border}`,
                cursor: submitted ? 'default' : 'pointer',
                textAlign: 'left', width: '100%',
                transition: 'background .15s ease, border-color .15s ease',
              }}
            >
              <span className="mono" style={{
                width: 26, height: 26, flex: 'none', borderRadius: 8,
                background: 'var(--paper)', border: `1px solid ${palette.dot}`,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700, color: palette.ledger,
              }}>{letter}</span>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: palette.ink }}>{o.label}</span>
              {state === 'correct' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              )}
              {state === 'wrong' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--subj-polity)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              )}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
        {!submitted ? (
          <button
            onClick={onSubmit}
            disabled={!picked}
            style={{
              flex: 1, padding: '12px 16px', borderRadius: 12,
              background: picked ? 'var(--ink)' : 'var(--paper-2)',
              color: picked ? 'var(--paper)' : 'var(--ink-4)',
              border: 0, fontWeight: 700, fontSize: 14.5,
              cursor: picked ? 'pointer' : 'not-allowed',
            }}
          >Check answer</button>
        ) : (
          <button
            onClick={onNext}
            style={{
              flex: 1, padding: '12px 16px', borderRadius: 12,
              background: 'var(--indigo-600)', color: 'white',
              border: 0, fontWeight: 700, fontSize: 14.5, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            Next question
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        )}
        <button style={{
          padding: '12px', borderRadius: 12, background: 'var(--paper)',
          border: '.5px solid var(--rule)', color: 'var(--ink-2)', cursor: 'pointer',
        }} title="Bookmark">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </button>
      </div>
    </div>
  );
}

// ─── Explanation panel ──────────────────────
function Explanation({ q, picked }) {
  const Explainer = EXPLAINERS[q.explain];
  const [playing, setPlaying] = useStatePA(true);
  useEffectPA(() => { setPlaying(false); requestAnimationFrame(() => setPlaying(true)); }, [q.id]);
  const wasCorrect = picked === q.correct;
  return (
    <div style={{
      marginTop: 12, padding: 16, borderRadius: 16,
      background: 'var(--paper)', border: '.5px solid var(--rule)',
      boxShadow: 'var(--sh-1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{
          padding: '4px 8px', borderRadius: 999,
          background: wasCorrect ? 'color-mix(in oklch, #16a34a 16%, var(--paper))' : 'color-mix(in oklch, var(--subj-polity) 14%, var(--paper))',
          color: wasCorrect ? '#15803d' : 'var(--subj-polity-ink)',
          fontSize: 10.5, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase',
        }} className="mono">{wasCorrect ? 'Correct · +5 XP' : 'Not quite — here’s why'}</span>
        <button onClick={() => { setPlaying(false); requestAnimationFrame(() => setPlaying(true)); }} style={{
          marginLeft: 'auto', padding: '5px 10px', borderRadius: 999,
          border: '.5px solid var(--rule)', background: 'var(--paper-2)',
          fontSize: 11, fontWeight: 700, color: 'var(--ink-2)', cursor: 'pointer',
        }} className="mono">↻ Replay</button>
      </div>

      <div style={{ borderRadius: 12, overflow: 'hidden', background: 'var(--paper-2)', border: '.5px solid var(--rule)' }}>
        <Explainer play={playing} />
      </div>
      <p style={{ margin: '10px 0 0', fontSize: 13.5, color: 'var(--ink-2)', lineHeight: 1.55, textWrap: 'pretty' }}>
        <b style={{ color: 'var(--ink)' }}>Answer: {q.options.find((o) => o.id === q.correct).label}.</b>{' '}
        {q.why}
      </p>
      <div style={{ marginTop: 10, display: 'flex', gap: 6 }}>
        <a href="#" style={{ fontSize: 12, color: 'var(--indigo-700)', fontWeight: 600, textDecoration: 'none' }}>Open visualizer for this article →</a>
      </div>
    </div>
  );
}

// ─── Ad slot (only here) ──────────────────────
function AdSlot({ compact }) {
  return (
    <div style={{
      margin: '12px 0',
      padding: compact ? '8px 10px' : '10px 14px',
      borderRadius: 10,
      background: 'var(--paper)',
      border: '1px dashed var(--rule-2)',
      display: 'flex', alignItems: 'center', gap: 10,
      minHeight: compact ? 56 : 76,
    }}>
      <span className="mono" style={{
        padding: '3px 7px', borderRadius: 4, fontSize: 9, fontWeight: 700,
        background: 'var(--paper-2)', color: 'var(--ink-3)',
        letterSpacing: '.1em', textTransform: 'uppercase',
        border: '.5px solid var(--rule)',
      }}>ad</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink-2)' }}>Non-intrusive banner · 320×80</div>
        <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Only renders between questions on /practice/*. Never inside visualizers, hubs, or news.</div>
      </div>
    </div>
  );
}

// ─── Mobile Practice ──────────────────────
function MobilePractice() {
  const [picked, setPicked] = useStatePA(null);
  const [submitted, setSubmitted] = useStatePA(true);
  const q = QUESTIONS[0];
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper-2)', overflowY: 'auto' }}>
      {/* Header */}
      <header style={{
        padding: '12px var(--pad-x) 10px',
        background: 'var(--paper)',
        borderBottom: '.5px solid var(--rule)',
        position: 'sticky', top: 0, zIndex: 5,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={{
              width: 30, height: 30, borderRadius: 8, border: 0, background: 'var(--paper-2)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div>
              <div className="mono" style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Practice · Polity</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Parliament Sectional</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span className="mono" style={{
              padding: '4px 8px', borderRadius: 999, background: 'color-mix(in oklch, #16a34a 15%, var(--paper))', color: '#15803d',
              fontSize: 11, fontWeight: 700,
            }}>2 ✓</span>
            <span className="mono" style={{
              padding: '4px 8px', borderRadius: 999, background: 'color-mix(in oklch, var(--subj-polity) 12%, var(--paper))', color: 'var(--subj-polity-ink)',
              fontSize: 11, fontWeight: 700,
            }}>0 ✗</span>
          </div>
        </div>
        {/* progress dots */}
        <div style={{ display: 'flex', gap: 4 }}>
          {Array.from({ length: 20 }).map((_, i) => {
            const state = i < 2 ? 'correct' : i === 2 ? 'active' : 'upcoming';
            const c = state === 'correct' ? '#16a34a' : state === 'active' ? 'var(--indigo-600)' : 'var(--rule)';
            return <span key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: c }}/>;
          })}
        </div>
        <div className="mono" style={{ marginTop: 6, fontSize: 10.5, color: 'var(--ink-3)' }}>Q 3 / 20 · 14:32 left</div>
      </header>

      {/* Question */}
      <div style={{ padding: '14px var(--pad-x) 8px' }}>
        <MCQCard
          q={q}
          picked={picked || 'a'}
          setPicked={setPicked}
          submitted={submitted}
          onSubmit={() => setSubmitted(true)}
          onNext={() => {}}
        />
        {submitted && <Explanation q={q} picked={picked || 'a'} />}
      </div>

      {/* Ad between questions */}
      <div style={{ padding: '0 var(--pad-x)' }}>
        <AdSlot />
      </div>

      {/* Sneak peek of next question card */}
      <div style={{ padding: '4px var(--pad-x) 24px' }}>
        <div style={{
          padding: '14px 16px', borderRadius: 14, background: 'var(--paper)',
          border: '.5px dashed var(--rule-2)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span className="mono" style={{ fontSize: 22, fontWeight: 800, color: 'var(--ink-4)' }}>Q4</span>
          <div style={{ flex: 1 }}>
            <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Up next · Art. 108</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}>Who presides over a joint sitting?</div>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    </div>
  );
}

// ─── Desktop Practice ──────────────────────
function DesktopPractice() {
  const q = QUESTIONS[0];
  const q2 = QUESTIONS[1];
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper-2)', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      <header style={{
        padding: '12px 36px', borderBottom: '.5px solid var(--rule)',
        background: 'var(--paper)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <window.Wordmark size={20} />
          <span style={{ width: 1, height: 16, background: 'var(--rule)' }}/>
          <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Practice / Polity / Parliament Sectional</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-2)' }}>Q 3 / 20</span>
          <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)' }}>⏱ 14:32</span>
          <button style={{ padding: '7px 14px', borderRadius: 999, background: 'var(--paper-2)', border: '.5px solid var(--rule)', fontSize: 12, fontWeight: 700 }}>Pause</button>
          <button style={{ padding: '7px 14px', borderRadius: 999, background: 'var(--ink)', color: 'var(--paper)', border: 0, fontSize: 12, fontWeight: 700 }}>End set</button>
        </div>
      </header>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '240px 1fr 360px', gap: 24, padding: '24px 36px' }}>
        {/* Left: question grid + tally */}
        <aside>
          <div style={{ padding: 14, borderRadius: 14, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Set progress</div>
            <div style={{ display: 'flex', gap: 18, margin: '8px 0 14px' }}>
              <Stat n="02" l="correct"  ink="#15803d" />
              <Stat n="00" l="wrong"    ink="var(--subj-polity-ink)" />
              <Stat n="01" l="skipped"  ink="var(--ink-3)" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
              {Array.from({ length: 20 }).map((_, i) => {
                const state = i < 2 ? 'correct' : i === 2 ? 'active' : 'upcoming';
                const styles = {
                  correct:  { bg: 'color-mix(in oklch, #16a34a 18%, var(--paper))', ink: '#15803d',                       bd: '#16a34a' },
                  active:   { bg: 'var(--ink)',                                       ink: 'var(--paper)',                  bd: 'var(--ink)' },
                  upcoming: { bg: 'var(--paper-2)',                                   ink: 'var(--ink-3)',                  bd: 'var(--rule)' },
                }[state];
                return (
                  <span key={i} className="mono" style={{
                    aspectRatio: '1', borderRadius: 7,
                    background: styles.bg, color: styles.ink, border: `.5px solid ${styles.bd}`,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, fontWeight: 700,
                  }}>{String(i + 1).padStart(2, '0')}</span>
                );
              })}
            </div>
          </div>

          <div style={{ marginTop: 14, padding: 14, borderRadius: 14, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Accuracy by topic</div>
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                { t: 'Bills',           v: 100 },
                { t: 'Joint sittings',  v: 75 },
                { t: 'Committees',      v: 50 },
                { t: 'Privileges',      v: 33 },
              ].map((r) => (
                <div key={r.t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                  <span style={{ minWidth: 92, color: 'var(--ink-2)', fontWeight: 600 }}>{r.t}</span>
                  <span style={{ flex: 1, height: 5, borderRadius: 2, background: 'var(--rule)', position: 'relative' }}>
                    <span style={{ position: 'absolute', inset: 0, width: r.v + '%', background: r.v >= 75 ? '#16a34a' : r.v >= 50 ? 'var(--amber-500)' : 'var(--subj-polity)' }}/>
                  </span>
                  <span className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', minWidth: 28, textAlign: 'right' }}>{r.v}%</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Center: current question + explanation + ad */}
        <main>
          <MCQCard q={q} picked={'a'} setPicked={() => {}} submitted onSubmit={() => {}} onNext={() => {}} />
          <Explanation q={q} picked={'a'} />
          <AdSlot />
          <div style={{
            padding: 16, borderRadius: 14, background: 'var(--paper)',
            border: '.5px dashed var(--rule-2)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <span className="mono" style={{ fontSize: 26, fontWeight: 800, color: 'var(--ink-4)' }}>Q4</span>
            <div style={{ flex: 1 }}>
              <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.06em', textTransform: 'uppercase' }}>Up next · Art. 108 · {q2.exam}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-2)' }}>{q2.stem}</div>
            </div>
            <button style={{ padding: '8px 14px', borderRadius: 999, background: 'var(--indigo-600)', color: 'white', border: 0, fontSize: 12, fontWeight: 700 }}>Continue →</button>
          </div>
        </main>

        {/* Right: streak ladder + shortcuts */}
        <aside>
          <div style={{ padding: 16, borderRadius: 14, background: 'var(--ink)', color: 'var(--paper)' }}>
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Set streak · 2 in a row</span>
            <div style={{ margin: '6px 0 4px', fontSize: 22, fontWeight: 800, letterSpacing: '-.015em' }}>One more for +10 XP</div>
            <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="mono" style={{
                  flex: 1, padding: '8px 0', borderRadius: 7, textAlign: 'center',
                  background: s <= 2 ? 'var(--amber-500)' : 'color-mix(in oklch, white 8%, transparent)',
                  color: s <= 2 ? 'var(--ink)' : 'color-mix(in oklch, white 40%, transparent)',
                  fontSize: 11, fontWeight: 800,
                }}>{s <= 2 ? '✓' : s}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, padding: 16, borderRadius: 14, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Keyboard shortcuts</div>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12.5 }}>
              {[
                ['A B C D', 'Pick option'],
                ['Enter',  'Check / Next'],
                ['R',      'Replay explainer'],
                ['B',      'Bookmark'],
                ['Esc',    'End set'],
              ].map(([k, l]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <Kbd>{k}</Kbd>
                  <span style={{ color: 'var(--ink-2)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, padding: 16, borderRadius: 14, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Source</div>
            <div style={{ marginTop: 6, fontSize: 13, color: 'var(--ink-2)' }}>SSC CGL 2023 Tier-1 · Polity Section</div>
            <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <span className="tag">Past Paper</span>
              <span className="tag">High freq.</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ n, l, ink }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 22, fontWeight: 800, color: ink, lineHeight: 1, letterSpacing: '-.03em' }}>{n}</div>
      <div style={{ fontSize: 10.5, color: 'var(--ink-3)', marginTop: 2 }}>{l}</div>
    </div>
  );
}
function Kbd({ children }) {
  return <span className="mono" style={{
    padding: '3px 7px', borderRadius: 5,
    background: 'var(--paper-2)', border: '.5px solid var(--rule)',
    fontSize: 11, fontWeight: 700, color: 'var(--ink-2)',
  }}>{children}</span>;
}

// ─── Shells ──────────────────────
function PhoneShellPA({ children, width = 400, height = 820 }) {
  return (
    <div style={{ width, height, background: '#0c0a09', borderRadius: 44, padding: 10, boxShadow: '0 30px 60px -24px rgba(28,25,23,.25), inset 0 0 0 1px rgba(255,255,255,.06)', position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)', width: 96, height: 28, borderRadius: 999, background: '#000', zIndex: 10 }}/>
      <div style={{ width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden', background: 'var(--paper)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 44, padding: '14px 28px 0', display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: 'var(--ink)', zIndex: 6, pointerEvents: 'none' }} className="mono">
          <span>9:41</span>
          <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="0" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="2" y="2" width="13" height="6" fill="currentColor"/><rect x="19" y="3" width="2" height="4" rx=".6" fill="currentColor"/></svg>
        </div>
        <div style={{ paddingTop: 44, height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  );
}
function BrowserShellPA({ children, width = 1340, height = 980 }) {
  return (
    <div style={{ width, height, borderRadius: 14, overflow: 'hidden', background: 'var(--paper)', border: '.5px solid var(--rule)', boxShadow: '0 30px 60px -24px rgba(28,25,23,.18)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 38, padding: '0 12px', background: 'var(--paper-2)', borderBottom: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ed6a5e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#f4bf4f' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#62c554' }} />
        </span>
        <div style={{ flex: 1, height: 22, borderRadius: 6, background: 'var(--paper)', border: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: 11.5, color: 'var(--ink-3)' }} className="mono">govtstudy.org/practice/polity/parliament</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function PracticeApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_PA);
  useEffectPA(() => {
    const root = document.documentElement;
    root.dataset.theme = t.theme;
    root.dataset.density = t.density;
    root.dataset.motion = t.motion;
    root.dataset.personality = t.personality;
  }, [t.theme, t.density, t.motion, t.personality]);

  return (
    <>
      <window.DesignCanvas>
        <window.DCSection id="pa-mobile" title="Practice Arena · mobile" subtitle="MCQ with animated explainer. Single non-intrusive ad slot between questions.">
          <window.DCArtboard id="mob-pa" label="Q3 — answered · mobile" width={400} height={1200}>
            <PhoneShellPA width={400} height={1200}><MobilePractice /></PhoneShellPA>
          </window.DCArtboard>
        </window.DCSection>
        <window.DCSection id="pa-desktop" title="Practice Arena · desktop" subtitle="Question grid + accuracy by topic, central MCQ + visual explanation, streak ladder.">
          <window.DCArtboard id="dsk-pa" label="Set · desktop" width={1360} height={1100}>
            <BrowserShellPA width={1360} height={1100}><DesktopPractice /></BrowserShellPA>
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

ReactDOM.createRoot(document.getElementById('root')).render(<PracticeApp />);
