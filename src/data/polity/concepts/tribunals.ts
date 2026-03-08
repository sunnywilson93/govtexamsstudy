import type { SubjectConcept } from '@/types/subject-notes'

export const tribunalsConcept: SubjectConcept = {
  topic: 'tribunals',
  title: 'Tribunals',
  description:
    'Tribunals are quasi-judicial bodies established to adjudicate specific types of disputes outside the regular court system. Part XIVA (Articles 323A-323B) was added by the 42nd Amendment (1976) to enable the establishment of tribunals for administrative and other matters, aiming to reduce the burden on courts.',
  category: 'Judiciary',
  keyDates: [
    { year: '1976', event: '42nd Amendment added Part XIVA (Art 323A and 323B) — constitutional basis for tribunals' },
    { year: '1985', event: 'Administrative Tribunals Act enacted under Art 323A; Central Administrative Tribunal (CAT) established to handle service matters of central government employees' },
    { year: '2005', event: 'National Green Tribunal Act proposed (enacted in 2010) — environmental disputes' },
    { year: '2010', event: 'National Green Tribunal (NGT) established; National Company Law Tribunal (NCLT) operationalized' },
    { year: '2019', event: 'Tribunals Reforms Act — merged and rationalized tribunals; transferred functions of some tribunals to HCs' },
    { year: '2021', event: 'Tribunals Reforms Act 2021 — prescribed qualifications, tenure (4 years), and age limits (50 minimum, 70 maximum for Chairperson) for tribunal members' },
  ],
  notes: [
    {
      section: 'Constitutional Provisions',
      content:
        'Article 323A: Parliament may provide for the establishment of administrative tribunals for adjudication of disputes relating to recruitment and conditions of service of public servants. Based on this, the Administrative Tribunals Act 1985 was enacted. The Central Administrative Tribunal (CAT) handles Union government employee disputes, and State Administrative Tribunals (SATs) handle state employee disputes. Article 323B: Parliament or state legislatures may provide for tribunals for adjudication of disputes relating to: taxation, foreign exchange, industrial and labour disputes, land reforms, ceiling on urban property, elections to Parliament/state legislatures, food, rent, tenancy, and offences against laws relating to these matters. Unlike Art 323A, Art 323B covers a much wider range of subjects and empowers both Parliament and state legislatures.',
    },
    {
      section: 'Major Tribunals in India',
      content:
        'Central Administrative Tribunal (CAT, 1985): handles service matters of central government employees; Principal Bench in Delhi, 17 regular benches, and circuit benches. Income Tax Appellate Tribunal (ITAT, 1941): the oldest tribunal; handles income tax appeals. National Green Tribunal (NGT, 2010): handles environmental disputes including enforcement of legal rights related to environment, forests, and natural resources; has original and appellate jurisdiction. National Company Law Tribunal (NCLT): handles company law disputes, insolvency and bankruptcy cases. National Company Law Appellate Tribunal (NCLAT): appellate body over NCLT. Debt Recovery Tribunals (DRTs): recover debts due to banks and financial institutions. Securities Appellate Tribunal (SAT): hears appeals against SEBI orders. Armed Forces Tribunal (AFT, 2007): handles service matters and criminal cases of armed forces personnel. Telecom Disputes Settlement and Appellate Tribunal (TDSAT). Consumer Disputes Redressal Commissions: National (NCDRC), State, and District-level.',
    },
    {
      section: 'Judicial Review of Tribunal Decisions',
      content:
        'A critical constitutional issue is whether tribunals can exclude HC jurisdiction. In L. Chandra Kumar v. Union of India (1997), the SC held that: (1) the power of judicial review of HCs under Art 226/227 is part of the basic structure and cannot be excluded by tribunals; (2) all tribunal decisions are subject to HC review (through writ jurisdiction); (3) SC\'s jurisdiction under Art 32 and HC\'s under Art 226 cannot be excluded even by constitutional amendment. This means tribunals serve as courts of first instance, but their decisions can always be challenged before HCs and ultimately the SC. The SC in Madras Bar Association v. Union of India (2014) also laid down requirements for independent and competent tribunal members.',
    },
    {
      section: 'Merits and Criticisms',
      content:
        'Merits: specialized adjudication by experts in specific fields; faster disposal compared to regular courts; flexibility in procedures; reduced burden on the regular judiciary; technical expertise in complex matters (e.g., tax, environment, company law). Criticisms: proliferation of tribunals without adequate infrastructure; lack of independence — members often appointed by the executive; poor service conditions compared to judges; no uniform framework for appointments and functioning; parallel judiciary creating confusion; some tribunals have huge backlogs, defeating the purpose; the executive\'s control over appointments and tenure undermines quasi-judicial independence. The 2021 Reforms Act addressed some of these issues by prescribing minimum qualifications, tenure of 4 years, and age limits.',
    },
    {
      section: 'Tribunals Reforms',
      content:
        'The government has undertaken several reform measures: the Finance Act 2017 merged 8 tribunals; the Tribunals Reforms Act 2021 prescribed uniform terms of appointment (4-year tenure, 50-70 age bracket for members, 50-70 for Chairperson), qualifications, and search-cum-selection committee composition. The SC in Madras Bar Association v. Union of India (2021) struck down parts of the 2021 Act, including the 4-year tenure (holding it too short to ensure independence) and the clause allowing the government to prescribe conditions of service by rules. The SC directed a 5-year tenure as minimum. The tension between the executive\'s desire to control tribunals and the judiciary\'s insistence on independence remains an ongoing constitutional issue.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Important for UPSC and competitive exams. Key areas tested: Art 323A vs 323B (scope and who can establish), L. Chandra Kumar case on judicial review, CAT jurisdiction, NGT, NCLT, names and functions of major tribunals, and the 42nd Amendment connection. Questions on tribunal reform and the tension between executive control and judicial independence are UPSC Mains favorites.',
}
