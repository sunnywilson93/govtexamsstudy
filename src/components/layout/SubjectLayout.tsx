'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

interface NavLink {
  href: string
  label: string
  group?: string
}

interface SubjectLayoutProps {
  subjectName: string
  subjectColor: string
  subjectSlug: string
  children: React.ReactNode
  links: NavLink[]
  showHeading?: boolean
}

function groupLinks(links: NavLink[]) {
  const groups: { name: string | null; links: NavLink[] }[] = []
  let currentGroup: string | null | undefined = undefined
  links.forEach((link) => {
    const group = link.group ?? null
    if (group !== currentGroup) {
      currentGroup = group
      groups.push({ name: group, links: [link] })
    } else {
      groups[groups.length - 1].links.push(link)
    }
  })
  return groups
}

export function SubjectLayout({
  subjectName,
  subjectColor,
  subjectSlug,
  children,
  links,
  showHeading = true,
}: SubjectLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const groups = groupLinks(links)
  const hasGroups = links.some((l) => l.group)

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <nav
        aria-label="Breadcrumb"
        className="mb-5 flex items-center gap-1.5 text-sm"
        style={{ color: 'var(--ink-3)' }}
      >
        <Link
          href="/"
          className="no-underline transition-colors"
          style={{ color: 'var(--ink-3)' }}
        >
          Home
        </Link>
        <ChevronRight size={14} style={{ color: 'var(--ink-4)' }} />
        {pathname === `/${subjectSlug}` ? (
          <span className="font-semibold" style={{ color: subjectColor }}>
            {subjectName}
          </span>
        ) : (
          <Link
            href={`/${subjectSlug}`}
            className="font-semibold no-underline"
            style={{ color: subjectColor }}
          >
            {subjectName}
          </Link>
        )}
      </nav>

      {showHeading && (
        <h1
          className="mb-6 text-[28px] font-extrabold sm:text-[34px]"
          style={{ color: 'var(--ink)', letterSpacing: '-.025em' }}
        >
          <span style={{ color: subjectColor }}>{subjectName}</span>
        </h1>
      )}

      <div className="flex gap-6 lg:gap-8">
        {/* Desktop sidebar */}
        <aside
          className="hidden w-60 shrink-0 lg:block"
          aria-label="Subject navigation"
        >
          <div className="sticky top-20">
            <nav
              className="overflow-y-auto rounded-2xl border p-3.5"
              style={{
                background: 'var(--paper-2)',
                borderColor: 'var(--rule)',
                maxHeight: 'calc(100vh - 5rem)',
              }}
            >
              {groups.map((group, gi) => (
                <div key={gi} className={gi > 0 ? 'mt-4' : undefined}>
                  {group.name && (
                    <p
                      className="mono mb-1.5 px-2 text-[10px] font-bold uppercase"
                      style={{
                        color: 'var(--ink-3)',
                        letterSpacing: '.1em',
                      }}
                    >
                      {group.name}
                    </p>
                  )}
                  <ul className="flex flex-col gap-0.5">
                    {group.links.map((link) => {
                      const active = pathname === link.href
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-md px-2.5 py-1.5 text-[13px] no-underline transition-colors"
                            style={
                              active
                                ? {
                                    background: `color-mix(in oklch, ${subjectColor} 12%, transparent)`,
                                    color: 'var(--ink)',
                                    fontWeight: 700,
                                  }
                                : {
                                    color: 'var(--ink-2)',
                                    fontWeight: 500,
                                  }
                            }
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          {/* Mobile nav */}
          <div className="mb-5 lg:hidden">
            {hasGroups ? (
              <select
                aria-label="Navigate to topic"
                value={pathname}
                onChange={(e) => router.push(e.target.value)}
                className="w-full rounded-xl border px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
                style={
                  {
                    background: 'var(--paper)',
                    borderColor: 'var(--rule)',
                    color: 'var(--ink)',
                    '--tw-ring-color': subjectColor,
                  } as React.CSSProperties
                }
              >
                {groups.map((group, gi) => (
                  <optgroup key={gi} label={group.name ?? subjectName}>
                    {group.links.map((link) => (
                      <option key={link.href} value={link.href}>
                        {link.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            ) : (
              <nav
                className="overflow-x-auto"
                aria-label="Subject navigation mobile"
              >
                <div className="flex gap-2 pb-2">
                  {links.map((link) => {
                    const active = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold no-underline transition-colors"
                        style={
                          active
                            ? {
                                background: subjectColor,
                                color: 'var(--paper)',
                                borderColor: 'transparent',
                              }
                            : {
                                background: 'var(--paper)',
                                color: 'var(--ink-2)',
                                borderColor: 'var(--rule)',
                              }
                        }
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </div>
              </nav>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}
