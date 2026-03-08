import type { SubjectRevision } from '@/types/subject-notes'

export const stateLegislatureRevision: SubjectRevision = {
  topic: 'state-legislature',
  bullets: [
    'Art 168-212 deal with state legislatures. Can be unicameral (VS only) or bicameral (VS + VP).',
    'Vidhan Sabha: directly elected; min 60, max 500 members. Term: 5 years (dissolvable).',
    'Vidhan Parishad: permanent body; 1/3 retire every 2 years; each member 6-year term. Max strength: 1/3 of VS.',
    'VP composition: 1/3 by MLAs, 1/3 by local body members, 1/12 by teachers (3 yrs standing), 1/12 by graduates (3 yrs), 1/6 nominated by Governor.',
    '6 states with Vidhan Parishad: Bihar, Karnataka, Maharashtra, Telangana, Uttar Pradesh, Andhra Pradesh.',
    'Art 169: VP can be created/abolished if VS passes resolution by special majority; Parliament then passes law by simple majority (NOT Art 368).',
    'No Joint Sitting provision at state level (unlike Parliament\'s Art 108).',
    'If VS and VP disagree: VS can pass the bill again; if VP again rejects/delays, bill deemed passed (VS prevails).',
    'Money Bills: only in VS; VP has 14 days to suggest. Speaker certifies Money Bills.',
    'Anti-Defection Law (Tenth Schedule) applies to state legislatures — Speaker decides disqualification.',
  ],
  comparisons: [
    {
      title: 'Vidhan Sabha vs Vidhan Parishad',
      headers: ['Aspect', 'Vidhan Sabha', 'Vidhan Parishad'],
      rows: [
        ['Nature', 'Lower/popular house', 'Upper/permanent house'],
        ['Election', 'Direct election', 'Indirect election + nomination'],
        ['Max strength', '500', '1/3 of VS strength (min 40)'],
        ['Term', '5 years (dissolvable)', 'Permanent; members 6 years'],
        ['Money Bills', 'Originates here only', 'Can only suggest in 14 days'],
        ['CM responsible to', 'Yes', 'No'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'States with Vidhan Parishad (BKMTUA)',
      mnemonic: 'Bihar, Karnataka, Maharashtra, Telangana, UP, AP',
      explanation: 'The six states that currently have a Vidhan Parishad (Legislative Council).',
    },
  ],
}
