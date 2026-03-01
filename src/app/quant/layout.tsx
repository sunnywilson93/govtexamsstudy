import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function QuantLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Quantitative Aptitude"
      subjectColor="#3b82f6"
      subjectSlug="quant"
      links={[
        { href: '/quant/step-solver', label: 'Step-by-Step Solver' },
        { href: '/quant/geometry', label: 'Geometry Visualizer' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
