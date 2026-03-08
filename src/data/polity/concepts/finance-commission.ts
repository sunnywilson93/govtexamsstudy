import type { SubjectConcept } from '@/types/subject-notes'

export const financeCommissionConcept: SubjectConcept = {
  topic: 'finance-commission',
  title: 'Finance Commission',
  description:
    'The Finance Commission is a constitutional body established under Article 280 to recommend the distribution of tax revenues between the Centre and States. It is constituted every five years and plays a crucial role in fiscal federalism by ensuring a fair allocation of financial resources.',
  category: 'Bodies & Special',
  keyDates: [
    { year: '1951', event: 'First Finance Commission constituted under Art 280 with K.C. Neogy as Chairman' },
    { year: '1973', event: 'Tax devolution formula formalized; horizontal distribution among states based on multiple criteria' },
    { year: '2015', event: '14th Finance Commission (Y.V. Reddy) increased states\' share in central taxes from 32% to 42% — the largest-ever increase' },
    { year: '2017', event: 'GST implemented; changed the fiscal landscape significantly for subsequent Finance Commissions' },
    { year: '2020', event: '15th Finance Commission (N.K. Singh) submitted report; recommended 41% devolution to states (reduced from 42% due to creation of Ladakh UT and changed composition)' },
  ],
  notes: [
    {
      section: 'Constitutional Provisions (Art 280)',
      content:
        'Article 280(1): the President shall constitute a Finance Commission within two years of the Constitution\'s commencement and thereafter at the expiration of every fifth year, or earlier. Article 280(2): Parliament determines the qualifications for members and their selection procedure. Composition: a Chairman and 4 other members appointed by the President. The Chairman must have experience in public affairs; other members should include persons with special knowledge of finance and accounts, administration, economics, or experience in financial matters. The FC submits its report to the President, who causes it to be laid before each House of Parliament (Art 281). The recommendations are advisory — the government is not constitutionally bound to accept them, but in practice, most recommendations on tax devolution are accepted.',
    },
    {
      section: 'Functions and Recommendations',
      content:
        'The Finance Commission recommends: (1) Distribution of net proceeds of taxes between the Centre and States (vertical devolution) and allocation among states (horizontal devolution) — Art 280(3)(a). (2) Principles governing grants-in-aid from the Consolidated Fund of India to states — Art 280(3)(b). (3) Measures needed to augment the Consolidated Fund of a state to supplement resources of panchayats and municipalities — Art 280(3)(bb) added by the 73rd Amendment. (4) Any other matter referred by the President in the interest of sound finance — Art 280(3)(d). The horizontal distribution formula uses criteria such as: population (1971 Census historically, 2011 Census used by 15th FC), area, forest and ecology, income distance (poorer states get more), demographic performance, and tax effort.',
    },
    {
      section: 'Vertical and Horizontal Devolution',
      content:
        'Vertical devolution: the share of states in the net proceeds of central taxes (called the "divisible pool"). The 14th FC recommended 42% (the highest ever), and the 15th FC recommended 41% (the slight reduction was due to the newly created UTs of J&K and Ladakh). Horizontal devolution: the distribution of the states\' share among individual states. The 15th FC used the following criteria: income distance (45% weight), area (15%), population 2011 (15%), demographic performance (12.5%), forest and ecology (10%), tax effort (2.5%). Income distance ensures that poorer states receive a higher share. The FC also recommends revenue deficit grants, performance-based grants, and sector-specific grants (e.g., health, local bodies). The shift to 2011 Census (from 1971) was controversial — southern states with lower population growth felt penalized.',
    },
    {
      section: 'Finance Commission vs Planning Commission/NITI Aayog',
      content:
        'The Finance Commission is a constitutional body (Art 280); the Planning Commission (1950-2014) was a non-constitutional, non-statutory body; NITI Aayog (2015-present) is also non-constitutional. FC deals with distribution of tax revenues (statutory transfers); the Planning Commission dealt with plan grants and resource allocation for five-year plans. The coexistence of FC and Planning Commission created overlap and confusion — the Sarkaria Commission recommended rationalization. After NITI Aayog replaced the Planning Commission, the FC\'s role became more central. Finance Commission transfers are formulaic and transparent; NITI Aayog provides policy advice and competitive grants. The GST Council (Art 279A) has added another dimension to fiscal federalism — it decides tax rates and compensation to states.',
    },
    {
      section: 'State Finance Commissions (SFC)',
      content:
        'Article 243I (73rd Amendment) and Art 243Y (74th Amendment) require the Governor to constitute a State Finance Commission every 5 years to review the financial position of panchayats and municipalities. The SFC recommends: distribution of state tax revenue between the state and local bodies; taxes, duties, tolls, and fees that may be assigned to local bodies; grants-in-aid from the state Consolidated Fund; and measures to improve their financial position. In practice, SFC recommendations are often ignored or partially implemented by state governments. The 15th FC recommended that state governments should accept SFC recommendations within 6 months and submit action-taken reports.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Very important for UPSC and banking exams. Key tested areas: Art 280 provisions, composition, functions, vertical vs horizontal devolution, criteria for distribution, 14th and 15th FC recommendations, FC vs Planning Commission/NITI Aayog distinction, and SFC provisions. Questions on specific devolution percentages and criteria weights are common.',
}
