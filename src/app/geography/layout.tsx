import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function GeographyLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Indian Geography"
      subjectColor="#22c55e"
      subjectSlug="geography"
      links={[
        { href: '/geography/map', label: 'Interactive Map' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
