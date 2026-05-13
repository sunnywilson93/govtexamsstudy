/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio */
// dashboard.jsx — Streak & progress; cookie-based, no auth, no "welcome Sunny".

const { useEffect: useEffectDB } = React;

const TWEAK_DEFAULTS_DB = /*EDITMODE-BEGIN*/{
  "theme": "light", "density": "regular", "motion": "regular", "personality": "studious"
}/*EDITMODE-END*/;

// 84-day heatmap (12 cols × 7 rows)
const HEAT = Array.from({ length: 84 }).map((_, i) => {
  if (i >= 77) return 4;                              // last 7 days = current streak
  if (i >= 75 && i < 77) return 0;                    // gap before streak
  const r = Math.sin(i * 1.7) * 0.5 + 0.5;
  return [0, 1, 1, 2, 2, 3, 3, 4][Math.floor(r * 8)] || 0;
});

const SUBJECTS = [
  { id: 'quant',     label: 'Quant',     score: 62, color: 'var(--subj-quant)' },
  { id: 'reasoning', label: 'Reasoning', score: 78, color: 'var(--subj-reasoning)' },
  { id: 'polity',    label: 'Polity',    score: 71, color: 'var(--subj-polity)' },
  { id: 'history',   label: 'History',   score: 44, color: 'var(--subj-history)' },
  { id: 'geography', label: 'Geography', score: 51, color: 'var(--subj-geography)' },
  { id: 'economics', label: 'Economics', score: 38, color: 'var(--subj-economics)' },
  { id: 'science',   label: 'Science',   score: 67, color: 'var(--subj-science)' },
];

function Radar({ size = 240, data = SUBJECTS }) {
  const cx = size / 2, cy = size / 2, R = size / 2 - 32;
  const n = data.length;
  const angle = (i) => (-Math.PI / 2) + i * (2 * Math.PI / n);
  const pt = (i, frac) => [cx + Math.cos(angle(i)) * R * frac, cy + Math.sin(angle(i)) * R * frac];
  const poly = data.map((d, i) => pt(i, d.score / 100).join(',')).join(' ');
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.25, 0.5, 0.75, 1].map((f) => (
        <polygon key={f} points={data.map((_, i) => pt(i, f).join(',')).join(' ')}
          fill="none" stroke="var(--rule)" strokeWidth="1" strokeDasharray={f === 1 ? '0' : '3 3'} />
      ))}
      {data.map((_, i) => <line key={i} x1={cx} y1={cy} x2={pt(i, 1)[0]} y2={pt(i, 1)[1]} stroke="var(--rule)" strokeWidth=".5" />)}
      <polygon points={poly} fill="color-mix(in oklch, var(--indigo-600) 18%, transparent)" stroke="var(--indigo-600)" strokeWidth="1.8" strokeLinejoin="round" />
      {data.map((d, i) => {
        const [x, y] = pt(i, d.score / 100);
        return <circle key={d.id} cx={x} cy={y} r="4" fill={d.color} stroke="var(--paper)" strokeWidth="2" />;
      })}
      {data.map((d, i) => {
        const [lx, ly] = pt(i, 1.16);
        return (
          <g key={'l-' + d.id}>
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">{d.label}</text>
            <text x={lx} y={ly + 12} textAnchor="middle" dominantBaseline="middle" fontSize="9.5" fontFamily="JetBrains Mono" fontWeight="700" fill={d.color}>{d.score}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Heat({ cellSize = 14, gap = 3 }) {
  const palette = ['var(--paper-2)', 'color-mix(in oklch, var(--indigo-600) 18%, var(--paper))', 'color-mix(in oklch, var(--indigo-600) 38%, var(--paper))', 'color-mix(in oklch, var(--indigo-600) 60%, var(--paper))', 'var(--indigo-600)'];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(12, ${cellSize}px)`, gridAutoFlow: 'column', gridTemplateRows: `repeat(7, ${cellSize}px)`, gap }}>
      {HEAT.map((v, i) => (
        <span key={i} style={{
          width: cellSize, height: cellSize, borderRadius: 3,
          background: palette[v],
          boxShadow: v === 4 && i >= 77 ? '0 0 0 1.5px var(--amber-500)' : 'none',
        }}/>
      ))}
    </div>
  );
}

const BADGES = [
  { id: 'b1', tier: 'gold',   label: '7-day streak',     sub: 'Earned today',  earned: true,  pct: 100 },
  { id: 'b2', tier: 'silver', label: 'Polity Apprentice', sub: '20 visualizers', earned: true,  pct: 100 },
  { id: 'b3', tier: 'bronze', label: 'First 100 MCQs',    sub: '102/100',        earned: true,  pct: 100 },
  { id: 'b4', tier: 'silver', label: 'Current Affairs Reg.', sub: '4/7 days',   earned: false, pct: 57 },
  { id: 'b5', tier: 'gold',   label: '30-day streak',     sub: '7/30',          earned: false, pct: 23 },
  { id: 'b6', tier: 'gold',   label: 'Polity Master',     sub: '34/71 viz',     earned: false, pct: 48 },
];

function BadgeChip({ b, compact }) {
  const ring = { gold: 'var(--amber-500)', silver: '#94a3b8', bronze: '#b45309' }[b.tier];
  const fill = { gold: 'color-mix(in oklch, var(--amber-500) 18%, var(--paper))', silver: '#e2e8f0', bronze: 'color-mix(in oklch, #b45309 14%, var(--paper))' }[b.tier];
  const dim = b.earned ? 1 : .42;
  return (
    <div style={{
      padding: compact ? '10px 10px' : 12, borderRadius: 14, background: 'var(--paper)',
      border: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', gap: 10,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 999, background: fill, color: ring,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: `2px solid ${ring}`, opacity: dim, flex: 'none', position: 'relative',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 L15 8 L21 9 L16.5 13.5 L18 20 L12 16.5 L6 20 L7.5 13.5 L3 9 L9 8 Z"/></svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', opacity: dim }}>{b.label}</div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>{b.sub}</div>
        {!b.earned && (
          <div style={{ marginTop: 5, height: 3, borderRadius: 2, background: 'var(--rule)', position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', inset: 0, width: b.pct + '%', background: ring }}/>
          </div>
        )}
      </div>
    </div>
  );
}

function StreakRing({ size = 138, day = 7, max = 30 }) {
  const R = size / 2 - 8, C = 2 * Math.PI * R;
  const pct = day / max;
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={R} stroke="var(--rule)" strokeWidth="6" fill="none"/>
      <circle cx={size/2} cy={size/2} r={R} stroke="var(--amber-500)" strokeWidth="6" fill="none"
        strokeDasharray={`${C * pct} ${C}`} strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x={size/2} y={size/2 - 6} textAnchor="middle" fontSize="36" fontWeight="800" fontFamily="JetBrains Mono" fill="var(--ink)" letterSpacing="-1">{day}</text>
      <text x={size/2} y={size/2 + 14} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--ink-3)" fontFamily="JetBrains Mono" letterSpacing=".06em">DAY STREAK</text>
    </svg>
  );
}

const SR_DUE = [
  { id: 's1', topic: 'How a Bill becomes a Law',      subj: 'polity',    last: '2d ago', due: 'now',  color: 'var(--subj-polity)' },
  { id: 's2', topic: 'Time, Speed & Distance — boats',  subj: 'quant',     last: '4d ago', due: 'now',  color: 'var(--subj-quant)' },
  { id: 's3', topic: 'Indus Valley Civilization',     subj: 'history',   last: '6d ago', due: 'today', color: 'var(--subj-history)' },
  { id: 's4', topic: 'Indian monsoon mechanism',      subj: 'geography', last: '7d ago', due: 'today', color: 'var(--subj-geography)' },
];

function DueCard({ s }) {
  return (
    <a href="#" style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 12px',
      borderRadius: 12, background: 'var(--paper)', border: '.5px solid var(--rule)',
      textDecoration: 'none', color: 'inherit',
    }}>
      <span style={{ width: 4, height: 36, borderRadius: 2, background: s.color, flex: 'none' }}/>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>{s.topic}</div>
        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>Last seen {s.last}</div>
      </div>
      <span className="mono" style={{
        padding: '4px 8px', borderRadius: 999,
        background: s.due === 'now' ? 'color-mix(in oklch, var(--subj-polity) 14%, var(--paper))' : 'var(--paper-2)',
        color: s.due === 'now' ? 'var(--subj-polity-ink)' : 'var(--ink-2)',
        fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em',
      }}>{s.due === 'now' ? 'Due now' : 'Due today'}</span>
    </a>
  );
}

// ─── MOBILE ────────────────────────────
function MobileDashboard() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper-2)', overflowY: 'auto' }}>
      <header style={{ padding: '14px var(--pad-x) 8px', background: 'var(--paper)', borderBottom: '.5px solid var(--rule)' }}>
        <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Your progress · cookie</div>
        <h1 style={{ margin: '2px 0 0', fontSize: 22, fontWeight: 800, letterSpacing: '-.025em' }}>Day <span style={{ color: 'var(--amber-600)' }}>7</span>. Keep it going.</h1>
      </header>

      {/* Streak + heatmap card */}
      <section style={{ padding: '14px var(--pad-x) 0' }}>
        <div style={{
          padding: 16, borderRadius: 16,
          background: 'linear-gradient(150deg, color-mix(in oklch, var(--amber-500) 8%, var(--paper)) 0%, var(--paper) 60%)',
          border: '.5px solid var(--rule)',
          display: 'flex', gap: 14, alignItems: 'center',
        }}>
          <StreakRing size={108} day={7} max={30} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Last 12 weeks</div>
            <div style={{ marginTop: 6, overflowX: 'auto' }}><Heat cellSize={10} gap={2} /></div>
            <div className="mono" style={{ marginTop: 6, fontSize: 10.5, color: 'var(--ink-3)' }}>longest streak <b style={{ color: 'var(--ink)' }}>11d</b> · this week 7/7</div>
          </div>
        </div>
      </section>

      {/* Today's mission */}
      <section style={{ padding: '14px var(--pad-x) 0' }}>
        <div style={{
          padding: 14, borderRadius: 14, background: 'var(--ink)', color: 'var(--paper)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ flex: 1 }}>
            <span className="mono" style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Today’s mission</span>
            <div style={{ margin: '4px 0 4px', fontSize: 17, fontWeight: 800 }}>2 visualizers + 10 MCQs</div>
            <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
              {[1, 1, 1, 0, 0].map((v, i) => (
                <span key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: v ? 'var(--amber-500)' : 'color-mix(in oklch, white 12%, transparent)' }}/>
              ))}
            </div>
            <div className="mono" style={{ marginTop: 6, fontSize: 11, color: 'color-mix(in oklch, white 60%, transparent)' }}>3 of 5 done · +25 XP locked</div>
          </div>
          <button style={{ padding: '10px 14px', borderRadius: 10, background: 'var(--amber-500)', color: 'var(--ink)', border: 0, fontWeight: 800, fontSize: 13, flex: 'none' }}>Resume</button>
        </div>
      </section>

      {/* Radar */}
      <section style={{ padding: '14px var(--pad-x) 0' }}>
        <div style={{ padding: 14, borderRadius: 14, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Subject mastery</div>
              <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '-.015em' }}>Polity · your strongest pillar</div>
            </div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>weighted by exam</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0' }}><Radar size={244} /></div>
        </div>
      </section>

      {/* Spaced repetition */}
      <section style={{ padding: '14px var(--pad-x) 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 800, letterSpacing: '-.015em' }}>Revisit — 4 due</h2>
          <a href="#" className="mono" style={{ fontSize: 11, color: 'var(--indigo-700)', textDecoration: 'none' }}>plan ·</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SR_DUE.map((s) => <DueCard key={s.id} s={s} />)}
        </div>
      </section>

      {/* Badges */}
      <section style={{ padding: '14px var(--pad-x) 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 800, letterSpacing: '-.015em' }}>Badges · 3 of 18</h2>
          <a href="#" className="mono" style={{ fontSize: 11, color: 'var(--indigo-700)', textDecoration: 'none' }}>see all →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
          {BADGES.slice(0, 4).map((b) => <BadgeChip key={b.id} b={b} compact />)}
        </div>
      </section>
    </div>
  );
}

// ─── DESKTOP ────────────────────────────
function DesktopDashboard() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper-2)', overflowY: 'auto' }}>
      <header style={{
        padding: '14px 36px', borderBottom: '.5px solid var(--rule)', background: 'var(--paper)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <window.Wordmark size={22} />
        <nav style={{ display: 'flex', gap: 24 }}>
          {['Subjects', 'Current Affairs', 'Practice', 'Dashboard', 'Exam Intel'].map((n, i) => (
            <a key={n} href="#" style={{ fontSize: 13.5, fontWeight: 600, color: i === 3 ? 'var(--ink)' : 'var(--ink-2)', textDecoration: 'none' }}>{n}</a>
          ))}
        </nav>
        <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--amber-700)' }}>🔥 Day 07</span>
      </header>

      <section style={{ padding: '28px 36px 20px' }}>
        <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>Anonymous · cookie progress</div>
        <h1 style={{ margin: '6px 0 0', fontSize: 44, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05 }}>
          Day <span style={{ color: 'var(--amber-600)' }}>7</span>. Don’t break the chain.
        </h1>
      </section>

      <section style={{ padding: '0 36px 36px', display: 'grid', gridTemplateColumns: '420px 1fr 360px', gap: 20 }}>
        {/* Left — Streak ring + heatmap + week stats */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ padding: 22, borderRadius: 18, background: 'var(--paper)', border: '.5px solid var(--rule)', display: 'flex', gap: 20, alignItems: 'center' }}>
            <StreakRing size={160} day={7} max={30} />
            <div>
              <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Day 7 of 30</div>
              <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.015em' }}>23 days to gold</div>
              <div style={{ margin: '10px 0', display: 'flex', gap: 14 }}>
                <Stat n="11d" l="longest" />
                <Stat n="7/7"  l="this wk" />
                <Stat n="+25"  l="xp today" ink="var(--indigo-600)" />
              </div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>No signup. Streak lives in your browser.</div>
            </div>
          </div>

          <div style={{ padding: 18, borderRadius: 18, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
              <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Activity — last 12 weeks</span>
              <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>184 contributions</span>
            </div>
            <Heat cellSize={14} gap={3} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 6, marginTop: 10 }}>
              <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>less</span>
              {[0, 1, 2, 3, 4].map((v) => (
                <span key={v} style={{
                  width: 12, height: 12, borderRadius: 3,
                  background: ['var(--paper-2)', 'color-mix(in oklch, var(--indigo-600) 18%, var(--paper))', 'color-mix(in oklch, var(--indigo-600) 38%, var(--paper))', 'color-mix(in oklch, var(--indigo-600) 60%, var(--paper))', 'var(--indigo-600)'][v],
                }}/>
              ))}
              <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>more</span>
            </div>
          </div>

          <div style={{ padding: 18, borderRadius: 18, background: 'var(--ink)', color: 'var(--paper)' }}>
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Today’s mission</span>
            <div style={{ margin: '8px 0 12px', fontSize: 22, fontWeight: 800, letterSpacing: '-.015em' }}>2 visualizers + 10 MCQs</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <Mini done={1} of={2} label="Visualizers" />
              <Mini done={7} of={10} label="MCQs" />
            </div>
            <div style={{ marginTop: 14, display: 'flex', gap: 4 }}>
              {[1,1,1,1,1,1,1,0,0,0].map((v, i) => (
                <span key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: v ? 'var(--amber-500)' : 'color-mix(in oklch, white 12%, transparent)' }}/>
              ))}
            </div>
            <button style={{ marginTop: 14, padding: '12px 16px', borderRadius: 10, background: 'var(--amber-500)', color: 'var(--ink)', border: 0, fontWeight: 800, fontSize: 14, width: '100%', cursor: 'pointer' }}>Resume — 14 min to keep streak</button>
          </div>
        </div>

        {/* Center — Radar + revisit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ padding: 22, borderRadius: 18, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <div>
                <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Subject mastery</div>
                <div style={{ fontSize: 20, fontWeight: 800, letterSpacing: '-.02em' }}>Polity strong. Economics needs love.</div>
              </div>
              <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>SCORE = MCQ ACCURACY × COVERAGE</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Radar size={340} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {SUBJECTS.map((s) => (
                  <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: s.color }}/>
                    <span style={{ flex: 1, fontWeight: 600, color: 'var(--ink-2)' }}>{s.label}</span>
                    <span style={{ flex: 2, height: 6, borderRadius: 3, background: 'var(--rule)', position: 'relative' }}>
                      <span style={{ position: 'absolute', inset: 0, width: s.score + '%', background: s.color }}/>
                    </span>
                    <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink)', minWidth: 26, textAlign: 'right' }}>{s.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: 18, borderRadius: 18, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
              <div>
                <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Spaced repetition</div>
                <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.015em' }}>4 topics due for review</div>
              </div>
              <span className="mono" style={{
                padding: '4px 10px', borderRadius: 999,
                background: 'color-mix(in oklch, var(--indigo-600) 8%, var(--paper))',
                color: 'var(--indigo-700)', fontSize: 11, fontWeight: 700,
              }}>SM-2 schedule</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {SR_DUE.map((s) => <DueCard key={s.id} s={s} />)}
            </div>
          </div>
        </div>

        {/* Right — Badges + leaderboard-free social proof */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ padding: 18, borderRadius: 18, background: 'var(--paper)', border: '.5px solid var(--rule)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
              <div>
                <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Badges</div>
                <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.015em' }}>3 of 18</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {BADGES.map((b) => <BadgeChip key={b.id} b={b} />)}
            </div>
          </div>

          <div style={{ padding: 18, borderRadius: 18, background: 'color-mix(in oklch, var(--indigo-600) 7%, var(--paper))', border: '.5px solid color-mix(in oklch, var(--indigo-600) 25%, transparent)' }}>
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--indigo-700)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Private to your browser</span>
            <div style={{ margin: '6px 0 8px', fontSize: 15, fontWeight: 800, letterSpacing: '-.015em' }}>No leaderboard. No sign-up. No notifications.</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
              Your streak + radar + revisit list live in a single cookie. Clear cookies = clean slate. Export at any time.
            </div>
            <button style={{ marginTop: 10, padding: '8px 12px', borderRadius: 8, background: 'var(--paper)', border: '.5px solid var(--rule)', fontSize: 12, fontWeight: 700, cursor: 'pointer' }} className="mono">↓ Export JSON</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, l, ink = 'var(--ink)' }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 18, fontWeight: 800, color: ink, letterSpacing: '-.02em', lineHeight: 1 }}>{n}</div>
      <div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase', marginTop: 2 }}>{l}</div>
    </div>
  );
}

function Mini({ done, of, label }) {
  const pct = (done / of) * 100;
  return (
    <div style={{
      padding: '10px 12px', borderRadius: 10,
      background: 'color-mix(in oklch, white 7%, transparent)',
      border: '.5px solid color-mix(in oklch, white 14%, transparent)',
    }}>
      <div className="mono" style={{ fontSize: 10, fontWeight: 700, color: 'color-mix(in oklch, white 50%, transparent)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '2px 0 6px' }}>
        <span className="mono" style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>{done}</span>
        <span className="mono" style={{ fontSize: 12, color: 'color-mix(in oklch, white 50%, transparent)' }}>/ {of}</span>
      </div>
      <div style={{ height: 4, borderRadius: 2, background: 'color-mix(in oklch, white 10%, transparent)', position: 'relative', overflow: 'hidden' }}>
        <span style={{ position: 'absolute', inset: 0, width: pct + '%', background: 'var(--amber-500)' }}/>
      </div>
    </div>
  );
}

// Shells
function PhoneShellDB({ children, width = 400, height = 1280 }) {
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
function BrowserShellDB({ children, width = 1340, height = 1080 }) {
  return (
    <div style={{ width, height, borderRadius: 14, overflow: 'hidden', background: 'var(--paper)', border: '.5px solid var(--rule)', boxShadow: '0 30px 60px -24px rgba(28,25,23,.18)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 38, padding: '0 12px', background: 'var(--paper-2)', borderBottom: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ed6a5e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#f4bf4f' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#62c554' }} />
        </span>
        <div style={{ flex: 1, height: 22, borderRadius: 6, background: 'var(--paper)', border: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: 11.5, color: 'var(--ink-3)' }} className="mono">govtstudy.org/me</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function DashboardApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_DB);
  useEffectDB(() => {
    const r = document.documentElement;
    r.dataset.theme = t.theme; r.dataset.density = t.density;
    r.dataset.motion = t.motion; r.dataset.personality = t.personality;
  }, [t.theme, t.density, t.motion, t.personality]);
  return (
    <>
      <window.DesignCanvas>
        <window.DCSection id="db-mobile" title="Dashboard · mobile" subtitle="Anonymous. Streak ring + heatmap, today's mission, radar, revisit list, badges.">
          <window.DCArtboard id="mob-db" label="Day 7 · mobile" width={400} height={1480}>
            <PhoneShellDB width={400} height={1480}><MobileDashboard /></PhoneShellDB>
          </window.DCArtboard>
        </window.DCSection>
        <window.DCSection id="db-desktop" title="Dashboard · desktop" subtitle="Three-column. Streak + heatmap + mission, radar + revisit, badges + privacy note.">
          <window.DCArtboard id="dsk-db" label="Day 7 · desktop" width={1360} height={1100}>
            <BrowserShellDB width={1360} height={1100}><DesktopDashboard /></BrowserShellDB>
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

ReactDOM.createRoot(document.getElementById('root')).render(<DashboardApp />);
