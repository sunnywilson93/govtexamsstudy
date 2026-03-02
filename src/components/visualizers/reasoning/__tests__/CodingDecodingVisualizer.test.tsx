import { render, screen } from '@testing-library/react'
import { CodingDecodingVisualizer } from '../CodingDecodingVisualizer'
import type { CodingDecodingProblem } from '@/types/reasoning'
import { useVisualizerStore } from '@/store/visualizerStore'

beforeEach(() => {
  useVisualizerStore.getState().reset()
})

const mockProblem: CodingDecodingProblem = {
  id: 'cd-test',
  type: 'letter-shift',
  question: 'Each letter +3. Code: CAT.',
  codingRules: [
    { input: 'C', output: 'F', pattern: '+3' },
    { input: 'A', output: 'D', pattern: '+3' },
    { input: 'T', output: 'W', pattern: '+3' },
  ],
  steps: ['C → F', 'A → D', 'T → W'],
  answer: 'CAT is coded as FDW.',
}

describe('CodingDecodingVisualizer', () => {
  it('renders the question', () => {
    render(<CodingDecodingVisualizer problem={mockProblem} />)
    expect(screen.getByText(/Each letter \+3/)).toBeInTheDocument()
  })

  it('renders input letters', () => {
    render(<CodingDecodingVisualizer problem={mockProblem} />)
    expect(screen.getAllByText('C').length).toBeGreaterThan(0)
  })
})
