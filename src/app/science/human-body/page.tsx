import { bodySystems } from '@/data/science/body-systems'
import { BodySystemExplorer } from '@/components/visualizers/science/BodySystemExplorer'

export default function HumanBodyPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-text-primary">
        Human Body Systems Explorer
      </h1>
      <p className="mb-6 text-sm text-text-secondary">
        Explore major body systems, their organs, diseases, and exam-relevant
        facts through an interactive body diagram.
      </p>
      <BodySystemExplorer systems={bodySystems} />
    </div>
  )
}
