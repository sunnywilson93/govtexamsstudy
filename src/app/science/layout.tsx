import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function ScienceLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="General Science"
      subjectColor="#06b6d4"
      subjectSlug="science"
      links={[
        { href: '/science/periodic-table', label: 'Periodic Table' },
        { href: '/science/human-body', label: 'Human Body Systems' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
