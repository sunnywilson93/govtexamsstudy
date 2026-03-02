import { render, screen } from '@testing-library/react'
import { PuzzleVisualizer } from '../PuzzleVisualizer'
import type { PuzzleProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: PuzzleProblem = {
  id: 'puz-test',
  type: 'floor',
  totalPositions: 3,
  clues: ['A is on Floor 3.', 'B is on Floor 1.'],
  steps: ['A → Floor 3', 'B → Floor 1', 'C → Floor 2 (elimination)'],
  solution: [
    { position: 1, occupant: 'B' },
    { position: 2, occupant: 'C' },
    { position: 3, occupant: 'A' },
  ],
}

describe('PuzzleVisualizer', () => {
  it('renders clues', () => {
    render(<PuzzleVisualizer problem={mockProblem} />)
    expect(screen.getByText('A is on Floor 3.')).toBeInTheDocument()
  })

  it('renders floor labels', () => {
    render(<PuzzleVisualizer problem={mockProblem} />)
    expect(screen.getByText('Floor 3')).toBeInTheDocument()
    expect(screen.getByText('Floor 1')).toBeInTheDocument()
  })
})
