import type { SubjectConcept } from '@/types/subject-notes'

export const supremeCourtConcept: SubjectConcept = {
  topic: 'supreme-court',
  title: 'Supreme Court of India',
  description:
    'The Supreme Court is the apex judicial body of India and the guardian of the Constitution. Established under Article 124, it is the highest court of appeal, the guarantor of Fundamental Rights (Art 32), and the final interpreter of the Constitution. Its decisions are binding on all courts in India.',
  category: 'Judiciary',
  keyDates: [
    { year: '28 Jan 1950', event: 'Supreme Court of India inaugurated; replaced the Federal Court of India (established 1937 under GoI Act 1935); HJ Kania became the first Chief Justice' },
    { year: '1967', event: 'Golaknath case — SC ruled Parliament cannot amend Fundamental Rights (later overruled by Kesavananda)' },
    { year: '1973', event: 'Kesavananda Bharati v. State of Kerala — SC introduced the Basic Structure Doctrine; the most important constitutional case in Indian history' },
    { year: '1975-77', event: 'During Emergency, SC in ADM Jabalpur v. Shivkant Shukla (Habeas Corpus case) held that FRs including Art 21 are suspended — later overruled by Puttaswamy (2017)' },
    { year: '1980', event: 'Minerva Mills v. Union of India — SC struck down parts of 42nd Amendment; reinforced basic structure doctrine' },
    { year: '1993', event: 'Supreme Court Advocates-on-Record Association case (Second Judges Case) — SC established Collegium system for judicial appointments' },
    { year: '2015', event: 'SC struck down the National Judicial Appointments Commission (NJAC) Act and 99th Amendment as violating basic structure' },
    { year: '2019', event: 'SC increased strength from 31 to 34 judges (including CJI) by amendment to the Supreme Court (Number of Judges) Act' },
  ],
  notes: [
    {
      section: 'Composition and Appointment',
      content:
        'Article 124(1): the SC consists of a CJI and such number of judges as Parliament may prescribe (currently 34 including CJI). Qualifications (Art 124(3)): citizen of India; must have been a judge of one or more HCs for at least 5 years, or an advocate of one or more HCs for at least 10 years, or a distinguished jurist in the opinion of the President. Appointment: by the President after consultation with CJI and such SC and HC judges as deemed necessary. The Collegium system (evolved through Three Judges Cases — 1982, 1993, 1998) means the CJI and 4 senior-most SC judges recommend appointments. The NJAC (99th Amendment + NJAC Act, 2014) was struck down in 2015 as violating judicial independence. The CJI is appointed by seniority convention (senior-most judge of SC). Judges serve until 65 years of age. Removal: only through impeachment — proved misbehaviour or incapacity, with an address supported by special majority in each House of Parliament (Art 124(4)).',
    },
    {
      section: 'Jurisdiction of the Supreme Court',
      content:
        'Original Jurisdiction (Art 131): disputes between the Government of India and one or more states, or between states inter se — but the dispute must involve a question of law or fact on which the existence or extent of a legal right depends. Writ Jurisdiction (Art 32): the SC can issue writs (habeas corpus, mandamus, prohibition, certiorari, quo warranto) for enforcement of Fundamental Rights — this is a Fundamental Right itself. Appellate Jurisdiction: (1) Constitutional matters (Art 132) — appeal from any court if the HC certifies it involves a substantial question of law regarding Constitution interpretation; (2) Civil matters (Art 133) — if HC certifies the case involves a substantial question of law of general importance; (3) Criminal matters (Art 134) — if HC reverses acquittal and sentences to death, or withdraws a case and convicts, or certifies the case is fit for SC appeal; (4) Special Leave Petition (Art 136) — SC can grant leave to appeal from any court or tribunal (except military tribunals) — widest discretionary appellate power. Advisory Jurisdiction (Art 143): President can refer any question of law or fact of public importance to the SC for its opinion (non-binding on the SC to give opinion; opinion is non-binding on the government).',
    },
    {
      section: 'Judicial Review and Basic Structure Doctrine',
      content:
        'Judicial review is the power of the judiciary to examine the constitutionality of legislative and executive actions. In India, judicial review is based on "procedure established by law" (Art 21) unlike the American "due process of law" — though the SC in Maneka Gandhi v. Union of India (1978) effectively read "due process" into Art 21 by requiring the procedure to be just, fair, and reasonable. The Basic Structure Doctrine, established in Kesavananda Bharati (1973), holds that Parliament can amend any provision of the Constitution under Art 368 but cannot alter its "basic structure." Basic structure features (identified over various cases): supremacy of the Constitution, republican and democratic form of government, secular character, separation of powers, federal character, unity and integrity of India, parliamentary system, judicial review, rule of law, independence of judiciary, harmony between FRs and DPSPs, free and fair elections, limited amending power. This doctrine has no parallel in most other constitutions and is India\'s unique contribution to constitutional law.',
    },
    {
      section: 'Public Interest Litigation (PIL)',
      content:
        'PIL is a judicial innovation that allows any public-spirited person to approach the SC or HCs for enforcement of public interest or rights of disadvantaged groups who cannot approach courts themselves. Pioneered by Justice P.N. Bhagwati and Justice V.R. Krishna Iyer in the late 1970s, PIL relaxed the traditional rule of "locus standi" (only the aggrieved person can file). PIL can be filed under Art 32 (SC) or Art 226 (HCs). Landmark PILs: Hussainara Khatoon v. State of Bihar (1979) — right to speedy trial; Bandhua Mukti Morcha v. Union of India (1984) — bonded labour; M.C. Mehta v. Union of India — environmental protection; Vishaka v. State of Rajasthan (1997) — sexual harassment guidelines. PIL has been criticized for judicial overreach and "PIL abuse" — the SC has issued guidelines to prevent frivolous PILs.',
    },
    {
      section: 'Independence of the Judiciary',
      content:
        'The Constitution provides several safeguards for judicial independence: security of tenure (removal only by impeachment); fixed service conditions that cannot be altered to a judge\'s disadvantage after appointment (Art 125); salaries and allowances charged on the Consolidated Fund of India (non-votable); ban on practice after retirement from SC; power to punish for contempt (Art 129); conduct of judges cannot be discussed in Parliament except during impeachment. The Collegium system for appointments (despite criticism) ensures the executive does not control judicial appointments. Article 141 makes the law declared by the SC binding on all courts in India. Article 142 gives the SC the power to pass any order necessary for doing "complete justice" — a unique and sweeping power.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'One of the most critical topics. UPSC Prelims tests on jurisdiction types, landmark cases, Basic Structure Doctrine, Collegium system vs NJAC, and judicial review. SSC exams ask about composition, qualifications, retirement age, and Article numbers. The Three Judges Cases and Kesavananda Bharati are frequently tested. Questions on PIL and Art 142 are increasingly common.',
}
