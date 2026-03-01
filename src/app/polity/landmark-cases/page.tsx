import { landmarkCases } from '@/data/polity/landmark-cases'
import { CaseExplorer } from '@/components/visualizers/polity/CaseExplorer'

export default function LandmarkCasesPage() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-bold text-text-primary">Landmark Cases</h1>
      <p className="mb-6 text-sm text-text-secondary">
        Study Supreme Court landmark cases and their connections to constitutional articles.
      </p>
      <CaseExplorer cases={landmarkCases} />
    </div>
  )
}
