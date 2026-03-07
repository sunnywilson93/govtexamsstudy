import { render, screen } from '@testing-library/react'
import { CubeDiceVisualizer } from '../CubeDiceVisualizer'
import type { CubeDiceProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: CubeDiceProblem = {
  id: 'cd-test-1',
  type: 'dice-opposite',
  question: 'A cube has faces numbered 1 to 6. If 1 is on top and 2 faces you, what is on the bottom?',
  faces: [
    { position: 1, content: '1', color: '#ef4444' },
    { position: 2, content: '2', color: '#3b82f6' },
    { position: 3, content: '3', color: '#22c55e' },
    { position: 4, content: '4', color: '#f59e0b' },
    { position: 5, content: '5', color: '#8b5cf6' },
    { position: 6, content: '6', color: '#ec4899' },
  ],
  steps: [
    'Layout all 6 faces in a cross-shaped net pattern.',
    'Identify fold lines — each outer face folds towards the center.',
    'Fold the net into a 3D cube — 1 is on top, 2 faces front.',
    'The face opposite to 1 (top) is 6 (bottom).',
  ],
  answer: '6 is on the bottom (opposite to 1).',
}

describe('CubeDiceVisualizer', () => {
  it('renders the question', () => {
    render(<CubeDiceVisualizer problem={mockProblem} />)
    expect(screen.getByText(/A cube has faces numbered 1 to 6/)).toBeInTheDocument()
  })

  it('renders an SVG canvas with role img', () => {
    render(<CubeDiceVisualizer problem={mockProblem} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders the Flat Net label', () => {
    render(<CubeDiceVisualizer problem={mockProblem} />)
    expect(screen.getByText('Flat Net')).toBeInTheDocument()
  })

  it('displays the first step explanation', () => {
    render(<CubeDiceVisualizer problem={mockProblem} />)
    expect(screen.getByText(mockProblem.steps[0])).toBeInTheDocument()
  })
})
