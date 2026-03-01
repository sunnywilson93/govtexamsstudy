import Link from 'next/link'
import {
  Calculator,
  Brain,
  Landmark,
  Globe2,
  Atom,
  ArrowRight,
  BookOpen,
  Target,
  BarChart3,
  Zap,
  Eye,
  Trophy,
  Sparkles,
} from 'lucide-react'
import { subjects } from '@/data/subjects'
import { BentoSubjectGrid } from './_components/BentoSubjectGrid'

const EXAMS = [
  'UPSC CSE',
  'SSC CGL',
  'SSC CHSL',
  'Banking PO',
  'Banking Clerk',
  'Railways RRB',
  'State PSC',
  'CTET',
  'NDA',
  'CDS',
]

const STATS = [
  { value: '15+', label: 'Visualizers', icon: Zap },
  { value: '7', label: 'Subjects', icon: BookOpen },
  { value: '100+', label: 'MCQs', icon: Target },
  { value: '100%', label: 'Free', icon: BarChart3 },
]

const FEATURE_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Quant: Calculator,
  Polity: Landmark,
  Geography: Globe2,
  Science: Atom,
}

const FEATURES = [
  {
    title: 'Step-by-Step Math Solver',
    description: 'Watch each solving step animate with a variables panel showing changing values in real time.',
    href: '/quant/step-solver',
    color: '#3b82f6',
    lightColor: '#dbeafe',
    subject: 'Quant',
    tag: 'Interactive',
  },
  {
    title: 'Constitutional Article Explorer',
    description: 'Navigate Articles, Amendments and Landmark Cases in an interactive network graph with search.',
    href: '/polity/articles',
    color: '#ef4444',
    lightColor: '#fee2e2',
    subject: 'Polity',
    tag: 'Network Graph',
  },
  {
    title: 'Interactive India Map',
    description: 'Toggle geographic layers — rivers, states — with exam-relevant details on every click.',
    href: '/geography/map',
    color: '#22c55e',
    lightColor: '#dcfce7',
    subject: 'Geography',
    tag: 'Layered Map',
  },
  {
    title: 'Periodic Table Explorer',
    description: 'Click any element for properties, uses, and exam-relevant facts with category filters.',
    href: '/science/periodic-table',
    color: '#06b6d4',
    lightColor: '#cffafe',
    subject: 'Science',
    tag: 'Explorable',
  },
]

const STEPS = [
  {
    number: '1',
    title: 'Pick a Subject',
    description: 'Choose from 7 core subjects covered across all major govt exams.',
    icon: BookOpen,
    color: '#4f46e5',
    lightColor: '#eef2ff',
  },
  {
    number: '2',
    title: 'Explore Visually',
    description: 'Interact with animated, step-by-step visualizations that make concepts click.',
    icon: Eye,
    color: '#8b5cf6',
    lightColor: '#ede9fe',
  },
  {
    number: '3',
    title: 'Practice & Track',
    description: 'Test understanding with MCQs and track mastery with streaks and badges.',
    icon: Trophy,
    color: '#f59e0b',
    lightColor: '#fffbeb',
  },
] as const

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient px-4 py-14 sm:py-18 lg:py-24">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                <Sparkles size={14} className="text-secondary-300" />
                India&apos;s First Visual Learning Platform
              </div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
                Stop reading.{' '}
                <br className="hidden sm:block" />
                Start <span className="text-secondary-300">seeing.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-200/90 sm:text-lg lg:mx-0">
                Interactive visualizations for UPSC, SSC, Banking &amp; Railway exams.
                Not PDFs. Not videos. Explorable, animated, step-by-step learning.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  href="#subjects"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-primary-800 no-underline shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl"
                >
                  Start Exploring
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-3 text-sm font-bold text-white no-underline backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Practice MCQs
                </Link>
              </div>
            </div>

            {/* Stats panel */}
            <div className="mx-auto grid w-full max-w-xs grid-cols-2 gap-3 lg:mx-0 lg:self-center">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-stat flex flex-col items-center rounded-2xl px-4 py-5 text-center transition-all hover:bg-white/12"
                >
                  <stat.icon size={20} className="mb-2 text-secondary-300" />
                  <span className="stat-glow font-mono text-3xl font-extrabold text-white">{stat.value}</span>
                  <span className="mt-0.5 text-xs font-medium text-primary-200">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exam badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-primary-300/70">Covers</span>
            {EXAMS.map((exam) => (
              <span
                key={exam}
                className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects — Bento Grid */}
      <section id="subjects" className="bg-bg-secondary px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Subjects</p>
            <h2 className="text-2xl font-extrabold text-text-primary sm:text-3xl">
              Choose Your Subject
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
              Every topic has interactive visualizers — not just text. Pick a subject to start exploring.
            </p>
          </div>
          <BentoSubjectGrid subjects={subjects} />
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* Featured Visualizers */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Featured</p>
            <h2 className="text-2xl font-extrabold text-text-primary sm:text-3xl">
              Featured Visualizers
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-secondary">
              See what makes us different from every other exam platform
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((feature) => {
              const FeatureIcon = FEATURE_ICONS[feature.subject]
              return (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="feature-card-bar group flex flex-col rounded-2xl border border-border-primary bg-bg-elevated no-underline shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ '--bar-color': feature.color } as React.CSSProperties}
                >
                  {/* Colored header area */}
                  <div
                    className="flex items-center gap-4 rounded-t-2xl px-6 py-5"
                    style={{ backgroundColor: `${feature.lightColor}` }}
                  >
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                      style={{ backgroundColor: feature.color }}
                    >
                      {FeatureIcon && <FeatureIcon size={24} />}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[11px] font-bold uppercase tracking-wider"
                          style={{ color: feature.color }}
                        >
                          {feature.subject}
                        </span>
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                          style={{ backgroundColor: feature.color }}
                        >
                          {feature.tag}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-bold text-text-primary">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col px-6 py-4">
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-primary-700" style={{ color: feature.color }}>
                      Try it now
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="dot-pattern bg-bg-secondary px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Getting Started</p>
            <h2 className="text-2xl font-extrabold text-text-primary sm:text-3xl">
              How It Works
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            {STEPS.map((step) => (
              <div key={step.number} className="step-connector relative text-center">
                <div className="mx-auto rounded-2xl border border-border-primary bg-white p-6 shadow-sm">
                  <div className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: step.lightColor }}>
                    <step.icon size={28} style={{ color: step.color }} />
                    <span
                      className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-bold text-text-primary">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient px-4 py-14 sm:py-18">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Sparkles size={32} className="mx-auto mb-4 text-secondary-300/60" />
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Ready to learn differently?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-primary-200/90 sm:text-base">
            Join thousands of aspirants using visual learning for their govt exam preparation.
          </p>
          <Link
            href="#subjects"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary-800 no-underline shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl"
          >
            Get Started — It&apos;s Free
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
