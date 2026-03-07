import { render, screen } from '@testing-library/react'
import { MirrorWaterImageVisualizer } from '../MirrorWaterImageVisualizer'
import type { MirrorImageProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: MirrorImageProblem = {
  id: 'mwi-test-1',
  type: 'mirror',
  question: 'Find the mirror image of the given 2x2 grid along the vertical axis.',
  originalGrid: [
    ['A', 'B'],
    ['C', 'D'],
  ],
  transformedGrid: [
    ['B', 'A'],
    ['D', 'C'],
  ],
  steps: [
    'Observe the original 2x2 grid with letters A, B, C, D.',
    'Draw a vertical mirror axis to the right of the grid.',
    'Reflect each column across the vertical axis — left becomes right.',
    'The mirror image grid is: B A / D C.',
  ],
  answer: 'The mirror image is B A (top row) and D C (bottom row).',
}

describe('MirrorWaterImageVisualizer', () => {
  it('renders the question', () => {
    render(<MirrorWaterImageVisualizer problem={mockProblem} />)
    expect(screen.getByText(/Find the mirror image/)).toBeInTheDocument()
  })

  it('renders an SVG canvas with role img', () => {
    render(<MirrorWaterImageVisualizer problem={mockProblem} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders the Original label', () => {
    render(<MirrorWaterImageVisualizer problem={mockProblem} />)
    expect(screen.getByText('Original')).toBeInTheDocument()
  })

  it('renders the Mirror Image label for mirror type', () => {
    render(<MirrorWaterImageVisualizer problem={mockProblem} />)
    expect(screen.getByText('Mirror Image')).toBeInTheDocument()
  })

  it('renders the Water Image label for water type', () => {
    const waterProblem: MirrorImageProblem = {
      ...mockProblem,
      id: 'mwi-test-2',
      type: 'water',
      question: 'Find the water image of the given grid.',
    }
    render(<MirrorWaterImageVisualizer problem={waterProblem} />)
    expect(screen.getByText('Water Image')).toBeInTheDocument()
  })

  it('displays the first step explanation', () => {
    render(<MirrorWaterImageVisualizer problem={mockProblem} />)
    expect(screen.getByText(mockProblem.steps[0])).toBeInTheDocument()
  })
})
