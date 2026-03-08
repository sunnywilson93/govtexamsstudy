import type { SubjectRevision } from '@/types/subject-notes'

export const electionCommissionRevision: SubjectRevision = {
  topic: 'election-commission',
  bullets: [
    'Art 324: ECI has superintendence, direction, and control of elections to Parliament, state legislatures, President, VP.',
    'Established 25 January 1950. First CEC: Sukumar Sen.',
    'Currently 3-member body: 1 CEC + 2 ECs. Multi-member since 1989.',
    'CEC removal: impeachment process (same as SC judge). Other ECs: removable by President on CEC\'s recommendation.',
    'Term: 6 years or 65 years, whichever is earlier.',
    'CEC and ECs have equal status, salary (equivalent to SC judge), and decision-making power (majority rule).',
    'ECI does NOT conduct local body elections — State Election Commission (Art 243K) does.',
    'EVMs introduced gradually; nationwide from 2003. VVPAT for verification since 2017. NOTA since 2013 (PUCL case).',
    'Model Code of Conduct: not statutory but enforced from date of election announcement until results.',
    'National party criteria: 6% votes in 4+ states + 4 LS seats from 3+ states; OR 2% total LS seats from 3+ states.',
    'Anti-Defection (52nd Amendment, 1985, Tenth Schedule): disqualified if voluntarily gives up party membership or votes against whip. Exception: 2/3 merger.',
    '2023: CEC/ECs Appointment Act — Selection Committee: PM + Cabinet Minister + Leader of Opposition in LS.',
  ],
  comparisons: [
    {
      title: 'ECI vs SEC',
      headers: ['Aspect', 'Election Commission of India', 'State Election Commission'],
      rows: [
        ['Article', 'Art 324', 'Art 243K'],
        ['Conducts', 'Parliament, state legislatures, President, VP elections', 'Panchayat and municipality elections'],
        ['Appointed by', 'President', 'Governor'],
        ['Constitutional body', 'Yes', 'Yes (73rd/74th Amendment)'],
        ['Removal', 'CEC: impeachment; ECs: President on CEC advice', 'Governor (conditions vary by state)'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'ECI Key Facts (STEM-N)',
      mnemonic: 'Sukumar Sen first CEC, Three members now, EVM nationwide 2003, Model Code, NOTA 2013',
      explanation: 'Five key facts about the Election Commission of India.',
    },
  ],
}
