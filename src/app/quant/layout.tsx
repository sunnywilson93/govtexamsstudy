import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function QuantLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Quantitative Aptitude"
      subjectColor="#3b82f6"
      subjectSlug="quant"
      links={[
        { href: '/quant/percentage', label: 'Percentage', group: 'Arithmetic' },
        { href: '/quant/profit-loss', label: 'Profit, Loss & Discount', group: 'Arithmetic' },
        { href: '/quant/ratio', label: 'Ratio & Proportion', group: 'Arithmetic' },
        { href: '/quant/time-speed-distance', label: 'Time, Speed & Distance', group: 'Arithmetic' },
        { href: '/quant/time-work', label: 'Time & Work', group: 'Arithmetic' },
        { href: '/quant/number-system', label: 'Number System', group: 'Advanced' },
        { href: '/quant/average', label: 'Average', group: 'Advanced' },
        { href: '/quant/simple-compound-interest', label: 'SI & CI', group: 'Advanced' },
        { href: '/quant/mixture-alligation', label: 'Mixture & Alligation', group: 'Advanced' },
        { href: '/quant/mensuration', label: 'Mensuration', group: 'Advanced' },
        { href: '/quant/algebra', label: 'Algebra', group: 'Higher Maths' },
        { href: '/quant/trigonometry', label: 'Trigonometry', group: 'Higher Maths' },
        { href: '/quant/data-interpretation', label: 'Data Interpretation', group: 'Higher Maths' },
        { href: '/quant/statistics-probability', label: 'Statistics & Probability', group: 'Higher Maths' },
        { href: '/quant/geometry', label: 'Geometry Visualizer', group: 'Visualizer' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
