import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Current Affairs for UPSC, SSC, Banking Exams | GovtExamsStudy',
  description:
    'Daily PIB-sourced current affairs linked to syllabus topics for UPSC, SSC CGL, IBPS PO, RBI Grade B and State PSCs. Every item links to the official source.',
}

export default function CurrentAffairsLayout({ children }: { children: React.ReactNode }) {
  return children
}
