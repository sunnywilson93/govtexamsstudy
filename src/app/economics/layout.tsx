import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function EconomicsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian Economy"
      subjectColor="#14b8a6"
      subjectSlug="economics"
      links={[
        { href: '/economics/flows', label: 'Policy Flow Diagrams' },
        { href: '/economics/budget', label: 'Budget Visualizer' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
