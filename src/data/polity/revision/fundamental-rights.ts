import type { SubjectRevision } from '@/types/subject-notes'

export const fundamentalRightsRevision: SubjectRevision = {
  topic: 'fundamental-rights',
  bullets: [
    'Part III, Articles 12-35. Originally 7 rights; now 6 (Right to Property removed by 44th Amendment, 1978).',
    'Art 14: Equality before law + Equal protection of laws. Art 15: No discrimination on religion, race, caste, sex, place of birth.',
    'Art 16: Equal opportunity in public employment. Art 17: Abolition of Untouchability. Art 18: Abolition of titles.',
    'Art 19: Six freedoms — speech/expression, assemble, associations, movement, reside, profession. Art 19(1)(f) deleted (44th Amendment).',
    'Art 20: No ex post facto law, no double jeopardy, no self-incrimination. CANNOT be suspended even during Emergency.',
    'Art 21: Right to life and personal liberty. Expanded by SC to include right to privacy, livelihood, education, clean environment, speedy trial, legal aid, dignity.',
    'Art 21A: Right to Education for children 6-14 years (86th Amendment, 2002).',
    'Art 22: Protection against arbitrary arrest. Art 23: Prohibition of human trafficking and forced labour. Art 24: No child labour below 14 years.',
    'Art 25-28: Freedom of religion. Art 29-30: Cultural and educational rights of minorities.',
    'Art 32: Right to Constitutional Remedies — 5 writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto. Dr. Ambedkar: "heart and soul of the Constitution."',
    'FRs available only to citizens: Art 15, 16, 19, 29, 30. Available to all persons (including foreigners): Art 14, 20, 21, 22, 23, 24, 25-28.',
    'Art 20 and 21 cannot be suspended even during National Emergency.',
    'Right to Privacy declared a FR under Art 21 in K.S. Puttaswamy case (2017).',
  ],
  comparisons: [
    {
      title: 'Six Fundamental Rights (Current)',
      headers: ['Right', 'Articles', 'Key Provision'],
      rows: [
        ['Right to Equality', '14-18', 'Equality before law; no discrimination; abolition of untouchability and titles'],
        ['Right to Freedom', '19-22', 'Six freedoms; protection of life/liberty; protection against arrest'],
        ['Right Against Exploitation', '23-24', 'No trafficking/forced labour; no child labour below 14'],
        ['Right to Freedom of Religion', '25-28', 'Free profession/practice/propagation; manage religious affairs'],
        ['Cultural & Educational Rights', '29-30', 'Protect minority interests; minority institutions'],
        ['Right to Constitutional Remedies', '32', 'Five writs; enforceable through SC'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Five Writs (HMPCQ)',
      mnemonic: 'Habeas corpus, Mandamus, Prohibition, Certiorari, Quo warranto',
      explanation: 'The five writs that can be issued by the Supreme Court under Art 32 and High Courts under Art 226.',
    },
    {
      title: 'FRs for Citizens Only (15-16-19-29-30)',
      mnemonic: 'Citizens Fifteen Sixteen Nineteen Twenty-nine Thirty',
      explanation: 'These five articles grant rights exclusively to Indian citizens, not to foreigners.',
    },
  ],
}
