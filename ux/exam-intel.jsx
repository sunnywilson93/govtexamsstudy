/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio */
// exam-intel.jsx — Exam Intelligence: calendar, cutoffs, match-me tool.
// Wow moment: the YEAR RING calendar — exams plotted on a 12-sector clock face,
// today as an indigo arrow. And the Match-Me scatter with a "you" dot landing
// among 9 exam dots, top 3 highlighted with halos.

const { useState: useStateEI, useEffect: useEffectEI, useMemo: useMemoEI } = React;

const TWEAK_DEFAULTS_EI = /*EDITMODE-BEGIN*/{
  "theme": "light", "density": "regular", "motion": "regular", "personality": "studious"
}/*EDITMODE-END*/;

// — Data — Today is May 11, 2026.
const TODAY = new Date(2026, 4, 11);
const dayDiff = (d) => Math.round((d - TODAY) / 86400000);

const EXAMS = [
  { id: 'upsc',     short: 'UPSC',     name: 'UPSC CSE Prelims',     date: new Date(2026, 4, 24), color: 'var(--subj-polity)',    tier: 'Tier 1',  vacancies: 1056,  difficulty: 5, timeNeeded: 5, subjects: ['Polity', 'History', 'Geography', 'Economics', 'CA'], cutoff: [98, 96, 87, 75, 88], paper: 'GS + CSAT' },
  { id: 'upsc_pre', short: 'UPPSC',    name: 'UPPSC Prelims',         date: new Date(2026, 5, 14), color: 'var(--subj-history)',   tier: 'Tier 1',  vacancies: 220,   difficulty: 4, timeNeeded: 4, subjects: ['Polity', 'History', 'UP-specific'], cutoff: [120, 124, 116, 119, 122], paper: 'GS + CSAT' },
  { id: 'rrb',      short: 'RRB',      name: 'RRB NTPC CBT-1',        date: new Date(2026, 7, 2),  color: 'var(--subj-economics)', tier: 'CBT 1',   vacancies: 11558, difficulty: 2, timeNeeded: 2, subjects: ['Reasoning', 'Quant', 'GK'], cutoff: [76, 79, 72, 75, 78], paper: '100 Q' },
  { id: 'clerk',    short: 'IBPS-C',   name: 'IBPS Clerk Prelims',    date: new Date(2026, 7, 30), color: 'var(--subj-geography)', tier: 'Pre',     vacancies: 6128,  difficulty: 2, timeNeeded: 2, subjects: ['Reasoning', 'Quant', 'English'], cutoff: [76, 78, 77, 80, 81], paper: '100 Q' },
  { id: 'cds',      short: 'CDS',      name: 'CDS II',                date: new Date(2026, 8, 6),  color: 'var(--subj-quant)',     tier: 'Written', vacancies: 459,   difficulty: 4, timeNeeded: 3, subjects: ['English', 'GK', 'Quant'], cutoff: [123, 119, 114, 122, 120], paper: '300 marks' },
  { id: 'cgl',      short: 'CGL',      name: 'SSC CGL Tier-1',        date: new Date(2026, 8, 13), color: 'var(--subj-reasoning)', tier: 'Tier 1',  vacancies: 17727, difficulty: 3, timeNeeded: 3, subjects: ['Quant', 'Reasoning', 'English', 'GA'], cutoff: [147, 154, 144, 145, 152], paper: '200 marks' },
  { id: 'ibps',     short: 'IBPS-PO',  name: 'IBPS PO Prelims',       date: new Date(2026, 9, 17), color: 'var(--subj-science)',   tier: 'Pre',     vacancies: 4455,  difficulty: 3, timeNeeded: 3, subjects: ['Reasoning', 'Quant', 'English'], cutoff: [54, 56, 58, 57, 59], paper: '100 Q' },
  { id: 'sbi',      short: 'SBI-PO',   name: 'SBI PO Prelims',        date: new Date(2026, 10, 8), color: 'var(--indigo-600)',     tier: 'Pre',     vacancies: 2000,  difficulty: 4, timeNeeded: 4, subjects: ['Reasoning', 'Quant', 'English'], cutoff: [49, 55, 53, 56, 58], paper: '100 Q' },
  { id: 'chsl',     short: 'CHSL',     name: 'SSC CHSL Tier-1',       date: new Date(2026, 11, 4), color: 'var(--amber-500)',      tier: 'Tier 1',  vacancies: 3712,  difficulty: 2, timeNeeded: 2, subjects: ['Quant', 'Reasoning', 'English', 'GA'], cutoff: [156, 155, 149, 151, 158], paper: '200 marks' },
];

// — Atoms —
function Eyebrow({ children, color }) {
  return <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', fontWeight: 700, color: color || 'var(--ink-3)' }}>{children}</div>;
}
function Pill({ children, bg, color, weight = 600 }) {
  return <span className="mono" style={{ fontSize: 10.5, padding: '3px 7px', borderRadius: 6, background: bg || 'var(--paper-2)', color: color || 'var(--ink-2)', fontWeight: weight, letterSpacing: '.04em' }}>{children}</span>;
}
function Card({ children, style, dark }) {
  return (
    <div style={{
      background: dark ? '#1a1614' : 'var(--paper)',
      color: dark ? '#f5f3ee' : 'var(--ink)',
      border: dark ? '1px solid #2c2622' : '.5px solid var(--rule)',
      borderRadius: 'var(--r-md)',
      boxShadow: dark ? '0 18px 32px -22px rgba(0,0,0,.5)' : 'var(--sh-1)',
      ...style
    }}>{children}</div>
  );
}

function CountUp({ n, suffix = '', big = 56 }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [v, setV] = useStateEI(n);
  useEffectEI(() => {
    if (reduce) { setV(n); return; }
    setV(0);
    let r; const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 900);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(n * eased));
      if (p < 1) r = requestAnimationFrame(tick);
      else setV(n);
    };
    r = requestAnimationFrame(tick);
    // Safety: if RAF is throttled, snap to final value
    const fallback = setTimeout(() => setV(n), 1200);
    return () => { cancelAnimationFrame(r); clearTimeout(fallback); };
  }, [n]);
  return <span className="mono" style={{ fontSize: big, fontWeight: 700, letterSpacing: '-.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{v}{suffix}</span>;
}

// — Year Ring: 12-sector clock with exams on it. THIS IS THE WOW MOMENT. —
function YearRing({ size = 320, exams = EXAMS, onPick, picked }) {
  const cx = size / 2, cy = size / 2, R = size / 2 - 28, R2 = R - 26;
  // Year starts at TODAY's month. Today = May 2026 → month 0 of ring is May.
  // Map any date to angle from the start of TODAY's month, over 365 days.
  const start = new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  const angle = (date) => {
    const d = (date - start) / 86400000;
    return -Math.PI / 2 + (d / 365) * Math.PI * 2;
  };
  const monthLabels = Array.from({ length: 12 }).map((_, i) => {
    const dt = new Date(start.getFullYear(), start.getMonth() + i, 1);
    return { label: dt.toLocaleString('en', { month: 'short' }).toUpperCase(), a: -Math.PI / 2 + (i / 12) * Math.PI * 2 };
  });
  const todayA = angle(TODAY);
  const todayPt = [cx + Math.cos(todayA) * R, cy + Math.sin(todayA) * R];
  const next = exams.find((e) => dayDiff(e.date) > 0) || exams[0];
  const nextA = angle(next.date);
  // arc from today to next exam (in indigo)
  const arcA = todayA, arcB = nextA;
  const large = (arcB - arcA + Math.PI * 2) % (Math.PI * 2) > Math.PI ? 1 : 0;
  const aP = [cx + Math.cos(arcA) * R, cy + Math.sin(arcA) * R];
  const bP = [cx + Math.cos(arcB) * R, cy + Math.sin(arcB) * R];
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      {/* base ring */}
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--rule)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={R2} fill="none" stroke="var(--rule)" strokeWidth=".5" strokeDasharray="2 3" />
      {/* month sectors */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = -Math.PI / 2 + (i / 12) * Math.PI * 2;
        return <line key={i} x1={cx + Math.cos(a) * R2} y1={cy + Math.sin(a) * R2} x2={cx + Math.cos(a) * (R + 6)} y2={cy + Math.sin(a) * (R + 6)} stroke="var(--rule-2)" strokeWidth=".8" />;
      })}
      {/* month labels */}
      {monthLabels.map((m, i) => {
        const mid = m.a + Math.PI / 12;
        const lx = cx + Math.cos(mid) * (R + 16);
        const ly = cy + Math.sin(mid) * (R + 16);
        return (
          <text key={i} x={lx} y={ly} fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="700" fill={i === 0 ? 'var(--indigo-600)' : 'var(--ink-3)'} textAnchor="middle" dominantBaseline="middle" letterSpacing=".06em">{m.label}</text>
        );
      })}
      {/* arc to next exam */}
      <path d={`M ${aP[0]} ${aP[1]} A ${R} ${R} 0 ${large} 1 ${bP[0]} ${bP[1]}`} fill="none" stroke="var(--indigo-600)" strokeWidth="3" strokeLinecap="round" />
      {/* exam dots */}
      {exams.map((e) => {
        const a = angle(e.date);
        const r = picked === e.id ? 8 : 6;
        const ex = cx + Math.cos(a) * R, ey = cy + Math.sin(a) * R;
        return (
          <g key={e.id} style={{ cursor: 'pointer' }} onClick={() => onPick && onPick(e.id)}>
            <circle cx={ex} cy={ey} r={r + 4} fill={picked === e.id ? 'color-mix(in oklch, ' + e.color + ' 28%, transparent)' : 'transparent'} />
            <circle cx={ex} cy={ey} r={r} fill={e.color} stroke="var(--paper)" strokeWidth="2.5" />
            <text x={ex + Math.cos(a) * 18} y={ey + Math.sin(a) * 18 + 3} fontFamily="JetBrains Mono" fontWeight="700" fontSize="9" fill="var(--ink-2)" textAnchor={Math.cos(a) > 0.1 ? 'start' : (Math.cos(a) < -0.1 ? 'end' : 'middle')}>{e.short}</text>
          </g>
        );
      })}
      {/* today arrow */}
      <line x1={cx} y1={cy} x2={todayPt[0]} y2={todayPt[1]} stroke="var(--indigo-600)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r="6" fill="var(--indigo-600)" />
      <circle cx={todayPt[0]} cy={todayPt[1]} r="5" fill="var(--paper)" stroke="var(--indigo-600)" strokeWidth="2.5" />
      {/* center label */}
      <text x={cx} y={cy + 28} fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="700" fill="var(--ink-3)" textAnchor="middle" letterSpacing=".1em">MAY 11 · 2026</text>
    </svg>
  );
}

// — Countdown card —
function Countdown({ exam, dark }) {
  const d = dayDiff(exam.date);
  const dateStr = exam.date.toLocaleDateString('en-IN', { weekday: 'short', day: '2-digit', month: 'short' });
  return (
    <Card dark={dark} style={{ padding: 18, position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <Eyebrow color={dark ? '#a8a29e' : undefined}>Next up</Eyebrow>
        <Pill bg={dark ? '#2c2622' : 'var(--paper-2)'} color={dark ? '#fbbf24' : 'var(--amber-700)'}>● LIVE</Pill>
      </div>
      <div style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-.01em', marginBottom: 4 }}>{exam.name}</div>
      <div className="mono" style={{ fontSize: 11.5, color: dark ? '#a8a29e' : 'var(--ink-3)', marginBottom: 16 }}>{dateStr}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <CountUp n={d} />
        <div style={{ fontWeight: 700, fontSize: 14, color: dark ? '#a8a29e' : 'var(--ink-2)' }}>days left</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1fr', gap: 12, marginTop: 18, alignItems: 'stretch' }}>
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 9.5, color: dark ? '#a8a29e' : 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 3 }}>Vacancies</div>
          <div className="mono" style={{ fontSize: 15, fontWeight: 700, color: dark ? '#f5f3ee' : 'var(--ink)', whiteSpace: 'nowrap' }}>{exam.vacancies.toLocaleString('en-IN')}</div>
        </div>
        <div style={{ background: dark ? '#2c2622' : 'var(--rule)' }} />
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 9.5, color: dark ? '#a8a29e' : 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 3 }}>Stage</div>
          <div className="mono" style={{ fontSize: 15, fontWeight: 700, color: dark ? '#f5f3ee' : 'var(--ink)', whiteSpace: 'nowrap' }}>{exam.tier}</div>
        </div>
        <div style={{ background: dark ? '#2c2622' : 'var(--rule)' }} />
        <div style={{ minWidth: 0 }}>
          <div className="mono" style={{ fontSize: 9.5, color: dark ? '#a8a29e' : 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 3 }}>Paper</div>
          <div className="mono" style={{ fontSize: 15, fontWeight: 700, color: dark ? '#f5f3ee' : 'var(--ink)', whiteSpace: 'nowrap' }}>{exam.paper}</div>
        </div>
      </div>
    </Card>
  );
}

// — Cutoff line chart —
function CutoffChart({ exam, width = 360, height = 180 }) {
  const years = [2021, 2022, 2023, 2024, 2025];
  const data = exam.cutoff;
  const min = Math.min(...data) - 4, max = Math.max(...data) + 4;
  const padX = 36, padY = 22;
  const x = (i) => padX + (i / (data.length - 1)) * (width - padX * 2);
  const y = (v) => padY + (1 - (v - min) / (max - min)) * (height - padY * 2);
  const path = data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(v)}`).join(' ');
  const area = `${path} L ${x(data.length - 1)} ${height - padY} L ${x(0)} ${height - padY} Z`;
  const trend = data[data.length - 1] - data[0];
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {[0, 0.25, 0.5, 0.75, 1].map((f) => (
        <line key={f} x1={padX} y1={padY + f * (height - padY * 2)} x2={width - padX} y2={padY + f * (height - padY * 2)} stroke="var(--rule)" strokeWidth=".5" strokeDasharray={f === 0 || f === 1 ? '0' : '2 3'} />
      ))}
      <defs>
        <linearGradient id={'g-' + exam.id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={exam.color} stopOpacity=".22" />
          <stop offset="100%" stopColor={exam.color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={'url(#g-' + exam.id + ')'} />
      <path d={path} fill="none" stroke={exam.color} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      {data.map((v, i) => (
        <g key={i}>
          <circle cx={x(i)} cy={y(v)} r="4" fill="var(--paper)" stroke={exam.color} strokeWidth="2" />
          <text x={x(i)} y={y(v) - 10} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="var(--ink-2)">{v}</text>
          <text x={x(i)} y={height - 6} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="var(--ink-3)">{years[i]}</text>
        </g>
      ))}
      <text x={width - padX} y={padY - 6} textAnchor="end" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill={trend >= 0 ? 'var(--subj-geography-ink)' : 'var(--subj-polity-ink)'}>{trend >= 0 ? '↑' : '↓'} {Math.abs(trend)} pts vs 2021</text>
    </svg>
  );
}

// — Match-Me scatter: time-commitment × difficulty, with "you" dot —
function MatchScatter({ width = 360, height = 320, you = { time: 3, difficulty: 3 }, top = ['cgl', 'ibps', 'cds'] }) {
  const padL = 50, padR = 18, padT = 22, padB = 40;
  const x = (v) => padL + ((v - 1) / 4) * (width - padL - padR);   // 1..5
  const y = (v) => padT + (1 - (v - 1) / 4) * (height - padT - padB);
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* grid */}
      {[1, 2, 3, 4, 5].map((v) => (
        <g key={v}>
          <line x1={x(v)} y1={padT} x2={x(v)} y2={height - padB} stroke="var(--rule)" strokeWidth=".5" strokeDasharray="2 3" />
          <line x1={padL} y1={y(v)} x2={width - padR} y2={y(v)} stroke="var(--rule)" strokeWidth=".5" strokeDasharray="2 3" />
        </g>
      ))}
      {/* axes labels */}
      <text x={padL} y={height - 18} fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="700" fill="var(--ink-3)">EASY</text>
      <text x={width - padR} y={height - 18} fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="700" fill="var(--ink-3)" textAnchor="end">HARD</text>
      <text x={(padL + width - padR) / 2} y={height - 6} fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="var(--ink-2)" textAnchor="middle" letterSpacing=".1em">DIFFICULTY →</text>
      <g transform={`translate(14, ${(padT + height - padB) / 2}) rotate(-90)`}>
        <text fontFamily="JetBrains Mono" fontSize="10" fontWeight="700" fill="var(--ink-2)" textAnchor="middle" letterSpacing=".1em">TIME NEEDED →</text>
      </g>
      {/* exam dots */}
      {EXAMS.map((e) => {
        const isTop = top.includes(e.id);
        const px = x(e.difficulty), py = y(e.timeNeeded);
        return (
          <g key={e.id}>
            {isTop && <circle cx={px} cy={py} r="16" fill="color-mix(in oklch, var(--indigo-600) 14%, transparent)" />}
            {isTop && <circle cx={px} cy={py} r="10" fill="none" stroke="var(--indigo-600)" strokeWidth="1.2" strokeDasharray="2 2" />}
            <circle cx={px} cy={py} r="6.5" fill={e.color} stroke="var(--paper)" strokeWidth="2.5" />
            <text x={px} y={py + 18} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fontWeight={isTop ? 800 : 600} fill={isTop ? 'var(--indigo-700)' : 'var(--ink-3)'}>{e.short}</text>
          </g>
        );
      })}
      {/* you dot */}
      <g>
        <circle cx={x(you.difficulty)} cy={y(you.time)} r="18" fill="color-mix(in oklch, var(--amber-500) 22%, transparent)">
          <animate attributeName="r" values="14;22;14" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx={x(you.difficulty)} cy={y(you.time)} r="9" fill="var(--amber-500)" stroke="#1c1917" strokeWidth="2" />
        <text x={x(you.difficulty)} y={y(you.time) + 3} textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="800" fontSize="9" fill="#1c1917">YOU</text>
      </g>
    </svg>
  );
}

// — Tabs —
function Tabs({ value, onChange, items, color = 'var(--indigo-600)' }) {
  return (
    <div style={{ display: 'flex', gap: 4, background: 'var(--paper-2)', padding: 3, borderRadius: 999, border: '.5px solid var(--rule)' }}>
      {items.map((it) => (
        <button key={it.id} onClick={() => onChange(it.id)} style={{
          flex: 1, padding: '7px 10px', borderRadius: 999, border: 'none',
          background: value === it.id ? 'var(--paper)' : 'transparent',
          color: value === it.id ? color : 'var(--ink-3)',
          fontWeight: 700, fontSize: 12.5, cursor: 'pointer',
          boxShadow: value === it.id ? 'var(--sh-1)' : 'none', fontFamily: 'inherit',
          transition: 'all .18s var(--ease-out-soft)',
        }}>{it.label}</button>
      ))}
    </div>
  );
}

// — Mobile —
function MobileExamIntel() {
  const [tab, setTab] = useStateEI('calendar');
  const [pickedExam, setPickedExam] = useStateEI('upsc');
  const nextExam = EXAMS.find((e) => dayDiff(e.date) > 0) || EXAMS[0];
  const examData = EXAMS.find((e) => e.id === pickedExam);

  return (
    <div style={{ background: 'var(--paper)', height: '100%', overflowY: 'auto', overflowX: 'hidden', paddingBottom: 32 }}>
      {/* Sticky header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(251,250,247,.92)', backdropFilter: 'blur(10px)', borderBottom: '.5px solid var(--rule)', padding: '12px 16px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--ink)', color: 'var(--paper)', display: 'grid', placeItems: 'center', fontFamily: 'JetBrains Mono', fontWeight: 800, fontSize: 11 }}>gs</div>
            <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: '-.01em' }}>Exam intelligence</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', borderRadius: 999, background: 'var(--amber-100)', border: '.5px solid var(--amber-500)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--amber-500)' }} />
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--amber-700)' }}>D7</span>
          </div>
        </div>
        <Tabs value={tab} onChange={setTab} items={[
          { id: 'calendar', label: 'Calendar' },
          { id: 'cutoffs', label: 'Cutoffs' },
          { id: 'match', label: 'Match-me' },
        ]} />
      </div>

      <div style={{ padding: '16px 16px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {tab === 'calendar' && (
          <>
            <Countdown exam={nextExam} dark />
            {/* Year ring */}
            <Card style={{ padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                <div>
                  <Eyebrow>Year ring</Eyebrow>
                  <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: '-.01em', marginTop: 4 }}>9 exams in the next 12 months</div>
                </div>
                <Pill bg="var(--indigo-50)" color="var(--indigo-700)">May → Apr</Pill>
              </div>
              <div style={{ display: 'grid', placeItems: 'center', padding: '8px 0 4px' }}>
                <YearRing size={320} onPick={(id) => { setPickedExam(id); setTab('cutoffs'); }} picked={pickedExam} />
              </div>
              <div style={{ fontSize: 11.5, color: 'var(--ink-3)', textAlign: 'center', marginTop: 6 }}>Tap a dot to inspect cutoffs · today's arrow shows the indigo countdown arc</div>
            </Card>

            {/* Exam list */}
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '12px 14px 8px' }}>
                <Eyebrow>All upcoming · sorted</Eyebrow>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {EXAMS.map((e, i) => {
                  const d = dayDiff(e.date);
                  return (
                    <div key={e.id} style={{ display: 'grid', gridTemplateColumns: '38px 1fr auto', gap: 10, padding: '11px 14px', borderTop: i === 0 ? 'none' : '.5px solid var(--rule)', alignItems: 'center' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: 'color-mix(in oklch, ' + e.color + ' 14%, var(--paper))', border: '.5px solid ' + e.color, display: 'grid', placeItems: 'center', color: e.color, fontFamily: 'JetBrains Mono', fontWeight: 800, fontSize: 9.5, lineHeight: 1, textAlign: 'center' }}>
                        <div>{e.date.toLocaleString('en', { month: 'short' }).toUpperCase()}<br /><span style={{ fontSize: 12 }}>{e.date.getDate()}</span></div>
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: 700, fontSize: 13.5, letterSpacing: '-.005em' }}>{e.name}</div>
                        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', marginTop: 2 }}>{e.vacancies.toLocaleString('en-IN')} vacancies · {e.tier}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="mono" style={{ fontSize: 14, fontWeight: 800, color: d < 30 ? 'var(--subj-polity-ink)' : 'var(--ink)' }}>{d}d</div>
                        <div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>left</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </>
        )}

        {tab === 'cutoffs' && (
          <>
            <Card style={{ padding: 14 }}>
              <Eyebrow>Cutoff trends · 5 years</Eyebrow>
              <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-.01em', marginTop: 4, marginBottom: 4 }}>{examData.name}</div>
              <div className="mono" style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 8 }}>UR category · official cutoffs</div>
              <CutoffChart exam={examData} width={332} height={180} />
              {/* prediction */}
              <div style={{ marginTop: 12, padding: 12, background: 'var(--paper-2)', borderRadius: 10, border: '.5px solid var(--rule)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <Eyebrow>Your predicted band</Eyebrow>
                  <Pill bg="var(--indigo-600)" color="#fff">based on 218 attempts</Pill>
                </div>
                <div style={{ position: 'relative', height: 40 }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, color-mix(in oklch, var(--subj-polity) 16%, transparent), color-mix(in oklch, var(--subj-history) 16%, transparent), color-mix(in oklch, var(--subj-geography) 16%, transparent))', borderRadius: 6 }} />
                  {/* avg cutoff marker */}
                  <div style={{ position: 'absolute', left: '52%', top: -4, bottom: -4, width: 2, background: 'var(--ink-2)' }} />
                  <div className="mono" style={{ position: 'absolute', left: '52%', bottom: '100%', fontSize: 9.5, color: 'var(--ink-2)', fontWeight: 700, transform: 'translateX(-50%)' }}>AVG {Math.round(examData.cutoff.reduce((a,b)=>a+b)/examData.cutoff.length)}</div>
                  {/* your band */}
                  <div style={{ position: 'absolute', left: '58%', right: '22%', top: 6, bottom: 6, background: 'var(--indigo-600)', borderRadius: 4, opacity: .92 }} />
                  <div className="mono" style={{ position: 'absolute', top: '50%', left: 'calc(58% + 6px)', transform: 'translateY(-50%)', fontSize: 11, fontWeight: 800, color: '#fff' }}>YOU · 92–112</div>
                </div>
              </div>
            </Card>
            {/* alt exam picker */}
            <div style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '2px 0 4px', marginLeft: -4, marginRight: -4 }}>
              {EXAMS.map((e) => (
                <button key={e.id} onClick={() => setPickedExam(e.id)} style={{
                  flex: '0 0 auto', padding: '8px 12px', borderRadius: 999,
                  background: pickedExam === e.id ? e.color : 'var(--paper)',
                  color: pickedExam === e.id ? '#fff' : 'var(--ink-2)',
                  border: '.5px solid ' + (pickedExam === e.id ? e.color : 'var(--rule)'),
                  fontWeight: 700, fontSize: 12, fontFamily: 'JetBrains Mono', cursor: 'pointer',
                }}>{e.short}</button>
              ))}
            </div>
          </>
        )}

        {tab === 'match' && (
          <>
            <Card style={{ padding: 14 }} dark>
              <Eyebrow color="#a8a29e">Match-me · 5 questions answered</Eyebrow>
              <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-.01em', marginTop: 4, marginBottom: 4 }}>Your fit map</div>
              <div style={{ fontSize: 12.5, color: '#a8a29e', marginBottom: 10 }}>Based on time-budget (3 hrs/day), Polity & Reasoning strength, and your "private sector OK" answer.</div>
              <div style={{ background: '#0e0b0a', borderRadius: 10, padding: 6, border: '1px solid #2c2622' }}>
                <div style={{ background: 'var(--paper)', borderRadius: 6, padding: 6 }}>
                  <MatchScatter width={336} height={300} you={{ difficulty: 2.6, time: 3 }} top={['cgl', 'ibps', 'rrb']} />
                </div>
              </div>
            </Card>
            {/* Top 3 */}
            <div>
              <Eyebrow>Your top 3 — start with these</Eyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                {['cgl', 'ibps', 'rrb'].map((id, idx) => {
                  const e = EXAMS.find((x) => x.id === id);
                  return (
                    <Card key={id} style={{ padding: 12, display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: 10, alignItems: 'center' }}>
                      <div className="mono" style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--indigo-600)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12 }}>{idx + 1}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13.5 }}>{e.name}</div>
                        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', marginTop: 2 }}>{e.vacancies.toLocaleString('en-IN')} seats · {e.subjects.slice(0, 3).join(' · ')}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div className="mono" style={{ fontSize: 15, fontWeight: 800, color: 'var(--indigo-600)' }}>{[92, 87, 81][idx]}</div>
                        <div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-3)' }}>fit</div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
            {/* retake */}
            <button style={{ padding: '12px 14px', borderRadius: 10, border: '1px dashed var(--rule-2)', background: 'transparent', color: 'var(--ink-2)', fontWeight: 700, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>↻ Retake the 5-question quiz</button>
          </>
        )}
      </div>
    </div>
  );
}

// — Desktop —
function DesktopExamIntel() {
  const [pickedExam, setPickedExam] = useStateEI('cgl');
  const nextExam = EXAMS.find((e) => dayDiff(e.date) > 0) || EXAMS[0];
  const examData = EXAMS.find((e) => e.id === pickedExam);
  return (
    <div style={{ background: 'var(--paper)', height: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Top nav */}
      <div style={{ borderBottom: '.5px solid var(--rule)', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(251,250,247,.96)', backdropFilter: 'blur(10px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 7, background: 'var(--ink)', color: 'var(--paper)', display: 'grid', placeItems: 'center', fontFamily: 'JetBrains Mono', fontWeight: 800, fontSize: 12 }}>gs</div>
            <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: '-.01em' }}>govtstudy<span style={{ color: 'var(--indigo-600)' }}>.</span></div>
          </div>
          <nav style={{ display: 'flex', gap: 18 }}>
            {['Home', 'Subjects', 'Current Affairs', 'Practice', 'Dashboard', 'Exam intel'].map((x) => (
              <a key={x} style={{ fontSize: 13, fontWeight: x === 'Exam intel' ? 700 : 500, color: x === 'Exam intel' ? 'var(--ink)' : 'var(--ink-3)', textDecoration: 'none', borderBottom: x === 'Exam intel' ? '2px solid var(--indigo-600)' : 'none', paddingBottom: 4 }}>{x}</a>
            ))}
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Pill bg="var(--paper-2)">⌘K Search exams</Pill>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 999, background: 'var(--amber-100)', border: '.5px solid var(--amber-500)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--amber-500)' }} />
            <span className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--amber-700)' }}>DAY 7</span>
          </div>
        </div>
      </div>

      {/* Page header */}
      <div style={{ padding: '24px 32px 0' }}>
        <Eyebrow>EXAM INTELLIGENCE</Eyebrow>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 6, marginBottom: 18 }}>
          <h1 style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-.025em', margin: 0, maxWidth: 680, lineHeight: 1.05 }}>9 doors are opening this year. <span style={{ color: 'var(--ink-3)' }}>Pick the right one.</span></h1>
          <div style={{ display: 'flex', gap: 8 }}>
            <Pill bg="var(--paper-2)">Updated May 11, 2026</Pill>
            <Pill bg="var(--paper-2)">Sources: UPSC, SSC, IBPS, RRB</Pill>
          </div>
        </div>
      </div>

      {/* 3-column body */}
      <div style={{ flex: 1, minHeight: 0, padding: '0 32px 28px', display: 'grid', gridTemplateColumns: '420px 1fr 360px', gap: 22, overflow: 'hidden' }}>
        {/* LEFT — year ring + countdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
          <Countdown exam={nextExam} dark />
          <Card style={{ padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
              <Eyebrow>Year ring · 12-month forecast</Eyebrow>
              <Pill bg="var(--indigo-50)" color="var(--indigo-700)">May → Apr</Pill>
            </div>
            <div style={{ display: 'grid', placeItems: 'center', padding: '4px 0 0' }}>
              <YearRing size={360} onPick={setPickedExam} picked={pickedExam} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8, justifyContent: 'center' }}>
              {EXAMS.map((e) => (
                <button key={e.id} onClick={() => setPickedExam(e.id)} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '4px 9px', borderRadius: 999, background: pickedExam === e.id ? e.color : 'var(--paper-2)', color: pickedExam === e.id ? '#fff' : 'var(--ink-2)', border: 'none', fontWeight: 700, fontSize: 10.5, fontFamily: 'JetBrains Mono', cursor: 'pointer' }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: pickedExam === e.id ? '#fff' : e.color }} />
                  {e.short}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* CENTER — cutoffs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
          <Card style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div>
                <Eyebrow>Cutoff trend · UR category · 5 years</Eyebrow>
                <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: '-.02em', marginTop: 4 }}>{examData.name}</div>
                <div className="mono" style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{examData.tier} · {examData.paper} · {examData.vacancies.toLocaleString('en-IN')} vacancies</div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {examData.subjects.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </div>
            <CutoffChart exam={examData} width={560} height={220} />
            <div style={{ marginTop: 14, padding: 14, background: 'var(--paper-2)', borderRadius: 10, border: '.5px solid var(--rule)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <Eyebrow>Your predicted band · based on 218 mock attempts</Eyebrow>
                <Pill bg="var(--indigo-600)" color="#fff">218 attempts</Pill>
              </div>
              <div style={{ position: 'relative', height: 42 }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, color-mix(in oklch, var(--subj-polity) 16%, transparent), color-mix(in oklch, var(--subj-history) 16%, transparent), color-mix(in oklch, var(--subj-geography) 16%, transparent))', borderRadius: 6 }} />
                <div style={{ position: 'absolute', left: '52%', top: -4, bottom: -4, width: 2, background: 'var(--ink-2)' }} />
                <div className="mono" style={{ position: 'absolute', left: '52%', bottom: '100%', fontSize: 9.5, color: 'var(--ink-2)', fontWeight: 700, transform: 'translateX(-50%)', paddingBottom: 2 }}>AVG {Math.round(examData.cutoff.reduce((a,b)=>a+b)/examData.cutoff.length)}</div>
                <div style={{ position: 'absolute', left: '58%', right: '22%', top: 6, bottom: 6, background: 'var(--indigo-600)', borderRadius: 4 }} />
                <div className="mono" style={{ position: 'absolute', top: '50%', left: 'calc(58% + 8px)', transform: 'translateY(-50%)', fontSize: 12, fontWeight: 800, color: '#fff' }}>YOU · 92–112</div>
              </div>
              <div style={{ marginTop: 10, fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                You sit <span style={{ fontWeight: 700, color: 'var(--subj-geography-ink)' }}>+8 points above the 5-yr average</span> — comfortable for general; tight for OBC unless you push Quant to 78%+.
              </div>
            </div>
          </Card>

          {/* Exam table */}
          <Card style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Eyebrow>All exams · sortable</Eyebrow>
              <div style={{ display: 'flex', gap: 6 }}>
                <Pill>Date ↑</Pill>
                <Pill bg="var(--paper)">Difficulty</Pill>
                <Pill bg="var(--paper)">Vacancies</Pill>
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
              <thead>
                <tr style={{ background: 'var(--paper-2)' }}>
                  {['Exam', 'Date', 'Days', 'Tier', 'Vacancies', 'Difficulty', '5-yr cutoff'].map((h) => (
                    <th key={h} className="mono" style={{ padding: '8px 14px', textAlign: 'left', fontSize: 10, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '.5px solid var(--rule)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EXAMS.map((e) => {
                  const d = dayDiff(e.date);
                  return (
                    <tr key={e.id} style={{ borderBottom: '.5px solid var(--rule)' }}>
                      <td style={{ padding: '11px 14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ width: 8, height: 8, borderRadius: 999, background: e.color }} />
                          <span style={{ fontWeight: 700 }}>{e.name}</span>
                        </div>
                      </td>
                      <td className="mono" style={{ padding: '11px 14px', color: 'var(--ink-2)' }}>{e.date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                      <td className="mono" style={{ padding: '11px 14px', fontWeight: 700, color: d < 30 ? 'var(--subj-polity-ink)' : 'var(--ink)' }}>{d}d</td>
                      <td style={{ padding: '11px 14px', color: 'var(--ink-2)' }}>{e.tier}</td>
                      <td className="mono" style={{ padding: '11px 14px', color: 'var(--ink-2)' }}>{e.vacancies.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '11px 14px' }}>
                        <span className="mono" style={{ fontWeight: 700 }}>{'●'.repeat(e.difficulty)}</span><span className="mono" style={{ color: 'var(--ink-4)' }}>{'●'.repeat(5 - e.difficulty)}</span>
                      </td>
                      <td style={{ padding: '11px 14px' }}>
                        <svg width={70} height={22} viewBox="0 0 70 22">
                          {e.cutoff.map((v, i) => {
                            const min = Math.min(...e.cutoff), max = Math.max(...e.cutoff);
                            const x = (i / (e.cutoff.length - 1)) * 66 + 2;
                            const y = 20 - ((v - min) / (max - min || 1)) * 16 - 2;
                            return i === 0
                              ? null
                              : <line key={i} x1={(i - 1) / (e.cutoff.length - 1) * 66 + 2} y1={20 - ((e.cutoff[i-1] - min) / (max - min || 1)) * 16 - 2} x2={x} y2={y} stroke={e.color} strokeWidth="1.6" />;
                          })}
                          {e.cutoff.map((v, i) => {
                            const min = Math.min(...e.cutoff), max = Math.max(...e.cutoff);
                            const x = (i / (e.cutoff.length - 1)) * 66 + 2;
                            const y = 20 - ((v - min) / (max - min || 1)) * 16 - 2;
                            return <circle key={i} cx={x} cy={y} r="1.6" fill={e.color} />;
                          })}
                        </svg>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>

        {/* RIGHT — Match-me */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto' }}>
          <Card style={{ padding: 16 }} dark>
            <Eyebrow color="#a8a29e">Match-me · the unfair filter</Eyebrow>
            <div style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-.01em', marginTop: 4, marginBottom: 4 }}>Your fit map</div>
            <div style={{ fontSize: 12, color: '#a8a29e', marginBottom: 10, lineHeight: 1.4 }}>5 questions, plotted against time-budget × difficulty. You answered: <span className="mono" style={{ color: '#fbbf24' }}>3 hrs/day</span>, strong in Polity/Reasoning, OK with private sector.</div>
            <div style={{ background: '#0e0b0a', borderRadius: 10, padding: 6, border: '1px solid #2c2622' }}>
              <div style={{ background: 'var(--paper)', borderRadius: 6, padding: 6 }}>
                <MatchScatter width={300} height={280} you={{ difficulty: 2.6, time: 3 }} top={['cgl', 'ibps', 'rrb']} />
              </div>
            </div>
            <div style={{ marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <Pill bg="#2c2622" color="#fbbf24">3 hrs/day</Pill>
              <Pill bg="#2c2622" color="#fbbf24">Polity ⚡</Pill>
              <Pill bg="#2c2622" color="#fbbf24">Reasoning ⚡</Pill>
              <Pill bg="#2c2622" color="#a8a29e">Maths so-so</Pill>
              <Pill bg="#2c2622" color="#a8a29e">Pvt OK</Pill>
            </div>
          </Card>

          <Card style={{ padding: 14 }}>
            <Eyebrow>Top 3 fits</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {[['cgl', 92], ['ibps', 87], ['rrb', 81]].map(([id, score], idx) => {
                const e = EXAMS.find((x) => x.id === id);
                return (
                  <div key={id} style={{ display: 'grid', gridTemplateColumns: '22px 1fr auto', gap: 10, padding: '10px 0', borderTop: idx === 0 ? 'none' : '.5px solid var(--rule)', alignItems: 'center' }}>
                    <div className="mono" style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--indigo-600)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 10.5 }}>{idx + 1}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13 }}>{e.name}</div>
                      <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', marginTop: 1 }}>{e.subjects.slice(0, 3).join(' · ')}</div>
                    </div>
                    <div className="mono" style={{ fontSize: 16, fontWeight: 800, color: 'var(--indigo-600)' }}>{score}</div>
                  </div>
                );
              })}
            </div>
            <button style={{ width: '100%', marginTop: 10, padding: '9px 12px', borderRadius: 8, border: '1px dashed var(--rule-2)', background: 'transparent', color: 'var(--ink-2)', fontWeight: 700, fontSize: 12, fontFamily: 'inherit', cursor: 'pointer' }}>↻ Retake quiz</button>
          </Card>

          {/* Salary preview */}
          <Card style={{ padding: 14 }}>
            <Eyebrow>What you'd earn · in-hand month 1</Eyebrow>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 7 }}>
              {[['CGL · Inspector', 56100, 'var(--subj-reasoning)'], ['IBPS PO', 52000, 'var(--subj-science)'], ['RRB NTPC · ASM', 38800, 'var(--subj-economics)'], ['UPSC IAS', 78800, 'var(--subj-polity)']].map(([name, amt, c]) => (
                <div key={name} style={{ display: 'grid', gridTemplateColumns: '110px 1fr 64px', gap: 8, alignItems: 'center', fontSize: 11.5 }}>
                  <div style={{ color: 'var(--ink-2)', fontWeight: 600 }}>{name}</div>
                  <div style={{ position: 'relative', height: 8, background: 'var(--paper-2)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, width: (amt / 80000 * 100) + '%', background: c, borderRadius: 4 }} />
                  </div>
                  <div className="mono" style={{ fontWeight: 700, color: 'var(--ink-2)', textAlign: 'right' }}>₹{(amt / 1000).toFixed(0)}k</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// — Shells (mirroring dashboard pattern) —
function PhoneShellEI({ width, height, children }) {
  return (
    <div style={{ position: 'relative', width, height, borderRadius: 44, background: '#1c1917', padding: 12, boxShadow: 'var(--sh-3)' }}>
      <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 90, height: 22, background: '#0a0908', borderRadius: 999, zIndex: 5 }} />
      <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: 'var(--paper)', position: 'relative' }}>
        {/* status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 22px 6px', fontFamily: 'JetBrains Mono', fontSize: 12, fontWeight: 700, color: 'var(--ink)' }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 5, alignItems: 'center', fontSize: 10 }}>● ● ● ▮</span>
        </div>
        <div style={{ height: 'calc(100% - 32px)', overflow: 'hidden' }}>{children}</div>
      </div>
    </div>
  );
}

function BrowserShellEI({ width, height, children }) {
  return (
    <div style={{ width, height, borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--sh-3)', background: 'var(--paper-2)', border: '.5px solid var(--rule-2)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 36, background: 'var(--paper-2)', display: 'flex', alignItems: 'center', gap: 8, padding: '0 14px', borderBottom: '.5px solid var(--rule)' }}>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ed6a5e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#f4be4f' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#62c554' }} />
        </span>
        <div style={{ flex: 1, height: 22, borderRadius: 6, background: 'var(--paper)', border: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: 11.5, color: 'var(--ink-3)' }} className="mono">govtstudy.org/exam-intel</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function ExamIntelApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_EI);
  useEffectEI(() => {
    const r = document.documentElement;
    r.dataset.theme = t.theme; r.dataset.density = t.density;
    r.dataset.motion = t.motion; r.dataset.personality = t.personality;
  }, [t.theme, t.density, t.motion, t.personality]);
  return (
    <>
      <window.DesignCanvas>
        <window.DCSection id="ei-system" title="Exam Intelligence" subtitle="Cutoff trends, year-ring calendar, match-me 2D fit map. Phase 1: cookie-based, no auth — answers persist locally.">
          <window.DCArtboard id="mob-cal" label="Mobile · Calendar (year ring)" width={400} height={1660}>
            <PhoneShellEI width={400} height={1660}><MobileExamIntel /></PhoneShellEI>
          </window.DCArtboard>
          <window.DCArtboard id="mob-cutoffs" label="Mobile · Cutoffs" width={400} height={1100}>
            <PhoneShellEI width={400} height={1100}>
              <MobileExamIntelTab tab="cutoffs" />
            </PhoneShellEI>
          </window.DCArtboard>
          <window.DCArtboard id="mob-match" label="Mobile · Match-me" width={400} height={1100}>
            <PhoneShellEI width={400} height={1100}>
              <MobileExamIntelTab tab="match" />
            </PhoneShellEI>
          </window.DCArtboard>
        </window.DCSection>
        <window.DCSection id="ei-desktop" title="Desktop adaptation" subtitle="3-column layout — countdown + year ring on the left, cutoff workbench in the middle, match-me + salary on the right.">
          <window.DCArtboard id="dsk-ei" label="Desktop · all three at once" width={1440} height={1240}>
            <BrowserShellEI width={1440} height={1240}><DesktopExamIntel /></BrowserShellEI>
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

// helper for the two extra mobile artboards — same component but initial tab set
function MobileExamIntelTab({ tab }) {
  // remount-by-key trick to set initial tab
  return <MobileExamIntelWithInitial initial={tab} />;
}
function MobileExamIntelWithInitial({ initial }) {
  const [tab, setTab] = useStateEI(initial);
  const [pickedExam, setPickedExam] = useStateEI('cgl');
  const examData = EXAMS.find((e) => e.id === pickedExam);
  const nextExam = EXAMS.find((e) => dayDiff(e.date) > 0) || EXAMS[0];
  return (
    <div style={{ background: 'var(--paper)', height: '100%', overflowY: 'auto', overflowX: 'hidden', paddingBottom: 32 }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(251,250,247,.92)', backdropFilter: 'blur(10px)', borderBottom: '.5px solid var(--rule)', padding: '12px 16px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--ink)', color: 'var(--paper)', display: 'grid', placeItems: 'center', fontFamily: 'JetBrains Mono', fontWeight: 800, fontSize: 11 }}>gs</div>
            <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: '-.01em' }}>Exam intelligence</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 8px', borderRadius: 999, background: 'var(--amber-100)', border: '.5px solid var(--amber-500)' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--amber-500)' }} />
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--amber-700)' }}>D7</span>
          </div>
        </div>
        <Tabs value={tab} onChange={setTab} items={[
          { id: 'calendar', label: 'Calendar' },
          { id: 'cutoffs', label: 'Cutoffs' },
          { id: 'match', label: 'Match-me' },
        ]} />
      </div>
      <div style={{ padding: '16px 16px 0', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {tab === 'cutoffs' && (
          <>
            <Card style={{ padding: 14 }}>
              <Eyebrow>Cutoff trends · 5 years</Eyebrow>
              <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-.01em', marginTop: 4, marginBottom: 4 }}>{examData.name}</div>
              <div className="mono" style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 8 }}>UR category · official cutoffs</div>
              <CutoffChart exam={examData} width={332} height={180} />
              <div style={{ marginTop: 12, padding: 12, background: 'var(--paper-2)', borderRadius: 10, border: '.5px solid var(--rule)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <Eyebrow>Your predicted band</Eyebrow>
                  <Pill bg="var(--indigo-600)" color="#fff">218 attempts</Pill>
                </div>
                <div style={{ position: 'relative', height: 40 }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, color-mix(in oklch, var(--subj-polity) 16%, transparent), color-mix(in oklch, var(--subj-history) 16%, transparent), color-mix(in oklch, var(--subj-geography) 16%, transparent))', borderRadius: 6 }} />
                  <div style={{ position: 'absolute', left: '52%', top: -4, bottom: -4, width: 2, background: 'var(--ink-2)' }} />
                  <div className="mono" style={{ position: 'absolute', left: '52%', bottom: '100%', fontSize: 9.5, color: 'var(--ink-2)', fontWeight: 700, transform: 'translateX(-50%)' }}>AVG {Math.round(examData.cutoff.reduce((a,b)=>a+b)/examData.cutoff.length)}</div>
                  <div style={{ position: 'absolute', left: '58%', right: '22%', top: 6, bottom: 6, background: 'var(--indigo-600)', borderRadius: 4, opacity: .92 }} />
                  <div className="mono" style={{ position: 'absolute', top: '50%', left: 'calc(58% + 6px)', transform: 'translateY(-50%)', fontSize: 11, fontWeight: 800, color: '#fff' }}>YOU · 148–162</div>
                </div>
              </div>
            </Card>
            <div style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '2px 0 4px', marginLeft: -4, marginRight: -4 }}>
              {EXAMS.map((e) => (
                <button key={e.id} onClick={() => setPickedExam(e.id)} style={{
                  flex: '0 0 auto', padding: '8px 12px', borderRadius: 999,
                  background: pickedExam === e.id ? e.color : 'var(--paper)',
                  color: pickedExam === e.id ? '#fff' : 'var(--ink-2)',
                  border: '.5px solid ' + (pickedExam === e.id ? e.color : 'var(--rule)'),
                  fontWeight: 700, fontSize: 12, fontFamily: 'JetBrains Mono', cursor: 'pointer',
                }}>{e.short}</button>
              ))}
            </div>
          </>
        )}
        {tab === 'match' && (
          <>
            <Card style={{ padding: 14 }} dark>
              <Eyebrow color="#a8a29e">Match-me · 5 questions answered</Eyebrow>
              <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-.01em', marginTop: 4, marginBottom: 4 }}>Your fit map</div>
              <div style={{ fontSize: 12.5, color: '#a8a29e', marginBottom: 10 }}>Based on time-budget (3 hrs/day), Polity & Reasoning strength, and your "private sector OK" answer.</div>
              <div style={{ background: '#0e0b0a', borderRadius: 10, padding: 6, border: '1px solid #2c2622' }}>
                <div style={{ background: 'var(--paper)', borderRadius: 6, padding: 6 }}>
                  <MatchScatter width={336} height={300} you={{ difficulty: 2.6, time: 3 }} top={['cgl', 'ibps', 'rrb']} />
                </div>
              </div>
            </Card>
            <div>
              <Eyebrow>Your top 3 — start with these</Eyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
                {['cgl', 'ibps', 'rrb'].map((id, idx) => {
                  const e = EXAMS.find((x) => x.id === id);
                  return (
                    <Card key={id} style={{ padding: 12, display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: 10, alignItems: 'center' }}>
                      <div className="mono" style={{ width: 28, height: 28, borderRadius: 999, background: 'var(--indigo-600)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12 }}>{idx + 1}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 13.5 }}>{e.name}</div>
                        <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)', marginTop: 2 }}>{e.vacancies.toLocaleString('en-IN')} seats · {e.subjects.slice(0, 3).join(' · ')}</div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div className="mono" style={{ fontSize: 15, fontWeight: 800, color: 'var(--indigo-600)' }}>{[92, 87, 81][idx]}</div>
                        <div className="mono" style={{ fontSize: 9.5, color: 'var(--ink-3)' }}>fit</div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
            <button style={{ padding: '12px 14px', borderRadius: 10, border: '1px dashed var(--rule-2)', background: 'transparent', color: 'var(--ink-2)', fontWeight: 700, fontSize: 13, fontFamily: 'inherit', cursor: 'pointer' }}>↻ Retake the 5-question quiz</button>
          </>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ExamIntelApp />);
