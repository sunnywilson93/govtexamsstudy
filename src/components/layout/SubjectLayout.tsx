'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'

interface SubjectLayoutProps {
  subjectName: string
  subjectColor: string
  subjectSlug: string
  children: React.ReactNode
  links: { href: string; label: string }[]
}

export function SubjectLayout({
  subjectName,
  subjectColor,
  subjectSlug,
  children,
  links,
}: SubjectLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm">
        <Link
          href="/"
          className="text-text-secondary no-underline transition-colors hover:text-text-primary"
        >
          Home
        </Link>
        <ChevronRight size={14} className="text-text-muted" />
        {pathname === `/${subjectSlug}` ? (
          <span className="font-medium" style={{ color: subjectColor }}>
            {subjectName}
          </span>
        ) : (
          <Link
            href={`/${subjectSlug}`}
            className="font-medium no-underline transition-colors hover:opacity-80"
            style={{ color: subjectColor }}
          >
            {subjectName}
          </Link>
        )}
      </nav>

      <h1 className="mb-6 text-2xl font-bold text-text-primary">
        <span style={{ color: subjectColor }}>{subjectName}</span>
      </h1>

      <div className="flex gap-6">
        <aside className="hidden w-56 shrink-0 lg:block" aria-label="Subject navigation">
          <nav className="sticky top-20 rounded-lg border border-border-primary bg-bg-secondary p-3">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'block rounded-md px-3 py-2 text-sm no-underline transition-colors',
                      pathname === link.href
                        ? 'font-medium text-text-primary'
                        : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
                    )}
                    style={pathname === link.href ? { backgroundColor: `${subjectColor}15` } : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          <nav
            className="mb-4 overflow-x-auto lg:hidden"
            aria-label="Subject navigation mobile"
          >
            <div className="flex gap-2 pb-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium no-underline transition-colors',
                    pathname === link.href
                      ? 'border-transparent text-white'
                      : 'border-border-primary text-text-secondary hover:border-border-secondary hover:text-text-primary'
                  )}
                  style={pathname === link.href ? { backgroundColor: subjectColor } : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {children}
        </div>
      </div>
    </div>
  )
}
