import Link from 'next/link'
import { subjects } from '@/data/subjects'
import { SubjectCardGrid } from './_components/SubjectCardGrid'

const STEPS = [
  {
    number: '1',
    title: 'Pick a Subject',
    description: 'Choose from 7 core subjects covered in UPSC, SSC, Banking and Railway exams.',
  },
  {
    number: '2',
    title: 'Explore Visually',
    description: 'Interact with animated, step-by-step visualizations that make concepts click.',
  },
  {
    number: '3',
    title: 'Practice & Track',
    description: 'Test your understanding with topic-wise MCQs and track mastery with badges.',
  },
] as const

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <section className="py-12 text-center sm:py-20">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-text-primary sm:text-4xl lg:text-5xl">
          {"India's First Visual Learning Platform for Govt Exams"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary sm:mt-6 sm:text-xl">
          Learn through interactive visualizations — not boring PDFs. 100% Free.
        </p>
        <Link
          href="#subjects"
          className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white no-underline transition-colors hover:bg-primary-700 sm:mt-10"
        >
          Start Exploring
        </Link>
      </section>

      <section id="subjects" className="py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-text-primary">
          Choose Your Subject
        </h2>
        <SubjectCardGrid subjects={subjects} />
      </section>

      <section className="py-12">
        <h2 className="mb-10 text-center text-2xl font-bold text-text-primary">
          How It Works
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
