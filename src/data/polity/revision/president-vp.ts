import type { SubjectRevision } from '@/types/subject-notes'

export const presidentVpRevision: SubjectRevision = {
  topic: 'president-vp',
  bullets: [
    'Art 52: President of India. Art 53: executive power vested in President. Art 74: Council of Ministers to aid and advise President (binding after 42nd Amendment).',
    'Electoral College (Art 54): elected members of both Houses of Parliament + elected members of state legislative assemblies + elected MLAs of Delhi and Puducherry (70th Amendment).',
    'Election by proportional representation through single transferable vote with secret ballot.',
    'MLA vote value = (state population / total elected MLAs) × (1/1000). MP vote value = total MLA votes / total elected MPs.',
    'Qualifications (Art 58): citizen, 35+ years, qualified for LS membership, no office of profit.',
    'Term: 5 years. Can be re-elected (Dr. Rajendra Prasad — only President to serve two terms).',
    'Impeachment (Art 61): for "violation of the Constitution" — 14 days notice by 1/4 members of either House; passed by 2/3 of total membership of that House; then 2/3 of total membership of other House.',
    'Art 72: pardoning power — pardon, reprieve, respite, remission, commutation. Can pardon death sentences and court martial sentences (Governor under Art 161 cannot).',
    'Samsher Singh case (1974): President is a constitutional head; must act on ministerial advice.',
    '44th Amendment: President can return advice for reconsideration once; must act on reconsidered advice.',
    'VP (Art 63-71): elected by members of both Houses of Parliament (elected + nominated). Ex-officio Chairman of Rajya Sabha. Term: 5 years, 35+ years age.',
    'VP removal: resolution of RS by effective majority + agreed by LS. No grounds specified for removal.',
  ],
  comparisons: [
    {
      title: 'President vs Vice-President',
      headers: ['Aspect', 'President', 'Vice-President'],
      rows: [
        ['Article', 'Art 52-62', 'Art 63-71'],
        ['Electoral College', 'Elected MPs + elected MLAs', 'All MPs (elected + nominated)'],
        ['Qualification age', '35 years', '35 years'],
        ['Removal', 'Impeachment (special majority in both Houses)', 'Resolution of RS (effective majority) + LS agreement'],
        ['Term', '5 years', '5 years'],
        ['Retirement age', 'None (fixed term)', 'None (fixed term)'],
        ['Key function', 'Head of State; executive power', 'Chairman of Rajya Sabha'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Pardoning Powers (PRRCM)',
      mnemonic: 'Pardon, Reprieve, Respite, Remission, Commutation',
      explanation: 'The five types of pardoning powers of the President under Art 72.',
    },
  ],
}
