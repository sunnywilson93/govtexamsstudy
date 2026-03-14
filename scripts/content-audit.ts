import * as fs from 'fs'
import * as path from 'path'

const SUBJECTS = ['polity', 'history', 'geography', 'economics'] as const

interface Thresholds {
  minimum: number
  good: number
}

const QUALITY_THRESHOLDS: Record<string, Thresholds> = {
  noteSections: { minimum: 4, good: 8 },
  revisionBullets: { minimum: 15, good: 30 },
  comparisons: { minimum: 1, good: 3 },
  mnemonics: { minimum: 1, good: 3 },
  problems: { minimum: 5, good: 10 },
  keyDates: { minimum: 3, good: 8 },
}

type Rating = 'green' | 'yellow' | 'red'

function rate(value: number, metric: string): Rating {
  const t = QUALITY_THRESHOLDS[metric]
  if (value >= t.good) return 'green'
  if (value >= t.minimum) return 'yellow'
  return 'red'
}

const EMOJI: Record<Rating, string> = {
  green: '🟢',
  yellow: '🟡',
  red: '🔴',
}

interface TopicAudit {
  slug: string
  noteSections: number
  keyDates: number
  revisionBullets: number
  comparisons: number
  mnemonics: number
  problems: number
}

function findConcept(mod: Record<string, unknown>): { notes: unknown[]; keyDates: unknown[] } | null {
  for (const val of Object.values(mod)) {
    if (val && typeof val === 'object' && 'notes' in val && Array.isArray((val as Record<string, unknown>).notes)) {
      const obj = val as Record<string, unknown>
      return {
        notes: obj.notes as unknown[],
        keyDates: Array.isArray(obj.keyDates) ? (obj.keyDates as unknown[]) : [],
      }
    }
  }
  return null
}

function findRevision(mod: Record<string, unknown>): { bullets: unknown[]; comparisons: unknown[]; mnemonics: unknown[] } | null {
  for (const val of Object.values(mod)) {
    if (val && typeof val === 'object' && 'bullets' in val && Array.isArray((val as Record<string, unknown>).bullets)) {
      const obj = val as Record<string, unknown>
      return {
        bullets: obj.bullets as unknown[],
        comparisons: Array.isArray(obj.comparisons) ? (obj.comparisons as unknown[]) : [],
        mnemonics: Array.isArray(obj.mnemonics) ? (obj.mnemonics as unknown[]) : [],
      }
    }
  }
  return null
}

function findProblems(mod: Record<string, unknown>): unknown[] {
  for (const val of Object.values(mod)) {
    if (Array.isArray(val)) return val
  }
  return []
}

async function auditSubject(subject: string): Promise<TopicAudit[]> {
  const conceptsDir = path.resolve(__dirname, `../src/data/${subject}/concepts`)
  const files = fs.readdirSync(conceptsDir).filter((f) => f.endsWith('.ts')).sort()
  const results: TopicAudit[] = []

  for (const file of files) {
    const slug = file.replace('.ts', '')
    const audit: TopicAudit = {
      slug,
      noteSections: 0,
      keyDates: 0,
      revisionBullets: 0,
      comparisons: 0,
      mnemonics: 0,
      problems: 0,
    }

    try {
      const conceptMod = await import(`../src/data/${subject}/concepts/${slug}`)
      const concept = findConcept(conceptMod)
      if (concept) {
        audit.noteSections = concept.notes.length
        audit.keyDates = concept.keyDates.length
      }
    } catch {
      // concept file import failed — counts stay at 0
    }

    try {
      const revisionMod = await import(`../src/data/${subject}/revision/${slug}`)
      const revision = findRevision(revisionMod)
      if (revision) {
        audit.revisionBullets = revision.bullets.length
        audit.comparisons = revision.comparisons.length
        audit.mnemonics = revision.mnemonics.length
      }
    } catch {
      // revision file import failed — counts stay at 0
    }

    try {
      const problemsMod = await import(`../src/data/${subject}/problems/${slug}-problems`)
      audit.problems = findProblems(problemsMod).length
    } catch {
      // problems file import failed — counts stay at 0
    }

    results.push(audit)
  }

  return results
}

function generateReport(allAudits: Record<string, TopicAudit[]>): string {
  const lines: string[] = []
  const now = new Date().toISOString().split('T')[0]

  lines.push('# Content Audit Report')
  lines.push('')
  lines.push(`Generated: ${now}`)
  lines.push('')

  lines.push('## Quality Thresholds')
  lines.push('')
  lines.push('| Metric | Minimum | Good |')
  lines.push('|--------|---------|------|')
  for (const [metric, t] of Object.entries(QUALITY_THRESHOLDS)) {
    lines.push(`| ${metric} | ${t.minimum} | ${t.good} |`)
  }
  lines.push('')
  lines.push(`Legend: ${EMOJI.green} Good+ | ${EMOJI.yellow} Minimum | ${EMOJI.red} Below minimum`)
  lines.push('')

  let totalTopics = 0
  let totalGreen = 0
  let totalYellow = 0
  let totalRed = 0
  const METRICS = ['noteSections', 'keyDates', 'revisionBullets', 'comparisons', 'mnemonics', 'problems'] as const

  for (const [subject, audits] of Object.entries(allAudits)) {
    lines.push(`## ${subject.charAt(0).toUpperCase() + subject.slice(1)}`)
    lines.push('')
    lines.push('| Topic | Notes | KeyDates | Bullets | Comparisons | Mnemonics | Problems |')
    lines.push('|-------|-------|----------|---------|-------------|-----------|----------|')

    for (const a of audits) {
      totalTopics++
      const cells = METRICS.map((m) => {
        const val = a[m]
        const r = rate(val, m)
        if (r === 'green') totalGreen++
        else if (r === 'yellow') totalYellow++
        else totalRed++
        return `${EMOJI[r]} ${val}`
      })
      lines.push(`| ${a.slug} | ${cells.join(' | ')} |`)
    }

    lines.push('')
  }

  lines.push('## Summary')
  lines.push('')
  const totalCells = totalGreen + totalYellow + totalRed
  lines.push(`- **Total topics:** ${totalTopics}`)
  lines.push(`- ${EMOJI.green} **Green:** ${totalGreen} (${totalCells ? Math.round((totalGreen / totalCells) * 100) : 0}%)`)
  lines.push(`- ${EMOJI.yellow} **Yellow:** ${totalYellow} (${totalCells ? Math.round((totalYellow / totalCells) * 100) : 0}%)`)
  lines.push(`- ${EMOJI.red} **Red:** ${totalRed} (${totalCells ? Math.round((totalRed / totalCells) * 100) : 0}%)`)
  lines.push('')

  return lines.join('\n')
}

async function main() {
  const allAudits: Record<string, TopicAudit[]> = {}

  for (const subject of SUBJECTS) {
    console.log(`Auditing ${subject}...`)
    allAudits[subject] = await auditSubject(subject)
    console.log(`  ${allAudits[subject].length} topics found`)
  }

  const report = generateReport(allAudits)
  const outPath = path.resolve(__dirname, '../docs/content-audit-report.md')
  fs.writeFileSync(outPath, report, 'utf-8')
  console.log(`\nReport written to ${outPath}`)
}

main().catch((err) => {
  console.error('Audit failed:', err)
  process.exit(1)
})
