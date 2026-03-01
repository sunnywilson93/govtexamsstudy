'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { MCQCard } from './MCQCard'
import { ScoreSummary } from './ScoreSummary'
import { useProgressStore } from '@/store/progressStore'
import type { MCQ } from '@/types/shared'

interface PracticeSessionProps {
  questions: MCQ[]
  subject: string
  topic: string
}

export function PracticeSession({ questions, subject, topic }: PracticeSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [completed, setCompleted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const recordActivity = useProgressStore((s) => s.recordActivity)
  const recordScore = useProgressStore((s) => s.recordScore)

  const currentQuestion = questions[currentIndex]
  const selectedIndex = currentQuestion ? answers[currentQuestion.id] : undefined

  const correctCount = questions.reduce((count, q) => {
    const answer = answers[q.id]
    return answer === q.correctIndex ? count + 1 : count
  }, 0)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleAnswer = useCallback((index: number) => {
    if (!currentQuestion || showResult) return

    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: index }))
    setShowResult(true)

    timerRef.current = setTimeout(() => {
      const isLast = currentIndex >= questions.length - 1
      if (isLast) {
        const finalAnswers = { ...answers, [currentQuestion.id]: index }
        const finalCorrect = questions.reduce((count, q) => {
          const answer = finalAnswers[q.id]
          return answer === q.correctIndex ? count + 1 : count
        }, 0)
        const accuracy = Math.round((finalCorrect / questions.length) * 100)
        recordActivity()
        recordScore(subject, topic, accuracy)
        setCompleted(true)
      } else {
        setCurrentIndex((prev) => prev + 1)
        setShowResult(false)
      }
    }, 2000)
  }, [currentQuestion, currentIndex, questions, answers, showResult, recordActivity, recordScore, subject, topic])

  const handleRetry = useCallback(() => {
    setCurrentIndex(0)
    setAnswers({})
    setShowResult(false)
    setCompleted(false)
  }, [])

  if (completed) {
    return (
      <ScoreSummary
        total={questions.length}
        correct={correctCount}
        subject={subject}
        topic={topic}
        onRetry={handleRetry}
      />
    )
  }

  if (!currentQuestion) return null

  return (
    <div>
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-sm text-text-secondary">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span className="font-mono">{correctCount} correct</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-bg-tertiary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <MCQCard
        key={currentQuestion.id}
        mcq={currentQuestion}
        onAnswer={handleAnswer}
        showResult={showResult}
        selectedIndex={selectedIndex}
      />
    </div>
  )
}
