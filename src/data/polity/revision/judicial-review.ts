import type { SubjectRevision } from '@/types/subject-notes'
export const judicialReviewRevision: SubjectRevision = {
  topic: 'judicial-review',
  bullets: [
    'Judicial review: power of judiciary to examine constitutionality of legislation and executive actions.',
    'Constitutional basis: Articles 13, 32, 131-136, 143, 226, 227, 245, 246. Explicit in Indian Constitution (unlike US where it was judicially created).',
    'Art 13: Laws inconsistent with FRs are void. Art 32: SC writs for FR enforcement. Art 226: HC writs (broader scope than Art 32).',
    'L. Chandra Kumar v. UOI (1997): Judicial review under Art 226 and 32 is part of basic structure — CANNOT be taken away.',
    'I.R. Coelho v. State of TN (2007): Even Ninth Schedule laws can be reviewed if they violate basic structure (post-24 April 1973).',
    'PIL: Public Interest Litigation — relaxed locus standi. Any public-spirited person can approach courts for disadvantaged groups.',
    'PIL pioneered by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer in late 1970s.',
    'First PIL: Hussainara Khatoon v. Home Secretary, Bihar (1979) — undertrial prisoners released.',
    'S.P. Gupta v. UOI (1981): Formally recognized PIL doctrine. Can be initiated by petition, letter, or newspaper report.',
    'Landmark PILs: M.C. Mehta (environment), Vishaka (sexual harassment), Vineet Narain (CBI independence), Godavarman (forests).',
    'Continuing mandamus: court retains jurisdiction and monitors implementation through periodic reports.',
    'Judicial activism vs overreach: activism = protecting rights when other branches fail; overreach = encroaching on legislative/executive domain.',
    'NJAC case (2015): SC struck down 99th Amendment — judicial independence in appointments is basic structure.',
    'Puttaswamy (2017): Right to privacy is FR under Art 21. Electoral Bonds (2024): struck down as violating Art 19(1)(a).',
    'Grounds of review: (a) FR violation, (b) lack of legislative competence, (c) violation of any constitutional provision.',
  ],
  comparisons: [
    { title: 'Judicial Review — India vs USA', headers: ['Feature', 'India', 'USA'], rows: [
      ['Basis', 'Explicit in Constitution (Art 13, 32, 226)', 'Judicially created (Marbury v. Madison, 1803)'],
      ['Scope', 'Laws + Amendments (basic structure)', 'Laws only (amendments not reviewable)'],
      ['Courts', 'SC + HCs', 'Federal courts + SC'],
      ['PIL', 'Well-developed', 'Limited (class action suits)'],
    ]},
  ],
  mnemonics: [
    { title: 'PIL Pioneers — "BK"', mnemonic: 'Bhagwati and Krishna Iyer', explanation: 'Justice P.N. Bhagwati and Justice V.R. Krishna Iyer pioneered PIL in India.' },
    { title: 'Key JR Article — "13-32-226"', mnemonic: 'Art 13 (laws void), Art 32 (SC writs), Art 226 (HC writs)', explanation: 'The three foundational articles for judicial review in India.' },
  ],
}
