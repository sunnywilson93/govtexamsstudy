'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Flame, Menu, X, BookOpen } from 'lucide-react'
import { clsx } from 'clsx'
import { useProgressStore } from '@/store/progressStore'

interface NavLink {
  href: string
  label: string
  colorClass: string
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
  { href: '/practice', label: 'Practice', colorClass: 'hover:text-primary' },
  { href: '/dashboard', label: 'Dashboard', colorClass: 'hover:text-primary' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const streak = useProgressStore((s) => s.streak)

  return (
    <header className="sticky top-0 z-50 border-b border-border-primary bg-bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-text-primary no-underline transition-colors hover:text-primary"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <BookOpen size={16} />
          </div>
          <span className="hidden sm:inline">GovtExamsStudy</span>
          <span className="sm:hidden">GES</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-md px-2.5 py-1.5 text-[13px] font-medium no-underline transition-colors',
                pathname.startsWith(link.href)
                  ? 'bg-bg-tertiary text-text-primary'
                  : 'text-text-secondary',
                link.colorClass
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="mx-1.5 h-4 w-px bg-border-primary" />

          {UTIL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-md px-2.5 py-1.5 text-[13px] font-medium no-underline transition-colors',
                pathname.startsWith(link.href)
                  ? 'bg-bg-tertiary text-text-primary'
                  : 'text-text-secondary',
                link.colorClass
              )}
            >
              {link.label}
            </Link>
          ))}

          {streak > 0 && (
            <Link
              href="/dashboard"
              className="ml-1 flex items-center gap-1 rounded-full bg-secondary-50 px-2.5 py-1 text-xs font-semibold text-secondary-700 no-underline transition-colors hover:bg-secondary-100"
              aria-label={`${streak} day streak`}
            >
              <Flame size={12} />
              <span className="font-mono">{streak}</span>
            </Link>
          )}
        </nav>

        <button
          className="flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          className="border-t border-border-primary bg-bg-primary px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-0.5 pt-2">
            {[...NAV_LINKS, ...UTIL_LINKS].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  'rounded-md px-3 py-2.5 text-sm font-medium no-underline transition-colors',
                  pathname.startsWith(link.href)
                    ? 'bg-bg-tertiary text-text-primary'
                    : 'text-text-secondary',
                  link.colorClass
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
