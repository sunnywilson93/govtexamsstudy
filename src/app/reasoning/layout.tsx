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
        {
          href: '/reasoning/mirror-water-images',
          label: 'Mirror & Water Images',
          group: 'Visualizers',
        },
        { href: '/reasoning/cubes-dice', label: 'Cubes & Dice', group: 'Visualizers' },
        { href: '/reasoning/paper-folding', label: 'Paper Folding', group: 'Visualizers' },
        { href: '/reasoning/clock-reasoning', label: 'Clock Reasoning', group: 'Visualizers' },
        { href: '/reasoning/counting-figures', label: 'Counting Figures', group: 'Visualizers' },
        { href: '/reasoning/inequalities', label: 'Inequalities', group: 'Verbal' },
        { href: '/reasoning/analogies', label: 'Analogies', group: 'Verbal' },
        { href: '/reasoning/classification', label: 'Classification', group: 'Verbal' },
        { href: '/reasoning/alphabet-tests', label: 'Alphabet Tests', group: 'Verbal' },
        { href: '/reasoning/input-output', label: 'Input-Output', group: 'Verbal' },
        { href: '/reasoning/order-ranking', label: 'Order & Ranking', group: 'Verbal' },
        {
          href: '/reasoning/statement-conclusions',
          label: 'Statement & Conclusions',
          group: 'Logical',
        },
        { href: '/reasoning/cause-effect', label: 'Cause & Effect', group: 'Logical' },
        { href: '/reasoning/data-sufficiency', label: 'Data Sufficiency', group: 'Logical' },
        {
          href: '/reasoning/calendar-reasoning',
          label: 'Calendar Reasoning',
          group: 'Logical',
        },
        {
          href: '/reasoning/logical-venn-diagrams',
          label: 'Logical Venn Diagrams',
          group: 'Logical',
        },
        {
          href: '/reasoning/linear-arrangements',
          label: 'Linear Arrangements',
          group: 'Logical',
        },
        {
          href: '/reasoning/critical-reasoning',
          label: 'Critical Reasoning',
          group: 'Logical',
        },
        { href: '/reasoning/figure-series', label: 'Figure Series', group: 'Non-Verbal' },
        { href: '/reasoning/embedded-figures', label: 'Embedded Figures', group: 'Non-Verbal' },
      ]}
    >
      {children}
    </SubjectLayout>
  )
}
