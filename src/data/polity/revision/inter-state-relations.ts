import type { SubjectRevision } from '@/types/subject-notes'

export const interStateRelationsRevision: SubjectRevision = {
  topic: 'inter-state-relations',
  bullets: [
    'Art 262: Parliament can legislate on inter-state water disputes; can bar courts from jurisdiction.',
    'Inter-State Water Disputes Act 1956: ad hoc tribunals appointed by Centre for river water disputes.',
    'Major tribunals: Krishna, Cauvery, Ravi-Beas, Narmada, Mahadayi water dispute tribunals.',
    'Inter-State Council (Art 263): PM Chairman; investigates disputes, discusses common interests, recommends coordination. Established 1990.',
    'Zonal Councils: 5 statutory bodies (States Reorganisation Act 1956) — Northern, Central, Eastern, Western, Southern. Chaired by Union Home Minister.',
    'North Eastern Council: 6th zonal body (NEC Act 1972); 8 northeastern states including Sikkim.',
    'Art 301: trade, commerce, and intercourse throughout India shall be free.',
    'Art 302: Parliament can impose restrictions on inter-state trade in public interest.',
    'Art 304: states can impose reasonable restrictions + taxes on goods from other states (with President\'s sanction).',
    'Art 261: full faith and credit to public acts, records, judicial proceedings throughout India.',
  ],
  comparisons: [
    {
      title: 'Inter-State Council vs Zonal Councils',
      headers: ['Aspect', 'Inter-State Council', 'Zonal Councils'],
      rows: [
        ['Basis', 'Constitutional (Art 263)', 'Statutory (States Reorganisation Act 1956)'],
        ['Chairman', 'PM', 'Union Home Minister'],
        ['Scope', 'All-India', 'Zonal (5 zones + NEC)'],
        ['Members', 'PM, CMs, Union Ministers', 'CMs + 2 ministers from each state in zone'],
        ['Function', 'Investigate disputes; coordinate policy', 'Discuss common concerns; border disputes'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Five Zonal Councils (NCEWS)',
      mnemonic: 'Northern, Central, Eastern, Western, Southern + NEC for Northeast',
      explanation: 'The five zonal councils plus the North Eastern Council (statutory body for 8 NE states).',
    },
  ],
}
