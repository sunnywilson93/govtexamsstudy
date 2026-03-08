import type { SubjectRevision } from '@/types/subject-notes'

export const statutoryBodiesRevision: SubjectRevision = {
  topic: 'statutory-bodies',
  bullets: [
    'Constitutional bodies derive powers from Constitution: ECI, UPSC, CAG, FC, AG, NCSC, NCST, NCBC, GST Council.',
    'Statutory bodies created by Acts of Parliament: NHRC, CIC, NCW, NCM, NCPCR, CVC, NIA, Lokpal.',
    'NHRC (1993): Chairman = retired CJI/SC judge; members include SC/HC judges; cannot inquire into armed forces complaints; recommendations not binding.',
    'CIC (RTI Act 2005): CIC + up to 10 ICs; final appellate authority for RTI. RTI: information within 30 days.',
    'Lokpal (2013 Act, first appointed 2019): Chairman + up to 8 members (half judicial); jurisdiction over PM (with restrictions), ministers, MPs, govt servants.',
    'First Lokpal: Justice Pinaki Chandra Ghose (2019). Concept from Sweden\'s Ombudsman.',
    'CVC (2003): statutory; anti-corruption oversight; supervisory jurisdiction over CBI in corruption cases.',
    'CBI: not autonomous — under Ministry of Personnel; derives power from Delhi Special Police Establishment Act 1946.',
    'NCSC (Art 338, 65th Amendment): constitutional body for SC welfare. NCST (Art 338A, 89th Amendment): separate from NCSC since 2003.',
    'NCBC (Art 338B, 102nd Amendment 2018): given constitutional status; advises on backward class inclusion/exclusion.',
    'NIA (2008): investigates terror offences; operates across India without state permission.',
  ],
  comparisons: [
    {
      title: 'Constitutional vs Statutory Bodies',
      headers: ['Constitutional Bodies', 'Statutory Bodies'],
      rows: [
        ['Election Commission of India (Art 324)', 'NHRC (Protection of Human Rights Act 1993)'],
        ['UPSC (Art 315)', 'CIC (RTI Act 2005)'],
        ['CAG (Art 148)', 'Lokpal (Lokpal & Lokayuktas Act 2013)'],
        ['Finance Commission (Art 280)', 'CVC (CVC Act 2003)'],
        ['NCSC (Art 338)', 'NCW (NCW Act 1990)'],
        ['GST Council (Art 279A)', 'NIA (NIA Act 2008)'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Key Statutory Bodies (NHRC LCC NIN)',
      mnemonic: 'NHRC, Lokpal, CIC, CVC — NCW, NCPCR, NIA',
      explanation: 'Seven important statutory bodies for competitive exams.',
    },
  ],
}
