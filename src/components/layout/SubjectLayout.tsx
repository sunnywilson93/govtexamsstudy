'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'

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
}

function groupLinks(links: NavLink[]) {
  const groups: { name: string | null; links: NavLink[] }[] = []
  let currentGroup: string | null = null

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
}: SubjectLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const groups = groupLinks(links)
  const hasGroups = links.some((l) => l.group)

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
        {/* Desktop sidebar */}
        <aside className="hidden w-56 shrink-0 lg:block" aria-label="Subject navigation">
          <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-lg border border-border-primary bg-bg-secondary p-3">
            {groups.map((group, gi) => (
              <div key={gi} className={gi > 0 ? 'mt-3' : undefined}>
                {group.name && (
                  <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                    {group.name}
                  </p>
                )}
                <ul className="flex flex-col gap-0.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={clsx(
                          'block rounded-md px-3 py-2 text-sm no-underline transition-colors',
                          pathname === link.href
                            ? 'font-medium text-text-primary'
                            : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
                        )}
                        style={
                          pathname === link.href
                            ? { backgroundColor: `${subjectColor}15` }
                            : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 flex-1">
          {/* Mobile nav */}
          <div className="mb-4 lg:hidden">
            {hasGroups ? (
              <select
                aria-label="Navigate to topic"
                value={pathname}
                onChange={(e) => router.push(e.target.value)}
                className="w-full rounded-lg border border-border-primary bg-bg-elevated px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2"
                style={{ '--tw-ring-color': subjectColor } as React.CSSProperties}
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
                      style={
                        pathname === link.href
                          ? { backgroundColor: subjectColor }
                          : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
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
