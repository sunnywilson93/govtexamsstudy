import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { RadarChart } from '../RadarChart'

vi.mock('framer-motion', () => ({
  motion: {
    polygon: (props: React.SVGProps<SVGPolygonElement>) => {
      const { initial, animate, transition, ...rest } = props as Record<string, unknown>
      void initial; void animate; void transition
      return <polygon {...(rest as React.SVGProps<SVGPolygonElement>)} />
    },
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, transition, ...rest } = props as Record<string, unknown>
      void initial; void animate; void transition
      return <div {...(rest as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>
    },
  },
}))

const mockScores: Record<string, number> = {
  quant: 80,
  reasoning: 60,
  polity: 45,
  history: 70,
  geography: 55,
  economics: 90,
  science: 35,
}

describe('RadarChart', () => {
  it('renders SVG with 7 axis labels', () => {
    render(<RadarChart scores={mockScores} />)
    expect(screen.getByText('Quant')).toBeInTheDocument()
    expect(screen.getByText('Reasoning')).toBeInTheDocument()
    expect(screen.getByText('Polity')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
    expect(screen.getByText('Geography')).toBeInTheDocument()
    expect(screen.getByText('Economics')).toBeInTheDocument()
    expect(screen.getByText('Science')).toBeInTheDocument()
  })

  it('renders SVG element', () => {
    const { container } = render(<RadarChart scores={mockScores} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('shows polygon for scores', () => {
    const { container } = render(<RadarChart scores={mockScores} />)
    const polygon = container.querySelector('polygon')
    expect(polygon).toBeInTheDocument()
    expect(polygon?.getAttribute('points')).toBeTruthy()
  })

  it('renders grid lines', () => {
    const { container } = render(<RadarChart scores={mockScores} />)
    const paths = container.querySelectorAll('path[data-testid="grid-ring"]')
    expect(paths.length).toBe(4)
  })

  it('handles empty scores gracefully', () => {
    const { container } = render(<RadarChart scores={{}} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
