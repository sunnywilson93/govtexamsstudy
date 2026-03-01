'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface SubjectCardProps {
  title: string
  description: string
  href: string
  color: string
  icon: React.ReactNode
}

export function SubjectCard({ title, description, href, color, icon }: SubjectCardProps) {
  return (
    <Link href={href} className="no-underline">
      <motion.div
        className="rounded-lg border border-border-primary bg-bg-elevated p-5 transition-shadow"
        style={{ borderLeftWidth: '4px', borderLeftColor: color }}
        whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)' }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="mb-3 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      </motion.div>
    </Link>
  )
}
