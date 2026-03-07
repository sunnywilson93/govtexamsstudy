import { render, screen } from '@testing-library/react'
import { CountingFigureVisualizer } from '../CountingFigureVisualizer'
import type { CountingFigureProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: CountingFigureProblem = {
  id: 'cf-test-1',
  type: 'triangles',
  question: 'Count the total number of triangles in the given figure.',
  svgPath: 'M 10 90 L 50 10 L 90 90 Z M 50 10 L 50 90',
  highlights: [
    { id: 't1', path: 'M 10 90 L 50 10 L 50 90 Z', label: 'Triangle 1 — left half' },
    { id: 't2', path: 'M 50 10 L 90 90 L 50 90 Z', label: 'Triangle 2 — right half' },
    { id: 't3', path: 'M 10 90 L 50 10 L 90 90 Z', label: 'Triangle 3 — outer full triangle' },
    { id: 't4', path: 'M 10 90 L 50 50 L 50 90 Z', label: 'Triangle 4 — bottom-left small' },
  ],
  steps: [
    'Identify the left half triangle formed by the median.',
    'Identify the right half triangle formed by the median.',
    'Count the full outer triangle as one figure.',
    'Check for smaller embedded triangles — bottom-left region.',
  ],
  answer: '4 triangles in total.',
  totalCount: 4,
}

describe('CountingFigureVisualizer', () => {
  it('renders the question', () => {
    render(<CountingFigureVisualizer problem={mockProblem} />)
    expect(screen.getByText(/Count the total number of triangles/)).toBeInTheDocument()
  })

  it('renders an SVG canvas with role img', () => {
    render(<CountingFigureVisualizer problem={mockProblem} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('displays the current highlight label', () => {
    render(<CountingFigureVisualizer problem={mockProblem} />)
    expect(screen.getByText(mockProblem.highlights[0].label)).toBeInTheDocument()
  })

  it('displays the first step explanation', () => {
    render(<CountingFigureVisualizer problem={mockProblem} />)
    expect(screen.getByText(mockProblem.steps[0])).toBeInTheDocument()
  })

  it('shows the running count', () => {
    render(<CountingFigureVisualizer problem={mockProblem} />)
    expect(screen.getByText('1/4')).toBeInTheDocument()
  })
})
