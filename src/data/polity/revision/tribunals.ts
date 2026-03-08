import type { SubjectRevision } from '@/types/subject-notes'

export const tribunalsRevision: SubjectRevision = {
  topic: 'tribunals',
  bullets: [
    '42nd Amendment (1976) added Part XIVA: Art 323A (administrative tribunals) and Art 323B (tribunals for other matters).',
    'Art 323A: Parliament can establish tribunals for service matters of public servants. Basis for CAT (1985).',
    'Art 323B: Parliament OR state legislatures can establish tribunals for taxation, land reforms, labour disputes, etc.',
    'CAT (1985): handles service disputes of central government employees; Principal Bench in Delhi + 17 regular benches.',
    'L. Chandra Kumar (1997): HC judicial review under Art 226/227 is basic structure — tribunals cannot exclude it.',
    'Major tribunals: CAT, ITAT (oldest, 1941), NGT (2010), NCLT, NCLAT, DRT, SAT, AFT (2007), TDSAT.',
    'NGT: handles environmental disputes; original + appellate jurisdiction. NCLT: company law + insolvency.',
    'Tribunals Reforms Act 2021: 4-year tenure, age 50-70 for members. SC struck down 4-year tenure as too short.',
    'Madras Bar Association (2014): SC laid down requirements for independent tribunal members.',
    'Tribunals serve as courts of first instance; decisions always challengeable before HCs and SC.',
  ],
  comparisons: [
    {
      title: 'Art 323A vs Art 323B',
      headers: ['Aspect', 'Art 323A', 'Art 323B'],
      rows: [
        ['Scope', 'Administrative/service matters only', 'Wide range (tax, land, labour, etc.)'],
        ['Who can establish', 'Parliament only', 'Parliament OR state legislatures'],
        ['Example', 'CAT', 'ITAT, NGT, NCLT, etc.'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Key Tribunals (CING DSAT)',
      mnemonic: 'CAT, ITAT, NGT, NCLT — DRT, SAT, AFT, TDSAT',
      explanation: 'The eight most important tribunals for competitive exams.',
    },
  ],
}
