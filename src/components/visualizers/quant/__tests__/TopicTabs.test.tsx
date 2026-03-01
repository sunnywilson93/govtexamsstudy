import { render, screen, fireEvent } from '@testing-library/react'
import { TopicTabs } from '../TopicTabs'
import type { QuantConcept, QuantTrick, MathProblem } from '@/types/quant'

const mockConcept: QuantConcept = {
  topic: 'percentage',
  title: 'Percentage',
  description: 'desc',
  keyIdea: 'key idea',
  formulas: [],
  examRelevance: 'relevance',
}
const mockTricks: QuantTrick[] = []
const mockProblems: MathProblem[] = []

describe('TopicTabs', () => {
  it('renders Concept tab button', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Concept' })).toBeInTheDocument()
  })

  it('renders Tricks tab button', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Tricks' })).toBeInTheDocument()
  })

  it('renders Problems tab button', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByRole('button', { name: 'Problems' })).toBeInTheDocument()
  })

  it('shows Concept content by default', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    expect(screen.getByText('key idea')).toBeInTheDocument()
  })

  it('switches to Tricks tab on click', () => {
    render(<TopicTabs concept={mockConcept} tricks={mockTricks} problems={mockProblems} />)
    fireEvent.click(screen.getByRole('button', { name: 'Tricks' }))
    expect(screen.queryByText('key idea')).not.toBeInTheDocument()
  })
})
