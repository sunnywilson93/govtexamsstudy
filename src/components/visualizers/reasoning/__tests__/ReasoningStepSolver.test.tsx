import { render, screen } from '@testing-library/react'
import { ReasoningStepSolver } from '../ReasoningStepSolver'
import type { ReasoningProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblems: ReasoningProblem[] = [
  {
    id: 'p1',
    topic: 'inequalities',
    title: 'Test Problem',
    question: 'Test question text.',
    steps: [
      { id: 1, operation: 'Step Op', expression: 'A > B', result: 'A > B', explanation: 'First step.' },
      { id: 2, operation: 'Step Op 2', expression: 'B > C', result: 'B > C', explanation: 'Second step.' },
    ],
    answer: 'A > C.',
    difficulty: 'easy',
  },
]

describe('ReasoningStepSolver', () => {
  it('renders the problem title', () => {
    render(<ReasoningStepSolver problems={mockProblems} />)
    expect(screen.getByRole('heading', { name: 'Test Problem' })).toBeInTheDocument()
  })

  it('renders the problem question', () => {
    render(<ReasoningStepSolver problems={mockProblems} />)
    expect(screen.getByText('Test question text.')).toBeInTheDocument()
  })

  it('renders the first step explanation', () => {
    render(<ReasoningStepSolver problems={mockProblems} />)
    expect(screen.getByText('First step.')).toBeInTheDocument()
  })
})
