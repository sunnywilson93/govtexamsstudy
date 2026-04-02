import type { Metadata } from 'next'
import { SubjectHubPage } from '@/components/ui/SubjectHubPage'

export const metadata: Metadata = {
  title: 'General Science - Interactive Explorers',
  description:
    'Interactive periodic table, human body systems explorer and key science concepts for government exam preparation.',
}

const SECTIONS = [
  {
    heading: 'Interactive Explorers',
    subheading: 'Visual tools for science concepts',
    topics: [
      {
        href: '/science/periodic-table',
        title: 'Periodic Table',
        description: 'Interactive periodic table with element details, grouping filters and exam-relevant properties.',
        hasTabs: false,
      },
      {
        href: '/science/human-body',
        title: 'Human Body Systems',
        description: 'Explore human body systems with labeled diagrams and exam-focused key facts.',
        hasTabs: false,
      },
    ],
  },
]

export default function SciencePage() {
  return (
    <SubjectHubPage
      subjectName="General Science"
      subjectColor="#06b6d4"
      description="Interactive periodic table, human body systems explorer and key science concepts for government exam preparation."
      sections={SECTIONS}
    />
  )
}
