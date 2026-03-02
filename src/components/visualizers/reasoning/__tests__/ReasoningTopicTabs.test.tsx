import { render, screen, fireEvent } from '@testing-library/react'
import { ReasoningTopicTabs } from '../ReasoningTopicTabs'
import type { ReasoningConcept, ReasoningTrick, ReasoningProblem } from '@/types/reasoning'

const mockConcept: ReasoningConcept = {
  topic: 'inequalities',
  title: 'Inequalities',
  description: 'desc',
  keyIdea: 'key idea',
  rules: [],
  examTags: [],
  examRelevance: '',
}

describe('ReasoningTopicTabs', () => {
  it('renders all three tab buttons', () => {
    render(<ReasoningTopicTabs concept={mockConcept} tricks={[]} problems={[]} />)
    expect(screen.getByRole('button', { name: 'Concept' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tricks' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Problems' })).toBeInTheDocument()
  })

  it('shows Concept content by default', () => {
    render(<ReasoningTopicTabs concept={mockConcept} tricks={[]} problems={[]} />)
    expect(screen.getByText('key idea')).toBeInTheDocument()
  })

  it('switches to Tricks tab on click', () => {
    render(<ReasoningTopicTabs concept={mockConcept} tricks={[]} problems={[]} />)
    fireEvent.click(screen.getByRole('button', { name: 'Tricks' }))
    expect(screen.queryByText('key idea')).not.toBeInTheDocument()
  })
})
