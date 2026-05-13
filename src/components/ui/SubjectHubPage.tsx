import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Subject } from '@/types/shared'
import { SubjectGlyph } from '@/components/ui/SubjectGlyph'

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

const COLOR_TO_SLUG: Record<string, { slug: Subject; hindi: string; ink: string }> = {
  '#3b82f6': { slug: 'quant', hindi: 'गणित', ink: '#1d4ed8' },
  '#a855f7': { slug: 'reasoning', hindi: 'तर्क', ink: '#7e22ce' },
  '#8b5cf6': { slug: 'reasoning', hindi: 'तर्क', ink: '#7e22ce' },
  '#ef4444': { slug: 'polity', hindi: 'राजव्यवस्था', ink: '#b91c1c' },
  '#f59e0b': { slug: 'history', hindi: 'इतिहास', ink: '#b45309' },
  '#10b981': { slug: 'geography', hindi: 'भूगोल', ink: '#047857' },
  '#22c55e': { slug: 'geography', hindi: 'भूगोल', ink: '#047857' },
  '#14b8a6': { slug: 'economics', hindi: 'अर्थशास्त्र', ink: '#0f766e' },
  '#06b6d4': { slug: 'science', hindi: 'विज्ञान', ink: '#0e7490' },
}

export function SubjectHubPage({
  subjectName,
  subjectColor,
  description,
  sections,
  tabsLabel = 'Notes · Revision · Practice',
}: SubjectHubPageProps) {
  const meta = COLOR_TO_SLUG[subjectColor.toLowerCase()]
  const totalTopics = sections.reduce((sum, s) => sum + s.topics.length, 0)
  const tabsTopics = sections.reduce(
    (sum, s) => sum + s.topics.filter((t) => t.hasTabs).length,
    0
  )
  const visualizerTopics = totalTopics - tabsTopics

  return (
    <div className="flex flex-col gap-10">
      {/* Hero band */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: '28px 24px 26px',
          borderRadius: 16,
          background: `color-mix(in oklch, ${subjectColor} 10%, var(--paper))`,
          border: `.5px solid color-mix(in oklch, ${subjectColor} 22%, transparent)`,
        }}
      >
        <div
          className="dot-bg pointer-events-none absolute inset-0"
          style={{ opacity: 0.5 }}
        />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              {meta && (
                <div
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'var(--paper)',
                    border: `.5px solid color-mix(in oklch, ${subjectColor} 32%, transparent)`,
                    color: meta.ink,
                  }}
                >
                  <SubjectGlyph id={meta.slug} color={meta.ink} size={32} />
                </div>
              )}
              <div>
                <div
                  className="mono text-[10.5px] font-bold uppercase"
                  style={{ color: 'var(--ink-3)', letterSpacing: '.12em' }}
                >
                  Subject {meta ? `· ${meta.hindi}` : ''}
                </div>
                <h1
                  className="text-[28px] font-extrabold sm:text-[36px]"
                  style={{
                    color: 'var(--ink)',
                    letterSpacing: '-.025em',
                    lineHeight: 1.05,
                    margin: 0,
                    marginTop: 2,
                  }}
                >
                  {subjectName}
                </h1>
              </div>
            </div>
            <p
              className="max-w-2xl text-sm leading-relaxed sm:text-[15px]"
              style={{ color: 'var(--ink-2)' }}
            >
              {description}
            </p>
          </div>

          {/* Stat puck */}
          <div
            className="grid grid-cols-3 gap-6 self-start"
            style={{
              padding: '14px 18px',
              borderRadius: 14,
              background: 'var(--paper)',
              border: '.5px solid var(--rule)',
              boxShadow: 'var(--sh-2)',
            }}
          >
            <Stat n={totalTopics} l="topics" />
            <Stat n={sections.length} l="modules" />
            <Stat n={visualizerTopics} l="visualizers" tint={meta?.ink} />
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, si) => (
        <section key={section.heading}>
          <div className="mb-4 flex items-end justify-between gap-3">
            <div>
              <div
                className="mono text-[10.5px] font-bold uppercase"
                style={{
                  color: meta?.ink ?? 'var(--ink-3)',
                  letterSpacing: '.1em',
                }}
              >
                Module {String(si + 1).padStart(2, '0')}
              </div>
              <h2
                className="mt-1 text-[19px] font-extrabold sm:text-[22px]"
                style={{ color: 'var(--ink)', letterSpacing: '-.02em' }}
              >
                {section.heading}
              </h2>
              <p
                className="mt-1 max-w-2xl text-xs sm:text-[13px]"
                style={{ color: 'var(--ink-3)' }}
              >
                {section.subheading}
              </p>
            </div>
            <span
              className="mono shrink-0 text-[11px]"
              style={{ color: 'var(--ink-3)' }}
            >
              {section.topics.length}{' '}
              {section.topics.length === 1 ? 'TOPIC' : 'TOPICS'}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {section.topics.map((topic) => (
              <TopicCardHub
                key={topic.href}
                topic={topic}
                subjectColor={subjectColor}
                subjectInk={meta?.ink ?? subjectColor}
                tabsLabel={tabsLabel}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function Stat({ n, l, tint }: { n: number; l: string; tint?: string }) {
  return (
    <div>
      <div
        className="mono text-[24px] font-extrabold sm:text-[28px]"
        style={{
          color: tint ?? 'var(--ink)',
          letterSpacing: '-.025em',
          lineHeight: 1,
        }}
      >
        {n}
      </div>
      <div
        className="mt-1 text-[10.5px]"
        style={{ color: 'var(--ink-3)' }}
      >
        {l}
      </div>
    </div>
  )
}

function TopicCardHub({
  topic,
  subjectColor,
  subjectInk,
  tabsLabel,
}: {
  topic: Topic
  subjectColor: string
  subjectInk: string
  tabsLabel: string
}) {
  return (
    <Link
      href={topic.comingSoon ? '#' : topic.href}
      className="group relative block overflow-hidden no-underline"
      style={{
        padding: 16,
        borderRadius: 14,
        background: 'var(--paper)',
        border: '.5px solid var(--rule)',
        boxShadow: 'var(--sh-1)',
        opacity: topic.comingSoon ? 0.65 : 1,
        cursor: topic.comingSoon ? 'default' : 'pointer',
        transition: 'transform var(--dur-fast) var(--ease-out-soft), box-shadow var(--dur-fast)',
      }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-1"
        style={{ background: subjectColor }}
      />
      <div style={{ paddingLeft: 6 }}>
        <div className="mb-1.5 flex items-start justify-between gap-2">
          <h3
            className="text-[14.5px] font-bold"
            style={{ color: 'var(--ink)', letterSpacing: '-.005em' }}
          >
            {topic.title}
          </h3>
          {!topic.comingSoon && (
            <ChevronRight
              size={14}
              className="mt-0.5 shrink-0 transition-transform group-hover:translate-x-0.5"
              style={{ color: 'var(--ink-4)' }}
            />
          )}
        </div>
        <p
          className="text-[12.5px] leading-relaxed"
          style={{ color: 'var(--ink-2)' }}
        >
          {topic.description}
        </p>
        <div
          className="mono mt-3 flex items-center gap-2 text-[10px] font-bold uppercase"
          style={{
            color: topic.comingSoon ? 'var(--ink-4)' : subjectInk,
            letterSpacing: '.08em',
          }}
        >
          {topic.comingSoon ? (
            <span>Coming soon</span>
          ) : topic.hasTabs ? (
            <>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 999,
                  background: subjectColor,
                }}
              />
              {tabsLabel}
            </>
          ) : (
            <>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 999,
                  background: subjectColor,
                }}
              />
              Interactive visualizer
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
