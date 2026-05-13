'use client'

import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react'

interface StepControllerProps {
  currentStep: number
  totalSteps: number
  onStepChange: (step: number) => void
  isPlaying?: boolean
  onTogglePlay?: () => void
  onReset?: () => void
}

const ctrlBtnBase: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  height: 38,
  padding: '0 10px',
  borderRadius: 10,
  border: '.5px solid var(--rule-2)',
  background: 'var(--paper)',
  color: 'var(--ink)',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'inherit',
}

export function StepController({
  currentStep,
  totalSteps,
  onStepChange,
  isPlaying = false,
  onTogglePlay,
  onReset,
}: StepControllerProps) {
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === totalSteps - 1

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const tag = target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable) {
        return
      }
      if (e.key === 'ArrowLeft' && !isFirstStep) {
        e.preventDefault()
        onStepChange(currentStep - 1)
      } else if (e.key === 'ArrowRight' && !isLastStep) {
        e.preventDefault()
        onStepChange(currentStep + 1)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [currentStep, isFirstStep, isLastStep, onStepChange])

  const counter = `${String(currentStep + 1).padStart(2, '0')}/${String(totalSteps).padStart(2, '0')}`

  return (
    <div
      style={{
        padding: '12px var(--pad-x)',
        borderTop: '.5px solid var(--rule)',
        background: 'var(--paper)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {Array.from({ length: totalSteps }).map((_, i) => {
          const filled = i <= currentStep
          return (
            <button
              key={i}
              onClick={() => onStepChange(i)}
              aria-label={`Go to step ${i + 1}`}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 2,
                border: 0,
                padding: 0,
                cursor: 'pointer',
                background: filled ? 'var(--indigo-600)' : 'var(--rule)',
                transition: 'background var(--dur-fast) var(--ease-out-soft)',
              }}
            />
          )
        })}
        <span
          className="mono"
          style={{
            fontSize: 11,
            color: 'var(--ink-3)',
            minWidth: 42,
            textAlign: 'right',
            fontWeight: 600,
          }}
        >
          {counter}
        </span>
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
          onClick={() => onStepChange(currentStep - 1)}
          disabled={isFirstStep}
          aria-label="Previous step"
          style={{
            ...ctrlBtnBase,
            flex: 1,
            opacity: isFirstStep ? 0.4 : 1,
            cursor: isFirstStep ? 'not-allowed' : 'pointer',
          }}
        >
          <ChevronLeft size={14} />
          <span>Prev</span>
        </button>

        {onTogglePlay && (
          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            style={{
              ...ctrlBtnBase,
              flex: 1.4,
              background: 'var(--ink)',
              color: 'var(--paper)',
              border: '.5px solid var(--ink)',
            }}
          >
            {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
            <span>{isPlaying ? 'Pause' : isLastStep ? 'Replay' : 'Play'}</span>
          </button>
        )}

        <span
          className="sr-only"
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          Step {currentStep + 1} of {totalSteps}
        </span>

        <button
          onClick={() => onStepChange(currentStep + 1)}
          disabled={isLastStep}
          aria-label="Next step"
          style={{
            ...ctrlBtnBase,
            flex: 1,
            opacity: isLastStep ? 0.4 : 1,
            cursor: isLastStep ? 'not-allowed' : 'pointer',
          }}
        >
          <span>Next</span>
          <ChevronRight size={14} />
        </button>

        {onReset && (
          <button
            onClick={onReset}
            aria-label="Reset"
            style={{
              ...ctrlBtnBase,
              flex: 'none',
              minWidth: 38,
              padding: '0 10px',
            }}
          >
            <RotateCcw size={14} />
          </button>
        )}
      </div>
    </div>
  )
}
