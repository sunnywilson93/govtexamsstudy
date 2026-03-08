import type { SubjectConcept } from '@/types/subject-notes'

export const upscSpscConcept: SubjectConcept = {
  topic: 'upsc-spsc',
  title: 'UPSC & State Public Service Commissions',
  description:
    'The Union Public Service Commission (UPSC) and State Public Service Commissions (SPSCs) are constitutional bodies established under Articles 315-323 to conduct examinations and advise on recruitment and service matters for civil services. The UPSC is the central recruiting agency for all-India services and central services.',
  category: 'Bodies & Special',
  keyDates: [
    { year: '1919', event: 'Government of India Act 1919 provided for establishment of a Public Service Commission in India' },
    { year: '1926', event: 'First Public Service Commission established on 1 October 1926 with Sir Ross Barker as Chairman (Federal PSC under GoI Act 1935 later replaced it)' },
    { year: '1935', event: 'Government of India Act 1935 provided for Federal PSC and Provincial PSCs' },
    { year: '1950', event: 'UPSC constituted under Art 315 of the Constitution; first Chairman under the Constitution: Sir A. Ramaswami Mudaliar' },
    { year: '1979', event: 'Kothari Committee recommended changes to UPSC examination pattern; led to the introduction of optional subjects and preliminary examination' },
  ],
  notes: [
    {
      section: 'Composition and Appointment',
      content:
        'Article 315: there shall be a UPSC for the Union and a State PSC for each state. Two or more states can have a Joint State PSC (JSPSC) — created by Parliament on request of state legislatures (Art 315(2)). Composition (Art 316): the UPSC consists of a Chairman and other members appointed by the President; SPSC members are appointed by the Governor. At least half the members must be persons who have held office under the Government of India or a state for at least 10 years. The number of members is not fixed by the Constitution — it is determined by the President/Governor. Term: 6 years or 65 years of age, whichever is earlier (SPSC members: 6 years or 62 years). The Chairman of UPSC is not eligible for any government employment after retirement; other members of UPSC can become Chairman of UPSC or SPSC; SPSC Chairman can become UPSC Chairman or member.',
    },
    {
      section: 'Removal and Independence',
      content:
        'Article 317: the Chairman or member of UPSC/SPSC can be removed by the President only on the ground of misbehavior after an inquiry by the Supreme Court (reference under Art 145). The President can also remove a member if: (a) adjudged insolvent; (b) engages in paid employment outside office; (c) is in the President\'s opinion unfit due to infirmity of mind or body. The Chairman or member cannot hold any government office after ceasing to be a member (restrictions on post-retirement employment ensure independence). Conditions of service cannot be varied to their disadvantage after appointment. The expenses of UPSC are charged on the Consolidated Fund of India (and SPSC expenses on the state\'s Consolidated Fund). These provisions ensure the independence of the Commission from executive interference.',
    },
    {
      section: 'Functions (Art 320)',
      content:
        'The UPSC performs the following functions: (1) conducts examinations for appointments to All India Services (IAS, IPS, IFS), Central Services (Group A and B), and specialist posts; (2) assists states in framing and operating joint recruitment schemes (Art 320(2)); (3) advises the government on: matters relating to methods of recruitment, principles in appointments, promotions, transfers, disciplinary matters, claims for costs/pensions for injuries sustained in government service, and any matter referred by the President. Key examinations conducted by UPSC: Civil Services Examination (CSE — for IAS, IPS, IFS, etc.), Combined Defence Services (CDS), National Defence Academy (NDA), Engineering Services, Combined Medical Services, Indian Forest Service, and Central Armed Police Forces (CAPF). The UPSC is only an advisory body — the government is not bound by its advice but must report to Parliament if advice is not accepted (Art 323).',
    },
    {
      section: 'UPSC vs SPSC vs Joint PSC',
      content:
        'UPSC: established under Art 315 for the Union; conducts exams for central and all-India services; advises the President; annual report submitted to the President, laid before Parliament (Art 323). SPSC: established under Art 315 for each state; conducts exams for state civil services; advises the Governor; annual report to Governor, laid before state legislature. JSPSC: created by Parliament at the request of concerned states; Chairman and members appointed by the President; serves two or more states; e.g., the proposed merger of smaller state commissions. Key differences: UPSC members are appointed by the President, SPSC members by the Governor; UPSC Chairman retires at 65, SPSC at 62; UPSC Chairman can\'t hold any further office, SPSC Chairman can become UPSC Chairman/member; UPSC expenses are charged on Consolidated Fund of India, SPSC on state Consolidated Fund.',
    },
    {
      section: 'Limitations and Exemptions',
      content:
        'Article 321: Parliament/state legislatures can extend the functions of UPSC/SPSC. Article 322: UPSC/SPSC expenses are charged on the Consolidated Fund (not voted on). Article 323: annual report of UPSC must be laid before Parliament; if any advice of UPSC is not accepted, the government must state reasons. The government is NOT bound to accept UPSC\'s advice — it is only an advisory body. Areas exempted from UPSC consultation (Art 320(3) proviso): posts for which the President/Governor makes specific rules; temporary/officiating appointments for less than one year; posts in scheduled areas or tribal areas; posts which the President declares to be too few to justify UPSC consultation. The 42nd Amendment had tried to exempt some areas from UPSC purview, but the 44th Amendment restored the position.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Directly relevant to exam candidates. Key tested areas: Art 315-323 provisions, composition (at least half must have 10 years government service), removal (SC inquiry for misbehavior), advisory nature, UPSC vs SPSC differences (especially age limits), post-retirement restrictions, and annual report to Parliament. SSC and UPSC both test these factual provisions.',
}
