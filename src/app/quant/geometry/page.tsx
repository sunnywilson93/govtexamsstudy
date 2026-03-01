import type { Metadata } from 'next'
import { GeometryVisualizer } from '@/components/visualizers/quant/GeometryVisualizer'

export const metadata: Metadata = {
  title: 'Interactive Geometry Visualizer',
  description:
    'Explore geometric shapes, angles, and transformations with interactive diagrams for government exam preparation.',
}

export default function GeometryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Geometry Visualizer</h1>
      <GeometryVisualizer />
    </div>
  )
}
