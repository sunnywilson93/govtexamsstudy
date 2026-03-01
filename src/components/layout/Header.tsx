'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { clsx } from 'clsx'

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
  { href: '/practice', label: 'Practice', colorClass: 'hover:text-primary' },
  { href: '/dashboard', label: 'Dashboard', colorClass: 'hover:text-primary' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border-primary bg-bg-primary/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold text-text-primary no-underline transition-colors hover:text-primary"
        >
          GovtExamsStudy
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'rounded-md px-3 py-1.5 text-sm font-medium no-underline transition-colors',
                pathname.startsWith(link.href)
                  ? 'bg-bg-tertiary text-text-primary'
                  : 'text-text-secondary',
                link.colorClass
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex items-center justify-center rounded-md p-2 text-text-secondary transition-colors hover:bg-bg-tertiary hover:text-text-primary lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          className="border-t border-border-primary bg-bg-primary px-4 pb-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
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
