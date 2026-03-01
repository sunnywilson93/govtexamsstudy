import { render, screen } from '@testing-library/react'
import { ConceptPanel } from '../ConceptPanel'
import type { QuantConcept } from '@/types/quant'

const mockConcept: QuantConcept = {
  topic: 'percentage',
  title: 'Percentage',
  description: 'Percentage means per hundred.',
  keyIdea: 'Always divide by the ORIGINAL value.',
  formulas: [
    {
      name: 'Percentage Change',
      formula: 'Change% = (Change / Original) × 100',
      whenToUse: 'When a value increases or decreases.',
    },
  ],
  examTags: ['SSC CGL', 'IBPS PO'],
  examRelevance: 'Appears in 3–4 questions per SSC/banking paper.',
}

describe('ConceptPanel', () => {
  it('renders the topic title', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Percentage')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Percentage means per hundred.')).toBeInTheDocument()
  })

  it('renders the key idea in a callout', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Always divide by the ORIGINAL value.')).toBeInTheDocument()
  })

  it('renders each formula name and formula string', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('Percentage Change')).toBeInTheDocument()
    expect(screen.getByText('Change% = (Change / Original) × 100')).toBeInTheDocument()
  })

  it('renders the exam relevance note', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText(/3–4 questions/)).toBeInTheDocument()
  })

  it('renders exam tags as chips', () => {
    render(<ConceptPanel concept={mockConcept} />)
    expect(screen.getByText('SSC CGL')).toBeInTheDocument()
    expect(screen.getByText('IBPS PO')).toBeInTheDocument()
  })
})
