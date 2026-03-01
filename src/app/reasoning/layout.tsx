import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function ReasoningLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Reasoning & Logic"
      subjectColor="#a855f7"
      subjectSlug="reasoning"
      links={[
        { href: '/reasoning/seating', label: 'Seating Arrangement' },
        { href: '/reasoning/syllogism', label: 'Syllogism Venn Builder' },
        { href: '/reasoning/series', label: 'Series Pattern Detector' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
