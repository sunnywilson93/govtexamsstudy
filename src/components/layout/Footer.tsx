import Link from 'next/link'

const SUBJECT_LINKS = [
  { href: '/quant', label: 'Quant' },
  { href: '/reasoning', label: 'Reasoning' },
  { href: '/polity', label: 'Polity' },
  { href: '/history', label: 'History' },
  { href: '/geography', label: 'Geography' },
  { href: '/economics', label: 'Economics' },
  { href: '/science', label: 'Science' },
]

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-text-primary">GovtExamsStudy</p>
            <p className="mt-1 text-xs text-text-muted">Free for all aspirants</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {SUBJECT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-text-secondary no-underline transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 border-t border-border-primary pt-4 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} GovtExamsStudy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
