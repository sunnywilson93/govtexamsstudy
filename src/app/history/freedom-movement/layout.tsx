import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freedom Movement Cause-Effect Chains',
  description:
    'Step through how key events in the Indian freedom struggle led to each other with interactive cause-effect chains.',
}

export default function FreedomMovementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
