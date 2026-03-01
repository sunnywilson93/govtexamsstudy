'use client'

import { motion } from 'framer-motion'

interface VariablesPanelProps {
  variables: Record<string, number | string>
  previousVariables?: Record<string, number | string>
}

export function VariablesPanel({
  variables,
  previousVariables,
}: VariablesPanelProps) {
  const entries = Object.entries(variables)

  return (
    <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
        Variables
      </h3>

      {entries.length === 0 ? (
        <p className="text-sm text-text-muted">No variables yet</p>
      ) : (
        <div className="flex flex-col gap-2">
          {entries.map(([key, value]) => {
            const changed =
              previousVariables !== undefined &&
              previousVariables[key] !== value

            return (
              <motion.div
                key={key}
                className="flex items-center justify-between rounded-md px-3 py-2"
                animate={{
                  backgroundColor: changed
                    ? ['rgba(59,130,246,0.15)', 'rgba(59,130,246,0)']
                    : 'rgba(0,0,0,0)',
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-medium text-text-secondary">
                  {key}
                </span>
                <motion.span
                  className="font-mono text-sm font-semibold text-text-primary"
                  animate={changed ? { scale: [1.15, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {String(value)}
                </motion.span>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
