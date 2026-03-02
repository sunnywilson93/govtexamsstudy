import { render, screen } from '@testing-library/react'
import { DirectionVisualizer } from '../DirectionVisualizer'
import type { DirectionProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: DirectionProblem = {
  id: 'dir-test',
  question: 'Walk 5 km North then 3 km East.',
  steps: [
    { id: 1, direction: 'N', distance: 5, label: 'Walk 5 km North' },
    { id: 2, direction: 'E', distance: 3, label: 'Walk 3 km East' },
  ],
  finalDirection: 'NE',
  finalDistance: 5.83,
  answer: '5.83 km NE.',
}

describe('DirectionVisualizer', () => {
  it('renders the question', () => {
    render(<DirectionVisualizer problem={mockProblem} />)
    expect(screen.getByText(/Walk 5 km North then 3 km East/)).toBeInTheDocument()
  })

  it('renders an SVG canvas', () => {
    const { container } = render(<DirectionVisualizer problem={mockProblem} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
