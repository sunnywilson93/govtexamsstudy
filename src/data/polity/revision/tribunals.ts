import type { SubjectRevision } from '@/types/subject-notes'

export const tribunalsRevision: SubjectRevision = {
  topic: 'tribunals',
  bullets: [
    '42nd Amendment (1976) added Part XIVA: Art 323A (administrative tribunals) and Art 323B (tribunals for other matters). Constitutional basis for tribunal system.',
    'Art 323A: ONLY Parliament can establish administrative tribunals for service matters of public servants. Basis for CAT (1985). Covers recruitment, promotion, transfer, discipline, dismissal.',
    'Art 323B: Parliament OR state legislatures can establish tribunals for wider subjects — taxation, foreign exchange, industrial disputes, land reforms, elections, rent, food, tenancy.',
    'CAT (1985): handles service disputes of central government employees. Chairman + Vice-Chairmen + Members. Principal Bench in New Delhi + 17 regular benches + circuit benches.',
    'CAT Chairman must be or have been HC judge. Members from judicial side (advocate/judge 10+ years) and administrative side (senior bureaucrats).',
    'State Administrative Tribunals (SATs): established in several states (AP, Karnataka, Kerala, MP, Maharashtra, WB, Odisha, etc.) for state government employee service disputes.',
    'L. Chandra Kumar v. UOI (1997): HC judicial review under Art 226/227 is basic structure — tribunals CANNOT exclude it. Tribunals are supplementary to HCs, not substitutes.',
    'L. Chandra Kumar overruled S.P. Sampath Kumar (1987) which had allowed tribunals as HC substitutes. Created two-tier review: tribunal → HC (Art 226/227) → SC (Art 136).',
    'ITAT (1941): oldest tribunal in India; handles income tax appeals. Predates the Constitution. CESTAT: customs, excise, service tax. GSTAT (2023): GST disputes.',
    'NGT (2010): environmental disputes under 7 statutes. India was 3rd country (after Australia, NZ) with specialized green tribunal. Applies precautionary principle, polluter pays principle.',
    'NGT composition: Chairperson (retired SC/HC CJ) + Judicial Members (retired HC judges) + Expert Members (environmental scientists). Principal Bench Delhi + 4 zonal benches. Must dispose within 6 months.',
    'Appeals from NGT go directly to SC (not HCs). NGT has jurisdiction over Water Act, Air Act, Forest Act, Environment Protection Act, Biological Diversity Act, Public Liability Insurance Act, Water Cess Act.',
    'NCLT: company disputes + insolvency/bankruptcy (IBC 2016). Principal Bench Delhi + 15 benches. NCLAT: appellate over NCLT + CCI + IBBI. Appeals from NCLAT to SC.',
    'AFT (2007/2009): service matters and court-martial appeals of armed forces. Chairperson (retired SC judge/HC CJ) + Judicial + Administrative Members. Principal Bench Delhi + 8 regional benches.',
    'DRTs (1993): recover debts due to banks. DRATs: appellate over DRTs. SAT: appeals against SEBI/IRDAI/PFRDA orders. TDSAT: telecom/broadcasting disputes + appeals against TRAI.',
    'IPAB (abolished 2021): intellectual property — functions transferred to HCs. Film Certification Appellate Tribunal: also abolished — functions to HCs.',
    'Madras Bar Association v. UOI (2014): SC prescribed requirements for tribunal independence — qualifications, judicial participation in selection, security of tenure, removal process.',
    'Rojer Mathew v. South Indian Bank (2020): SC struck down Finance Act 2017 provisions — tribunal composition changes cannot be passed as Money Bill bypassing Rajya Sabha.',
    'Tribunals Reforms Act 2021: uniform selection via Search-cum-Selection Committee (CJI/SC judge nominee + govt secretary + experts). Age: 50-67 members, 50-70 Chairpersons.',
    'SC struck down 4-year tenure in 2021 Act — directed minimum 5 years for independence. Also struck down clause allowing govt to prescribe conditions of service by rules.',
    'Finance Act 2017 merged 8 tribunals: Competition Appellate Tribunal → NCLAT; Cyber Appellate Tribunal → TDSAT; FCAT abolished → functions to HC.',
    'Consumer forums: NCDRC (National), State Commissions, District Forums under Consumer Protection Act 2019. APTEL: appeals from CERC and SERCs (electricity). CIC: RTI appeals.',
    'Approximately 30+ tribunals currently operate in India. Chronic vacancies (30-50% at any time). No unified framework — different appointment and governance rules across tribunals.',
    'SC recommended National Tribunals Commission for unified governance. Law Commission reports advocated unified tribunal service with proper infrastructure and career progression.',
    'Swiss Ribbons v. UOI (2019): SC upheld constitutional validity of IBC and NCLT\'s role in corporate insolvency resolution.',
  ],
  comparisons: [
    {
      title: 'Art 323A vs Art 323B',
      headers: ['Aspect', 'Art 323A', 'Art 323B'],
      rows: [
        ['Scope', 'Administrative/service matters only', 'Wide range — tax, land, labour, elections, food, rent, etc.'],
        ['Who can establish', 'Parliament only', 'Parliament OR state legislatures'],
        ['Example tribunals', 'CAT, SATs', 'ITAT, NGT, NCLT, DRT, TDSAT, etc.'],
        ['Subject specificity', 'Narrow — only recruitment and service conditions', 'Broad — multiple categories listed in Art 323B(2)'],
      ],
    },
    {
      title: 'Major Tribunals — Quick Reference',
      headers: ['Tribunal', 'Year', 'Parent Article/Act', 'Key Jurisdiction'],
      rows: [
        ['ITAT', '1941', 'Income Tax Act', 'Income tax appeals (oldest tribunal)'],
        ['CAT', '1985', 'Art 323A / AT Act 1985', 'Central govt employee service matters'],
        ['DRT', '1993', 'RDDBFI Act 1993', 'Debt recovery for banks and FIs'],
        ['AFT', '2009', 'AFT Act 2007', 'Armed forces service matters + court-martial appeals'],
        ['NGT', '2010', 'NGT Act 2010', 'Environmental disputes (7 statutes)'],
        ['NCLT', '2016', 'Companies Act 2013 + IBC 2016', 'Company disputes + insolvency/bankruptcy'],
        ['GSTAT', '2023', 'GST Acts', 'GST disputes'],
      ],
    },
    {
      title: 'Tribunal Independence Cases',
      headers: ['Case', 'Year', 'Key Ruling'],
      rows: [
        ['L. Chandra Kumar', '1997', 'HC review (Art 226/227) of tribunal decisions is basic structure; cannot be excluded'],
        ['Madras Bar Association', '2014', 'Prescribed independence requirements — qualifications, judicial role in selection, tenure security'],
        ['Rojer Mathew', '2020', 'Tribunal composition changes cannot be passed as Money Bill; CJI/SC judge must be on appointment committee'],
        ['Madras Bar Association', '2021', 'Struck down 4-year tenure; directed minimum 5 years; govt cannot prescribe conditions by rules'],
      ],
    },
  ],
  mnemonics: [
    {
      title: 'Key Tribunals (CING DSAT)',
      mnemonic: 'CAT, ITAT, NGT, NCLT — DRT, SAT, AFT, TDSAT',
      explanation: 'The eight most important tribunals for competitive exams, in two groups of four.',
    },
    {
      title: 'NGT Seven Statutes — "WFAE PBW"',
      mnemonic: 'Water Act, Forest Act, Air Act, Environment Protection Act, Public Liability Insurance Act, Biological Diversity Act, Water Cess Act',
      explanation: 'The seven environmental statutes under which the NGT has jurisdiction.',
    },
    {
      title: 'L. Chandra Kumar — "Supplementary Not Substitute"',
      mnemonic: 'Tribunals SUPPLEMENT HCs; they do NOT SUBSTITUTE HCs. HC review under Art 226/227 = basic structure.',
      explanation: 'The core holding of L. Chandra Kumar — the most important case on tribunal jurisdiction.',
    },
  ],
}
