import { render, screen } from '@testing-library/react'
import { ClockReasoningVisualizer } from '../ClockReasoningVisualizer'
import type { ClockProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: ClockProblem = {
  id: 'clk-test-1',
  type: 'angle',
  question: 'What is the angle between the hour and minute hands at 3:00?',
  hourAngle: 90,
  minuteAngle: 0,
  steps: [
    'Draw the clock face with hour markers 1 through 12.',
    'At 3:00 the hour hand points to 3 (90 degrees from 12).',
    'The minute hand points to 12 (0 degrees).',
    'The angle between the hands is |90 - 0| = 90 degrees.',
  ],
  answer: 'The angle between the hands at 3:00 is 90 degrees.',
}

describe('ClockReasoningVisualizer', () => {
  it('renders the question', () => {
    render(<ClockReasoningVisualizer problem={mockProblem} />)
    expect(screen.getByText(/What is the angle between/)).toBeInTheDocument()
  })

  it('renders an SVG canvas with role img', () => {
    render(<ClockReasoningVisualizer problem={mockProblem} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders hour numbers on the clock face', () => {
    render(<ClockReasoningVisualizer problem={mockProblem} />)
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('6')).toBeInTheDocument()
    expect(screen.getByText('9')).toBeInTheDocument()
  })

  it('displays the first step explanation', () => {
    render(<ClockReasoningVisualizer problem={mockProblem} />)
    expect(screen.getByText(mockProblem.steps[0])).toBeInTheDocument()
  })
})
