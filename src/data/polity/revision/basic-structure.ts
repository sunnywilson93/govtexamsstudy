import type { SubjectRevision } from '@/types/subject-notes'
export const basicStructureRevision: SubjectRevision = {
  topic: 'basic-structure',
  bullets: [
    'Basic Structure Doctrine: Parliament CANNOT alter the basic structure/essential features of the Constitution through amendments under Art 368.',
    'Evolution: Shankari Prasad (1951, FRs amendable) → Golaknath (1967, FRs NOT amendable) → Kesavananda Bharati (1973, basic structure doctrine).',
    'Kesavananda Bharati v. State of Kerala (1973): 13-judge bench, 7-6 majority. Largest bench in SC history.',
    'Upheld 24th Amendment (Parliament can amend FRs). Struck down part of 25th Amendment (excluding judicial review).',
    'Elements of basic structure identified across cases: supremacy of Constitution, democracy, secularism, federalism, separation of powers.',
    'Also: judicial review, rule of law, individual freedom, free and fair elections, limited amending power, unity and sovereignty.',
    'Indira Gandhi v. Raj Narain (1975): Free and fair elections = basic structure. Struck down 39th Amendment.',
    'Minerva Mills v. UOI (1980): Judicial review + FR-DPSP harmony = basic structure. Struck down Sections 4 & 55 of 42nd Amendment.',
    'Waman Rao (1981): Basic structure applies prospectively from 24 April 1973 (Kesavananda date).',
    'I.R. Coelho (2007): Ninth Schedule laws post-24 April 1973 subject to basic structure review. 9-judge unanimous.',
    'NJAC Case (2015): Judicial independence = basic structure. Struck down 99th Amendment and NJAC Act (4-1).',
    'Basic structure is NOT defined in the Constitution — entirely judge-made. No exhaustive list — evolving doctrine.',
    'German Basic Law Art 79(3) (eternity clause) influenced the doctrine. Also adopted by Bangladesh, Pakistan.',
    'Criticism: no textual basis, vague, gives judiciary unchecked power, undermines parliamentary sovereignty.',
    'Ninth Schedule: originally 13 laws (1951); now 284. Post-1973 additions can be challenged on basic structure grounds.',
  ],
  comparisons: [
    { title: 'Evolution of Basic Structure Doctrine', headers: ['Case', 'Year', 'Holding'], rows: [
      ['Shankari Prasad', '1951', 'Parliament CAN amend FRs'],
      ['Sajjan Singh', '1965', 'Reaffirmed Shankari Prasad (doubts in dissent)'],
      ['Golaknath', '1967', 'Parliament CANNOT amend FRs (overruled later)'],
      ['Kesavananda Bharati', '1973', 'Can amend FRs but NOT basic structure (7-6)'],
      ['Minerva Mills', '1980', 'Judicial review is basic structure'],
      ['I.R. Coelho', '2007', 'Ninth Schedule laws subject to basic structure'],
      ['NJAC Case', '2015', 'Judicial independence is basic structure'],
    ]},
  ],
  mnemonics: [
    { title: 'Kesavananda Key — "7-6 on 13"', mnemonic: '7-6 majority on a 13-judge bench, 1973', explanation: 'The basic structure doctrine was established by a narrow 7-6 majority on the largest bench in SC history.' },
    { title: 'Basic Structure Date — "24 April 1973"', mnemonic: '24/4/73 = Kesavananda judgment date = cutoff for Ninth Schedule review', explanation: 'Amendments and Ninth Schedule additions after this date can be challenged on basic structure grounds.' },
  ],
}
