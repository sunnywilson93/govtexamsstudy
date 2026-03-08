import type { SubjectRevision } from '@/types/subject-notes'

export const upscSpscRevision: SubjectRevision = {
  topic: 'upsc-spsc',
  bullets: [
    'Art 315-323 deal with PSCs. UPSC for Union; SPSC for each state; JSPSC for 2+ states (created by Parliament).',
    'Composition: Chairman + members appointed by President (UPSC) / Governor (SPSC). At least half must have 10+ years government service.',
    'UPSC term: 6 years or 65 years. SPSC term: 6 years or 62 years.',
    'Removal (Art 317): by President for misbehavior after SC inquiry; also for insolvency, paid outside employment, infirmity.',
    'UPSC Chairman: not eligible for further government employment after retirement.',
    'UPSC members: can become UPSC Chairman or SPSC Chairman. SPSC Chairman: can become UPSC Chairman/member.',
    'UPSC functions (Art 320): conducts exams (CSE, CDS, NDA, ESE); advises on recruitment, promotions, disciplinary matters, pensions.',
    'UPSC is advisory — government not bound by its advice but must report to Parliament if advice not accepted (Art 323).',
    'Key exams: Civil Services (IAS/IPS/IFS), CDS, NDA, Engineering Services, CMS, IFS, CAPF.',
    'Art 321: Parliament can extend UPSC functions. Art 322: expenses charged on Consolidated Fund of India.',
    'First Public Service Commission in India: established 1926. First Chairman under Constitution: Sir A. Ramaswami Mudaliar.',
  ],
  comparisons: [
    {
      title: 'UPSC vs SPSC',
      headers: ['Aspect', 'UPSC', 'SPSC'],
      rows: [
        ['Appointed by', 'President', 'Governor'],
        ['Retirement age', '65 years', '62 years'],
        ['Post-retirement (Chairman)', 'No further government employment', 'Can become UPSC Chairman/member'],
        ['Expenses', 'Consolidated Fund of India', 'Consolidated Fund of State'],
        ['Reports to', 'President → Parliament', 'Governor → state legislature'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'UPSC Articles (315-323)',
      mnemonic: '315=Establishment, 316=Appointment, 317=Removal, 318=Conditions, 320=Functions, 323=Reports',
      explanation: 'The six most important articles dealing with Public Service Commissions.',
    },
  ],
}
