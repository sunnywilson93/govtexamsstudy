import type { SubjectConcept } from '@/types/subject-notes'

export const rtiActConcept: SubjectConcept = {
  topic: 'rti-act',
  title: 'Right to Information Act, 2005',
  description:
    'The RTI Act, 2005 empowers every citizen to demand information from public authorities, enforcing transparency across all levels of government. It creates a two-tier appellate mechanism (First Appellate Authority + CIC/SIC) and mandates proactive disclosure under Section 4. The 2019 Amendment changed the tenure and salary of Information Commissioners from statutorily fixed to "prescribed by the Central Government." Exams test Section 8 exemptions (10 grounds), the appellate timeline (30 days first appeal, 90 days second), penalty provisions (Rs 250/day, max Rs 25,000), and the CIC selection committee (PM, LoP, Cabinet Minister).',
  category: 'Governance & Transparency',
  keyDates: [
    { year: '1975', event: 'Supreme Court in State of UP v. Raj Narain held that the right to information is implicit in the right to free speech under Article 19(1)(a)' },
    { year: '1982', event: 'SC in S.P. Gupta v. Union of India reiterated that right to know is a fundamental right and open government is the norm' },
    { year: '1990', event: 'Dinesh Goswami Committee recommended greater transparency in government functioning and disclosure of election-related information' },
    { year: '1996', event: 'Mazdoor Kisan Shakti Sangathan (MKSS) led by Aruna Roy pioneered the RTI movement in Rajasthan demanding transparency in public works expenditure' },
    { year: '1997', event: 'Tamil Nadu became the first state to enact a Right to Information Act (Tamil Nadu Right to Information Act, 1997)' },
    { year: '2000', event: 'Freedom of Information Bill introduced in Parliament; 9 states enacted their own RTI laws before the central Act' },
    { year: '2002', event: 'Freedom of Information Act, 2002 passed by Parliament (received Presidential assent in January 2003 but was never notified/operationalized)' },
    { year: '2004', event: 'National Advisory Council recommended a comprehensive RTI law; UPA government committed to enacting a strong RTI Act' },
    { year: '2005', event: 'Right to Information Act, 2005 passed by Parliament on 15 June 2005; came into force on 12 October 2005 (120 days from Presidential assent)' },
    { year: '2010', event: 'SC in CBSE v. Aditya Bandopadhyay held that RTI cannot be used as a "tool of surveillance" and vexatious requests can be rejected' },
    { year: '2013', event: 'CIC ruled that six national political parties are "public authorities" under the RTI Act — parties refuse to comply despite the ruling' },
    { year: '2019', event: 'RTI (Amendment) Act, 2019 changed tenure and salary conditions of Information Commissioners from statutory to prescribed by Central Government' },
    { year: '2023', event: 'Supreme Court upheld the 2019 RTI Amendment in WP (C) cases challenging the changes to tenure and conditions of service' },
    { year: '2024', event: 'CIC backlog crossed 35,000 pending appeals; several SICs operating below full strength, compromising second appeal mechanism' },
  ],
  notes: [
    {
      section: 'Salient Features of the RTI Act',
      content:
        'The RTI Act applies to the whole of India. After abrogation of Art 370, the central Act replaced J&K\'s separate RTI Act, 2009. It covers every "public authority" established by or under the Constitution, any law, any government notification, or substantially financed by the government. Every citizen can inspect works, documents, and records; take certified copies; take certified samples of material; and obtain information in electronic form. The Act defines "information" broadly to include records, e-mails, opinions, circulars, contracts, reports, samples, and any data held electronically. Public authorities must respond within 30 days. For matters involving life or liberty, the deadline shrinks to 48 hours. Exams frequently test this 30-day vs 48-hour distinction alongside the broad definition of "public authority."',
    },
    {
      section: 'Public Information Officers and the Application Process',
      content:
        'Every public authority must designate Central/State Public Information Officers (CPIOs/SPIOs) to handle RTI requests. Assistant PIOs at the sub-divisional level receive applications and forward them. The application fee is Rs 10 for the central government; states may vary. BPL applicants pay no fee at all. The applicant need not state any reason for seeking information or disclose personal details beyond contact information. If the PIO fails to respond within 30 days, the applicant is deemed refused. Third-party information requires written notice to the third party within 5 days, with 10 days allowed for representations before disclosure. The PIO can charge additional fees for photocopying and postage. SSC exams test the Rs 10 fee, BPL exemption, and the "no reason required" rule.',
    },
    {
      section: 'Exemptions Under Section 8',
      content:
        'Section 8(1) lists 10 exemption grounds. Information is exempt if disclosure would: (a) harm sovereignty, integrity, security, or strategic interests of India, or incite an offence; (b) violate a court or tribunal order expressly forbidding publication; (c) breach privilege of Parliament or a State Legislature; (d) reveal trade secrets or commercial confidence harming competitive position (unless public interest outweighs harm); (e) breach fiduciary relationship (unless public interest justifies); (f) compromise information received from a foreign government in confidence; (g) endanger life, physical safety, or confidential law-enforcement sources; (h) impede investigation, apprehension, or prosecution; (i) relate to Cabinet papers (decisions and reasons become disclosable after the matter is complete); (j) constitute personal information unrelated to public activity or interest. Section 8(2) provides a powerful public interest override: information may be disclosed even under the Official Secrets Act, 1923, if public interest in disclosure outweighs the harm. UPSC tests ground (i) because of its nuance: Cabinet deliberations are exempt, but decisions become public once the matter concludes.',
    },
    {
      section: 'Central and State Information Commissions',
      content:
        'The CIC consists of the Chief Information Commissioner and up to 10 Information Commissioners. The President appoints them on the recommendation of a committee of three: the Prime Minister (Chairperson), the Leader of Opposition in Lok Sabha, and a Union Cabinet Minister nominated by the PM. Originally, the Chief IC held a 5-year tenure or served until age 65, whichever came earlier, with no reappointment. The 2019 Amendment removed these statutory anchors and empowered the Central Government to prescribe tenure, salary, and service conditions through rules. SICs follow a parallel structure at the state level. The Governor appoints State ICs on the recommendation of a committee comprising the CM, LoP in the state assembly, and a state Cabinet Minister. The 2019 Amendment similarly changed SIC service conditions. Both CIC and SIC hear appeals against PIO orders and impose penalties. The selection committee composition (PM, LoP, Cabinet Minister) appears regularly in MCQs.',
    },
    {
      section: 'Appellate Mechanism and Penalties',
      content:
        'The Act creates a two-tier appellate system. First Appeal: an unsatisfied requester files an appeal with the First Appellate Authority (FAA), a senior officer within the same public authority, within 30 days of the PIO\'s decision or expiry of the response period. The FAA must decide within 30-45 days. Second Appeal: if the FAA\'s decision is unsatisfactory, the requester can appeal to the CIC (for central authorities) or SIC (for state authorities) within 90 days. The CIC/SIC can conduct inquiries, direct the authority to take specific steps, and impose penalties. Section 20 authorizes a penalty of Rs 250 per day of delay, up to a maximum of Rs 25,000, if the PIO refused without reasonable cause, failed to respond in time, malafidely denied the request, or destroyed information. The CIC/SIC can also recommend disciplinary action. The burden of proving that a denial was justified falls on the PIO, not the applicant. The 30-day, 90-day, and Rs 250/day figures are perennial SSC and banking exam targets.',
    },
    {
      section: 'Section 4 — Proactive Disclosure',
      content:
        'Section 4 is called the "heart and soul" of the RTI Act. It mandates proactive disclosure, reducing the need for individual applications. Section 4(1)(a) requires every public authority to maintain catalogued and indexed records. Section 4(1)(b) mandates publication of 17 categories of information within 120 days of enactment, including: organisational particulars, powers and duties of officers, decision-making procedures, norms for functions, rules and manuals, categories of documents held, consultation arrangements, officer directories, budget allocations, subsidy details, concession/permit recipients, electronic information, and PIO details. Section 4(2) directs public authorities to provide information suo motu at regular intervals through various communication channels. The CIC has repeatedly noted that robust proactive disclosure would reduce the flood of RTI applications. UPSC Mains tests the 17 categories and the 120-day timeline.',
    },
    {
      section: 'Excluded Organizations — Second Schedule',
      content:
        'Section 24 excludes 18 intelligence and security organizations listed in the Second Schedule. These include IB, RAW, DRI, Directorate of Enforcement, NCB, BSF, CRPF, ITBP, CISF, NSG, Assam Rifles, SSB, NTRO, and FIU, among others. However, Section 24 contains a critical proviso: even these excluded organizations must disclose information on allegations of corruption and human rights violations. For corruption-related disclosures, the CIC must approve release. State governments can add state-level intelligence organizations to the exclusion list by notification. The proviso prevents security agencies from shielding corruption behind exemptions. Exams test the total count (18 organizations) and the corruption/human rights proviso.',
    },
    {
      section: 'RTI Amendment Act, 2019 — Controversies',
      content:
        'The 2019 Amendment made three changes. First, CIC and IC tenure shifted from a fixed 5 years to "as prescribed by the Central Government." Second, salary and allowances shifted from CEC/EC equivalence to government-prescribed levels. Third, both changes applied to Central and State Information Commissions alike. Critics argued that making tenure and salary dependent on executive discretion undermines CIC independence. The original Act had pegged the CIC\'s status to the CEC precisely to shield it from government pressure. Supporters countered that Information Commissions should not be equated with constitutional bodies like the Election Commission. The government notified rules prescribing a 3-year tenure with possibility of reappointment. The SC upheld the Amendment in 2023. UPSC Mains tests whether the 2019 changes weaken independence and what safeguards the original Act provided.',
    },
    {
      section: 'RTI and Political Parties',
      content:
        'In June 2013, the CIC ruled that six national parties (INC, BJP, CPI, CPI(M), NCP, BSP) qualify as "public authorities" under Section 2(h). The CIC reasoned that these parties receive substantial indirect government funding: free airtime on Doordarshan/AIR, tax exemptions under Section 13A of the Income Tax Act, and subsidized land allotments. All six parties rejected the ruling and refused to comply. They argued that RTI would expose internal strategy to opponents, impede party functioning, and violate donor privacy. The SC has not definitively adjudicated the issue. The matter connects to the Electoral Bond judgment (2024), where the SC struck down the scheme and emphasized the voter\'s right to know about political funding under Art 19(1)(a). UPSC Prelims tests the CIC ruling year (2013), the six parties involved, and the "substantial indirect funding" rationale.',
    },
    {
      section: 'RTI Activists — Threats and Protections',
      content:
        'Over 90 RTI activists have been murdered and hundreds attacked since the Act came into force. Notable cases include Satish Shetty (Maharashtra, 2010, land scams), Amit Jethwa (Gujarat, 2010, illegal mining by a sitting MP), and numerous users in MP, Bihar, and UP. The Whistleblower Protection Act, 2014 offers limited protection, but implementation remains poor. The RTI Act itself contains no physical protection provisions for applicants. The SC has directed states to protect threatened RTI activists. The 2nd ARC recommended a comprehensive whistleblower protection law and witness protection programme. Implementation remains inadequate. The human cost of RTI enforcement remains a Mains-relevant governance topic.',
    },
    {
      section: 'Section 8(2) — The Public Interest Override',
      content:
        'Section 8(2) subordinates the Official Secrets Act, 1923 to transparency: "Notwithstanding anything in the Official Secrets Act, 1923 nor any of the exemptions permissible in accordance with sub-section (1), a public authority may allow access to information, if public interest in disclosure outweighs the harm to the protected interests." This provision requires the PIO or appellate authority to balance harm against public benefit. The CIC has applied this override in cases involving corruption, environmental damage, and misuse of public funds. However, the override uses "may allow," not "shall allow," leaving PIOs with discretion to deny even where public interest favours disclosure. Government servants tend to err toward secrecy. The CIC has recommended making the override mandatory, which would require a legislative amendment. The discretionary vs mandatory distinction is a Mains analytical question.',
    },
    {
      section: 'RTI and Record Management',
      content:
        'Section 4(1)(a) requires every public authority to maintain catalogued and indexed records. Section 6(3) requires a PIO who does not hold the requested information to transfer the application to the correct authority within 5 days. Section 7(9) directs that information be provided in the form requested unless doing so would disproportionately divert resources. Poor record management remains the biggest practical obstacle. Many departments lack proper records, making compliance impossible even when willing. Digitization under Digital India has improved access but remains incomplete at district and block levels. The CIC treats destruction of records after an RTI request as a punishable offence under Section 20. The 5-day transfer rule and the "disproportionate diversion" proviso appear in objective-type questions.',
    },
    {
      section: 'International Comparison — RTI Laws Worldwide',
      content:
        'India\'s RTI Act ranks among the world\'s strongest transparency laws. Sweden enacted the first freedom of information law in 1766. The US passed FOIA in 1966. The UK enacted its FOI Act in 2000. Over 130 countries now have RTI or FOI laws. India\'s Act stands out for its broad definition of "information" and "public authority," the 30-day time limit (many countries allow 30-60 days), direct penalty provisions for PIOs, the two-tier appellate mechanism, the public interest override over the Official Secrets Act, and mandatory proactive disclosure under Section 4. India lags in implementation: Mexico has a strong independent transparency institute (INAI), and Sweden has embedded transparency in administrative culture. India faces poor record management, Commission pendency, attacks on activists, and bureaucratic resistance. Comparative questions appear in UPSC Mains (GS-II governance) essays.',
    },
    {
      section: 'Impact and Assessment of the RTI Act',
      content:
        'The RTI Act is the most used transparency law globally, with an estimated 5-6 million applications filed annually. It has exposed irregularities in the Commonwealth Games (2010), the Adarsh Housing Society scam, illegal mining in Karnataka, fake encounters, and PDS allocation discrepancies. Challenges persist: CIC pendency exceeds 35,000 cases; over 90 activists have been murdered; proactive disclosure under Section 4 remains inadequate; many authorities resist compliance; Section 20 penalties are rarely imposed; and political parties have refused to comply with the 2013 CIC ruling. Despite these gaps, the Act remains one of the most significant democratic reforms in post-independence India. UPSC Mains frequently frames RTI as a "success with implementation gaps" analytical question.',
    },
    {
      section: 'RTI and the Right to Privacy — Balancing Transparency',
      content:
        'Section 8(1)(j) exempts personal information unrelated to public activity whose disclosure would cause unwarranted invasion of privacy. This exemption is qualified: information that cannot be denied to Parliament or a State Legislature cannot be denied to any person. The SC in K.S. Puttaswamy v. Union of India (2017) declared privacy a fundamental right under Art 21, intensifying the transparency-privacy tension. In CBSE v. Aditya Bandopadhyay (2011), the SC called RTI a "sunshine law" but warned against surveillance. The CIC has held that official information about public servants (salaries, transfers, disciplinary proceedings) is not "personal information" under Section 8(1)(j) and must be disclosed. Private lives of public servants unrelated to duties remain protected. The Digital Personal Data Protection Act (2023) creates a new personal data framework whose interaction with RTI disclosure obligations is still being clarified. The privacy-transparency balance is a high-frequency Mains question.',
    },
    {
      section: 'Pendency Crisis and Institutional Challenges',
      content:
        'Information Commissions face a severe institutional crisis. The CIC has over 35,000 pending second appeals, with some waiting 2-3 years. Many SICs have worse backlogs relative to capacity. Root causes include persistent vacancies (positions remain unfilled for months or years), inadequate infrastructure and staff, a growing volume of applications (5-6 million annually), delays in first appeals pushing more cases to second appeal, and the absence of statutory time limits for CIC/SIC disposal of second appeals. Satark Nagrik Sangathan and the Centre for Equity Studies have documented the crisis through annual assessments. The 2019 Amendment\'s shorter notified tenure (3 years with reappointment) may discourage strong candidates. The SC has noted the pendency problem but has not mandated specific timelines. Proposed reforms include mandatory appointment timelines, increasing Commissioner numbers, establishing benches in different cities, and strengthening first appeals to reduce Commission burden. The institutional weakness of the appellate mechanism is a Mains governance and ethics topic.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'One of the most tested topics across all competitive exams. UPSC asks about exemptions under Section 8 (10 grounds), the appellate mechanism (30 days first appeal, 90 days second appeal), the 2019 Amendment (tenure/salary changes), proactive disclosure (Section 4 — 17 categories), CIC composition and selection committee (PM, LoP, Cabinet Minister), Second Schedule exclusions (18 organizations, corruption/HR proviso), CIC ruling on political parties (2013), Section 8(2) public interest override, application fee (Rs 10, BPL exempt), and time limits (30 days, 48 hours for life/liberty). SSC exams test the penalty provisions (Rs 250/day, max Rs 25,000).',
}
