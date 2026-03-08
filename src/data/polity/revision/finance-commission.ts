import type { SubjectRevision } from '@/types/subject-notes'

export const financeCommissionRevision: SubjectRevision = {
  topic: 'finance-commission',
  bullets: [
    'Art 280: President constitutes FC every 5 years. Chairman + 4 members.',
    'Functions: recommend distribution of tax revenue (vertical + horizontal devolution), grants-in-aid, measures for panchayat/municipality finance augmentation.',
    'Vertical devolution: Centre vs States share. 14th FC: 42% to states (highest ever). 15th FC: 41% (reduced due to new UTs).',
    'Horizontal devolution criteria (15th FC): income distance (45%), area (15%), population 2011 (15%), demographic performance (12.5%), forest/ecology (10%), tax effort (2.5%).',
    'Shift from 1971 Census to 2011 Census for population criterion was controversial — southern states with lower growth felt penalized.',
    'FC recommendations are advisory — government not constitutionally bound, but mostly accepted.',
    'Reports submitted to President → laid before Parliament (Art 281).',
    'First FC: 1951, Chairman K.C. Neogy. 14th FC: Y.V. Reddy. 15th FC: N.K. Singh.',
    'State Finance Commission (Art 243I, 243Y): constituted by Governor every 5 years for panchayat/municipality finances.',
    'FC is a constitutional body; NITI Aayog is non-constitutional, non-statutory.',
  ],
  comparisons: [
    {
      title: 'Finance Commission vs NITI Aayog',
      headers: ['Aspect', 'Finance Commission', 'NITI Aayog'],
      rows: [
        ['Status', 'Constitutional (Art 280)', 'Non-constitutional, non-statutory'],
        ['Function', 'Revenue distribution', 'Policy advice, competitive federalism'],
        ['Chairman', 'Appointed by President', 'PM'],
        ['Constituted', 'Every 5 years', 'Permanent'],
        ['Recommendations', 'Formulaic, mostly accepted', 'Advisory'],
      ],
    },
  ],
  mnemonics: [
    {
      title: '15th FC Horizontal Formula (IAPDF-T)',
      mnemonic: 'Income distance 45%, Area 15%, Population 15%, Demographic 12.5%, Forest 10%, Tax effort 2.5%',
      explanation: 'The six criteria used by the 15th Finance Commission for horizontal devolution with their weights.',
    },
  ],
}
