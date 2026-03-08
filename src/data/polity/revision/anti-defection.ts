import type { SubjectRevision } from '@/types/subject-notes'

export const antiDefectionRevision: SubjectRevision = {
  topic: 'anti-defection',
  bullets: [
    '52nd Amendment (1985): added Tenth Schedule to the Constitution — Anti-Defection Law.',
    'Origin: "Aaya Ram Gaya Ram" — Haryana MLA Gaya Lal changed parties 3 times in one day (1967).',
    'Disqualification grounds: voluntarily giving up party membership; voting/abstaining against party whip without permission.',
    'Nominated members: disqualified if they join a party after 6 months of taking seat.',
    'Independent members: disqualified if they join any party after election.',
    'Exception: merger — at least 2/3 of legislature party members merge with another party.',
    '91st Amendment (2003): deleted "one-third split" exception; disqualified defectors from becoming ministers (Art 75(1B), 164(1B)).',
    'Decision authority: Speaker (LS/VS) or Chairman (RS/VP). Decision is subject to judicial review (Kihoto Hollohan, 1992).',
    'Kihoto Hollohan (1992): Tenth Schedule is constitutional; Speaker acts as tribunal; judicial review available on mala fides/perversity.',
    'Keisham Meghachandra Singh (2020): SC recommended independent tribunal instead of Speaker; suggested 3-month time limit for decisions.',
    'Criticism: Speaker may be partisan; no time limit for decisions; curbs legitimate dissent within parties.',
    'Dinesh Goswami Committee (1990): disqualification only for confidence/no-confidence motions and Money Bills.',
  ],
  comparisons: [
    {
      title: 'Before vs After 91st Amendment',
      headers: ['Aspect', 'Before (52nd Amendment)', 'After (91st Amendment 2003)'],
      rows: [
        ['Split exception', '1/3 members could form separate group', 'Deleted — no split exception'],
        ['Merger exception', '2/3 merger allowed', '2/3 merger allowed (retained)'],
        ['Defectors as ministers', 'Could become ministers', 'Disqualified from becoming ministers'],
        ['Council of Ministers cap', 'No cap', 'Capped at 15% of lower house strength'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Tenth Schedule Essentials (52-91-K)',
      mnemonic: '52nd Amendment created it, 91st strengthened it, Kihoto Hollohan upheld it',
      explanation: 'The three key milestones of the Anti-Defection Law.',
    },
  ],
}
