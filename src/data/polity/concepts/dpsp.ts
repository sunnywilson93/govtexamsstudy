import type { SubjectConcept } from '@/types/subject-notes'

export const dpspConcept: SubjectConcept = {
  topic: 'dpsp',
  title: 'Directive Principles of State Policy (Part IV)',
  description:
    'Directive Principles of State Policy are contained in Part IV (Articles 36-51) of the Constitution. Borrowed from the Irish Constitution, they are non-justiciable guidelines for the State in governance and law-making, aimed at establishing a welfare state. They complement Fundamental Rights — FRs are political democracy, DPSPs are socio-economic democracy.',
  category: 'Rights & Duties',
  keyDates: [
    { year: '1950', event: 'DPSPs came into force as Part IV of the Constitution (Articles 36-51)' },
    { year: '1951', event: '1st Amendment added Art 31A, 31B and Ninth Schedule to protect agrarian reform laws from FR challenges' },
    { year: '1967', event: 'Golaknath case — SC held FRs cannot be amended, creating tension between FRs and DPSPs' },
    { year: '1971', event: '25th Amendment added Art 31C — laws giving effect to Art 39(b) and (c) cannot be challenged under Art 14, 19' },
    { year: '1973', event: 'Kesavananda Bharati — upheld Art 31C but struck down its second part (making laws immune from judicial review)' },
    { year: '1976', event: '42nd Amendment tried to extend Art 31C to all DPSPs (struck down in Minerva Mills, 1980); added Art 43A (workers\' participation)' },
    { year: '1978', event: '44th Amendment deleted Right to Property from FRs, resolving a major FR-DPSP conflict' },
    { year: '2002', event: '86th Amendment added Art 45 (early childhood care up to age 6) and substituted Art 21A (Right to Education age 6-14 as FR)' },
    { year: '2011', event: 'Right to Education Act operationalized, fulfilling the DPSP goal of free and compulsory education' },
  ],
  notes: [
    {
      section: 'Nature and Classification',
      content:
        'DPSPs are non-justiciable (Art 37) — they cannot be enforced by any court. However, they are "fundamental in the governance of the country" and the State has a duty to apply them in making laws. Dr. Ambedkar compared them to "instruments of instructions" given to the Government. DPSPs can be classified into three categories: (1) Socialistic Principles (Art 38, 39, 39A, 41, 42, 43, 43A, 47) — aimed at social and economic justice; (2) Gandhian Principles (Art 40, 43, 43B, 46, 47, 48) — village panchayats, cottage industries, prohibition of intoxicating drinks, cow slaughter; (3) Liberal-Intellectual Principles (Art 44, 45, 48, 48A, 49, 50, 51) — Uniform Civil Code, separation of judiciary from executive, international peace.',
    },
    {
      section: 'Key Directive Principles',
      content:
        'Article 38: State to secure a social order promoting welfare; minimize inequalities of income, status, facilities (amended by 44th Amendment). Article 39: Policy principles — (a) adequate means of livelihood, (b) equitable distribution of material resources, (c) prevention of concentration of wealth, (d) equal pay for equal work for both men and women, (e) protection of workers\' health and strength, (f) protection of children from exploitation. Article 39A: Equal justice and free legal aid (added by 42nd Amendment). Article 40: Organization of village panchayats (basis for 73rd Amendment). Article 41: Right to work, education, and public assistance. Article 43: Living wage for workers. Article 43A: Workers\' participation in management (42nd Amendment). Article 44: Uniform Civil Code for citizens throughout India. Article 45: Early childhood care and education for children below 6 (86th Amendment). Article 46: Promotion of educational and economic interests of SCs, STs, and weaker sections. Article 47: Prohibition of intoxicating drinks and drugs harmful to health. Article 48: Prohibition of cow slaughter and organization of agriculture. Article 48A: Protection of environment and wildlife (42nd Amendment). Article 49: Protection of monuments, places, and objects of national importance. Article 50: Separation of judiciary from executive. Article 51: Promotion of international peace and security.',
    },
    {
      section: 'FR vs DPSP Conflict',
      content:
        'The relationship between FRs and DPSPs has been one of the most debated constitutional issues. Initially, FRs prevailed over DPSPs (State of Madras v. Champakam Dorairajan, 1951). The 1st Amendment (1951) introduced Art 15(4) to protect affirmative action laws. The 25th Amendment (1971) introduced Art 31C, giving primacy to Art 39(b) and (c) over Art 14 and 19. The 42nd Amendment (1976) tried to extend Art 31C to all DPSPs, but this was struck down in Minerva Mills v. Union of India (1980), where the SC held that the "Indian Constitution is founded on the bedrock of the balance between FRs and DPSPs" and neither should have absolute primacy. The current position: FRs and DPSPs are complementary, not contradictory; the Court tries to harmonize them; but if direct conflict exists, FRs prevail.',
    },
    {
      section: 'Implementation of DPSPs',
      content:
        'Several DPSPs have been implemented through legislation and policy: Art 39A — Legal Services Authorities Act, 1987 (free legal aid); Art 40 — 73rd and 74th Amendments (Panchayati Raj and Municipalities); Art 41 — MGNREGA (right to work); Art 43 — Minimum Wages Act, 1948; Art 45/21A — Right of Children to Free and Compulsory Education Act, 2009; Art 46 — various reservation and welfare schemes for SCs/STs; Art 47 — prohibition laws in some states (Gujarat, Bihar); Art 48 — cow protection laws in many states; Art 48A — Environment Protection Act, 1986, Wildlife Protection Act, 1972; Art 50 — separation of judiciary from executive at all levels by 1973; Art 44 (Uniform Civil Code) — remains unimplemented at the national level, though Goa has a uniform code inherited from Portuguese rule.',
    },
    {
      section: 'Differences Between FRs and DPSPs',
      content:
        'Fundamental Rights are justiciable (enforceable by courts); DPSPs are non-justiciable. FRs are limitations on State power (negative obligations); DPSPs are positive directions to the State. FRs aim at political democracy; DPSPs aim at social and economic democracy. FRs are automatically enforceable; DPSPs require legislation for implementation. FRs can be suspended during Emergency (except Art 20, 21); DPSPs cannot be suspended. FRs were inspired by the American Bill of Rights; DPSPs by the Irish Constitution. Despite these differences, the Supreme Court has emphasized that they are "supplementary and complementary" to each other (Unnikrishnan v. State of AP, 1993).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very high-yield topic. UPSC frequently tests FR vs DPSP conflict cases (Champakam, Golaknath, Kesavananda, Minerva Mills), classification of DPSPs (Socialistic/Gandhian/Liberal), and specific article-provision matching. SSC and banking exams test which article contains which directive. The Uniform Civil Code (Art 44) question appears repeatedly.',
}
