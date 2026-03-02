import { render, screen } from '@testing-library/react'
import { BloodRelationVisualizer } from '../BloodRelationVisualizer'
import type { BloodRelationProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: BloodRelationProblem = {
  id: 'br-test',
  question: 'A is the father of B. How is A related to B?',
  nodes: [
    { id: 'A', name: 'A', gender: 'M', generation: -1 },
    { id: 'B', name: 'B', gender: 'M', generation: 0 },
  ],
  edges: [{ from: 'A', to: 'B', label: 'father of' }],
  steps: ['A is father of B.', 'Answer: A is the father of B.'],
  answer: 'A is the father of B.',
}

describe('BloodRelationVisualizer', () => {
  it('renders the question', () => {
    render(<BloodRelationVisualizer problem={mockProblem} />)
    expect(screen.getByText(/A is the father of B/)).toBeInTheDocument()
  })

  it('renders an SVG canvas', () => {
    const { container } = render(<BloodRelationVisualizer problem={mockProblem} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
