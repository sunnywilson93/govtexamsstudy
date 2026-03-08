import type { SubjectRevision } from '@/types/subject-notes'

export const advocateGeneralRevision: SubjectRevision = {
  topic: 'advocate-general',
  bullets: [
    'Appointed by the Governor under Article 165. Must be qualified to be appointed as a Judge of a High Court.',
    'Holds office during the pleasure of the Governor — no fixed tenure. Conventionally resigns when the government changes.',
    'Highest law officer of the state — corresponds to the Attorney General at the Union level.',
    'Art 177: Right to speak in and take part in state legislature proceedings (both Houses in bicameral states) but CANNOT vote.',
    'Advises the state government on legal matters and represents the state in court proceedings.',
    'Not a government servant — receives a retainer fixed by the Governor (in practice, by state government).',
    'Has the right of audience in all courts within the state. Can appear in any court in India on behalf of the state.',
    'Assisted by Additional Advocate Generals, Government Pleaders, and Standing Counsel.',
    'Should not advise or hold a brief against the state government. Cannot take up cases against the state without permission.',
    'Plays a critical role during constitutional crises — floor tests, President\'s Rule, government formation disputes.',
    'The office is governed by convention and executive orders, not by detailed constitutional provisions.',
    'Enjoys privileges and immunities of a member of the state legislature while participating in proceedings.',
    'AG qualifications: citizen of India + 10 years judicial office or 10 years as HC advocate.',
    'Each state must have an Advocate General — it is a constitutional mandate, not optional.',
    'The AG coordinates with the state Law Secretary for administrative matters.',
  ],
  comparisons: [
    {
      title: 'Advocate General vs Attorney General',
      headers: ['Feature', 'Advocate General', 'Attorney General'],
      rows: [
        ['Article', '165', '76'],
        ['Appointed by', 'Governor', 'President'],
        ['Qualification', 'HC Judge', 'SC Judge'],
        ['Legislature right', 'Art 177 (State)', 'Art 88 (Parliament)'],
        ['Scope', 'State government', 'Union government'],
        ['Assisted by', 'Addl AG, Govt Pleaders', 'Solicitor General, Addl SG'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Advocate General Articles — "165-177"',
      mnemonic: '165 for Appointment, 177 for Parliament participation',
      explanation: 'Article 165 governs appointment and duties, Article 177 grants the right to participate in state legislature.',
    },
    {
      title: 'AG Qualification — "Ten-Ten"',
      mnemonic: '10 years judicial office OR 10 years as HC advocate',
      explanation: 'The qualification requirement mirrors that of a High Court judge — either 10 years of judicial service or 10 years at the bar.',
    },
  ],
}
