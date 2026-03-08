import type { SubjectRevision } from '@/types/subject-notes'

export const unionTerritoryRevision: SubjectRevision = {
  topic: 'union-territory',
  bullets: [
    'Art 1: "India, that is Bharat, shall be a Union of States" — not a Federation of States (no right to secede).',
    'Art 2: Parliament can admit new states or establish new states. Art 3: Parliament can alter boundaries, merge, or rename existing states.',
    'Art 3 requires Presidential recommendation and state legislature consultation — but state opinion is NOT binding on Parliament.',
    'Art 4: Laws under Art 2 and 3 are NOT constitutional amendments — passed by simple majority.',
    'India currently has 28 states and 8 union territories.',
    '8 UTs: Delhi (NCT), Puducherry, Chandigarh, Andaman & Nicobar, Lakshadweep, Dadra & Nagar Haveli and Daman & Diu, Jammu & Kashmir, Ladakh.',
    'Delhi and Puducherry have their own elected legislatures and Council of Ministers. J&K (post-2019) also has provision for a legislature.',
    '69th Amendment (1991) gave Delhi special status as NCT; Delhi cannot legislate on police, public order, and land.',
    'Article 370 provisions abrogated in 2019; J&K reorganized into UT with legislature; Ladakh created as UT without legislature.',
    'Dadra & Nagar Haveli and Daman & Diu merged into a single UT in 2020 (reducing UTs from 9 to 8).',
    'States Reorganisation Act 1956: abolished four-fold classification, created 14 states + 6 UTs based on linguistic reorganization.',
    'First linguistic state: Andhra Pradesh (1953), carved from Madras after Potti Sriramulu\'s death. Fazal Ali Commission (1953) recommended linguistic reorganization.',
  ],
  comparisons: [
    {
      title: 'States vs Union Territories',
      headers: ['Feature', 'States', 'Union Territories'],
      rows: [
        ['Head', 'Governor (appointed)', 'Administrator (appointed by President)'],
        ['Government', 'Elected CM + Council of Ministers', 'Some have elected govts (Delhi, Puducherry, J&K); others administered directly by Centre'],
        ['Legislature', 'Vidhan Sabha (+ Vidhan Parishad in some)', 'Only Delhi, Puducherry, J&K have legislatures'],
        ['Constitutional basis', 'Art 152-237 (Part VI)', 'Art 239-241 (Part VIII)'],
        ['Autonomy', 'Greater autonomy; State List subjects', 'Limited autonomy; Centre controls'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'UTs with Legislatures (DPJ)',
      mnemonic: 'Delhi, Puducherry, J&K — DPJ have elected assemblies',
      explanation: 'The three Union Territories that have their own elected legislatures and Council of Ministers.',
    },
  ],
}
