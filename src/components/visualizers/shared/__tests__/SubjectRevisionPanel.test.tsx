import { render, screen } from '@testing-library/react'
import { SubjectRevisionPanel } from '../SubjectRevisionPanel'
import type { SubjectRevision } from '@/types/subject-notes'

const mockRevision: SubjectRevision = {
  topic: 'fundamental-rights',
  bullets: [
    'Article 14 guarantees equality before law.',
    'Article 21 protects right to life and personal liberty.',
  ],
  comparisons: [
    {
      title: 'Fundamental Rights vs DPSP',
      headers: ['Aspect', 'Fundamental Rights', 'DPSP'],
      rows: [
        ['Justiciable', 'Yes', 'No'],
        ['Part', 'Part III', 'Part IV'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Six Fundamental Rights',
      mnemonic: 'EFRECA',
      explanation: 'Equality, Freedom, Religion, Exploitation, Culture, Constitutional Remedies',
    },
  ],
}

describe('SubjectRevisionPanel', () => {
  it('renders bullet points', () => {
    render(<SubjectRevisionPanel revision={mockRevision} subject="polity" />)
    expect(screen.getByText(/equality before law/)).toBeInTheDocument()
    expect(screen.getByText(/right to life/)).toBeInTheDocument()
  })

  it('renders comparison table title', () => {
    render(<SubjectRevisionPanel revision={mockRevision} subject="polity" />)
    expect(screen.getByText('Fundamental Rights vs DPSP')).toBeInTheDocument()
  })

  it('renders comparison table headers', () => {
    render(<SubjectRevisionPanel revision={mockRevision} subject="polity" />)
    expect(screen.getByText('Aspect')).toBeInTheDocument()
    expect(screen.getByText('Fundamental Rights')).toBeInTheDocument()
    expect(screen.getByText('DPSP')).toBeInTheDocument()
  })

  it('renders comparison table rows', () => {
    render(<SubjectRevisionPanel revision={mockRevision} subject="polity" />)
    expect(screen.getByText('Part III')).toBeInTheDocument()
  })

  it('renders mnemonic title and content', () => {
    render(<SubjectRevisionPanel revision={mockRevision} subject="polity" />)
    expect(screen.getByText('Six Fundamental Rights')).toBeInTheDocument()
    expect(screen.getByText('EFRECA')).toBeInTheDocument()
    expect(screen.getByText(/Equality, Freedom, Religion/)).toBeInTheDocument()
  })
})
