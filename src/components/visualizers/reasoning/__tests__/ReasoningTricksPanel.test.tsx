import { render, screen } from '@testing-library/react'
import { ReasoningTricksPanel } from '../ReasoningTricksPanel'
import type { ReasoningTrick } from '@/types/reasoning'

const mockTricks: ReasoningTrick[] = [
  {
    id: 't1',
    topic: 'inequalities',
    type: 'pattern-shortcut',
    title: 'Pattern Trick',
    description: 'Use this pattern.',
    example: { problem: 'Q?', solution: 'A.' },
  },
  {
    id: 't2',
    topic: 'inequalities',
    type: 'elimination',
    title: 'Elimination Trick',
    description: 'Eliminate this.',
    example: { problem: 'Q2?', solution: 'A2.' },
  },
]

describe('ReasoningTricksPanel', () => {
  it('renders Pattern Shortcuts section heading', () => {
    render(<ReasoningTricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Pattern Shortcuts')).toBeInTheDocument()
  })

  it('renders Elimination Tricks section heading', () => {
    render(<ReasoningTricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Elimination Tricks')).toBeInTheDocument()
  })

  it('renders trick titles', () => {
    render(<ReasoningTricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Pattern Trick')).toBeInTheDocument()
    expect(screen.getByText('Elimination Trick')).toBeInTheDocument()
  })
})
