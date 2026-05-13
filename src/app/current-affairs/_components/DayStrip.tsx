import Link from 'next/link'

interface Props {
  dates: string[]
  active: string
  basePath?: string
}

function parts(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return {
    weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
    day: d.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: d.toLocaleDateString('en-IN', { month: 'short' }),
  }
}

export function DayStrip({ dates, active, basePath = '/current-affairs' }: Props) {
  const recent = dates.slice(0, 7).reverse()

  return (
    <div
      role="list"
      style={{
        display: 'flex',
        gap: 6,
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: 4,
      }}
    >
      {recent.map((d) => {
        const isActive = d === active
        const { weekday, day, month } = parts(d)
        const href = basePath === '/current-affairs' ? `/current-affairs?date=${d}` : `/current-affairs/${d}`
        return (
          <Link
            key={d}
            href={href}
            role="listitem"
            scroll={false}
            style={{
              flex: '0 0 auto',
              minWidth: 64,
              padding: '8px 10px',
              borderRadius: 'var(--r-sm)',
              border: isActive ? '1px solid var(--ink)' : '.5px solid var(--rule-2)',
              background: isActive ? 'var(--ink)' : 'var(--paper)',
              color: isActive ? 'var(--paper)' : 'var(--ink-2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              textDecoration: 'none',
              scrollSnapAlign: 'start',
              boxShadow: isActive ? 'var(--sh-2)' : 'none',
              transition: 'all var(--dur-fast) var(--ease-out-soft)',
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.1em',
                textTransform: 'uppercase',
                opacity: isActive ? 0.8 : 0.7,
              }}
            >
              {weekday}
            </span>
            <span
              className="mono"
              style={{
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: '-.02em',
              }}
            >
              {day}
            </span>
            <span
              className="mono"
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                opacity: isActive ? 0.7 : 0.55,
              }}
            >
              {month}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
