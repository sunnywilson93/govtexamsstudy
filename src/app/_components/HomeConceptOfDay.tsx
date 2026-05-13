import Link from 'next/link'
import { MiniBill } from '@/components/visualizers/polity/MiniBill'

export function HomeConceptOfDay() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-10 lg:pb-10">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        {/* Concept of the day — dark editorial card */}
        <Link
          href="/polity/parliament"
          className="relative block overflow-hidden no-underline"
          style={{
            padding: 24,
            borderRadius: 16,
            background: 'var(--ink)',
            color: 'var(--paper)',
            minHeight: 220,
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: -20,
              bottom: -20,
              opacity: 0.14,
              transform: 'rotate(-12deg) scale(3)',
            }}
          >
            <MiniBill stamped progress={3} />
          </div>
          <span
            className="mono"
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '.12em',
              color: 'var(--amber-500)',
              textTransform: 'uppercase',
            }}
          >
            Concept of the day · Polity
          </span>
          <div
            className="mt-2 text-[22px] font-extrabold sm:text-[28px]"
            style={{
              letterSpacing: '-.02em',
              lineHeight: 1.1,
              maxWidth: 520,
              color: 'var(--paper)',
            }}
          >
            Three options the President holds over every Bill
          </div>
          <div
            className="mt-2 text-sm leading-relaxed sm:text-[15px]"
            style={{
              color: 'color-mix(in oklch, white 65%, transparent)',
              maxWidth: 520,
            }}
          >
            Assent · Withhold · Return. We walk through Articles 107–111 in eight animated
            steps.
          </div>
          <span
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold"
            style={{
              padding: '12px 16px',
              borderRadius: 10,
              background: 'var(--paper)',
              color: 'var(--ink)',
            }}
          >
            Watch visualizer →
          </span>
        </Link>

        {/* What's new today — calm second card */}
        <div
          className="flex flex-col gap-4 overflow-hidden rounded-2xl border p-5 lg:p-6"
          style={{
            background:
              'linear-gradient(135deg, color-mix(in oklch, var(--indigo-600) 9%, var(--paper)), var(--paper))',
            borderColor: 'var(--rule)',
          }}
        >
          <div>
            <span
              className="mono"
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: '.1em',
                color: 'var(--indigo-700)',
                textTransform: 'uppercase',
              }}
            >
              How it works
            </span>
            <h3
              className="mt-1 text-[19px] font-extrabold"
              style={{ color: 'var(--ink)', letterSpacing: '-.015em', lineHeight: 1.2 }}
            >
              No PDFs. No videos. Just diagrams that move.
            </h3>
          </div>
          <ol className="flex flex-col gap-3 text-sm" style={{ color: 'var(--ink-2)' }}>
            {[
              { n: '01', t: 'Pick a topic from any of seven subjects.' },
              { n: '02', t: 'Step through the visualizer — pause, rewind, replay.' },
              { n: '03', t: 'Lock it in with mnemonics, formulas, and past-paper MCQs.' },
            ].map((row) => (
              <li key={row.n} className="flex items-start gap-3">
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: 'var(--indigo-700)',
                    letterSpacing: '.06em',
                    flex: 'none',
                    marginTop: 2,
                  }}
                >
                  {row.n}
                </span>
                <span style={{ lineHeight: 1.5 }}>{row.t}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
