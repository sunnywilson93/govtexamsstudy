import type { SubjectRevision } from '@/types/subject-notes'

export const fundamentalDutiesRevision: SubjectRevision = {
  topic: 'fundamental-duties',
  bullets: [
    'Part IVA, Article 51A. Added by 42nd Amendment (1976) on the recommendation of the Swaran Singh Committee.',
    'Originally 10 duties; 11th duty added by 86th Amendment (2002) — duty to provide education to children aged 6-14.',
    'Borrowed from the Constitution of the USSR (Soviet Union).',
    'Non-justiciable — no legal penalty for violation, but serve as moral obligations.',
    'Apply only to citizens (not to foreigners).',
    'Key duties: respect Constitution/Flag/Anthem (a); follow ideals of freedom struggle (b); uphold sovereignty/unity/integrity (c); defend the country (d); promote harmony/renounce practices derogatory to women (e).',
    'Preserve composite culture (f); protect environment/wildlife/have compassion for living creatures (g); develop scientific temper (h); safeguard public property/abjure violence (i); strive for excellence (j); provide education to children 6-14 (k).',
    'Swaran Singh Committee recommended 8 duties; government added 2 more (total 10 in 1976); 11th added in 2002.',
    'Verma Committee (1999) recommended ways to enforce Fundamental Duties; mapped each duty to existing legislation.',
    'SC has used FDs to uphold environmental laws and support state regulatory power (AIIMS Students Union case, 2001).',
  ],
  comparisons: [
    {
      title: 'Fundamental Rights vs Fundamental Duties',
      headers: ['Aspect', 'Fundamental Rights', 'Fundamental Duties'],
      rows: [
        ['Part', 'Part III', 'Part IVA'],
        ['Amendment', 'Original Constitution', '42nd Amendment (1976)'],
        ['Number', '6 rights (originally 7)', '11 duties (originally 10)'],
        ['Applicability', 'Some for citizens only, some for all', 'Only for citizens'],
        ['Justiciability', 'Justiciable', 'Non-justiciable'],
        ['Source', 'US Bill of Rights', 'USSR Constitution'],
      ],
    },
  ],
  mnemonics: [
    {
      title: '11 Duties Keywords (CIFDHCESSP)',
      mnemonic: 'Constitution, Ideals, Flags (sovereignty), Defend, Harmony, Culture, Environment, Scientific, Safeguard, Strive, Provide education',
      explanation: 'One keyword for each of the 11 Fundamental Duties in order (a) through (k).',
    },
  ],
}
