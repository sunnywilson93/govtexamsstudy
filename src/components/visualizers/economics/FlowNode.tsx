'use client'

import { motion } from 'framer-motion'

type FlowNodeStatus = 'active' | 'completed' | 'locked'

interface FlowNodeProps {
  title: string
  description?: string
  status: FlowNodeStatus
  x: number
  y: number
}

const NODE_WIDTH = 200
const NODE_HEIGHT = 56

const statusStyles: Record<FlowNodeStatus, { fill: string; stroke: string; textFill: string; opacity: number }> = {
  active: { fill: '#0d9488', stroke: '#0f766e', textFill: '#ffffff', opacity: 1 },
  completed: { fill: '#99f6e4', stroke: '#5eead4', textFill: '#115e59', opacity: 0.7 },
  locked: { fill: '#e5e7eb', stroke: '#d1d5db', textFill: '#9ca3af', opacity: 0.5 },
}

export function FlowNode({ title, status, x, y }: FlowNodeProps) {
  const styles = statusStyles[status]

  return (
    <motion.g
      data-testid={`flow-node-${status}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: styles.opacity, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <rect
        x={x - NODE_WIDTH / 2}
        y={y - NODE_HEIGHT / 2}
        width={NODE_WIDTH}
        height={NODE_HEIGHT}
        rx={12}
        ry={12}
        fill={styles.fill}
        stroke={styles.stroke}
        strokeWidth={2}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill={styles.textFill}
        fontSize={13}
        fontWeight={600}
        className="pointer-events-none select-none"
      >
        {title.length > 28 ? `${title.slice(0, 26)}...` : title}
      </text>
    </motion.g>
  )
}

export { NODE_WIDTH, NODE_HEIGHT }
