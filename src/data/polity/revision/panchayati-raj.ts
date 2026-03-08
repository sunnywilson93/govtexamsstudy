import type { SubjectRevision } from '@/types/subject-notes'

export const panchayatiRajRevision: SubjectRevision = {
  topic: 'panchayati-raj',
  bullets: [
    '73rd Amendment (1992): added Part IX (Art 243-243O) and Eleventh Schedule (29 subjects). Came into force 24 April 1993.',
    'Three-tier system: Gram Panchayat (village), Panchayat Samiti (block/intermediate), Zila Parishad (district). States under 20 lakh need not have intermediate tier.',
    'Art 243A: Gram Sabha — body of all registered voters in panchayat area.',
    'Art 243D: mandatory reservation for SCs/STs proportional to population; 1/3 seats reserved for women (including within SC/ST seats).',
    'Art 243E: 5-year term; elections within 6 months of dissolution.',
    'Art 243I: State Finance Commission (SFC) every 5 years — recommends distribution of taxes between state and panchayats.',
    'Art 243K: State Election Commission (SEC) conducts panchayat elections; SEC appointed by Governor.',
    'Eleventh Schedule: 29 subjects including agriculture, rural housing, drinking water, health, education, women & child development.',
    'Balwant Rai Mehta Committee (1957): first recommended three-tier system. Rajasthan first state to implement (2 October 1959).',
    'Ashok Mehta Committee (1977): two-tier system; constitutional status. L.M. Singhvi Committee (1986): constitutional recognition; Nyaya Panchayats.',
    'PESA (1996): extended Part IX to Fifth Schedule areas; Gram Sabha controls community resources, minor forest produce, land acquisition consent.',
    'Does NOT apply to Fifth Schedule areas (PESA applies instead) or Sixth Schedule areas (ADCs operate).',
  ],
  comparisons: [
    {
      title: 'Committees on Panchayati Raj',
      headers: ['Committee', 'Year', 'Key Recommendation'],
      rows: [
        ['Balwant Rai Mehta', '1957', 'Three-tier system; democratic decentralization'],
        ['Ashok Mehta', '1977', 'Two-tier system; constitutional status'],
        ['G.V.K. Rao', '1985', 'District as unit of planning; regular elections'],
        ['L.M. Singhvi', '1986', 'Constitutional recognition; Gram Sabha as foundation; Nyaya Panchayats'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Panchayat Levels (GPZ)',
      mnemonic: 'Gram Panchayat (village), Panchayat Samiti (block), Zila Parishad (district)',
      explanation: 'The three tiers of the Panchayati Raj system from bottom to top.',
    },
  ],
}
