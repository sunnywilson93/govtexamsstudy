import type { SubjectRevision } from '@/types/subject-notes'

export const specialProvisionsStatesRevision: SubjectRevision = {
  topic: 'special-provisions-states',
  bullets: [
    'Articles 371 to 371J provide special provisions for certain states — constitutional guarantees addressing unique historical, cultural, and administrative needs.',
    'Art 371: Maharashtra (Vidarbha, Marathwada dev boards) and Gujarat (Saurashtra, Kutch dev boards). Governor has special responsibility.',
    'Art 371A (13th Amdt 1962): Nagaland — Parliament cannot legislate on Naga customary law, religious practices, land ownership unless Nagaland Assembly resolves.',
    'Art 371B (22nd Amdt 1969): Assam — committee of MLAs from tribal areas; Governor\'s special responsibility for tribal area grants.',
    'Art 371C (27th Amdt 1971): Manipur — committee of Hill Areas MLAs; Governor reports annually on Hill Areas to President.',
    'Art 371D (32nd Amdt 1973): Andhra Pradesh/Telangana — equitable opportunities in public employment and education across regions; Administrative Tribunal.',
    'Art 371E: Parliament can establish a university in AP — led to University of Hyderabad (1974).',
    'Art 371F (36th Amdt 1975): Sikkim — most comprehensive special provisions; reserved assembly seats; existing laws continue; Governor\'s special responsibility.',
    'Art 371G (53rd Amdt 1986): Mizoram — same as Nagaland (customary law, land, religion protected from Parliament). Result of Mizo Accord with MNF.',
    'Art 371H (55th Amdt 1986): Arunachal Pradesh — Governor\'s special responsibility for law and order (security-sensitive border state).',
    'Art 371I (56th Amdt 1987): Goa — Legislative Assembly must have minimum 30 members.',
    'Art 371J (98th Amdt 2012): Karnataka — Hyderabad-Karnataka region development board; reservation in education and employment.',
    'Article 370 (special status of J&K) was abrogated on 5 August 2019. J&K and Ladakh became UTs. SC upheld abrogation in December 2023.',
    'Art 371A and 371G are the most protective — require state assembly resolution before Parliament can legislate on specified matters.',
    'Art 371D\'s Administrative Tribunal orders cannot be challenged in any court except SC under Art 136.',
  ],
  comparisons: [
    {
      title: 'Special Provisions — Key Articles and States',
      headers: ['Article', 'State', 'Amendment', 'Key Feature'],
      rows: [
        ['371', 'Maharashtra/Gujarat', 'Original', 'Development boards'],
        ['371A', 'Nagaland', '13th (1962)', 'Customary law protection'],
        ['371D', 'AP/Telangana', '32nd (1973)', 'Regional equity in jobs/education'],
        ['371F', 'Sikkim', '36th (1975)', 'Most comprehensive provisions'],
        ['371G', 'Mizoram', '53rd (1986)', 'Same as Nagaland (Mizo Accord)'],
        ['371J', 'Karnataka', '98th (2012)', 'Hyderabad-Karnataka dev board'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Nagaland-Mizoram Similarity — "NaM Custom"',
      mnemonic: 'Nagaland (371A) and Mizoram (371G) — both protect Customary law, Religion, Land from Parliament',
      explanation: 'Both articles protect customary law, religious/social practices, and land ownership from parliamentary legislation.',
    },
    {
      title: 'Sikkim\'s Article — "36F for 36th"',
      mnemonic: '371F = 36th Amendment = Sikkim statehood 1975',
      explanation: 'The 36th Amendment inserted Article 371F when Sikkim became the 22nd state of India.',
    },
  ],
}
