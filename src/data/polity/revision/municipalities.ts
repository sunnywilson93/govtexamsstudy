import type { SubjectRevision } from '@/types/subject-notes'

export const municipalitiesRevision: SubjectRevision = {
  topic: 'municipalities',
  bullets: [
    '74th Amendment (1992): added Part IXA (Art 243P-243ZG) and Twelfth Schedule (18 subjects). Came into force 1 June 1993.',
    'Three types: Nagar Panchayat (transitional areas), Municipal Council (smaller urban), Municipal Corporation (larger urban).',
    'Art 243T: reservation for SCs/STs proportional to population; 1/3 seats for women.',
    'Art 243U: 5-year term; elections within 6 months of dissolution.',
    'Twelfth Schedule: 18 subjects including urban planning, water supply, public health, fire services, slum improvement, urban poverty.',
    'Art 243Y: State Finance Commission reviews municipal finances (same body as for panchayats under Art 243I).',
    'Art 243ZA: State Election Commission conducts municipal elections.',
    'Art 243ZD: District Planning Committee (DPC) — 4/5 elected members; consolidates panchayat + municipal plans.',
    'Art 243ZE: Metropolitan Planning Committee (MPC) — for 10 lakh+ areas; 2/3 elected members.',
    'First municipal corporation: Madras (Chennai), 1687. Lord Ripon (1882): "Magna Carta" of local self-government.',
  ],
  comparisons: [
    {
      title: '73rd vs 74th Amendment',
      headers: ['Aspect', '73rd Amendment', '74th Amendment'],
      rows: [
        ['Area', 'Rural', 'Urban'],
        ['Bodies', 'Panchayats (3 tiers)', 'Municipalities (3 types)'],
        ['Schedule', 'Eleventh (29 subjects)', 'Twelfth (18 subjects)'],
        ['Gram Sabha', 'Yes (Art 243A)', 'No equivalent'],
        ['DPC/MPC', 'No', 'Yes (Art 243ZD/ZE)'],
        ['Part', 'Part IX', 'Part IXA'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Three Types of Municipalities (NMM)',
      mnemonic: 'Nagar Panchayat (transitional), Municipal Council (smaller), Municipal Corporation (larger)',
      explanation: 'The three types of urban local bodies under the 74th Amendment, from smallest to largest.',
    },
  ],
}
