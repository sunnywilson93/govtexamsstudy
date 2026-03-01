import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IndiaMap } from '../IndiaMap'
import type { IndiaState, MapLayer } from '@/types/geography'

vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    aside: ({
      children,
      initial: _i,
      animate: _a,
      exit: _e,
      transition: _t,
      ...props
    }: Record<string, unknown> & { children?: React.ReactNode }) => <aside {...props}>{children}</aside>,
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
  },
}))

const mockStates: IndiaState[] = [
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    path: 'M 90 260 L 160 240 L 190 280 L 180 350 L 130 370 L 80 330 Z',
    area: 342239,
    population: 68548437,
    features: ['Largest state by area', 'Thar Desert', 'Aravalli Range'],
  },
  {
    id: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    path: 'M 170 610 L 195 590 L 210 620 L 200 670 L 180 680 L 165 650 Z',
    area: 38863,
    population: 33406061,
    features: ['Highest literacy rate', 'Backwaters', 'Spice production'],
  },
]

const mockRiverLayer: MapLayer = {
  id: 'rivers',
  name: 'Rivers',
  type: 'rivers',
  visible: true,
  features: [
    {
      id: 'ganga',
      name: 'Ganga (Ganges)',
      path: 'M 230 220 L 260 250 L 290 270 L 320 290',
      properties: {
        origin: 'Gangotri Glacier, Uttarakhand',
        length: 2525,
        drainageArea: 1086000,
        mouth: 'Bay of Bengal',
      },
      linkedTopics: ['uttarakhand', 'uttar-pradesh', 'bihar'],
      examFacts: ['Longest river in India', 'National River of India'],
    },
  ],
}

describe('IndiaMap', () => {
  it('renders SVG with state path elements', () => {
    render(<IndiaMap states={mockStates} layers={[mockRiverLayer]} />)

    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()

    const statePaths = document.querySelectorAll('[data-testid^="state-"]')
    expect(statePaths.length).toBe(2)
  })

  it('shows layer toggle checkbox for rivers', () => {
    render(<IndiaMap states={mockStates} layers={[mockRiverLayer]} />)

    const checkbox = screen.getByRole('checkbox', { name: /rivers/i })
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toBeChecked()
  })

  it('clicking a state opens the sidebar with state details', async () => {
    const user = userEvent.setup()

    render(<IndiaMap states={mockStates} layers={[mockRiverLayer]} />)

    const rajasthanPath = document.querySelector('[data-testid="state-rajasthan"]')
    expect(rajasthanPath).toBeInTheDocument()

    await user.click(rajasthanPath!)

    const sidebar = screen.getByRole('dialog')
    expect(sidebar).toBeInTheDocument()

    const sidebarElement = within(sidebar)
    expect(sidebarElement.getByText('Rajasthan')).toBeInTheDocument()
    expect(sidebarElement.getByText('Jaipur')).toBeInTheDocument()
  })

  it('toggling layer checkbox hides river features', async () => {
    const user = userEvent.setup()

    render(<IndiaMap states={mockStates} layers={[mockRiverLayer]} />)

    const riverPath = document.querySelector('[data-testid="feature-ganga"]')
    expect(riverPath).toBeInTheDocument()

    const checkbox = screen.getByRole('checkbox', { name: /rivers/i })
    await user.click(checkbox)

    const riverPathAfter = document.querySelector('[data-testid="feature-ganga"]')
    expect(riverPathAfter).not.toBeInTheDocument()
  })
})
