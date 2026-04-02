import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government Exams — Eligibility, Pattern & Cutoffs | GovtExamsStudy',
  description:
    'Comprehensive guide to India\'s top government competitive exams. Exam pattern, eligibility criteria, syllabus, and cutoff trends for SSC, UPSC, Banking, Railways, and more.',
}

export default function ExamsLayout({ children }: { children: React.ReactNode }) {
  return children
}
