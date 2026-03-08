import type { SubjectConcept } from '@/types/subject-notes'

export const sustainableDevelopmentConcept: SubjectConcept = {
  topic: 'sustainable-development',
  title: 'Sustainable Development & Environment',
  description:
    'Environmental economics, carbon markets, climate finance, circular economy, and India\'s sustainable development framework.',
  category: 'Social & Contemporary',
  keyDates: [
    { year: '1972', event: 'UN Conference on Human Environment (Stockholm) — India participated; led to creation of MoEF' },
    { year: '1987', event: 'Brundtland Report defined sustainable development — "meeting present needs without compromising future generations"' },
    { year: '1992', event: 'Rio Earth Summit — UNFCCC, CBD, Agenda 21 adopted' },
    { year: '2015', event: 'Paris Agreement on Climate Change — limit global warming to 1.5-2°C above pre-industrial levels' },
    { year: '2023', event: 'India\'s Green Credit Programme launched — market-based mechanism for environmental actions' },
    { year: '2022', event: 'India updated NDC — 50% non-fossil fuel energy, 45% carbon intensity reduction by 2030' },
    { year: '2023', event: 'COP28 Dubai — first Global Stocktake; agreement to "transition away from fossil fuels"' },
  ],
  notes: [
    {
      section: 'Sustainable Development — Framework',
      content:
        'Sustainable Development: Development that meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987). Three Pillars: Economic growth, Social inclusion, Environmental protection. India\'s approach: India argues for "Common but Differentiated Responsibilities" (CBDR) — developed countries should bear greater burden due to historical emissions. India\'s per capita emissions (~2.4 tonnes CO2) are well below the global average (~4.7 tonnes) and far below the US (~14 tonnes). India\'s total emissions are 3rd largest (after China, US) but per capita emissions are low. Climate Justice: India advocates that developing countries need fiscal space and technology transfer to achieve low-carbon growth. Loss and Damage Fund agreed at COP27 (2022) for vulnerable nations — a key demand of developing countries.',
    },
    {
      section: 'Carbon Markets & Pricing',
      content:
        'Carbon Pricing: Putting a price on carbon emissions to incentivise reduction. Two approaches: (1) Carbon Tax: Direct tax on fossil fuel emissions (India had a Coal Cess — now subsumed into GST Compensation Cess). (2) Emissions Trading System (ETS) / Cap-and-Trade: Set a cap on total emissions, allocate permits, allow trading. EU ETS is the largest. India\'s Carbon Credit Trading Scheme (CCTS, 2023): Under Energy Conservation (Amendment) Act 2022. Designated consumers must achieve emission reduction targets or buy carbon credits. Bureau of Energy Efficiency (BEE) under Ministry of Power administers the scheme. PAT (Perform, Achieve and Trade): For energy-intensive industries — set sector-specific energy consumption targets, trade Energy Saving Certificates (ESCerts). Article 6 of Paris Agreement: Framework for international carbon markets — cooperative approaches (6.2), new market mechanism (6.4). India has significant potential as a carbon credit supplier.',
    },
    {
      section: 'Circular Economy & Resource Efficiency',
      content:
        'Circular Economy: Reduce, Reuse, Recycle — replace the linear "take-make-dispose" model. India\'s NITI Aayog has published a Circular Economy Action Plan covering 11 focus areas: Municipal solid waste, e-waste, construction & demolition waste, agricultural waste, steel, aluminium, EV batteries, textiles, plastics, end-of-life vehicles, solar panels. EPR (Extended Producer Responsibility): Producers responsible for end-of-life management of their products. India has EPR frameworks for plastic packaging, e-waste, batteries, tyres. Plastic Waste Management: Single-use plastic ban (75 identified items banned from July 2022). SUP includes items like straws, plates, cups, cutlery. Swachh Bharat Mission: Solid waste management (segregation at source, waste-to-energy, compost). GOBARdhan: Converting biodegradable waste into biogas/CBG (Compressed Biogas).',
    },
    {
      section: 'Climate Finance',
      content:
        'Climate Finance: Developed countries pledged $100 billion/year by 2020 for developing countries — target unmet until 2022. COP29 (Baku, 2024): New Collective Quantified Goal (NCQG) of $300 billion/year by 2035 — developing countries demanded $1.3 trillion. Green Climate Fund (GCF): Largest dedicated climate fund. India is both a contributor and recipient. National Adaptation Fund for Climate Change (NAFCC): Rs 350 crore for state-level adaptation projects in India. Green Bonds: Bonds where proceeds are used for climate/environmental projects. India issued its first Sovereign Green Bond in January 2023 (Rs 16,000 crore). Used for solar/wind projects, metro rail, afforestation. ESG (Environmental, Social, Governance): Framework for sustainable investing. SEBI mandated Business Responsibility and Sustainability Reporting (BRSR) for top 1,000 listed companies. Climate risk disclosure becoming mandatory for financial institutions.',
    },
    {
      section: 'India\'s Environmental Laws & Initiatives',
      content:
        'Key Laws: Environment Protection Act 1986 (umbrella legislation), Wildlife Protection Act 1972, Forest Conservation Act 1980 (amended 2023 — renamed Van (Sanrakshan Evam Samvardhan) Adhiniyam), Biological Diversity Act 2002, National Green Tribunal Act 2010. EIA (Environmental Impact Assessment): Mandatory for developmental projects. EIA Notification 2006 (amended 2020 — controversial dilution). National Action Plan on Climate Change (NAPCC): 8 missions. International Solar Alliance (ISA): India-France initiative (2015), HQ Gurugram, 120+ members — promote solar energy in tropical countries. LiFE (Lifestyle for Environment): PM Modi\'s initiative at COP26 — individual-level behavioural change for sustainability. Coalition for Disaster Resilient Infrastructure (CDRI): India-led initiative launched at UN Climate Action Summit 2019, HQ Delhi — promote disaster-resilient infrastructure globally.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Sustainable development is a major UPSC topic — questions on Paris Agreement, carbon markets, SDGs, and India\'s climate commitments appear regularly in both Prelims and Mains. SSC exams test Green Bonds, ISA, and plastic bans. Banking exams ask about ESG and green finance. COP outcomes and India\'s NDC are frequently tested in current affairs.',
}
