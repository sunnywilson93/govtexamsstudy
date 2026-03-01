'use client'

import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react'
import { clsx } from 'clsx'

interface StepControllerProps {
  currentStep: number
  totalSteps: number
  onStepChange: (step: number) => void
  isPlaying?: boolean
  onTogglePlay?: () => void
  onReset?: () => void
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

  const buttonBase = clsx(
    'flex items-center justify-center rounded-md border',
    'border-border-primary bg-bg-elevated px-3 py-2 text-sm',
    'transition-colors cursor-pointer',
    'hover:not-disabled:bg-bg-tertiary hover:not-disabled:border-border-secondary',
    'disabled:opacity-40 disabled:cursor-not-allowed'
  )

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        className={buttonBase}
        onClick={() => onStepChange(currentStep - 1)}
        disabled={isFirstStep}
        aria-label="Previous step"
      >
        <ChevronLeft size={16} />
      </button>

      {onTogglePlay && (
        <button
          className={buttonBase}
          onClick={onTogglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      )}

      <span className="min-w-[80px] text-center text-sm tabular-nums text-text-secondary">
        Step {currentStep} of {totalSteps}
      </span>

      <button
        className={buttonBase}
        onClick={() => onStepChange(currentStep + 1)}
        disabled={isLastStep}
        aria-label="Next step"
      >
        <ChevronRight size={16} />
      </button>

      {onReset && (
        <button
          className={buttonBase}
          onClick={onReset}
          aria-label="Reset"
        >
          <RotateCcw size={14} />
        </button>
      )}
    </div>
  )
}
