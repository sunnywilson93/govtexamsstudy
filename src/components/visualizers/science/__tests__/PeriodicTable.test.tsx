import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PeriodicTable } from '../PeriodicTable'
import type { Element } from '@/types/science'

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      whileHover: _wh,
      layout: _l,
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
    button: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      whileHover: _wh,
      whileTap: _wt,
      layout: _l,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <button {...props}>{children}</button>,
  },
}))

const mockElements: Element[] = [
  {
    atomicNumber: 1,
    symbol: 'H',
    name: 'Hydrogen',
    atomicMass: 1.008,
    category: 'nonmetal',
    group: 1,
    period: 1,
    electronConfig: '1s1',
    examFacts: ['Lightest element', 'Most abundant element in the universe'],
    uses: ['Rocket fuel', 'Ammonia production (Haber process)'],
  },
  {
    atomicNumber: 2,
    symbol: 'He',
    name: 'Helium',
    atomicMass: 4.003,
    category: 'noble-gas',
    group: 18,
    period: 1,
    electronConfig: '1s2',
    examFacts: ['Second lightest element'],
    uses: ['Balloons and airships'],
  },
  {
    atomicNumber: 8,
    symbol: 'O',
    name: 'Oxygen',
    atomicMass: 15.999,
    category: 'nonmetal',
    group: 16,
    period: 2,
    electronConfig: '1s2 2s2 2p4',
    examFacts: ['21% of Earth\'s atmosphere'],
    uses: ['Respiration and combustion'],
  },
  {
    atomicNumber: 26,
    symbol: 'Fe',
    name: 'Iron',
    atomicMass: 55.845,
    category: 'transition-metal',
    group: 8,
    period: 4,
    electronConfig: '[Ar] 3d6 4s2',
    examFacts: ['Most used metal globally'],
    uses: ['Steel production'],
  },
]

describe('PeriodicTable', () => {
  it('renders the search input', () => {
    render(<PeriodicTable elements={mockElements} />)

    expect(screen.getByLabelText('Search elements')).toBeInTheDocument()
  })

  it('shows element cells with H and He', () => {
    render(<PeriodicTable elements={mockElements} />)

    expect(screen.getByText('H')).toBeInTheDocument()
    expect(screen.getByText('He')).toBeInTheDocument()
    expect(screen.getByText('Hydrogen')).toBeInTheDocument()
    expect(screen.getByText('Helium')).toBeInTheDocument()
  })

  it('filters elements when searching by name', async () => {
    const user = userEvent.setup()

    render(<PeriodicTable elements={mockElements} />)

    const searchInput = screen.getByLabelText('Search elements')
    await user.type(searchInput, 'Oxygen')

    expect(screen.getByText('O')).toBeInTheDocument()
    expect(screen.queryByText('H')).not.toBeInTheDocument()
    expect(screen.queryByText('He')).not.toBeInTheDocument()
    expect(screen.queryByText('Fe')).not.toBeInTheDocument()
  })

  it('opens the detail panel when clicking an element', async () => {
    const user = userEvent.setup()

    render(<PeriodicTable elements={mockElements} />)

    const hydrogenCell = screen.getByText('H').closest('button')!
    await user.click(hydrogenCell)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('1s1')).toBeInTheDocument()
  })
})
