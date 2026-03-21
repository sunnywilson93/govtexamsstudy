import type { SubjectConcept } from '@/types/subject-notes'

export const judicialReviewConcept: SubjectConcept = {
  topic: 'judicial-review',
  title: 'Judicial Review and Public Interest Litigation',
  description:
    'The judiciary\'s power to strike down laws and orders that violate the Constitution, rooted in Articles 13, 32, 226, and the Basic Structure Doctrine. PIL lets any public-spirited person fight for the rights of the disadvantaged. UPSC tests Kesavananda Bharati, L. Chandra Kumar, I.R. Coelho, and Art 32 vs Art 226 almost every year.',
  category: 'Judiciary',
  keyDates: [
    { year: '1803', event: 'Marbury v. Madison — US Supreme Court (Chief Justice Marshall) established the doctrine of judicial review for the first time in constitutional history; became the foundation for judicial review worldwide' },
    { year: '1950', event: 'Indian Constitution came into force with explicit provisions for judicial review under Articles 13, 32, 226, and other articles — unlike the US where it was judicially created' },
    { year: '1951', event: 'Shankari Prasad v. Union of India — SC held "law" in Art 13 does not include constitutional amendments; Parliament can amend FRs; laid groundwork for amendment-review debate' },
    { year: '1967', event: 'Golaknath v. State of Punjab — SC (6:5) held Parliament cannot amend FRs; expanded scope of judicial review to cover amending power itself' },
    { year: '1973', event: 'Kesavananda Bharati v. State of Kerala — 13-judge bench (7:6) introduced Basic Structure Doctrine; judicial review can now test constitutional amendments themselves' },
    { year: '1978', event: 'Maneka Gandhi v. Union of India — SC read "due process" into Art 21; procedure must be just, fair, and reasonable; expanded substantive judicial review' },
    { year: '1979', event: 'Hussainara Khatoon v. Home Secretary, Bihar — first PIL case; over 40,000 undertrial prisoners released; launched the PIL movement in India' },
    { year: '1981', event: 'S.P. Gupta v. Union of India — SC formally recognized PIL; any public-spirited person can approach courts for enforcement of rights of disadvantaged groups' },
    { year: '1997', event: 'L. Chandra Kumar v. Union of India — SC (7-judge bench) held that judicial review under Art 226 and Art 32 is part of the basic structure; cannot be excluded by any means' },
    { year: '1997', event: 'Vishaka v. State of Rajasthan — SC laid down guidelines on sexual harassment at workplace through PIL; guidelines operated as law until the 2013 Act' },
    { year: '2007', event: 'I.R. Coelho v. State of Tamil Nadu — 9-judge bench unanimously held that Ninth Schedule laws post-24 April 1973 are subject to judicial review on basic structure grounds' },
    { year: '2015', event: 'NJAC Case — SC struck down 99th Amendment and NJAC Act (4:1) as violating basic structure (judicial independence); reaffirmed the power of judicial review over constitutional amendments' },
  ],
  notes: [
    {
      section: 'Constitutional Basis of Judicial Review',
      content:
        'India\'s judicial review has explicit constitutional foundations — unlike the US where Marbury v. Madison (1803) judicially created it. Art 13 is foundational: Art 13(1) voids pre-Constitution laws inconsistent with FRs; Art 13(2) bars the State from making FR-abridging laws — any such law is void to the extent of contravention; Art 13(3) defines "law" broadly to include ordinances, orders, bye-laws, rules, regulations, notifications, customs, usages. Does "law" include amendments? The great debate: Shankari Prasad (1951: no), Golaknath (1967: yes), Kesavananda Bharati (1973: reviewable on basic structure grounds). Other review foundations: Art 32 (SC writs for FRs), Art 226 (HC writs — broader scope), Art 131 (SC original jurisdiction in Centre-State disputes), Art 132-136 (appellate jurisdiction), Art 143 (advisory jurisdiction), Art 245 (all laws "subject to this Constitution"), Art 246 + Seventh Schedule (distributes legislative competence), Art 254 (Concurrent List repugnancy).',
    },
    {
      section: 'Scope, Grounds, and Limits of Judicial Review',
      content:
        'Courts review on three grounds: (a) FR violation (Art 13, 32, 226); (b) lack of legislative competence (Art 245, 246, 254); (c) violation of any other constitutional provision. L. Chandra Kumar (1997): judicial review under Art 226 and 32 is basic structure — cannot be removed even by amendment. Scope extends to constitutionality of statutes, constitutional amendments (Kesavananda), subordinate legislation, executive orders, Ninth Schedule laws (I.R. Coelho, 2007). Self-imposed limits: presumption of constitutionality (challenger bears burden), political question doctrine, severability (only the offending part struck down), eclipse (pre-Constitution FR-violating law is dormant — revives if the FR is removed), reading down (narrow interpretation to save a law).',
    },
    {
      section: 'Evolution of Judicial Review Over Constitutional Amendments',
      content:
        'Can Parliament\'s amending power (Art 368) be judicially reviewed? The most debated constitutional question. Shankari Prasad (1951): "law" in Art 13(2) does not include amendments — Parliament can freely amend FRs. Sajjan Singh (1965): reaffirmed, but Justice Mudholkar asked whether certain features form a "basic structure." Golaknath (1967): 6:5 majority reversed Shankari Prasad — FRs are transcendental, cannot be amended. Applied prospective overruling. Parliament fought back: 24th Amendment explicitly stated Art 13 excludes amendments; 25th Amendment curtailed judicial review of DPSP-related laws. The definitive resolution: Kesavananda Bharati (1973), 13-judge bench, 7:6. Upheld 24th and 25th Amendments but introduced the Basic Structure Doctrine — Parliament can amend any provision but CANNOT alter the basic structure. This is the most important constitutional case in Indian history.',
    },
    {
      section: 'Judicial Review as Basic Structure — Key Cases',
      content:
        'Multiple landmark cases cemented judicial review as basic structure. Minerva Mills (1980): struck down Section 55 of 42nd Amendment (which tried to bar amendment review). Justice Bhagwati: "If judicial review is taken away, fundamental rights become a mere illusion." L. Chandra Kumar (1997): 7-judge bench — Art 226 and Art 32 review power is "an integral and essential feature of the Constitution, constituting part of its basic structure." I.R. Coelho (2007): 9-judge bench — even Ninth Schedule laws face judicial review if they violate basic structure. Applies to laws added AFTER 24 April 1973 (Kesavananda date). Waman Rao (1981) established this temporal cutoff. NJAC Case (2015): reaffirmed — even near-unanimous amendments can be struck down for basic structure violation. Drill these five cases for Prelims and Mains.',
    },
    {
      section: 'Origin and Development of Public Interest Litigation',
      content:
        'PIL is India\'s most significant judicial innovation — a shift from adversarial litigation to social-justice-driven litigation. It emerged post-Emergency (1975-77), which exposed the vulnerability of the poor. Principal architects: Justice P.N. Bhagwati and Justice V.R. Krishna Iyer. Genesis: Hussainara Khatoon v. Home Secretary, Bihar (1979) — a newspaper article about undertrials languishing in Bihar jails prompted a petition. SC ordered release of 40,000+ prisoners; established right to speedy trial and free legal aid under Art 21. S.P. Gupta v. Union of India (1981): Bhagwati formally articulated PIL doctrine — any public-spirited person can approach courts when disadvantaged groups cannot access justice. PIL transformed the SC from passive adjudicator into active instrument of social change. Procedural barriers fell: PILs can start through a letter to the CJ (epistolary jurisdiction), a newspaper report, or suo motu.',
    },
    {
      section: 'Landmark PIL Cases — Social Justice',
      content:
        'Memorize the case-to-right mapping — a UPSC favourite. Bandhua Mukti Morcha (1984): bonded labour violates Art 21 and 23; directed release and rehabilitation. Olga Tellis (1985): right to livelihood under Art 21; pavement dwellers cannot be evicted without due process. Unnikrishnan (1993): right to education under Art 21 — laid groundwork for Art 21A (86th Amendment, 2002). D.K. Basu (1997): 11 mandatory arrest guidelines. Parmanand Katara (1989): hospitals must provide emergency treatment regardless of medico-legal formalities. People\'s Union for Democratic Rights (1982): "forced labour" under Art 23 includes payment below minimum wages. Sheela Barse (1983): women\'s prison reforms. These cases turned DPSPs into justiciable rights through expansive Art 21 interpretation — a pattern UPSC Mains loves to test.',
    },
    {
      section: 'Landmark PIL Cases — Environment and Governance',
      content:
        'M.C. Mehta (multiple cases from 1986) is the most prolific PIL series ever. Different cases led to: Taj Mahal pollution cleanup, Ganga cleanup, CNG mandate for Delhi vehicles, child labour ban in hazardous industries, industrial relocation from Delhi. T.N. Godavarman (1996): SC assumed supervision of forest conservation nationwide; banned felling in natural forests; led to CAMPA. Under "continuing mandamus" for 25+ years. Vishaka (1997): after the gang-rape of Bhanwari Devi, SC laid down workplace sexual harassment guidelines — operated as law until the 2013 Act. Vineet Narain (1998): SC directed CBI to investigate Jain Hawala case without political interference; issued CBI independence directions. Rural Litigation and Entitlement Kendra (1985): Doon Valley quarry closure — environmental protection overrides economic considerations.',
    },
    {
      section: 'PIL — Procedural Innovations and Guidelines Against Misuse',
      content:
        'PIL introduced procedural innovations that reshaped Indian litigation. Epistolary jurisdiction: a letter or postcard to the CJ can become a PIL. Amicus curiae: court-appointed "friend of the court" assists in PIL cases. Monitoring committees: SC appoints expert committees to investigate and monitor. Continuing mandamus: court retains jurisdiction, monitors through periodic reports. Anti-misuse guidelines: PILs must serve genuinely public causes; no political purposes, personal grudge, or publicity; courts can impose exemplary costs for frivolous PILs; private grievances disguised as public interest face dismissal with costs. BALCO Employees\' Union (2010) issued detailed screening guidelines.',
    },
    {
      section: 'Judicial Activism vs Judicial Restraint',
      content:
        'This debate is a Mains staple. Judicial activism: courts proactively interpret the Constitution to fill governance gaps. Proponents argue the judiciary must step in when legislature and executive fail; PIL is the only access route for the poor; environmental and CBI interventions produced real results. Critics call excessive activism judicial overreach: courts took over executive functions (CBI monitoring, forest supervision); courts made policy (liquor ban near highways, CNG in Delhi) without democratic mandate; "governance by judiciary" undermines elected bodies. Justice Katju distinguished "judicial activism" (permissible) from "judicial overreach" (impermissible). SC acknowledged limits in Aravali Golf Club v. Chander Hass (2008): "Judges must know their limits and must not try to run the government."',
    },
    {
      section: 'Recent Trends in Judicial Review',
      content:
        'Recent cases show judicial review engaging with the most sensitive issues. NJAC Case (2015): struck down 99th Amendment and NJAC Act — judicial independence in appointments is basic structure. Puttaswamy (2017): 9-judge bench unanimously held privacy is an FR under Art 21, overruling M.P. Sharma (1954) and Kharak Singh (1962). Aadhaar (2018): upheld validity but struck down Section 57 (private entity demands). Joseph Shine (2018): struck down Section 497 IPC (adultery) — violated Art 14, 15, 21. Navtej Singh Johar (2018): decriminalized consensual homosexual conduct by reading down Section 377. Article 370 abrogation (2023): SC upheld abrogation. Electoral Bonds (2024): struck down the Electoral Bond Scheme as violating Art 19(1)(a) — landmark in electoral transparency.',
    },
    {
      section: 'Judicial Review — India vs Other Countries',
      content:
        'India\'s judicial review combines features from multiple traditions. US: judicially created in Marbury v. Madison — no explicit provision. US courts can review legislation but NOT amendments (India can, post-Kesavananda). UK: parliamentary sovereignty — no court can strike down Acts. Human Rights Act 1998 introduced limited review. Germany: Federal Constitutional Court reviews amendments under the "eternity clause" (Art 79(3)) — directly influenced India\'s Basic Structure Doctrine. France: Constitutional Council conducts a priori review (before promulgation), not a posteriori. India\'s unique features: explicit constitutional provision (Art 13, 32, 226); amendment review on basic structure grounds — unique among major democracies; the world\'s most developed PIL system; Art 32 (guaranteed FR) + Art 226 (broader scope) gives dual-layer protection.',
    },
    {
      section: 'Doctrines Supporting Judicial Review',
      content:
        'Memorize these doctrines — they appear as Prelims statement-matching questions. Severability: only the unconstitutional part is struck down; rest survives (R.M.D.C. v. UOI, 1957). Eclipse: pre-Constitution FR-violating law is "eclipsed" (dormant), not dead — revives if the FR is removed (Bhikaji Narain Dhakras v. MP, 1955). Pith and Substance: courts look at the true nature of legislation, not incidental effects. Colourable Legislation: legislature cannot do indirectly what it cannot do directly. Incidental/Ancillary Powers: power to legislate on a subject includes power over incidental matters. Harmonious Construction: when two provisions conflict, courts interpret both to coexist. Territorial Nexus: state legislature can legislate on matters with real and substantial nexus to the state, even if partly outside.',
    },
    {
      section: 'Judicial Review of Administrative Action',
      content:
        'Courts review administrative actions on three grounds. Illegality: authority acted ultra vires or misunderstood the law. Irrationality (Wednesbury unreasonableness): the decision is so unreasonable no rational authority could have reached it. Procedural impropriety: violation of natural justice — audi alteram partem (hear both sides) and nemo judex in causa sua (no one judges their own case). Maneka Gandhi (1978): procedure must be "right, just, and fair." Mohinder Singh Gill v. CEC (1978): an order must stand or fall on stated reasons — post-facto justification barred. E.P. Royappa (1974): arbitrariness is the antithesis of equality — any arbitrary executive action violates Art 14. This massively expanded review scope. Proportionality: increasingly applied — K.S. Puttaswamy Aadhaar (2018) used a four-part test.',
    },
    {
      section: 'Constitutional Remedies — The Five Writs in Detail',
      content:
        'The five writs under Art 32 (SC) and Art 226 (HC) — a guaranteed exam topic. (1) Habeas Corpus ("produce the body"): most powerful for personal liberty. Issued against public authorities AND private individuals. Cannot be suspended during Emergency for Art 20/21 (post-44th Amendment). Rudul Sah (1983): compensation for 14-year illegal detention post-acquittal. (2) Mandamus ("we command"): compels a public authority to perform a mandatory duty. Cannot issue against private persons, President, Governor, or discretionary functions. (3) Prohibition ("to forbid"): stops an inferior court/tribunal from exceeding jurisdiction. PREVENTIVE — issued before completion. (4) Certiorari ("to certify"): quashes an order passed without/in excess of jurisdiction. CORRECTIVE — issued after the order. Exam trap: prohibition is before, certiorari is after. (5) Quo Warranto ("by what authority"): challenges authority to hold public office. Any person can file.',
    },
    {
      section: 'PIL — Evolution from Letter to Structured Litigation',
      content:
        'PIL evolved through distinct phases — a useful Mains framework. Phase 1 (1979-1990) "Golden Age": bonded labour, undertrials, child labour, environment. Courts actively sought cases and relaxed procedures. Phase 2 (1990s-2000s) "Governance PILs": comprehensive directions — Vineet Narain (CBI), Vishaka (sexual harassment), M.C. Mehta (environment). SC created "continuing mandamus." Phase 3 (2000s-present) "Caution": PIL misuse concerns grew. Ashok Kumar Pandey (2004): PIL should not become "publicity interest litigation." Balwant Singh Chaufal (2010): detailed screening guidelines. Phase 4 (Recent) "Structural PILs": electoral bonds (2024), same-sex marriage (2023), Art 370, digital privacy. SC now has dedicated PIL benches and screening registrars. PIL handles ~15-20% of SC\'s annual docket.',
    },
    {
      section: 'Limits of Judicial Review — Political Questions and Non-Justiciable Matters',
      content:
        'Broad as it is, judicial review has recognized limits. Political Question Doctrine: courts generally avoid purely political questions. State of Rajasthan v. UOI (1977): political questions are not justiciable. But unlike the US, Indian courts have adjudicated highly political matters — Ayodhya, Article 370, Electoral Bonds. Non-justiciable provisions: DPSPs (Art 37) — not directly enforceable, though used to interpret FRs. Parliamentary privileges (Art 105/194) — but Raja Ram Pal v. Speaker (2007): court can examine whether member expulsion violated FRs. Governor\'s discretion — but B.P. Singhal (2010): even the "pleasure doctrine" faces judicial review. Courts cannot direct the legislature to enact specific laws. They test only for arbitrariness, FR violation, or exceeding authority.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Extremely important for UPSC Prelims and Mains. Prelims tests: constitutional articles enabling judicial review (13, 32, 226), the Basic Structure Doctrine (Kesavananda Bharati), L. Chandra Kumar holding, I.R. Coelho (Ninth Schedule review), specific PIL landmark cases, and the distinction between judicial activism and overreach. Mains asks for analysis of PIL evolution, the judiciary\'s expanding role, basic structure doctrine criticism, and balancing judicial review with parliamentary sovereignty. SSC exams test factual questions on landmark cases, article numbers, and PIL pioneers.',
}
