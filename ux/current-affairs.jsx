/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakRadio */
// current-affairs.jsx — Daily digest + index; PIB-sourced, exam-tagged, visual.

const { useState: useStateCA, useEffect: useEffectCA, useMemo: useMemoCA } = React;

const TWEAK_DEFAULTS_CA = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "density": "regular",
  "motion": "regular",
  "personality": "studious"
}/*EDITMODE-END*/;

// ─── Categories ──────────────────────────────────────
const CATS = {
  polity:    { label: 'Polity',    color: 'var(--subj-polity)',    ink: 'var(--subj-polity-ink)' },
  economy:   { label: 'Economy',   color: 'var(--subj-economics)', ink: 'var(--subj-economics-ink)' },
  defence:   { label: 'Defence',   color: '#475569',               ink: '#1e293b' },
  schemes:   { label: 'Schemes',   color: 'var(--indigo-600)',     ink: 'var(--indigo-700)' },
  intl:      { label: 'Int’l Relations', color: 'var(--subj-history)', ink: 'var(--subj-history-ink)' },
  sci:       { label: 'Sci & Tech', color: 'var(--subj-science)',  ink: 'var(--subj-science-ink)' },
  env:       { label: 'Environment', color: 'var(--subj-geography)', ink: 'var(--subj-geography-ink)' },
};

// ─── Today's 10 items (May 11, 2026) ──────────────────────
const ITEMS = [
  {
    id: 'repo',
    cat: 'economy',
    time: '09:14',
    head: 'RBI holds repo rate at 6.50% for the eighth straight meeting',
    why: 'Inflation projected at 4.5% for FY27; growth retained at 7.0%.',
    source: 'PIB / RBI MPC',
    tags: ['UPSC GS-III', 'IBPS PO', 'RBI Grade B'],
    type: 'delta',
    delta: { from: 6.50, to: 6.50, label: 'Repo rate', unit: '%' },
  },
  {
    id: 'frig',
    cat: 'defence',
    time: '10:02',
    head: 'INS Vindhyagiri commissioned — 6th Project-17A stealth frigate',
    why: 'Built at GRSE, Kolkata. 75% indigenous content. Atmanirbhar Bharat marker.',
    source: 'PIB / Min. of Defence',
    tags: ['UPSC GS-III', 'CDS', 'SSC CGL'],
    type: 'fact',
    fact: { lhs: 'P-17A', rhs: '6 / 7', label: 'frigates delivered' },
  },
  {
    id: 'dpdp',
    cat: 'polity',
    time: '11:30',
    head: 'Centre notifies DPDP Rules 2026; consent managers framework live',
    why: 'Operationalises the Digital Personal Data Protection Act, 2023.',
    source: 'PIB / MeitY',
    tags: ['UPSC GS-II', 'State PSC'],
    type: 'pillars',
    pillars: ['Consent', 'Purpose', 'Storage limit', 'Grievance'],
  },
  {
    id: 'pmk',
    cat: 'schemes',
    time: '12:18',
    head: 'PM-KISAN 18th installment: ₹22,000 cr to 9.4 cr farmers',
    why: '₹2,000 each, DBT to Aadhaar-linked accounts.',
    source: 'PIB / Min. of Agriculture',
    tags: ['UPSC GS-II', 'RRB', 'SSC CHSL'],
    type: 'big',
    big: { value: '₹22,000 cr', sub: '→ 9.4 cr beneficiaries' },
  },
  {
    id: 'asean',
    cat: 'intl',
    time: '13:05',
    head: 'India–ASEAN review FTA; e-commerce, services on table',
    why: 'Goods trade gap widened to $44 bn FY25. Talks aim at concluding by 2026.',
    source: 'PIB / MEA',
    tags: ['UPSC GS-II', 'UPSC CSE'],
    type: 'flow',
    flow: ['India', 'ASEAN-10', 'Review'],
  },
  {
    id: 'cpi',
    cat: 'economy',
    time: '14:22',
    head: 'CPI inflation eases to 3.16% in April — lowest since Aug 2019',
    why: 'Driven by base effect + vegetables disinflation; core sticky at 4.1%.',
    source: 'PIB / MoSPI',
    tags: ['UPSC GS-III', 'IBPS PO', 'RBI Grade B'],
    type: 'spark',
    spark: [4.85, 5.09, 4.83, 3.61, 3.34, 3.16],
    sparkLabel: 'CPI · last 6 months',
  },
  {
    id: 'art370',
    cat: 'polity',
    time: '15:00',
    head: 'SC upholds revocation of Article 370 — review petition dismissed',
    why: 'Two-judge bench finds no error apparent on the record.',
    source: 'PIB / Supreme Court',
    tags: ['UPSC GS-II', 'Judicial Services'],
    type: 'verdict',
    verdict: { upheld: 'Revocation upheld', against: 'Review dismissed' },
  },
  {
    id: 'iss',
    cat: 'sci',
    time: '16:30',
    head: 'Gaganyaan G1 uncrewed test flight slated for Dec 2026',
    why: 'Crew module separation + recovery from Bay of Bengal to be tested.',
    source: 'PIB / ISRO',
    tags: ['UPSC GS-III', 'ISRO Sci/Eng'],
    type: 'fact',
    fact: { lhs: 'Gaganyaan', rhs: 'G1', label: 'uncrewed test' },
  },
  {
    id: 'cop',
    cat: 'env',
    time: '17:45',
    head: 'India submits updated NDC: 50% non-fossil capacity by 2030',
    why: 'Earlier target 40%; tied to Panchamrit commitments at COP-26.',
    source: 'PIB / MoEFCC',
    tags: ['UPSC GS-III', 'UPSC CSE', 'SSC'],
    type: 'progress',
    progress: { from: 40, to: 50, label: 'non-fossil share', unit: '%' },
  },
  {
    id: 'edu',
    cat: 'schemes',
    time: '18:20',
    head: 'PM-SHRI: 1,000 more schools sanctioned, total now 15,000',
    why: 'Scheme upgrades existing schools under NEP 2020 framework.',
    source: 'PIB / Min. of Education',
    tags: ['UPSC GS-II', 'SSC CHSL', 'CTET'],
    type: 'progress',
    progress: { from: 14000, to: 15000, label: 'schools', unit: '' },
  },
];

// ─── Item visual ────────────────────────
function ItemVisual({ item }) {
  const cat = CATS[item.cat];
  switch (item.type) {
    case 'delta': {
      const { from, to, unit } = item.delta;
      const same = from === to;
      return (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14 }}>
          <Tower h={70} v={from} unit={unit} sub="prev" mute />
          <Tower h={70} v={to}   unit={unit} sub="held" color={cat.color} />
          <div style={{ paddingBottom: 6 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 8px',
              borderRadius: 999, background: same ? 'var(--paper-2)' : 'color-mix(in oklch, var(--subj-polity) 12%, var(--paper))',
              fontSize: 11, fontWeight: 700, color: same ? 'var(--ink-2)' : 'var(--subj-polity-ink)',
            }} className="mono">{same ? '→ unchanged' : (to > from ? '↑' : '↓') + ' ' + Math.abs(to - from) + unit}</span>
          </div>
        </div>
      );
    }
    case 'progress': {
      const { from, to, label, unit } = item.progress;
      const fromPct = unit === '%' ? from : 80;
      const toPct = unit === '%' ? to : 86;
      return (
        <div>
          <div style={{ height: 8, borderRadius: 4, background: 'var(--rule)', position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', inset: 0, width: fromPct + '%', background: 'color-mix(in oklch, ' + cat.color + ' 35%, transparent)' }}/>
            <span style={{ position: 'absolute', inset: 0, width: toPct + '%', background: cat.color, mixBlendMode: 'normal' }}/>
          </div>
          <div className="mono" style={{ marginTop: 6, fontSize: 11, color: 'var(--ink-3)', display: 'flex', justifyContent: 'space-between' }}>
            <span>was {from.toLocaleString()}{unit}</span>
            <span style={{ color: cat.ink, fontWeight: 700 }}>now {to.toLocaleString()}{unit}</span>
          </div>
        </div>
      );
    }
    case 'big':
      return (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span className="mono" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.03em', color: cat.ink, lineHeight: 1 }}>{item.big.value}</span>
          <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{item.big.sub}</span>
        </div>
      );
    case 'pillars':
      return (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {item.pillars.map((p, i) => (
            <span key={p} style={{
              padding: '5px 9px', borderRadius: 6,
              background: 'var(--paper-2)',
              border: '.5px solid color-mix(in oklch, ' + cat.color + ' 30%, transparent)',
              fontSize: 11.5, fontWeight: 600, color: cat.ink,
            }} className="mono">{(i + 1) + ' · ' + p}</span>
          ))}
        </div>
      );
    case 'flow':
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
          {item.flow.map((f, i) => (
            <React.Fragment key={f}>
              <span style={{
                padding: '6px 10px', borderRadius: 8,
                background: i === item.flow.length - 1 ? cat.color : 'var(--paper-2)',
                color: i === item.flow.length - 1 ? 'white' : 'var(--ink)',
                fontWeight: 700,
              }} className="mono">{f}</span>
              {i < item.flow.length - 1 && (
                <svg width="18" height="6"><path d="M0 3 H14 M11 0 L14 3 L11 6" stroke="var(--ink-3)" strokeWidth="1.2" fill="none"/></svg>
              )}
            </React.Fragment>
          ))}
        </div>
      );
    case 'spark': {
      const w = 168, h = 56;
      const max = Math.max(...item.spark), min = Math.min(...item.spark);
      const range = (max - min) || 1;
      const pts = item.spark.map((v, i) => [(i / (item.spark.length - 1)) * w, h - ((v - min) / range) * (h - 12) - 6]);
      const pathD = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
      const areaD = pathD + ' L' + w + ' ' + h + ' L0 ' + h + ' Z';
      return (
        <div>
          <svg width={w} height={h}>
            <path d={areaD} fill={'color-mix(in oklch, ' + cat.color + ' 15%, transparent)'} />
            <path d={pathD} stroke={cat.color} strokeWidth="1.6" fill="none" />
            {pts.map(([x, y], i) => i === pts.length - 1 && (
              <circle key={i} cx={x} cy={y} r="3.5" fill={cat.color} stroke="var(--paper)" strokeWidth="1.5"/>
            ))}
          </svg>
          <div className="mono" style={{ fontSize: 10.5, color: 'var(--ink-3)' }}>{item.sparkLabel}</div>
        </div>
      );
    }
    case 'verdict':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: 'color-mix(in oklch, #16a34a 18%, var(--paper))', color: '#16a34a', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900 }}>✓</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)' }}>{item.verdict.upheld}</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: 'color-mix(in oklch, var(--subj-polity) 18%, var(--paper))', color: 'var(--subj-polity-ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900 }}>×</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)' }}>{item.verdict.against}</span>
          </span>
        </div>
      );
    case 'fact':
    default:
      return (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span className="mono" style={{ fontSize: 20, fontWeight: 800, color: cat.ink }}>{item.fact.lhs}</span>
          <span style={{ color: 'var(--ink-4)' }}>·</span>
          <span className="mono" style={{ fontSize: 20, fontWeight: 800, color: 'var(--ink)' }}>{item.fact.rhs}</span>
          <span style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>{item.fact.label}</span>
        </div>
      );
  }
}

function Tower({ h, v, unit, sub, color = 'var(--rule-2)', mute }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', fontWeight: 700 }}>{v}{unit}</span>
      <span style={{ width: 16, height: h, borderRadius: 3, background: color, opacity: mute ? .35 : 1 }}/>
      <span className="mono" style={{ fontSize: 9.5, color: 'var(--ink-3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{sub}</span>
    </div>
  );
}

// ─── News card / timeline item ───────────────────────
function NewsItem({ item, idx }) {
  const cat = CATS[item.cat];
  return (
    <article style={{
      position: 'relative',
      display: 'flex',
      gap: 14,
      padding: '14px 0',
      borderBottom: '.5px solid var(--rule)',
    }}>
      {/* Timeline column */}
      <div style={{ flex: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 36 }}>
        <span className="mono" style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.06em' }}>{item.time}</span>
        <span style={{
          marginTop: 6, width: 10, height: 10, borderRadius: 999,
          background: cat.color,
          boxShadow: '0 0 0 3px color-mix(in oklch, ' + cat.color + ' 18%, var(--paper))',
        }}/>
        <span style={{ flex: 1, width: 1, marginTop: 6, background: 'var(--rule)' }}/>
        <span className="mono" style={{ fontSize: 9, color: 'var(--ink-4)', fontWeight: 700, padding: '4px 0' }}>{String(idx + 1).padStart(2, '0')}</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
          <span style={{
            padding: '2px 8px', borderRadius: 4,
            background: 'color-mix(in oklch, ' + cat.color + ' 14%, var(--paper))',
            color: cat.ink, fontSize: 10.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase',
          }} className="mono">{cat.label}</span>
          <span className="mono" style={{ fontSize: 10, color: 'var(--ink-3)' }}>{item.source}</span>
        </div>
        <h3 style={{ margin: 0, fontSize: 16, lineHeight: 1.3, fontWeight: 700, letterSpacing: '-.015em', color: 'var(--ink)', textWrap: 'pretty' }}>{item.head}</h3>
        <p style={{ margin: '4px 0 10px', fontSize: 12.5, color: 'var(--ink-2)', lineHeight: 1.5 }}>{item.why}</p>
        <div style={{ padding: '10px 12px', borderRadius: 10, background: 'var(--paper-2)', border: '.5px solid var(--rule)', overflowX: 'auto' }}>
          <ItemVisual item={item} />
        </div>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginTop: 8 }}>
          {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </article>
  );
}

// ─── Day picker ──────────────────────
function DayStrip({ active = 4 }) {
  const days = [
    { d: 'Sat', n: 7,  done: true },
    { d: 'Sun', n: 8,  done: true },
    { d: 'Mon', n: 9,  done: true },
    { d: 'Tue', n: 10, done: true },
    { d: 'Wed', n: 11, today: true },
    { d: 'Thu', n: 12, locked: true },
    { d: 'Fri', n: 13, locked: true },
  ];
  return (
    <div style={{ display: 'flex', gap: 6, padding: '0 var(--pad-x)' }}>
      {days.map((d, i) => {
        const isActive = i === active;
        return (
          <button key={d.n} style={{
            flex: 1, padding: '8px 0', borderRadius: 10,
            border: isActive ? '1px solid var(--ink)' : '.5px solid var(--rule)',
            background: isActive ? 'var(--ink)' : 'var(--paper)',
            color: isActive ? 'var(--paper)' : (d.locked ? 'var(--ink-4)' : 'var(--ink-2)'),
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            cursor: d.locked ? 'not-allowed' : 'pointer',
            opacity: d.locked ? .5 : 1,
          }}>
            <span className="mono" style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>{d.d}</span>
            <span className="mono" style={{ fontSize: 18, fontWeight: 800 }}>{d.n}</span>
            {d.done && !isActive && <span style={{ width: 4, height: 4, borderRadius: 999, background: '#16a34a' }}/>}
          </button>
        );
      })}
    </div>
  );
}

// ─── Top filter chips ──────────────────────
function FilterChips({ active = 'all' }) {
  const all = [{ id: 'all', label: 'All · 10' }, ...Object.entries(CATS).map(([id, c]) => {
    const count = ITEMS.filter((i) => i.cat === id).length;
    return { id, label: c.label, color: c.color, count };
  }).filter((c) => c.count > 0).map((c) => ({ ...c, label: c.label + ' · ' + c.count }))];
  return (
    <div style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '0 var(--pad-x) 4px' }}>
      {all.map((c) => {
        const isActive = c.id === active;
        return (
          <button key={c.id} style={{
            flex: 'none', padding: '7px 12px', borderRadius: 999,
            background: isActive ? 'var(--ink)' : 'var(--paper)',
            color: isActive ? 'var(--paper)' : 'var(--ink-2)',
            border: isActive ? '1px solid var(--ink)' : '.5px solid var(--rule)',
            fontSize: 12, fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            {c.color && <span style={{ width: 6, height: 6, borderRadius: 999, background: c.color }}/>}
            {c.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── MOBILE ──────────────────────
function MobileCurrentAffairs() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper)', overflowY: 'auto' }}>
      <header style={{
        padding: '14px var(--pad-x) 12px',
        borderBottom: '.5px solid var(--rule)',
        background: 'var(--paper)',
        position: 'sticky', top: 0, zIndex: 6,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Daily Current Affairs</div>
            <h1 style={{ margin: '2px 0 0', fontSize: 24, fontWeight: 800, letterSpacing: '-.025em' }}>Wed, 11 May 2026</h1>
          </div>
          <button style={{
            padding: '6px 10px', borderRadius: 999,
            background: 'var(--paper-2)', border: '.5px solid var(--rule)',
            fontSize: 11, fontWeight: 700, color: 'var(--ink-2)',
            display: 'inline-flex', alignItems: 'center', gap: 4,
          }} className="mono">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><polyline points="9 14 4 14 4 19"/><polyline points="15 10 20 10 20 5"/><line x1="4" y1="14" x2="11" y2="7"/><line x1="20" y1="10" x2="13" y2="17"/></svg>
            EN / हिं
          </button>
        </div>
      </header>

      <div style={{ padding: '12px 0 4px' }}>
        <DayStrip active={4} />
      </div>

      <div style={{ padding: '0 0 8px' }}>
        <FilterChips />
      </div>

      {/* Read-progress strip */}
      <div style={{ margin: '8px var(--pad-x) 6px', padding: '10px 12px', borderRadius: 12, background: 'color-mix(in oklch, var(--indigo-600) 7%, var(--paper))', border: '.5px solid color-mix(in oklch, var(--indigo-600) 25%, transparent)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span className="mono" style={{ fontSize: 22, fontWeight: 800, color: 'var(--indigo-700)' }}>03/10</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--ink)' }}>Read 3 of 10 today</div>
          <div style={{ marginTop: 4, height: 4, borderRadius: 2, background: 'color-mix(in oklch, var(--indigo-600) 15%, var(--paper))', position: 'relative', overflow: 'hidden' }}>
            <span style={{ position: 'absolute', inset: 0, width: '30%', background: 'var(--indigo-600)' }}/>
          </div>
        </div>
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>+15 XP</span>
      </div>

      <div style={{ padding: '4px var(--pad-x) 16px' }}>
        {ITEMS.map((it, i) => <NewsItem key={it.id} item={it} idx={i} />)}
      </div>

      <div style={{ padding: '0 var(--pad-x) 32px' }}>
        <div style={{
          padding: 14, borderRadius: 14, background: 'var(--ink)', color: 'var(--paper)',
        }}>
          <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Tomorrow</span>
          <div style={{ margin: '4px 0', fontSize: 16, fontWeight: 800, letterSpacing: '-.015em' }}>10 fresh items drop at 9:00 AM</div>
          <div style={{ fontSize: 12, color: 'color-mix(in oklch, white 65%, transparent)' }}>Set a reminder to keep the streak going.</div>
        </div>
      </div>
    </div>
  );
}

// ─── DESKTOP ──────────────────────
function DesktopCurrentAffairs() {
  const itemsByCat = useMemoCA(() => {
    const m = {}; ITEMS.forEach((i) => { (m[i.cat] = m[i.cat] || []).push(i); }); return m;
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--paper)', overflowY: 'auto' }}>
      <header style={{
        padding: '14px 36px', borderBottom: '.5px solid var(--rule)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 6,
        background: 'color-mix(in oklch, var(--paper) 90%, transparent)',
        backdropFilter: 'blur(12px) saturate(140%)',
      }}>
        <window.Wordmark size={22} />
        <nav style={{ display: 'flex', gap: 24 }}>
          {['Subjects', 'Current Affairs', 'Practice', 'Dashboard', 'Exam Intel'].map((n, i) => (
            <a key={n} href="#" style={{ fontSize: 13.5, fontWeight: 600, color: i === 1 ? 'var(--ink)' : 'var(--ink-2)', textDecoration: 'none' }}>{n}</a>
          ))}
        </nav>
        <span className="mono" style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--amber-700)' }}>🔥 Day 07</span>
      </header>

      {/* Editorial title */}
      <section style={{ padding: '34px 36px 24px', borderBottom: '.5px solid var(--rule)', position: 'relative', overflow: 'hidden' }}>
        <div className="dot-bg" style={{ position: 'absolute', inset: 0, opacity: .4, pointerEvents: 'none' }}/>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32 }}>
          <div>
            <div className="mono" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.16em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>VOL. 04 · ISSUE 132 · PIB-SOURCED</div>
            <h1 style={{ margin: '8px 0 0', fontSize: 64, fontWeight: 800, letterSpacing: '-.035em', lineHeight: .95 }}>
              Today, <span style={{ color: 'var(--indigo-600)' }}>visualized.</span>
            </h1>
            <p style={{ margin: '12px 0 0', fontSize: 15, color: 'var(--ink-2)', maxWidth: 560 }}>
              Ten things an Indian govt-exam aspirant must know on <b className="mono">Wed, 11 May 2026</b> — each with a 4-second visual.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
            <BigStat n="10" l="items today" />
            <BigStat n="07" l="day streak" tint="var(--amber-600)" />
            <BigStat n="03" l="read so far" tint="var(--indigo-600)" />
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '240px 1fr 280px', gap: 32, padding: '28px 36px 36px' }}>
        {/* Left sidebar — category nav */}
        <aside>
          <div className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>By category</div>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {Object.entries(CATS).map(([id, c]) => {
              const n = (itemsByCat[id] || []).length;
              if (!n) return null;
              return (
                <button key={id} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 10px', borderRadius: 8,
                  background: 'transparent', border: 0, cursor: 'pointer', textAlign: 'left',
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: c.color }}/>
                    <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{c.label}</span>
                  </span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{n}</span>
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 24 }}>
            <div className="mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>This week</div>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { d: 'Sat 7',  n: 10, done: true },
                { d: 'Sun 8',  n: 10, done: true },
                { d: 'Mon 9',  n: 10, done: true },
                { d: 'Tue 10', n: 10, done: true },
                { d: 'Wed 11', n: 10, active: true },
              ].map((d) => (
                <a key={d.d} href="#" style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '7px 10px', borderRadius: 8, textDecoration: 'none',
                  background: d.active ? 'var(--ink)' : 'transparent',
                  color: d.active ? 'var(--paper)' : 'var(--ink-2)',
                }}>
                  <span className="mono" style={{ fontSize: 12, fontWeight: 600 }}>{d.d}</span>
                  <span className="mono" style={{ fontSize: 11, opacity: d.active ? .8 : .6 }}>{d.n} items {d.done ? '✓' : ''}</span>
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Main: 2-column item flow */}
        <main>
          <div style={{ columns: '2', columnGap: 24 }}>
            {ITEMS.map((it, i) => (
              <div key={it.id} style={{ breakInside: 'avoid', marginBottom: 6 }}>
                <NewsItem item={it} idx={i} />
              </div>
            ))}
          </div>
        </main>

        {/* Right sidebar — exam relevance + sources */}
        <aside>
          <div style={{ padding: 16, borderRadius: 14, border: '.5px solid var(--rule)', background: 'var(--paper)' }}>
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Today by exam</span>
            <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { e: 'UPSC GS-II',  n: 4 },
                { e: 'UPSC GS-III', n: 5 },
                { e: 'IBPS PO',     n: 2 },
                { e: 'SSC CGL',     n: 2 },
                { e: 'State PSC',   n: 1 },
                { e: 'CDS',         n: 1 },
              ].map((r) => (
                <div key={r.e} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                  <span style={{ minWidth: 88, fontWeight: 600, color: 'var(--ink-2)' }}>{r.e}</span>
                  <span style={{ flex: 1, height: 5, borderRadius: 2, background: 'var(--rule)', position: 'relative' }}>
                    <span style={{ position: 'absolute', inset: 0, width: (r.n * 20) + '%', background: 'var(--indigo-600)' }}/>
                  </span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', minWidth: 16, textAlign: 'right' }}>{r.n}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, padding: 16, borderRadius: 14, background: 'var(--ink)', color: 'var(--paper)' }}>
            <span className="mono" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', color: 'var(--amber-500)', textTransform: 'uppercase' }}>Weekly quiz unlocks Sun</span>
            <div style={{ margin: '6px 0 4px', fontSize: 18, fontWeight: 800, letterSpacing: '-.015em' }}>50 MCQs from this week's news</div>
            <div style={{ fontSize: 12, color: 'color-mix(in oklch, white 65%, transparent)' }}>Free, no signup. Generated from items you've read.</div>
            <div style={{ marginTop: 10, display: 'flex', gap: 3 }}>
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} style={{ flex: 1, height: 6, borderRadius: 2, background: i < 5 ? 'var(--amber-500)' : 'color-mix(in oklch, white 12%, transparent)' }}/>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 14, fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.5 }}>
            Sources <span className="mono">PIB · MEA · RBI · MoSPI · ISRO</span>. No editorialising — link-throughs to originals on every item.
          </div>
        </aside>
      </section>
    </div>
  );
}

function BigStat({ n, l, tint = 'var(--ink)' }) {
  return (
    <div>
      <div className="mono" style={{ fontSize: 36, fontWeight: 800, color: tint, letterSpacing: '-.03em', lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 2 }}>{l}</div>
    </div>
  );
}

// ─── Phone / Browser shells ─────────────────────────
function PhoneShellCA({ children, width = 400, height = 820 }) {
  return (
    <div style={{ width, height, background: '#0c0a09', borderRadius: 44, padding: 10, boxShadow: '0 30px 60px -24px rgba(28,25,23,.25), inset 0 0 0 1px rgba(255,255,255,.06)', position: 'relative' }}>
      <div style={{ position: 'absolute', left: '50%', top: 18, transform: 'translateX(-50%)', width: 96, height: 28, borderRadius: 999, background: '#000', zIndex: 10 }}/>
      <div style={{ width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden', background: 'var(--paper)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 44, padding: '14px 28px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, color: 'var(--ink)', zIndex: 6, pointerEvents: 'none' }} className="mono">
          <span>9:41</span>
          <span style={{ display: 'inline-flex', gap: 5 }}>
            <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="0" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="2" y="2" width="13" height="6" fill="currentColor"/><rect x="19" y="3" width="2" height="4" rx=".6" fill="currentColor"/></svg>
          </span>
        </div>
        <div style={{ paddingTop: 44, height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    </div>
  );
}

function BrowserShellCA({ children, width = 1320, height = 900 }) {
  return (
    <div style={{ width, height, borderRadius: 14, overflow: 'hidden', background: 'var(--paper)', border: '.5px solid var(--rule)', boxShadow: '0 30px 60px -24px rgba(28,25,23,.18)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 38, padding: '0 12px', background: 'var(--paper-2)', borderBottom: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ed6a5e' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#f4bf4f' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#62c554' }} />
        </span>
        <div style={{ flex: 1, height: 22, borderRadius: 6, background: 'var(--paper)', border: '.5px solid var(--rule)', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: 11.5, color: 'var(--ink-3)' }} className="mono">govtstudy.org/current-affairs</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function CurrentAffairsApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_CA);
  useEffectCA(() => {
    const root = document.documentElement;
    root.dataset.theme = t.theme;
    root.dataset.density = t.density;
    root.dataset.motion = t.motion;
    root.dataset.personality = t.personality;
  }, [t.theme, t.density, t.motion, t.personality]);

  return (
    <>
      <window.DesignCanvas>
        <window.DCSection id="ca-mobile" title="Daily Current Affairs · mobile" subtitle="11 May 2026. Timeline, 10 items with per-item visual, exam tags, EN/हिं toggle.">
          <window.DCArtboard id="mob-ca" label="Today · mobile" width={400} height={820}>
            <PhoneShellCA width={400} height={820}><MobileCurrentAffairs /></PhoneShellCA>
          </window.DCArtboard>
        </window.DCSection>
        <window.DCSection id="ca-desktop" title="Daily Current Affairs · desktop" subtitle="Editorial masthead, 2-column item flow, category nav + exam-relevance breakdown.">
          <window.DCArtboard id="dsk-ca" label="Today · desktop" width={1340} height={1500}>
            <BrowserShellCA width={1340} height={1500}><DesktopCurrentAffairs /></BrowserShellCA>
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

ReactDOM.createRoot(document.getElementById('root')).render(<CurrentAffairsApp />);
