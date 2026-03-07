import Link from 'next/link'

const SUBJECT_LINKS = [
  { href: '/quant', label: 'Quantitative Aptitude' },
  { href: '/reasoning', label: 'Reasoning & Logic' },
  { href: '/polity', label: 'Indian Polity' },
  { href: '/history', label: 'Indian History' },
  { href: '/geography', label: 'Indian Geography' },
  { href: '/economics', label: 'Indian Economy' },
  { href: '/science', label: 'General Science' },
]

const TOOL_LINKS = [
  { href: '/practice', label: 'Practice MCQs' },
  { href: '/dashboard', label: 'Progress Dashboard' },
  { href: '/quant/step-solver', label: 'Math Solver' },
  { href: '/polity/articles', label: 'Article Explorer' },
{ href: '/science/periodic-table', label: 'Periodic Table' },
]

export function Footer() {
  return (
    <footer className="border-t border-border-primary bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-base font-bold text-white">GovtExamsStudy</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
              India&apos;s first free interactive visual learning platform for government exam preparation.
            </p>
          </div>

          {/* Subjects */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Subjects
            </p>
            <ul className="flex flex-col gap-2">
              {SUBJECT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Visualizers
            </p>
            <ul className="flex flex-col gap-2">
              {TOOL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 no-underline transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exams */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Exams Covered
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['UPSC', 'SSC CGL', 'SSC CHSL', 'Banking PO', 'Railways', 'State PSC', 'NDA', 'CDS', 'CTET'].map(
                (exam) => (
                  <span
                    key={exam}
                    className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-400"
                  >
                    {exam}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GovtExamsStudy. Free for all aspirants. Made in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
