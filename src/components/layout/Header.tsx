'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Flame, Menu, X } from 'lucide-react'
import { clsx } from 'clsx'
import { useProgressStore } from '@/store/progressStore'
import { Wordmark } from '@/components/ui/Wordmark'

interface NavLink {
  href: string
  label: string
  colorClass?: string
}

const NAV_LINKS: NavLink[] = [
  { href: '/quant', label: 'Quant', colorClass: 'hover:text-subject-quant' },
  { href: '/reasoning', label: 'Reasoning', colorClass: 'hover:text-subject-reasoning' },
  { href: '/polity', label: 'Polity', colorClass: 'hover:text-subject-polity' },
  { href: '/history', label: 'History', colorClass: 'hover:text-subject-history' },
  { href: '/geography', label: 'Geography', colorClass: 'hover:text-subject-geography' },
  { href: '/economics', label: 'Economics', colorClass: 'hover:text-subject-economics' },
  { href: '/science', label: 'Science', colorClass: 'hover:text-subject-science' },
]

const UTIL_LINKS: NavLink[] = [
  { href: '/current-affairs', label: 'Current Affairs' },
  { href: '/practice', label: 'Practice' },
  { href: '/exams', label: 'Exams' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const streak = useProgressStore((s) => s.streak)

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: 'color-mix(in oklch, var(--paper) 88%, transparent)',
        backdropFilter: 'blur(14px) saturate(140%)',
        WebkitBackdropFilter: 'blur(14px) saturate(140%)',
        borderBottom: '.5px solid var(--rule)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:py-3.5">
        <Link href="/" className="no-underline" aria-label="govtstudy home">
          <Wordmark size={22} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'rounded-md px-2.5 py-1.5 text-[13.5px] font-semibold no-underline transition-colors',
                  active ? 'text-ink' : 'text-ink-2',
                  link.colorClass
                )}
                style={{
                  color: active ? 'var(--ink)' : 'var(--ink-2)',
                }}
              >
                {link.label}
              </Link>
            )
          })}

          <span className="mx-1 h-4 w-px" style={{ background: 'var(--rule)' }} />

          {UTIL_LINKS.map((link) => {
            const active = pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-[13.5px] font-semibold no-underline transition-colors hover:text-ink"
                style={{
                  color: active ? 'var(--ink)' : 'var(--ink-2)',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {streak > 0 && (
            <span
              className="hidden items-center gap-1.5 sm:inline-flex"
              style={{
                padding: '5px 10px 5px 7px',
                borderRadius: 999,
                background: 'color-mix(in oklch, var(--amber-500) 14%, var(--paper))',
                border: '.5px solid color-mix(in oklch, var(--amber-500) 28%, transparent)',
              }}
              aria-label={`${streak} day streak`}
            >
              <Flame size={12} style={{ color: 'var(--amber-600)' }} />
              <span
                className="mono"
                style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--amber-700)' }}
              >
                Day {String(streak).padStart(2, '0')}
              </span>
            </span>
          )}

          <button
            className="flex items-center justify-center rounded-md p-2 transition-colors lg:hidden"
            style={{ color: 'var(--ink-2)' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="lg:hidden"
          style={{
            borderTop: '.5px solid var(--rule)',
            background: 'var(--paper)',
            padding: '4px 16px 14px',
          }}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-0.5 pt-2">
            {[...NAV_LINKS, ...UTIL_LINKS].map((link) => {
              const active = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-semibold no-underline transition-colors"
                  style={{
                    color: active ? 'var(--ink)' : 'var(--ink-2)',
                    background: active ? 'var(--paper-2)' : 'transparent',
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
