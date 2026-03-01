import { render, screen } from '@testing-library/react'
import { TrickCard } from '../TrickCard'
import type { QuantTrick } from '@/types/quant'

const mockTrick: QuantTrick = {
  id: 'pct-trick-01',
  topic: 'percentage',
  type: 'formula-shortcut',
  title: 'Successive % Change',
  description: 'Combine two changes into one.',
  formula: 'Net% = a + b + ab/100',
  example: {
    problem: '20% increase then 10% decrease?',
    solution: '20 + (−10) + (20×−10/100) = 8% increase',
  },
  timeSaved: '~40s',
}

describe('TrickCard', () => {
  it('renders the trick title', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('Successive % Change')).toBeInTheDocument()
  })

  it('renders the type badge as Formula Shortcut', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('Formula Shortcut')).toBeInTheDocument()
  })

  it('renders the formula in monospace', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('Net% = a + b + ab/100')).toBeInTheDocument()
  })

  it('renders the example problem and solution', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText('20% increase then 10% decrease?')).toBeInTheDocument()
    expect(screen.getByText('20 + (−10) + (20×−10/100) = 8% increase')).toBeInTheDocument()
  })

  it('renders the timeSaved chip when provided', () => {
    render(<TrickCard trick={mockTrick} />)
    expect(screen.getByText(/~40s/)).toBeInTheDocument()
  })

  it('does not render formula section when formula is not provided', () => {
    const noFormula = { ...mockTrick, formula: undefined }
    render(<TrickCard trick={noFormula} />)
    expect(screen.queryByText('Net% = a + b + ab/100')).not.toBeInTheDocument()
  })

  it('renders Mental Math badge for mental-math type', () => {
    const mentalTrick: QuantTrick = {
      id: 'mental-01',
      topic: 'percentage',
      type: 'mental-math',
      title: 'Mental Trick',
      description: 'A mental math trick',
      example: { problem: 'Q', solution: 'A' },
    }
    render(<TrickCard trick={mentalTrick} />)
    expect(screen.getByText('Mental Math')).toBeInTheDocument()
  })
})
