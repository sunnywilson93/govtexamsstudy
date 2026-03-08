import type { SubjectRevision } from '@/types/subject-notes'

export const citizenshipRevision: SubjectRevision = {
  topic: 'citizenship',
  bullets: [
    'Articles 5-11 deal with citizenship at the commencement of the Constitution.',
    'Art 5: citizenship for persons domiciled and born in India, or parents born in India, or 5+ years resident.',
    'Art 9: acquiring citizenship of a foreign state automatically terminates Indian citizenship.',
    'Art 11: Parliament has power to regulate citizenship by law — basis for Citizenship Act 1955.',
    'India follows single citizenship (borrowed from UK), not dual citizenship (like USA).',
    'Citizenship Act 1955: five modes of acquiring — birth, descent, registration, naturalization, incorporation of territory.',
    'Citizenship by birth (post-2004): both parents must be Indian, or one Indian and other not an illegal migrant.',
    'Naturalization requires 12 years continuous residency (including 12 months immediately preceding application).',
    'Loss of citizenship: renunciation (voluntary), termination (acquiring foreign citizenship), deprivation (by government order).',
    'OCI (Overseas Citizen of India): not citizenship but lifelong visa, no voting rights, no government jobs.',
    'CAA 2019: fast-tracked citizenship for Hindu, Sikh, Buddhist, Jain, Parsi, Christian minorities from Pakistan, Bangladesh, Afghanistan (entered before 31 Dec 2014).',
    'PIO card merged with OCI card in 2015.',
  ],
  comparisons: [
    {
      title: 'Acquisition vs Loss of Citizenship',
      headers: ['Acquisition Mode', 'Loss Mode'],
      rows: [
        ['By Birth', 'Renunciation (voluntary)'],
        ['By Descent', 'Termination (acquiring foreign citizenship)'],
        ['By Registration', 'Deprivation (government order on specific grounds)'],
        ['By Naturalization', ''],
        ['By Incorporation of Territory', ''],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Five Modes of Acquiring Citizenship (BDRIN)',
      mnemonic: 'Birth, Descent, Registration, Incorporation, Naturalization',
      explanation: 'The five ways to acquire Indian citizenship under the Citizenship Act 1955.',
    },
  ],
}
