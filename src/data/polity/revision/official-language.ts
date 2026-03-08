import type { SubjectRevision } from '@/types/subject-notes'

export const officialLanguageRevision: SubjectRevision = {
  topic: 'official-language',
  bullets: [
    'Part XVII (Articles 343-351) deals with Official Language. Art 343: Hindi in Devanagari script is the official language of the Union.',
    'English was to continue for 15 years (until 26 Jan 1965). Official Languages Act, 1963 allowed continued use of English indefinitely.',
    '1967 Amendment changed "may" to "shall" — English SHALL continue until non-Hindi states pass resolutions to discontinue it.',
    'Eighth Schedule originally had 14 languages. Now 22: added Sindhi (21st Amdt 1967), Konkani/Manipuri/Nepali (71st 1992), Bodo/Dogri/Maithili/Santhali (92nd 2003).',
    'Art 345: State legislature can adopt any language in use in the state or Hindi as official language. Until then, English continues.',
    'Art 348: All SC/HC proceedings shall be in English until Parliament provides otherwise. Some state HCs authorized to use Hindi.',
    'Art 350: Every person can submit representations in any language used in the Union or State.',
    'Art 350A (7th Amendment 1956): Facilities for mother-tongue instruction at primary level for linguistic minorities.',
    'Art 350B (7th Amendment 1956): Special Officer for Linguistic Minorities (Commissioner) — appointed by President, HQ at Prayagraj.',
    'Art 351: Union to promote spread of Hindi, drawing from Eighth Schedule languages.',
    '1965 Anti-Hindi agitation in Tamil Nadu led to PM Shastri\'s assurance and the 1967 Act amendment.',
    'Tamil Nadu follows two-language policy (Tamil + English), refusing Hindi as third language.',
    'Classical Language status (separate from Eighth Schedule): Tamil 2004, Sanskrit 2005, Telugu/Kannada 2008, Malayalam 2013, Odia 2014.',
    'Three-language formula: Hindi states study Hindi + English + South Indian language; non-Hindi states study regional + English + Hindi.',
    'Art 344: Official Language Commission appointed by President; examines progressive use of Hindi.',
    'International numerals (not Devanagari numerals) are used for official purposes alongside Hindi.',
  ],
  comparisons: [
    {
      title: 'Eighth Schedule Languages — Evolution',
      headers: ['Amendment', 'Year', 'Languages Added', 'Total'],
      rows: [
        ['Original', '1950', '14 languages', '14'],
        ['21st Amendment', '1967', 'Sindhi', '15'],
        ['71st Amendment', '1992', 'Konkani, Manipuri, Nepali', '18'],
        ['92nd Amendment', '2003', 'Bodo, Dogri, Maithili, Santhali', '22'],
      ],
    },
    {
      title: 'Key Language Articles',
      headers: ['Article', 'Subject', 'Key Provision'],
      rows: [
        ['343', 'Official Language of Union', 'Hindi in Devanagari script'],
        ['345', 'State Official Language', 'State legislature decides'],
        ['348', 'Language of Courts', 'English in SC and HCs'],
        ['350A', 'Mother-tongue instruction', 'Primary level for minorities'],
        ['350B', 'Linguistic Minorities Officer', 'Appointed by President'],
        ['351', 'Spread of Hindi', 'Drawing from Eighth Schedule'],
      ],
    },
  ],
  mnemonics: [
    {
      title: '22 Scheduled Languages — "ABCGHHKKMMMNOPSTU"',
      mnemonic: 'Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santhali, Sindhi, Tamil, Telugu, Urdu',
      explanation: 'The 22 languages in the Eighth Schedule in alphabetical order.',
    },
    {
      title: '92nd Amendment Languages — "BDMS"',
      mnemonic: 'Bodo, Dogri, Maithili, Santhali — 2003',
      explanation: 'The four languages added by the most recent amendment (92nd) to the Eighth Schedule.',
    },
  ],
}
