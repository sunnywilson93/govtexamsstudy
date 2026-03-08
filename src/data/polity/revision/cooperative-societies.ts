import type { SubjectRevision } from '@/types/subject-notes'

export const cooperativeSocietiesRevision: SubjectRevision = {
  topic: 'cooperative-societies',
  bullets: [
    '97th Amendment (2011): Added Part IXB (Art 243ZH-243ZT), amended Art 19(1)(c) to include cooperatives, added Art 43B in DPSP.',
    'SC in Union of India v. Rajendra N. Shah (2021) struck down Part IXB for state cooperatives — cooperatives is Entry 32 of State List.',
    'Part IXB provisions remain valid for multi-state cooperatives (Entry 44, Union List).',
    'Art 43B (DPSP): State shall promote voluntary formation, autonomous functioning, democratic control of cooperatives.',
    'Board members: max 21, one seat reserved SC/ST, two for women. Tenure: 5 years. Elections supervised by State Election Commission.',
    'First Cooperative Act: 1904 (credit societies). Second: 1912 (non-credit cooperatives added).',
    'Under Montagu-Chelmsford Reforms (1919), cooperatives became a "transferred" (provincial) subject.',
    'Multi-State Cooperative Societies Act, 2002 governs cooperatives operating in more than one state.',
    'Ministry of Cooperation established July 2021 — separate ministry to strengthen the cooperative movement.',
    'Three-tier credit cooperative structure: PACS (village) → DCCBs (district) → State Cooperative Banks (state).',
    'AMUL (1946), IFFCO (1967), NAFED (1958) — major cooperative institutions in India.',
    'Over 8.5 lakh cooperative societies with approximately 30 crore members across India.',
    'PACS computerization and multi-purpose PACS are key recent reform initiatives.',
    'National Cooperative Database launched for comprehensive digital records of all cooperatives.',
    'Supersession of board: not more than 6 months; administrator must be appointed (Art 243ZL).',
    'Audit of accounts within 6 months of financial year close (Art 243ZM).',
  ],
  comparisons: [
    {
      title: '97th Amendment — Three Changes',
      headers: ['Change', 'Article', 'Effect'],
      rows: [
        ['FR Amendment', '19(1)(c)', 'Right to form cooperatives added'],
        ['DPSP Addition', '43B', 'State to promote cooperatives'],
        ['New Part', 'Part IXB (243ZH-ZT)', 'Governance framework (struck down for state coops)'],
      ],
    },
    {
      title: 'Types of Cooperatives',
      headers: ['Type', 'Example', 'Function'],
      rows: [
        ['Credit', 'PACS, DCCBs', 'Rural credit'],
        ['Marketing', 'NAFED', 'Agricultural marketing'],
        ['Dairy', 'AMUL, NDDB', 'Milk collection & processing'],
        ['Consumer', 'Kendriya Bhandar', 'Fair price goods'],
        ['Industrial', 'Handloom coops', 'Artisan support'],
      ],
    },
  ],
  mnemonics: [
    {
      title: '97th Amendment Changes — "FDP"',
      mnemonic: 'F-undamental Right (19(1)(c)), D-PSP (43B), P-art IXB',
      explanation: 'The three changes made by the 97th Amendment: FR amendment, DPSP addition, and new Part IXB.',
    },
    {
      title: 'Three-Tier Credit — "PDS"',
      mnemonic: 'PACS (village) → DCCB (district) → SCB (state)',
      explanation: 'The three-tier cooperative credit structure from village to state level.',
    },
  ],
}
