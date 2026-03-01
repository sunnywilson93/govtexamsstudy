import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function QuantLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Quantitative Aptitude"
      subjectColor="#3b82f6"
      subjectSlug="quant"
      links={[
        { href: '/quant/percentage', label: 'Percentage' },
        { href: '/quant/profit-loss', label: 'Profit, Loss & Discount' },
        { href: '/quant/ratio', label: 'Ratio & Proportion' },
        { href: '/quant/time-speed-distance', label: 'Time, Speed & Distance' },
        { href: '/quant/time-work', label: 'Time & Work' },
        { href: '/quant/number-system', label: 'Number System' },
        { href: '/quant/average', label: 'Average' },
        { href: '/quant/simple-compound-interest', label: 'Simple & Compound Interest' },
        { href: '/quant/mixture-alligation', label: 'Mixture & Alligation' },
        { href: '/quant/mensuration', label: 'Mensuration' },
        { href: '/quant/geometry', label: 'Geometry Visualizer' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
