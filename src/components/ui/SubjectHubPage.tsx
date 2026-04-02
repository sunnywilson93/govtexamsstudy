import Link from 'next/link'
import { ChevronRight, BookOpen, Zap } from 'lucide-react'

interface Topic {
  href: string
  title: string
  description: string
  hasTabs: boolean
  comingSoon?: boolean
}

interface Section {
  heading: string
  subheading: string
  topics: Topic[]
}

interface SubjectHubPageProps {
  subjectName: string
  subjectColor: string
  description: string
  sections: Section[]
  tabsLabel?: string
}

export function SubjectHubPage({
  subjectName,
  subjectColor,
  description,
  sections,
  tabsLabel = '5 concepts · 5 tricks · 30 problems',
}: SubjectHubPageProps) {
  const totalTopics = sections.reduce((sum, s) => sum + s.topics.length, 0)
  const tabsTopics = sections.reduce(
    (sum, s) => sum + s.topics.filter((t) => t.hasTabs).length,
    0
  )
  const visualizerTopics = totalTopics - tabsTopics

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div
        className="rounded-2xl border border-border-primary p-6 sm:p-8"
        style={{ background: `linear-gradient(135deg, ${subjectColor}10 0%, ${subjectColor}05 100%)` }}
      >
        <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">{subjectName}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <div
            className="rounded-lg px-3 py-2"
            style={{ backgroundColor: `${subjectColor}10` }}
          >
            <p className="text-lg font-bold text-text-primary">{totalTopics}</p>
            <p className="text-[10px] uppercase tracking-wider text-text-muted">Topics</p>
          </div>
          <div
            className="rounded-lg px-3 py-2"
            style={{ backgroundColor: `${subjectColor}10` }}
          >
            <p className="text-lg font-bold text-text-primary">{sections.length}</p>
            <p className="text-[10px] uppercase tracking-wider text-text-muted">Sections</p>
          </div>
          {visualizerTopics > 0 && (
            <div
              className="rounded-lg px-3 py-2"
              style={{ backgroundColor: `${subjectColor}10` }}
            >
              <p className="text-lg font-bold text-text-primary">{visualizerTopics}</p>
              <p className="text-[10px] uppercase tracking-wider text-text-muted">Visualizers</p>
            </div>
          )}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <section key={section.heading}>
          <div className="mb-4 flex items-center gap-3">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${subjectColor}15` }}
            >
              <BookOpen size={16} style={{ color: subjectColor }} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-text-primary">{section.heading}</h2>
              <p className="text-xs text-text-muted">{section.subheading}</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {section.topics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative cursor-pointer rounded-xl border border-border-primary bg-bg-elevated p-4 no-underline transition-all duration-200 hover:border-border-secondary hover:shadow-md"
              >
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                  style={{ backgroundColor: subjectColor }}
                />
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-text-primary">{topic.title}</h3>
                  <ChevronRight
                    size={14}
                    className="mt-0.5 shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                  {topic.description}
                </p>
                {topic.hasTabs ? (
                  <p className="mt-2 flex items-center gap-1 text-[11px] text-text-muted">
                    <BookOpen size={10} />
                    {tabsLabel}
                  </p>
                ) : (
                  <p className="mt-2 flex items-center gap-1 text-[11px] text-text-muted">
                    <Zap size={10} />
                    Interactive Visualizer
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
