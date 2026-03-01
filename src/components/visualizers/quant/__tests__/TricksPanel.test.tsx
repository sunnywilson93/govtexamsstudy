import { render, screen } from '@testing-library/react'
import { TricksPanel } from '../TricksPanel'
import type { QuantTrick } from '@/types/quant'

const mockTricks: QuantTrick[] = [
  {
    id: 't1',
    topic: 'percentage',
    type: 'formula-shortcut',
    title: 'Shortcut A',
    description: 'A formula shortcut',
    example: { problem: 'Q1', solution: 'A1' },
  },
  {
    id: 't2',
    topic: 'percentage',
    type: 'mental-math',
    title: 'Mental Trick B',
    description: 'A mental math trick',
    example: { problem: 'Q2', solution: 'A2' },
  },
]

describe('TricksPanel', () => {
  it('renders Formula Shortcuts section heading', () => {
    render(<TricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Formula Shortcuts')).toBeInTheDocument()
  })

  it('renders Mental Math section heading', () => {
    render(<TricksPanel tricks={mockTricks} />)
    const elements = screen.getAllByText('Mental Math')
    expect(elements.length).toBeGreaterThan(0)
  })

  it('renders each trick card', () => {
    render(<TricksPanel tricks={mockTricks} />)
    expect(screen.getByText('Shortcut A')).toBeInTheDocument()
    expect(screen.getByText('Mental Trick B')).toBeInTheDocument()
  })

  it('does not render Mental Math section when no mental-math tricks', () => {
    const formulaOnly = mockTricks.filter(t => t.type === 'formula-shortcut')
    render(<TricksPanel tricks={formulaOnly} />)
    expect(screen.queryByText('Mental Math')).not.toBeInTheDocument()
  })
})
