'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface ExpressionDisplayProps {
  operation: string
  expression: string
  result: string
  explanation: string
}

export function ExpressionDisplay({
  operation,
  expression,
  result,
}: ExpressionDisplayProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-border-primary bg-bg-secondary p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${operation}-${expression}-${result}`}
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <span className="rounded-md bg-subject-quant-light px-3 py-1.5 text-sm font-medium text-subject-quant-dark">
            {operation}
          </span>

          <p className="text-center font-mono text-2xl font-semibold text-text-primary">
            {expression}
          </p>

          <p className="text-center font-mono text-3xl font-bold text-subject-quant">
            = {result}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
