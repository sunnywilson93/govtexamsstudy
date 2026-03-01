import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian History"
      subjectColor="#f59e0b"
      subjectSlug="history"
      links={[
        { href: '/history/timeline', label: 'Interactive Timeline' },
        { href: '/history/freedom-movement', label: 'Freedom Movement' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
