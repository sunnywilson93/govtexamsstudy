import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function PolityLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian Polity"
      subjectColor="#ef4444"
      subjectSlug="polity"
      links={[
        { href: '/polity/articles', label: 'Article Explorer' },
        { href: '/polity/amendments', label: 'Amendment Timeline' },
        { href: '/polity/landmark-cases', label: 'Landmark Cases' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
