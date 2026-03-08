import type { SubjectConcept } from '@/types/subject-notes'

export const panchayatiRajConcept: SubjectConcept = {
  topic: 'panchayati-raj',
  title: 'Panchayati Raj System',
  description:
    'The Panchayati Raj system is the cornerstone of local self-government in rural India. The 73rd Constitutional Amendment Act (1992) added Part IX (Articles 243-243O) and the Eleventh Schedule to the Constitution, giving constitutional status to panchayats and establishing a three-tier system of local governance.',
  category: 'Local Government',
  keyDates: [
    { year: '1957', event: 'Balwant Rai Mehta Committee recommended a three-tier Panchayati Raj system; Rajasthan became the first state to establish it (2 October 1959)' },
    { year: '1977', event: 'Ashok Mehta Committee recommended a two-tier system and constitutional protection for panchayats' },
    { year: '1985', event: 'G.V.K. Rao Committee recommended revitalization of Panchayati Raj and giving it a key role in planning' },
    { year: '1986', event: 'L.M. Singhvi Committee recommended constitutional status for panchayats and Nyaya Panchayats for village-level justice' },
    { year: '1992', event: '73rd Constitutional Amendment Act passed; added Part IX (Art 243-243O) and Eleventh Schedule (29 functional subjects)' },
    { year: '24 Apr 1993', event: '73rd Amendment came into force; National Panchayati Raj Day celebrated on 24 April' },
    { year: '1996', event: 'Panchayats (Extension to Scheduled Areas) Act (PESA) extended Panchayati Raj to Fifth Schedule areas with modifications' },
    { year: '2004', event: 'Ministry of Panchayati Raj created as a separate ministry at the Centre' },
  ],
  notes: [
    {
      section: 'Constitutional Framework (Part IX)',
      content:
        'Article 243: definitions. Article 243A: Gram Sabha — the body consisting of all registered voters in a panchayat area; exercises powers and performs functions as the state legislature may provide. Article 243B: three-tier system — village level (Gram Panchayat), intermediate level (Panchayat Samiti/Block Panchayat), and district level (Zila Parishad). States with population under 20 lakh need not have the intermediate level. Article 243C: composition — all members directly elected (except as provided by law); chairpersons of lower tiers may be ex-officio members of higher tiers; state legislatures may provide for representation of MPs and MLAs, SC/STs proportional to population. Article 243D: mandatory reservation for SCs and STs proportional to population; not less than 1/3 seats reserved for women (including within SC/ST reserved seats); states may provide reservation for OBCs.',
    },
    {
      section: 'Elections, Tenure, and Finance',
      content:
        'Article 243E: every panchayat shall continue for 5 years; elections must be completed before the expiry of 5 years or within 6 months of dissolution (reconstituted panchayat serves only the remainder of the original term). Article 243K: elections supervised and conducted by the State Election Commission (SEC), headed by the State Election Commissioner appointed by the Governor. Article 243H: state legislatures may authorize panchayats to levy taxes, duties, tolls, and fees. Article 243I: the Governor shall constitute a State Finance Commission (SFC) every 5 years to review the financial position of panchayats and recommend distribution of taxes between the state and panchayats, grants-in-aid, and measures to improve their financial position. Article 243J: state legislatures may provide for auditing of panchayat accounts.',
    },
    {
      section: 'Functions and Powers',
      content:
        'Article 243G: state legislatures may endow panchayats with powers and authority to function as institutions of self-government — with respect to the preparation of plans for economic development and social justice, and implementation of schemes for the same, including the 29 matters listed in the Eleventh Schedule. The Eleventh Schedule includes: agriculture, land improvement, minor irrigation, animal husbandry, fisheries, social forestry, small-scale industries, rural housing, drinking water, roads, rural electrification, poverty alleviation, education, health and sanitation, family welfare, women and child development, social welfare, welfare of weaker sections (especially SCs/STs), public distribution system, maintenance of community assets, and libraries. States have varying degrees of devolution — Kerala, Karnataka, and West Bengal are considered leaders in devolving functions, finances, and functionaries to panchayats.',
    },
    {
      section: 'PESA and Tribal Areas',
      content:
        'The 73rd Amendment does not apply to Fifth Schedule areas (tribal areas in 10 states) or Sixth Schedule areas (tribal areas in 4 northeastern states). For Fifth Schedule areas, Parliament enacted PESA (Panchayats Extension to Scheduled Areas Act, 1996), which: extends Part IX to Fifth Schedule areas with modifications; empowers Gram Sabhas to safeguard and preserve community resources, traditions, and customs; gives Gram Sabha powers over minor forest produce, water bodies, and minerals; requires consultation with Gram Sabha before land acquisition; prohibits land alienation and restoration of alienated land. PESA applies to 10 states: Andhra Pradesh, Telangana, Chhattisgarh, Gujarat, Himachal Pradesh, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, and Rajasthan. However, implementation has been weak, and many states have not framed rules under PESA.',
    },
    {
      section: 'Committees and Recommendations',
      content:
        'Balwant Rai Mehta Committee (1957): recommended a three-tier system (village, block, district); democratic decentralization; Rajasthan first to implement (1959), followed by Andhra Pradesh. Ashok Mehta Committee (1977): recommended a two-tier system (Mandal Panchayat + Zila Parishad); constitutional status; compulsory taxation power; regular elections. G.V.K. Rao Committee (1985): recommended District Development Agency under Zila Parishad; regular elections every 5 years; Panchayati Raj as the central institution for planning. L.M. Singhvi Committee (1986): recommended constitutional recognition; Gram Sabha as the foundation; Nyaya Panchayats for village justice; adequate financial resources. The 73rd Amendment incorporated recommendations from all these committees. The Second Administrative Reforms Commission (2nd ARC, 2005-09) recommended further strengthening through Activity Mapping (clear delineation of functions across three tiers).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very high-yield for all exams. Key tested areas: committee recommendations, Art 243 series provisions, Eleventh Schedule subjects, reservation provisions (SCs/STs/women), State Election Commission and State Finance Commission, PESA provisions, and comparison with municipalities (74th Amendment). SSC frequently asks about the first state to implement Panchayati Raj and the number of subjects in the Eleventh Schedule.',
}
