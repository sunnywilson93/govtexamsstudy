import type { SubjectConcept } from '@/types/subject-notes'

export const municipalitiesConcept: SubjectConcept = {
  topic: 'municipalities',
  title: 'Municipalities (Urban Local Government)',
  description:
    'The 74th Constitutional Amendment Act (1992) added Part IXA (Articles 243P-243ZG) and the Twelfth Schedule to the Constitution, giving constitutional status to urban local bodies. It established three types of municipalities: Nagar Panchayat, Municipal Council, and Municipal Corporation.',
  category: 'Local Government',
  keyDates: [
    { year: '1687', event: 'Madras (Chennai) Municipal Corporation established — first municipal corporation in India' },
    { year: '1726', event: 'Municipal corporations established in Bombay (Mumbai) and Calcutta (Kolkata)' },
    { year: '1882', event: 'Lord Ripon\'s Resolution on Local Self-Government — considered the "Magna Carta" of local self-government in India' },
    { year: '1992', event: '74th Constitutional Amendment Act passed; added Part IXA (Art 243P-243ZG) and Twelfth Schedule (18 subjects)' },
    { year: '1 Jun 1993', event: '74th Amendment came into force' },
    { year: '2005', event: 'Jawaharlal Nehru National Urban Renewal Mission (JNNURM) launched — aimed at infrastructure improvement and governance reforms in cities' },
    { year: '2014', event: 'Smart Cities Mission, AMRUT launched — urban transformation programs building on municipal governance' },
  ],
  notes: [
    {
      section: 'Types of Municipalities',
      content:
        'Article 243Q: three types of municipalities — (1) Nagar Panchayat: for transitional areas (rural areas transitioning to urban); (2) Municipal Council (Nagar Palika): for smaller urban areas; (3) Municipal Corporation (Nagar Nigam/Mahanagar Palika): for larger urban areas. The Governor notifies areas as transitional, smaller urban, or larger urban based on population, density, revenue generated, employment in non-agricultural activities, and other factors. Some large cities also have special arrangements (e.g., Delhi — New Delhi Municipal Council is a statutory body, not under 74th Amendment). Cantonment Boards are administered by the Ministry of Defence and are outside the 74th Amendment framework.',
    },
    {
      section: 'Composition and Reservation',
      content:
        'Article 243R: all seats shall be filled by direct election from territorial constituencies (wards). The state legislature may provide for representation of: persons with special knowledge/experience in municipal administration, MPs/MLAs/MLCs, chairpersons of committees. Article 243T: reservation of seats for SCs and STs proportional to their population; not less than 1/3 of total seats reserved for women (including within SC/ST seats); states may provide reservation for OBCs. Article 243U: tenure of 5 years; if dissolved, elections must be held within 6 months; the reconstituted body serves only the remainder of the original term. The chairperson of a municipality may be elected directly by the people or indirectly by elected members — the state legislature decides the method.',
    },
    {
      section: 'Powers, Functions, and Twelfth Schedule',
      content:
        'Article 243W: state legislatures may endow municipalities with powers and authority for self-government, including preparation of plans for economic development and social justice, and performance of functions related to 18 matters in the Twelfth Schedule. The Twelfth Schedule includes: urban planning, regulation of land-use and construction, roads and bridges, water supply, public health and sanitation, fire services, urban forestry and ecology, safeguarding interests of weaker sections (including SCs/STs), slum improvement, urban poverty alleviation, provision of urban amenities (parks, gardens), burials and cremations, cattle ponds, vital statistics (births and deaths), public amenities (street lighting, parking, bus stops), regulation of slaughterhouses and tanneries, and public libraries. Actual devolution varies significantly across states — only a few states have fully transferred all 18 functions.',
    },
    {
      section: 'Finance, Elections, and District Planning',
      content:
        'Article 243X: state legislatures may authorize municipalities to levy taxes, duties, tolls, fees; assign state-collected taxes to municipalities; provide grants-in-aid. Article 243Y: State Finance Commission (same body constituted under Art 243I for panchayats) reviews municipal finances and recommends revenue distribution. Article 243ZA: State Election Commission conducts municipal elections. Article 243ZD: District Planning Committee (DPC) — constituted at district level with at least 4/5 elected members (from panchayats and municipalities in proportion to rural-urban population); consolidates plans prepared by panchayats and municipalities into a draft development plan for the district. Article 243ZE: Metropolitan Planning Committee (MPC) — for metropolitan areas (10 lakh+ population); at least 2/3 elected members (from municipalities and panchayats); prepares the draft development plan for the metropolitan area.',
    },
    {
      section: '73rd vs 74th Amendment — Comparison',
      content:
        'Both were passed in 1992 and share similar features: constitutional status to local bodies, mandatory reservations (SCs/STs/women), 5-year term with mandatory fresh elections, State Election Commission for elections, State Finance Commission for finances, and powers to prepare plans for economic development and social justice. Key differences: 73rd Amendment covers rural areas (panchayats) with 29 subjects in Eleventh Schedule; 74th Amendment covers urban areas (municipalities) with 18 subjects in Twelfth Schedule. 73rd provides for Gram Sabha (no equivalent in 74th for urban areas). 73rd establishes a three-tier system; 74th has three types of municipalities but not necessarily three tiers. 74th additionally provides for District Planning Committee and Metropolitan Planning Committee. Both share the same SFC and SEC at the state level.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Important for all exams. Key tested areas: three types of municipalities, Twelfth Schedule subjects (vs Eleventh Schedule comparison), reservation provisions, DPC and MPC composition, Lord Ripon\'s contribution, and 73rd vs 74th Amendment comparison. SSC exams ask about the first municipal corporation in India and the number of Twelfth Schedule subjects.',
}
