import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ArticleExplorer } from '../ArticleExplorer'
import type { Article, Amendment, LandmarkCase } from '@/types/polity'

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <div {...props}>{children}</div>,
    aside: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <aside {...props}>{children}</aside>,
    p: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <p {...props}>{children}</p>,
  },
}))

const mockArticles: Article[] = [
  {
    id: 'art-14',
    number: '14',
    part: 3,
    partName: 'Fundamental Rights',
    title: 'Equality before law',
    description: 'The State shall not deny equality before law.',
    amendments: [],
    cases: ['kesavananda-bharati'],
    linkedArticles: ['15', '16'],
    isFR: true,
    isDPSP: false,
  },
  {
    id: 'art-15',
    number: '15',
    part: 3,
    partName: 'Fundamental Rights',
    title: 'Prohibition of discrimination',
    description: 'The State shall not discriminate on grounds of religion, race, caste, sex.',
    amendments: ['1st', '103rd'],
    cases: [],
    linkedArticles: ['14', '16'],
    isFR: true,
    isDPSP: false,
  },
  {
    id: 'art-36',
    number: '36',
    part: 4,
    partName: 'Directive Principles of State Policy',
    title: 'Definition of State',
    description: 'The State has the same meaning as in Part III.',
    amendments: [],
    cases: [],
    linkedArticles: ['12'],
    isFR: false,
    isDPSP: true,
  },
]

const mockAmendments: Amendment[] = [
  {
    id: 'amend-1',
    number: 1,
    year: 1951,
    description: 'First amendment.',
    articlesAffected: ['15', '19'],
    significance: 'First amendment to the Constitution.',
    category: 'landmark',
  },
]

const mockCases: LandmarkCase[] = [
  {
    id: 'kesavananda-bharati',
    name: 'Kesavananda Bharati v. State of Kerala',
    year: 1973,
    summary: 'Basic structure doctrine.',
    articlesInterpreted: ['368', '14'],
    impact: 'Established Basic Structure Doctrine.',
    verdict: 'Parliament cannot destroy basic structure.',
  },
]

describe('ArticleExplorer', () => {
  it('renders the search input', () => {
    render(
      <ArticleExplorer
        articles={mockArticles}
        amendments={mockAmendments}
        cases={mockCases}
      />
    )

    expect(screen.getByLabelText('Search articles')).toBeInTheDocument()
  })

  it('shows articles grouped by part', () => {
    render(
      <ArticleExplorer
        articles={mockArticles}
        amendments={mockAmendments}
        cases={mockCases}
      />
    )

    expect(screen.getByText(/Part 3/)).toBeInTheDocument()
    expect(screen.getByText(/Fundamental Rights/)).toBeInTheDocument()
    expect(screen.getByText(/Part 4/)).toBeInTheDocument()
    expect(screen.getByText(/Directive Principles/)).toBeInTheDocument()
  })

  it('filters articles by title when searching', async () => {
    const user = userEvent.setup()

    render(
      <ArticleExplorer
        articles={mockArticles}
        amendments={mockAmendments}
        cases={mockCases}
      />
    )

    const searchInput = screen.getByLabelText('Search articles')
    await user.type(searchInput, 'Equality')

    expect(screen.getByText(/Part 3/)).toBeInTheDocument()
    expect(screen.queryByText(/Part 4/)).not.toBeInTheDocument()
  })

  it('opens detail panel when clicking an article', async () => {
    const user = userEvent.setup()

    render(
      <ArticleExplorer
        articles={mockArticles}
        amendments={mockAmendments}
        cases={mockCases}
      />
    )

    const partButton = screen.getByText(/Part 3/).closest('button')!
    await user.click(partButton)

    const articleButton = screen.getByText('Equality before law').closest('button')!
    await user.click(articleButton)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Article 14')).toBeInTheDocument()
  })
})
