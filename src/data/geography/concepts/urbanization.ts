import type { SubjectConcept } from '@/types/subject-notes'

export const urbanizationConcept: SubjectConcept = {
  topic: 'urbanization',
  title: 'Urbanization in India',
  description:
    'India\'s urban population has grown from 62 million (1951) to about 377 million (2011), constituting 31.2% of the total population. Urbanization is accelerating, with projections suggesting 40%+ urban by 2030. Smart Cities Mission, AMRUT, and other schemes aim to improve urban infrastructure.',
  category: 'Human Geography',
  keyDates: [
    { year: 'Urban 2011', event: '31.2% of population (377 million) lives in urban areas; 68.8% rural' },
    { year: 'Census Towns', event: '7,935 total towns in 2011 Census; 475 urban agglomerations' },
    { year: 'Mega Cities', event: 'Mumbai and Delhi are mega cities (10+ million population)' },
    { year: 'Smart Cities', event: '100 cities selected under Smart Cities Mission (2015) for urban transformation' },
    { year: 'AMRUT', event: 'Atal Mission for Rejuvenation and Urban Transformation (2015) — covers 500 cities' },
    { year: 'PMAY-Urban', event: 'Pradhan Mantri Awas Yojana (2015) — Housing for All; targets urban homeless' },
    { year: 'SBM', event: 'Swachh Bharat Mission Urban (2014) — ODF cities, solid waste management' },
  ],
  notes: [
    {
      section: 'Trends & Patterns of Urbanization',
      content:
        'India\'s urbanization rate has grown from 17.3% (1951) to 31.2% (2011). The Census defines "urban" as: (1) Statutory Towns — all places with a municipality, municipal corporation, cantonment board, or notified town area committee; (2) Census Towns — places meeting three criteria: population >5,000, population density >400 per sq km, and >75% male workforce engaged in non-agricultural pursuits. The number of Census Towns (non-notified) jumped from 1,362 (2001) to 3,894 (2011), indicating rapid "invisible urbanization." India has 53 million-plus cities (2011 Census). The largest urban agglomerations: Greater Mumbai (18.4 million), Delhi (16.3 million), Kolkata (14.1 million), Chennai (8.7 million), Bengaluru (8.4 million), Hyderabad (7.7 million). South and West India are more urbanized: Goa (62.2%), Mizoram (52.1%), Tamil Nadu (48.4%), Kerala (47.7%), Maharashtra (45.2%). Himachal Pradesh (10%), Bihar (11.3%), Assam (14.1%) are among the least urbanized.',
    },
    {
      section: 'Problems of Urbanization',
      content:
        'Rapid urbanization has led to numerous challenges: (1) Housing shortage — estimated deficit of 18.7 million urban houses; growth of slums (about 65 million slum population in 2011, 13.7 million slum households); Dharavi (Mumbai) is one of Asia\'s largest slums; (2) Water and sanitation — intermittent water supply, groundwater depletion, inadequate sewerage; only 35% of urban wastewater is treated; (3) Solid waste management — Indian cities generate about 62 million tonnes of solid waste annually; less than 30% is processed; (4) Air pollution — Delhi, Kanpur, Varanasi among most polluted cities globally (WHO data); vehicular emissions, construction dust, industrial pollution; (5) Traffic congestion — insufficient public transport; metro rail systems in Delhi, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, and others; (6) Urban sprawl — unplanned outward expansion eating into agricultural land; (7) Heat island effect — concrete jungle causing higher temperatures; (8) Social issues — inequality, crime, informal sector employment.',
    },
    {
      section: 'Smart Cities Mission & AMRUT',
      content:
        'Smart Cities Mission (2015): Rs 48,000 crore central allocation for 100 selected cities. Objectives: adequate water supply, reliable electricity, solid waste management, efficient mobility/public transport, affordable housing, IT connectivity, e-governance, sustainable environment, citizen safety, health, education. Cities selected through competition (rounds of selection). Area-Based Development (retrofitting, redevelopment, greenfield) + Pan-city Solutions (using technology). Integrated Command and Control Centres (ICCCs) established in most cities. AMRUT (Atal Mission for Rejuvenation and Urban Transformation, 2015): Covers 500 cities focusing on basic urban infrastructure — water supply, sewerage, stormwater drainage, parks, non-motorized transport. AMRUT 2.0 (2021) aims for 100% water supply coverage in all 4,378 statutory towns and 100% sewerage in 500 AMRUT cities. Total investment under AMRUT 2.0: Rs 2.87 lakh crore.',
    },
    {
      section: 'Urban Governance & Planning',
      content:
        'The 74th Constitutional Amendment Act (1992) established Urban Local Bodies (ULBs) as the third tier of governance: Municipal Corporations (for larger cities), Municipalities/Municipal Councils (smaller towns), and Nagar Panchayats/Town Panchayats (transitional areas). The 12th Schedule lists 18 functions of municipalities including urban planning, regulation of land use, public health, water supply, and slum improvement. State Finance Commissions recommend distribution of financial resources to ULBs. Urban planning bodies: Town and Country Planning Departments, Development Authorities (DDA in Delhi, BMDA, etc.), Metropolitan Planning Committees (mandated by Article 243ZE for metropolitan areas with 10+ lakh population). Master Plans guide city development. Challenges in urban governance: weak municipal finances (average per-capita revenue of ULBs is low), overlap of functions between multiple agencies, poor implementation of master plans, unauthorized construction. JNNURM (2005-14) was a key earlier programme for urban reform.',
    },
    {
      section: 'Housing Schemes & Urban Transport',
      content:
        'PMAY-Urban (Pradhan Mantri Awas Yojana, 2015): "Housing for All by 2022" — provides interest subsidy (Credit Linked Subsidy Scheme — CLSS), in-situ slum redevelopment, affordable housing through PPP, and beneficiary-led construction. Over 1.2 crore houses sanctioned. PMAY-Urban 2.0 launched for 2024-2029 targeting 1 crore more houses. Urban transport: Delhi Metro (largest metro network in India — 390+ km), Mumbai Metro (expanding), Bengaluru Metro (Namma Metro), Kolkata Metro (first metro in India — 1984), Chennai Metro, Hyderabad Metro, Kochi Metro, Lucknow Metro. Bus Rapid Transit System (BRTS) in Ahmedabad (Janmarg) is a success model. National Urban Transport Policy (2006, revised 2014) prioritizes public transport, non-motorized transport, and transit-oriented development. Electric Vehicles push: FAME-II scheme promotes EVs; National Electric Mobility Mission Plan targets 6-7 million EVs by 2030. National Transit Oriented Development (TOD) Policy encourages high-density development around transit hubs.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Urbanization is a key geography + governance topic. UPSC tests Smart Cities Mission, AMRUT details, 74th Amendment, and urbanization challenges. SSC/RRB exams ask about largest cities, most urbanized states, and scheme acronyms. Current affairs questions on metro expansions, PMAY statistics, and air quality indices are common.',
}
