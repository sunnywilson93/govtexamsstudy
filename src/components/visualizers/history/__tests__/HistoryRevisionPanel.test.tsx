import { render, screen } from '@testing-library/react'
import { HistoryRevisionPanel } from '../HistoryRevisionPanel'
import type { HistoryRevision } from '@/types/history'

const mockRevision: HistoryRevision = {
  topic: 'indus-valley',
  bullets: [
    'Harappa was discovered by Daya Ram Sahni in 1921.',
    'Mohenjo-daro means "Mound of the Dead".',
  ],
  comparisons: [
    {
      title: 'Harappa vs Mohenjo-daro',
      headers: ['Aspect', 'Harappa', 'Mohenjo-daro'],
      rows: [
        ['Discovered by', 'Daya Ram Sahni', 'R.D. Banerjee'],
        ['Year', '1921', '1922'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Major Harappan Sites',
      mnemonic: 'HLDRK',
      explanation: 'Harappa, Lothal, Dholavira, Rakhigarhi, Kalibangan',
    },
  ],
}

describe('HistoryRevisionPanel', () => {
  it('renders bullet points', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText(/Daya Ram Sahni in 1921/)).toBeInTheDocument()
    expect(screen.getByText(/Mound of the Dead/)).toBeInTheDocument()
  })

  it('renders comparison table title', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('Harappa vs Mohenjo-daro')).toBeInTheDocument()
  })

  it('renders comparison table headers', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('Aspect')).toBeInTheDocument()
    expect(screen.getByText('Harappa')).toBeInTheDocument()
    expect(screen.getByText('Mohenjo-daro')).toBeInTheDocument()
  })

  it('renders comparison table rows', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('R.D. Banerjee')).toBeInTheDocument()
  })

  it('renders mnemonic title and content', () => {
    render(<HistoryRevisionPanel revision={mockRevision} />)
    expect(screen.getByText('Major Harappan Sites')).toBeInTheDocument()
    expect(screen.getByText('HLDRK')).toBeInTheDocument()
    expect(screen.getByText(/Harappa, Lothal, Dholavira/)).toBeInTheDocument()
  })
})
