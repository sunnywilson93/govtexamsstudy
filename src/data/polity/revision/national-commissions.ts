import type { SubjectRevision } from '@/types/subject-notes'

export const nationalCommissionsRevision: SubjectRevision = {
  topic: 'national-commissions',
  bullets: [
    'Constitutional Commissions: NCSC (Art 338), NCST (Art 338A), NCBC (Art 338B). Cannot be abolished without constitutional amendment.',
    'Statutory Commissions: NHRC (1993 Act), NCW (1990 Act), NCM (1992 Act), NCPCR (2005 Act). Can be dissolved by repealing parent Act.',
    '89th Amendment (2003): Separated combined SC/ST Commission into NCSC (Art 338) and NCST (Art 338A).',
    '102nd Amendment (2018): Gave constitutional status to NCBC under Art 338B. Also amended Art 342A.',
    'All three constitutional commissions: Chairperson + Vice-Chairperson + 3 members. Appointed by President.',
    'NHRC: Chairperson must be retired CJI or retired SC judge (2019 Amendment). 2 SC judges, 1 HC CJ, 2 HR experts + ex-officio members.',
    'NHRC selection: PM (chair), Speaker, Home Minister, LoP (LS), LoP (RS), Deputy Chairman (RS).',
    'NCW: Chairperson + 5 members + Member-Secretary. Statutory body under NCW Act, 1990. Constituted 1992.',
    'NCM: 6 notified minorities — Muslims, Christians, Sikhs, Buddhists, Parsis, Jains (added 2014).',
    'NCPCR: Examines safeguards for children (below 18). Monitors POCSO, RTE, JJ Act implementation.',
    'Constitutional commissions\' reports must be laid before Parliament with action taken memorandum.',
    'None of the commissions (constitutional or statutory) can enforce their recommendations — advisory only.',
    'All commissions have powers of a civil court for investigation purposes.',
    'NHRC cannot investigate complaints against armed forces — significant limitation.',
    'NCBC\'s power: central OBC list changes now require Parliamentary legislation (Art 342A, 102nd Amendment).',
    'T.M.A. Pai Foundation case (2002): Minority status determined state-wise, not nationally.',
  ],
  comparisons: [
    {
      title: 'Constitutional vs Statutory Commissions',
      headers: ['Feature', 'Constitutional', 'Statutory'],
      rows: [
        ['Source', 'Constitution itself', 'Act of Parliament'],
        ['Abolition', 'Needs constitutional amendment', 'Repeal of parent Act'],
        ['Examples', 'NCSC, NCST, NCBC', 'NHRC, NCW, NCM, NCPCR'],
        ['Appointment', 'By President', 'By Central Government'],
        ['Reports', 'Must be laid before Parliament', 'Submitted to government'],
      ],
    },
    {
      title: 'Key Commission Amendments',
      headers: ['Commission', 'Amendment/Act', 'Year'],
      rows: [
        ['NCSC', '65th Amendment + 89th Amendment', '1990, 2003'],
        ['NCST', '89th Amendment', '2003'],
        ['NCBC', '102nd Amendment', '2018'],
        ['NHRC', 'Protection of HR Act', '1993'],
        ['NCW', 'NCW Act', '1990'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Three Constitutional Commissions — "SCB"',
      mnemonic: 'SC (338), ST (338A), BC (338B) — alphabetical order matches article order',
      explanation: 'NCSC under 338, NCST under 338A, NCBC under 338B — progressive article numbering.',
    },
    {
      title: 'Six Minorities — "MCSBPJ"',
      mnemonic: 'Muslims, Christians, Sikhs, Buddhists, Parsis, Jains',
      explanation: 'The six communities notified as minorities under the National Commission for Minorities Act.',
    },
  ],
}
