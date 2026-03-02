import { render, screen } from '@testing-library/react'
import { ReasoningConceptPanel } from '../ReasoningConceptPanel'
import type { ReasoningConcept } from '@/types/reasoning'

const mockConcept: ReasoningConcept = {
  topic: 'inequalities',
  title: 'Inequalities',
  description: 'Test description.',
  keyIdea: 'Test key idea.',
  rules: [
    { name: 'Rule One', rule: 'A > B and B > C → A > C', whenToUse: 'Transitive chains.' },
  ],
  examTags: ['SSC CGL', 'IBPS PO'],
  examRelevance: 'Appears in 3–5 questions.',
}

describe('ReasoningConceptPanel', () => {
  it('renders the concept title', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Inequalities')).toBeInTheDocument()
  })

  it('renders the key idea', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Test key idea.')).toBeInTheDocument()
  })

  it('renders the rule name', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Rule One')).toBeInTheDocument()
  })

  it('renders exam tags', () => {
    render(<ReasoningConceptPanel concept={mockConcept} />)
    expect(screen.getByText('SSC CGL')).toBeInTheDocument()
    expect(screen.getByText('IBPS PO')).toBeInTheDocument()
  })
})
