import Link from 'next/link'
import { Wordmark } from '@/components/ui/Wordmark'

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
  { href: '/current-affairs', label: 'Daily Current Affairs' },
  { href: '/quant/percentage', label: 'Quant Visualizers' },
  { href: '/polity/articles', label: 'Article Explorer' },
  { href: '/economics/budget', label: 'Budget Treemap' },
  { href: '/science/periodic-table', label: 'Periodic Table' },
]

const EXAMS = [
  { label: 'UPSC', href: '/exams/upsc-cse' },
  { label: 'SSC CGL', href: '/exams/ssc-cgl' },
  { label: 'SSC CHSL', href: '/exams/ssc-chsl' },
  { label: 'IBPS PO', href: '/exams/ibps-po' },
  { label: 'RRB NTPC', href: '/exams/rrb-ntpc' },
  { label: 'NDA', href: '/exams/nda' },
  { label: 'CDS', href: '/exams/cds' },
  { label: 'CTET', href: '/exams/ctet' },
]

const TRUST = ['PRSIndia', 'PIB', 'Parliament of India', 'RBI', 'NCERT']

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--paper-2)',
        borderTop: '.5px solid var(--rule)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Wordmark size={20} />
            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: 'var(--ink-3)' }}
            >
              India&apos;s first free interactive visual learning platform for government exam
              preparation. Built for slow 4G on a five-year-old phone.
            </p>
          </div>

          <div>
            <p
              className="mono mb-3 text-[10.5px] font-bold uppercase"
              style={{ color: 'var(--ink-3)', letterSpacing: '.1em' }}
            >
              Subjects
            </p>
            <ul className="flex flex-col gap-2">
              {SUBJECT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm no-underline transition-colors"
                    style={{ color: 'var(--ink-2)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="mono mb-3 text-[10.5px] font-bold uppercase"
              style={{ color: 'var(--ink-3)', letterSpacing: '.1em' }}
            >
              Visualizers
            </p>
            <ul className="flex flex-col gap-2">
              {TOOL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm no-underline transition-colors"
                    style={{ color: 'var(--ink-2)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="mono mb-3 text-[10.5px] font-bold uppercase"
              style={{ color: 'var(--ink-3)', letterSpacing: '.1em' }}
            >
              Exams Covered
            </p>
            <div className="flex flex-wrap gap-1.5">
              {EXAMS.map((exam) => (
                <Link
                  key={exam.href}
                  href={exam.href}
                  className="mono no-underline transition-colors"
                  style={{
                    fontSize: 11,
                    padding: '4px 8px',
                    borderRadius: 5,
                    background: 'var(--paper)',
                    border: '.5px solid var(--rule)',
                    color: 'var(--ink-2)',
                    fontWeight: 600,
                  }}
                >
                  {exam.label}
                </Link>
              ))}
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  padding: '4px 8px',
                  borderRadius: 5,
                  background: 'var(--paper)',
                  border: '.5px solid var(--rule)',
                  color: 'var(--ink-3)',
                  fontWeight: 600,
                }}
              >
                State PSC
              </span>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-6"
          style={{ borderTop: '.5px solid var(--rule)' }}
        >
          <div
            className="mono flex flex-wrap gap-x-3 gap-y-1 text-[11px]"
            style={{ color: 'var(--ink-3)', letterSpacing: '.08em' }}
          >
            <span className="font-semibold uppercase" style={{ color: 'var(--ink-2)' }}>
              Sourced from
            </span>
            {TRUST.map((source, i) => (
              <span key={source} className="flex items-center gap-3">
                <span className="uppercase">{source}</span>
                {i < TRUST.length - 1 && <span style={{ color: 'var(--ink-4)' }}>·</span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-xs no-underline"
              style={{ color: 'var(--ink-3)' }}
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-xs no-underline"
              style={{ color: 'var(--ink-3)' }}
            >
              Privacy
            </Link>
            <span className="text-xs" style={{ color: 'var(--ink-3)' }}>
              © {new Date().getFullYear()} · Free forever
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
