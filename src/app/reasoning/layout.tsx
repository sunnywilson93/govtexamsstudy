import { SubjectLayout } from '@/components/layout/SubjectLayout'

export default function ReasoningLayout({ children }: { children: React.ReactNode }) {
  return (
    <SubjectLayout
      subjectName="Reasoning & Logic"
      subjectColor="#8b5cf6"
      subjectSlug="reasoning"
      showHeading={false}
      links={[
        { href: '/reasoning/seating', label: 'Seating Arrangement', group: 'Visualizers' },
        { href: '/reasoning/blood-relations', label: 'Blood Relations', group: 'Visualizers' },
        {
          href: '/reasoning/direction-distance',
          label: 'Direction & Distance',
          group: 'Visualizers',
        },
        { href: '/reasoning/coding-decoding', label: 'Coding-Decoding', group: 'Visualizers' },
        { href: '/reasoning/puzzles', label: 'Floor & Box Puzzles', group: 'Visualizers' },
        { href: '/reasoning/syllogism', label: 'Syllogism', group: 'Visualizers' },
        { href: '/reasoning/series', label: 'Series & Patterns', group: 'Visualizers' },
        { href: '/reasoning/inequalities', label: 'Inequalities', group: 'Verbal' },
        { href: '/reasoning/analogies', label: 'Analogies', group: 'Verbal' },
        { href: '/reasoning/classification', label: 'Classification', group: 'Verbal' },
        { href: '/reasoning/alphabet-tests', label: 'Alphabet Tests', group: 'Verbal' },
        { href: '/reasoning/input-output', label: 'Input-Output', group: 'Verbal' },
        {
          href: '/reasoning/statement-conclusions',
          label: 'Statement & Conclusions',
          group: 'Logical',
        },
        { href: '/reasoning/cause-effect', label: 'Cause & Effect', group: 'Logical' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
