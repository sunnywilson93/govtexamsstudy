import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Progress Dashboard',
  description:
    'Track your study progress, streaks, topic mastery badges and performance radar chart for government exam preparation.',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
