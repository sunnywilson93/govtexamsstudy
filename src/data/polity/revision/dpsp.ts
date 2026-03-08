import type { SubjectRevision } from '@/types/subject-notes'

export const dpspRevision: SubjectRevision = {
  topic: 'dpsp',
  bullets: [
    'Part IV, Articles 36-51. Borrowed from the Irish Constitution. Non-justiciable (Art 37).',
    'Three categories: Socialistic (Art 38, 39, 39A, 41-43A, 47), Gandhian (Art 40, 43, 43B, 46-48), Liberal-Intellectual (Art 44, 45, 48-51).',
    'Art 38: social order for welfare. Art 39: equitable distribution, equal pay for equal work. Art 39A: free legal aid (42nd Amendment).',
    'Art 40: village panchayats (basis for 73rd Amendment). Art 41: right to work, education. Art 43: living wage. Art 43A: workers\'  participation (42nd Amendment).',
    'Art 44: Uniform Civil Code (remains unimplemented nationally; Goa has one). Art 45: early childhood care (86th Amendment — changed from education to care for children below 6).',
    'Art 47: prohibition of intoxicating drinks. Art 48: prohibition of cow slaughter. Art 48A: environment protection (42nd Amendment).',
    'Art 50: separation of judiciary from executive. Art 51: promote international peace.',
    'Champakam Dorairajan (1951): FRs prevail over DPSPs. Minerva Mills (1980): balance between FRs and DPSPs is the basic structure.',
    'Art 31C: laws giving effect to Art 39(b) and (c) cannot be challenged under Art 14, 19 (upheld in Kesavananda Bharati).',
    '42nd Amendment tried to extend Art 31C to ALL DPSPs — struck down in Minerva Mills (1980).',
    'Implemented DPSPs: Art 39A (Legal Services Authorities Act), Art 40 (73rd/74th Amendments), Art 45/21A (RTE Act 2009), Art 48A (Environment Protection Act).',
  ],
  comparisons: [
    {
      title: 'Fundamental Rights vs DPSPs',
      headers: ['Aspect', 'Fundamental Rights', 'DPSPs'],
      rows: [
        ['Part', 'Part III (Art 12-35)', 'Part IV (Art 36-51)'],
        ['Justiciability', 'Justiciable (enforceable by courts)', 'Non-justiciable'],
        ['Nature', 'Negative obligations (limitations on State)', 'Positive directions to the State'],
        ['Aim', 'Political democracy', 'Social and economic democracy'],
        ['Source', 'US Bill of Rights', 'Irish Constitution'],
        ['Emergency', 'Can be suspended (except Art 20, 21)', 'Cannot be suspended'],
        ['Implementation', 'Automatically enforceable', 'Require legislation'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'DPSP Classification (SGL)',
      mnemonic: 'Socialistic (welfare), Gandhian (village/rural), Liberal (modern governance)',
      explanation: 'The three categories of DPSPs: Socialistic Principles (Art 38-43A, 47), Gandhian Principles (Art 40-48), and Liberal-Intellectual Principles (Art 44-51).',
    },
  ],
}
