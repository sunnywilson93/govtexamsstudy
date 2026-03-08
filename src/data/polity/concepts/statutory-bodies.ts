import type { SubjectConcept } from '@/types/subject-notes'

export const statutoryBodiesConcept: SubjectConcept = {
  topic: 'statutory-bodies',
  title: 'Important Statutory & Constitutional Bodies',
  description:
    'India has numerous statutory and constitutional bodies that play crucial roles in governance, accountability, and citizen welfare. Constitutional bodies derive their powers from the Constitution, while statutory bodies are created by Acts of Parliament. Understanding the distinction and functions of key bodies is essential for competitive exams.',
  category: 'Bodies & Special',
  keyDates: [
    { year: '1950', event: 'Constitutional bodies established: UPSC, ECI, CAG, Finance Commission, AG, Inter-State Council provision' },
    { year: '1975', event: 'National Commission for SCs and STs established (split into separate commissions in 2004 by 89th Amendment)' },
    { year: '1990', event: 'National Commission for Backward Classes established (given constitutional status by 102nd Amendment, 2018)' },
    { year: '1993', event: 'National Human Rights Commission (NHRC) established under the Protection of Human Rights Act, 1993' },
    { year: '2005', event: 'Central Information Commission (CIC) established under the Right to Information Act, 2005' },
    { year: '2013', event: 'National Green Tribunal functioning; Lokpal and Lokayuktas Act passed (Lokpal appointed in 2019)' },
    { year: '2019', event: 'Lokpal of India appointed for the first time — Justice Pinaki Chandra Ghose became the first Lokpal' },
  ],
  notes: [
    {
      section: 'Constitutional Bodies',
      content:
        'Constitutional bodies are established by the Constitution itself: (1) Election Commission of India (Art 324); (2) Union Public Service Commission (Art 315); (3) State Public Service Commissions (Art 315); (4) Finance Commission (Art 280); (5) Comptroller and Auditor General (Art 148); (6) Attorney General of India (Art 76); (7) Advocate General of State (Art 165); (8) National Commission for Scheduled Castes (Art 338 — 65th Amendment, 1990; separate commission by 89th Amendment, 2003); (9) National Commission for Scheduled Tribes (Art 338A — 89th Amendment, 2003); (10) National Commission for Backward Classes (Art 338B — 102nd Amendment, 2018); (11) Special Officer for Linguistic Minorities (Art 350B — 7th Amendment, 1956); (12) Inter-State Council (Art 263); (13) GST Council (Art 279A — 101st Amendment, 2016). Constitutional bodies have greater autonomy as they derive powers directly from the Constitution.',
    },
    {
      section: 'National Human Rights Commission (NHRC)',
      content:
        'Established by the Protection of Human Rights Act, 1993 (amended 2006, 2019). Composition: a Chairperson (retired CJI or retired SC judge — 2019 amendment), and members including a sitting/retired SC judge, a sitting/retired HC Chief Justice, and two persons with knowledge of human rights. Functions: inquire into complaints of human rights violations; visit jails; review constitutional and legal safeguards; study treaties; recommend measures; spread human rights literacy. Powers: powers of a civil court; can requisition public records; investigate within one year of the incident. Limitations: cannot inquire into complaints against armed forces; recommendations are not binding; no power to punish. The NHRC submits annual reports to the President, laid before Parliament. State Human Rights Commissions (SHRCs) exist at the state level (headed by a retired HC Chief Justice). The 2019 amendment expanded the eligibility for Chairperson and increased the members to include a woman.',
    },
    {
      section: 'Central Information Commission (CIC) and RTI',
      content:
        'The Central Information Commission was established under the Right to Information Act, 2005. Composition: Chief Information Commissioner (CIC) and up to 10 Information Commissioners, appointed by the President on the recommendation of a committee comprising the PM (Chair), Leader of Opposition in Lok Sabha, and a Union Cabinet Minister nominated by the PM. Functions: receives and decides complaints and appeals related to RTI; imposes penalties on Public Information Officers for delays/denials; monitors implementation of RTI Act. The CIC is the final appellate authority for RTI matters. Similarly, State Information Commissions handle RTI appeals at the state level. The RTI Act 2005 is considered one of the most powerful transparency laws in the world — it gives every citizen the right to information from public authorities within 30 days. The RTI (Amendment) Act 2019 gave the Central Government power to prescribe the term, salary, and conditions of CIC and ICs (previously fixed by the Act).',
    },
    {
      section: 'Lokpal and Lokayuktas',
      content:
        'The Lokpal and Lokayuktas Act, 2013 established the Lokpal at the Centre and directed states to establish Lokayuktas. The Lokpal consists of a Chairperson (sitting or retired CJI or SC judge or eminent person) and up to 8 members (half must be judicial members — sitting or retired SC/HC judges). Selection by a committee of PM, Speaker of LS, Leader of Opposition in LS, CJI or a nominee, and an eminent jurist nominated by the President. Jurisdiction: complaints against PM (with restrictions — no complaints on international relations, external/internal security, public order, atomic energy, space unless made by 2/3 of full bench), ministers, MPs, and Group A-D government servants. The PM is excluded from Lokpal\'s jurisdiction in matters of national security, public order, and international relations (with safeguards). The first Lokpal, Justice Pinaki Chandra Ghose, was appointed in 2019. The concept originated from Sweden\'s Ombudsman institution. The First Administrative Reforms Commission (Morarji Desai, 1966) first recommended a Lokpal for India.',
    },
    {
      section: 'Other Important Statutory Bodies',
      content:
        'National Commission for Women (NCW, 1992): statutory body under the NCW Act 1990; reviews legislation, investigates complaints, advises on women\'s rights. National Commission for Minorities (NCM, 1993): under the NCM Act 1992; protects minority rights; monitors safeguards under the Constitution. National Commission for Protection of Child Rights (NCPCR, 2007): under the CPCR Act 2005; monitors implementation of child rights laws. Central Vigilance Commission (CVC, 2003): statutory status under CVC Act 2003; oversees anti-corruption measures; advises on corruption cases; supervisory jurisdiction over CBI in corruption cases. Central Bureau of Investigation (CBI): established by a Government of India resolution in 1963; derives power from the Delhi Special Police Establishment Act 1946 (not an autonomous body — functions under the Ministry of Personnel). National Investigation Agency (NIA, 2009): under the NIA Act 2008; investigates terror-related offences; operates across India without state government permission.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very high-yield. UPSC tests on: constitutional vs statutory body distinction, NHRC composition and limitations, Lokpal provisions and jurisdiction, CIC and RTI, and specific article numbers for constitutional bodies. SSC exams ask about first appointments, composition, and which Act established which body. The distinction between constitutional and statutory bodies is a classic question.',
}
