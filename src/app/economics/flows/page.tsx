import { PolicyFlowDiagram } from '@/components/visualizers/economics/PolicyFlowDiagram'
import { policyFlows } from '@/data/economics/policy-flows'

export default function FlowsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary">Policy Flow Diagrams</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Walk through how monetary and fiscal policy decisions ripple through the economy step by step.
      </p>
      <div className="mt-6">
        <PolicyFlowDiagram flows={policyFlows} />
      </div>
    </div>
  )
}
