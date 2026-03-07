import { render, screen } from '@testing-library/react'
import { PaperFoldVisualizer } from '../PaperFoldVisualizer'
import type { PaperFoldProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: PaperFoldProblem = {
  id: 'pf-test-1',
  question: 'A square paper is folded left then top, a hole is punched at center. How many holes when unfolded?',
  folds: [
    { direction: 'left', description: 'Fold the paper from right to left along the vertical center.' },
    { direction: 'top', description: 'Fold the paper from bottom to top along the horizontal center.' },
  ],
  punchPosition: { x: 0.25, y: 0.25 },
  unfoldedResult: '4 holes in a symmetric pattern',
  steps: [
    'Start with a square sheet of paper.',
    'Fold the paper from right to left — now 2 layers.',
    'Fold the paper from bottom to top — now 4 layers.',
    'Punch a hole at the center of the folded paper.',
    'Unfold to reveal all holes — 4 holes in a symmetric pattern.',
  ],
  answer: '4 holes appear when the paper is unfolded.',
}

describe('PaperFoldVisualizer', () => {
  it('renders the question', () => {
    render(<PaperFoldVisualizer problem={mockProblem} />)
    expect(screen.getByText(/A square paper is folded/)).toBeInTheDocument()
  })

  it('renders an SVG canvas with role img', () => {
    render(<PaperFoldVisualizer problem={mockProblem} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('displays the first step explanation', () => {
    render(<PaperFoldVisualizer problem={mockProblem} />)
    expect(screen.getByText(mockProblem.steps[0])).toBeInTheDocument()
  })
})
