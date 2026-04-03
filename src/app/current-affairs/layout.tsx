import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Current Affairs for UPSC, SSC, Banking Exams | GovtExamsStudy',
  description:
    'Daily exam-relevant current affairs from official sources — PIB, RBI, ministry notifications, and more. Topic-wise filtering for UPSC, SSC CGL, IBPS PO preparation.',
}

export default function CurrentAffairsLayout({ children }: { children: React.ReactNode }) {
  return children
}
