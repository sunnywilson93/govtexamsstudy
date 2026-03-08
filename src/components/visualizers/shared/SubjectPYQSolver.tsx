'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { SubjectProblem } from '@/types/subject-notes'
import { SUBJECT_CLASSES, type SubjectSlug } from './subject-classes'

interface SubjectPYQSolverProps {
  problems: SubjectProblem[]
  subject: SubjectSlug
}

export function SubjectPYQSolver({ problems, subject }: SubjectPYQSolverProps) {
  const c = SUBJECT_CLASSES[subject]

  const [examFilter, setExamFilter] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const examNames = useMemo(
    () => Array.from(new Set(problems.map((p) => p.examName))),
    [problems]
  )

  const filtered = useMemo(
    () => (examFilter ? problems.filter((p) => p.examName === examFilter) : problems),
    [problems, examFilter]
  )

  const problem = filtered[currentIndex]

  const handleFilter = (value: string) => {
    setExamFilter(value)
    setCurrentIndex(0)
    setSelectedOption(null)
  }

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return
    setSelectedOption(index)
  }

  const handleNext = () => {
    if (currentIndex < filtered.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
    }
  }

  if (!problem) {
    return <p className="text-text-muted">No problems available.</p>
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <label htmlFor="exam-filter" className="sr-only">
            Filter by exam
          </label>
          <select
            id="exam-filter"
            aria-label="Filter by exam"
            value={examFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className="rounded-md border border-border-primary bg-bg-elevated px-3 py-1.5 text-sm text-text-primary"
          >
            <option value="">All Exams</option>
            {examNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <span className="text-sm text-text-muted">
            {currentIndex + 1} / {filtered.length}
          </span>
        </div>
        <span className={`rounded-full ${c.bgLight} px-3 py-0.5 text-xs font-medium ${c.textDark}`}>
          {problem.examName} {problem.examYear}
        </span>
      </div>

      <motion.div
        key={problem.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="rounded-lg border border-border-primary bg-bg-elevated p-5"
      >
        <p className="text-base font-medium text-text-primary">{problem.question}</p>

        <div className="mt-4 flex flex-col gap-2">
          {problem.options.map((option, i) => {
            let optionClass =
              'rounded-md border px-4 py-2.5 text-sm text-left transition-colors cursor-pointer'

            if (selectedOption !== null) {
              if (i === problem.correctIndex) {
                optionClass += ' border-green-500 bg-green-50 text-green-800'
              } else if (i === selectedOption) {
                optionClass += ' border-red-400 bg-red-50 text-red-700'
              } else {
                optionClass += ' border-border-primary text-text-muted'
              }
            } else {
              optionClass +=
                ` border-border-primary hover:${c.border} hover:${c.bgLight} text-text-primary`
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={selectedOption !== null}
                className={optionClass}
              >
                {option}
              </button>
            )
          })}
        </div>

        {selectedOption !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`mt-4 rounded-md border-l-4 ${c.border} ${c.bgLight} p-3`}
          >
            <p className={`text-sm ${c.textDark}`}>{problem.explanation}</p>
          </motion.div>
        )}
      </motion.div>

      {selectedOption !== null && currentIndex < filtered.length - 1 && (
        <button
          onClick={handleNext}
          className={`self-end rounded-md ${c.bg} px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer`}
        >
          Next Question
        </button>
      )}
    </div>
  )
}
