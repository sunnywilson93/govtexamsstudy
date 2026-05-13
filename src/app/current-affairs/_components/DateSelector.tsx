'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { formatDateShort } from './categories'

interface Props {
  dates: string[]
  active: string
  basePath?: string
}

export function DateSelector({ dates, active, basePath = '/current-affairs' }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value
    if (next === active) return
    startTransition(() => {
      if (basePath === '/current-affairs') {
        router.push(`/current-affairs?date=${next}`)
      } else {
        router.push(`/current-affairs/${next}`)
      }
    })
  }

  return (
    <label
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 12px',
        background: 'var(--paper)',
        border: '.5px solid var(--rule-2)',
        borderRadius: 'var(--r-sm)',
        boxShadow: 'var(--sh-1)',
        cursor: 'pointer',
        opacity: isPending ? 0.6 : 1,
        transition: 'opacity var(--dur-fast) var(--ease-out-soft)',
      }}
    >
      <span
        className="mono"
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '.1em',
          color: 'var(--ink-3)',
          textTransform: 'uppercase',
        }}
      >
        Date
      </span>
      <select
        value={active}
        onChange={handleChange}
        disabled={isPending}
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          background: 'transparent',
          border: 0,
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--ink)',
          fontFamily: 'var(--font-mono)',
          paddingRight: 14,
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        {dates.map((d) => (
          <option key={d} value={d}>
            {formatDateShort(d)}
          </option>
        ))}
      </select>
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        style={{
          position: 'absolute',
          right: 12,
          color: 'var(--ink-3)',
          pointerEvents: 'none',
        }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </label>
  )
}
