import type { SubjectConcept } from '@/types/subject-notes'

export const environmentalPollutionConcept: SubjectConcept = {
  topic: 'environmental-pollution',
  title: 'Environmental Pollution',
  description:
    'Environmental pollution — the contamination of air, water, soil, and noise beyond acceptable limits — is a major challenge for India. India has 39 of the world\'s 50 most polluted cities by PM2.5. Pollution affects public health, ecosystems, and economic productivity.',
  category: 'Environment & Ecology',
  keyDates: [
    { year: 'AQI', event: 'National Air Quality Index launched in 2014 — six categories: Good to Severe' },
    { year: 'NAAQM', event: 'National Clean Air Programme (NCAP, 2019) targets 20-30% reduction in PM by 2024' },
    { year: 'Ganga Action Plan', event: 'Phase I in 1986; Namami Gange (2014) — current Rs 20,000 crore programme' },
    { year: 'NGT', event: 'National Green Tribunal (2010) — specialized environmental court' },
    { year: 'BS-VI', event: 'Bharat Stage VI emission norms implemented from April 2020 (skipping BS-V)' },
    { year: 'SWM Rules', event: 'Solid Waste Management Rules 2016 — mandate source segregation' },
    { year: 'Plastic Ban', event: 'Single-use plastic items banned from July 2022 across India' },
  ],
  notes: [
    {
      section: 'Air Pollution',
      content:
        'India has severe air pollution — 39 of the world\'s 50 most polluted cities are in India (by PM2.5 concentration). Major pollutants: Particulate Matter (PM10, PM2.5 — most harmful), Sulphur Dioxide (SO2 — from coal burning), Nitrogen Oxides (NOx — from vehicles), Carbon Monoxide (CO), Ozone (O3 — secondary pollutant at ground level, formed by reaction of NOx and VOCs in sunlight), Lead, Ammonia (NH3 — from agriculture). Sources: vehicles (largest in cities), industrial emissions, thermal power plants, construction dust, crop burning (stubble burning in Punjab and Haryana — major cause of Delhi\'s winter smog), brick kilns, domestic cooking (biomass fuels). Health impacts: respiratory diseases, lung cancer, cardiovascular diseases — an estimated 1.67 million premature deaths in India annually (Lancet). National Air Quality Index (NAQI): 6 categories from Good (0-50) to Severe (401-500). NCAP (National Clean Air Programme, 2019): targets 40% reduction in PM2.5 and PM10 by 2025-26 in 131 non-attainment cities. BS-VI emission norms (implemented April 2020): among the strictest globally, equivalent to Euro 6.',
    },
    {
      section: 'Water Pollution',
      content:
        'India\'s rivers and water bodies face severe pollution from domestic sewage (largest source — 80% of urban sewage is untreated or partially treated), industrial effluents, agricultural runoff (fertilizers, pesticides), religious and cultural practices. The CPCB has identified 351 polluted river stretches across India. Key polluted rivers: Ganga, Yamuna (most polluted stretch: Wazirabad to Okhla in Delhi), Gomti, Sabarmati, Cooum. Water pollution indicators: Biochemical Oxygen Demand (BOD — high BOD means more organic pollution), Dissolved Oxygen (DO — low DO indicates pollution, harmful to aquatic life), Chemical Oxygen Demand (COD), coliform bacteria count, heavy metals (mercury, lead, chromium, arsenic). Groundwater contamination: arsenic in West Bengal and Bihar (from geological sources), fluoride in Rajasthan and Andhra Pradesh (fluorosis), nitrate from fertilizers. Namami Gange (National Mission for Clean Ganga, 2014): Rs 20,000+ crore; focuses on: no untreated sewage in Ganga; rejuvenation of tributaries; industrial pollution prevention; biodiversity conservation. National Water Quality Monitoring Programme monitors 4,484 stations.',
    },
    {
      section: 'Solid Waste & Plastic Pollution',
      content:
        'India generates about 62 million tonnes of solid waste annually, of which only about 28% is scientifically processed. Urban solid waste composition: organic/biodegradable (50-55%), recyclable (20-25%), inert (15-20%), hazardous (<5%). Solid Waste Management Rules 2016 mandate: source segregation into wet/dry/hazardous; extended producer responsibility (EPR) for packaging; bulk generators must compost or process waste on-site. Plastic pollution: India generates about 3.4 million tonnes of plastic waste annually. Single-use plastic items (plates, cups, straws, ear buds, thin carry bags) banned from July 1, 2022 under Plastic Waste Management Amendment Rules 2021. Extended Producer Responsibility (EPR) obliges manufacturers/brand owners to collect and recycle plastic packaging. E-waste: India is the 3rd largest e-waste generator globally (about 3.2 million tonnes/year); E-Waste Management Rules 2016 (amended 2022) mandate EPR; Moradabad, Seelampur (Delhi), and Bengaluru are major informal e-waste recycling hubs. Biomedical Waste Management Rules 2016 regulate hospital waste through Common Biomedical Waste Treatment Facilities (CBWTFs).',
    },
    {
      section: 'Noise & Soil Pollution',
      content:
        'Noise Pollution: Measured in decibels (dB). Standards (CPCB): Industrial area 75 dB (day)/70 dB (night); Commercial 65/55; Residential 55/45; Silence Zone (near hospitals, schools) 50/40. Sources: traffic, construction, loudspeakers, industries, aircraft, firecrackers. Health effects: hearing loss (exposure above 85 dB), stress, sleep disturbance, cardiovascular issues. The Noise Pollution (Regulation and Control) Rules 2000 set standards and empower authorities to enforce. Supreme Court banned loudspeakers after 10 PM and restricted firecrackers in several orders. Soil Pollution: Caused by excessive use of chemical fertilizers and pesticides (accumulation of heavy metals, persistent organic pollutants), industrial waste dumping, improper waste disposal, oil spills, mining waste. Effects: reduced soil fertility, contamination of food chain, groundwater pollution. Soil health is affected by acidification (in NE India due to heavy rainfall), salinization (in irrigated areas of Punjab, Haryana, Rajasthan), and waterlogging. Soil Health Card Scheme (2015) provides soil analysis and nutrient recommendations to farmers. National Programme for Soil Reclamation addresses alkaline and acidic soils.',
    },
    {
      section: 'Pollution Control Framework',
      content:
        'Legal framework: Water (Prevention and Control of Pollution) Act 1974 — established CPCB and SPCBs; Air (Prevention and Control of Pollution) Act 1981; Environment Protection Act 1986 (umbrella legislation — gave central government powers to take measures for environmental protection); National Green Tribunal Act 2010 — established NGT for expeditious disposal of environmental cases. Key regulatory bodies: Central Pollution Control Board (CPCB — statutory body under Ministry of Environment, Forest & Climate Change/MoEFCC), State Pollution Control Boards (SPCBs), National Green Tribunal (NGT — Principal Bench in Delhi, 4 regional benches). Environmental Impact Assessment (EIA) Notification 2006 (revised 2020): mandates prior environmental clearance for development projects in 8 categories (mining, thermal, infrastructure, etc.); public hearing mandatory for Category A projects. Polluter Pays Principle: the entity causing pollution bears the cost of cleanup — upheld by Supreme Court in multiple judgments (Vellore Citizens Welfare Forum v. UOI, 1996). Precautionary Principle is also adopted in Indian environmental law.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Environmental pollution is extremely high-yield for all exams. UPSC tests pollution laws, NGT judgments, EIA process, and pollution indices. SSC/RRB exams ask about AQI categories, BS-VI norms, and pollution-related facts. Current affairs on NCAP targets, Namami Gange progress, stubble burning solutions, and plastic bans are perennial favorites.',
}
