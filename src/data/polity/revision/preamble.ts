import type { SubjectRevision } from '@/types/subject-notes'

export const preambleRevision: SubjectRevision = {
  topic: 'preamble',
  bullets: [
    'Preamble is based on the Objectives Resolution moved by Nehru on 13 December 1946.',
    '"Socialist," "Secular," and "Integrity" were added by the 42nd Amendment (1976) — the only amendment to the Preamble.',
    'Berubari Union case (1960) — SC held Preamble is NOT a part of the Constitution.',
    'Kesavananda Bharati case (1973) — SC overruled Berubari; held Preamble IS a part of the Constitution and can be amended under Art 368.',
    'Preamble is not directly enforceable in courts — it cannot override express provisions.',
    'S.R. Bommai case (1994) — SC held secularism is a basic feature of the Constitution.',
    'Key terms: Sovereign (internal + external), Socialist (mixed economy), Secular (equal respect for all religions), Democratic (popular sovereignty), Republic (elected head).',
    'Justice: social, economic, political. Liberty: thought, expression, belief, faith, worship (no mention of "action").',
    'Equality: status and opportunity. Fraternity: dignity of individual + unity and integrity of nation.',
    '"We, the People" — inspired by the US Constitution. Liberty, Equality, Fraternity — inspired by the French Revolution.',
    'Pandit Thakur Das Bhargava called it "the soul of the Constitution." N.A. Palkhivala called it "the identity card of the Constitution."',
  ],
  comparisons: [
    {
      title: 'Key Terms in the Preamble',
      headers: ['Term', 'Meaning', 'Source / Amendment'],
      rows: [
        ['Sovereign', 'Free from external control; internally supreme', 'Original 1949'],
        ['Socialist', 'Mixed economy; end poverty; reduce inequality', '42nd Amendment 1976'],
        ['Secular', 'No state religion; equal respect for all religions', '42nd Amendment 1976'],
        ['Democratic', 'Government by elected representatives', 'Original 1949'],
        ['Republic', 'Elected head of state; no hereditary ruler', 'Original 1949'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Preamble Keywords (JLEF)',
      mnemonic: 'Justice, Liberty, Equality, Fraternity — JLEF secures the nation\'s self',
      explanation: 'The four key ideals secured to citizens by the Preamble, in the order they appear.',
    },
    {
      title: '42nd Amendment Additions (SSI)',
      mnemonic: 'Socialist, Secular, Integrity — SSI added in 1976',
      explanation: 'The three words added to the Preamble by the 42nd Amendment during the Emergency.',
    },
  ],
}
