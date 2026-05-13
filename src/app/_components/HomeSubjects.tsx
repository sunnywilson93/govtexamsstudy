import { SubjectTile, type SubjectTileData } from '@/components/ui/SubjectTile'

const SUBJECTS: SubjectTileData[] = [
  {
    id: 'quant',
    label: 'Quant',
    hindi: 'गणित',
    href: '/quant',
    color: 'var(--subj-quant)',
    ink: 'var(--subj-quant-ink)',
    count: 31,
  },
  {
    id: 'reasoning',
    label: 'Reasoning',
    hindi: 'तर्क',
    href: '/reasoning',
    color: 'var(--subj-reasoning)',
    ink: 'var(--subj-reasoning-ink)',
    count: 14,
  },
  {
    id: 'polity',
    label: 'Polity',
    hindi: 'राजव्यवस्था',
    href: '/polity',
    color: 'var(--subj-polity)',
    ink: 'var(--subj-polity-ink)',
    count: 50,
  },
  {
    id: 'history',
    label: 'History',
    hindi: 'इतिहास',
    href: '/history',
    color: 'var(--subj-history)',
    ink: 'var(--subj-history-ink)',
    count: 24,
  },
  {
    id: 'geography',
    label: 'Geography',
    hindi: 'भूगोल',
    href: '/geography',
    color: 'var(--subj-geography)',
    ink: 'var(--subj-geography-ink)',
    count: 18,
  },
  {
    id: 'economics',
    label: 'Economics',
    hindi: 'अर्थशास्त्र',
    href: '/economics',
    color: 'var(--subj-economics)',
    ink: 'var(--subj-economics-ink)',
    count: 16,
  },
  {
    id: 'science',
    label: 'Science',
    hindi: 'विज्ञान',
    href: '/science',
    color: 'var(--subj-science)',
    ink: 'var(--subj-science-ink)',
    count: 22,
  },
]

const FEATURE_SUBJECT = SUBJECTS.find((s) => s.id === 'polity')!
const SIDE_SUBJECTS = SUBJECTS.filter((s) => s.id !== 'polity')

export function HomeSubjects() {
  return (
    <section id="subjects" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
        <div>
          <div
            className="mono text-[10.5px] font-bold uppercase sm:text-[11px]"
            style={{ color: 'var(--ink-3)', letterSpacing: '.1em' }}
          >
            Pick a subject
          </div>
          <h2
            className="mt-1 text-[22px] font-extrabold sm:text-[30px]"
            style={{ color: 'var(--ink)', letterSpacing: '-.025em' }}
          >
            Seven subjects, all visualized
          </h2>
        </div>
        <span
          className="mono text-xs"
          style={{ color: 'var(--ink-3)' }}
        >
          175+ visualizers · 1,800+ problems
        </span>
      </div>

      {/* Mobile: 2-col grid. Desktop (lg): featured wide tile + 6 standard tiles. */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
        {SUBJECTS.map((s) => (
          <SubjectTile key={s.id} s={s} />
        ))}
      </div>

      <div className="hidden grid-cols-4 gap-3.5 lg:grid">
        <div className="col-span-2">
          <SubjectTile s={FEATURE_SUBJECT} layout="lg" />
        </div>
        {SIDE_SUBJECTS.slice(0, 2).map((s) => (
          <SubjectTile key={s.id} s={s} />
        ))}
        {SIDE_SUBJECTS.slice(2).map((s) => (
          <SubjectTile key={s.id} s={s} />
        ))}
      </div>
    </section>
  )
}
