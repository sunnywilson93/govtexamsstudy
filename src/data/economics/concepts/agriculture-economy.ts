import type { SubjectConcept } from '@/types/subject-notes'

export const agricultureEconomyConcept: SubjectConcept = {
  topic: 'agriculture-economy',
  title: 'Agriculture & Food Security',
  description:
    'Agricultural policy, Green Revolution, MSP, PDS, food security, crop insurance, and agrarian reforms in India.',
  category: 'Planning & Development',
  keyDates: [
    { year: '1965', event: 'Green Revolution began — introduction of HYV seeds (Norman Borlaug, M.S. Swaminathan)' },
    { year: '2013', event: 'National Food Security Act (NFSA) — legal right to subsidised food for 67% of population' },
    { year: '2016', event: 'Pradhan Mantri Fasal Bima Yojana (PMFBY) launched — revamped crop insurance' },
    { year: '2019', event: 'PM-KISAN launched — Rs 6,000/year direct income support to farmer families' },
    { year: '2020', event: 'Three farm laws enacted (repealed in November 2021)' },
    { year: '2004', event: 'National Commission on Farmers (Swaminathan Commission) recommended MSP at C2+50%' },
    { year: '1960', event: 'Intensive Agricultural District Programme (IADP) — precursor to Green Revolution' },
  ],
  notes: [
    {
      section: 'Agriculture in Indian Economy',
      content:
        'Agriculture contributes ~15% of GDP but employs ~42% of the workforce — indicating low productivity and disguised unemployment. India is the largest producer of milk, spices, pulses, and jute globally. Second largest in rice, wheat, fruits, and vegetables. Key concerns: Small and marginal farmers (86% of total) hold only 47% of cultivated area. Average farm size: 1.08 hectares (declining due to fragmentation). Cropping pattern: Kharif (monsoon, June-October: rice, maize, jowar, bajra, cotton, sugarcane), Rabi (winter, October-March: wheat, mustard, gram, barley), Zaid (summer: watermelon, cucumber, vegetables). India has the largest irrigated area globally but ~51% of net sown area is still rainfed.',
    },
    {
      section: 'Green Revolution & After',
      content:
        'Green Revolution (1960s-70s): Introduction of High Yielding Variety (HYV) seeds, chemical fertilisers, irrigation, and mechanisation. Led by M.S. Swaminathan (India) and Norman Borlaug (globally). Impact: India became self-sufficient in food grains (from ship-to-mouth to buffer stocks). Punjab, Haryana, western UP were the main beneficiaries. Focused mainly on wheat and rice. Criticisms: Regional disparity (limited to irrigated areas), crop disparity (neglected pulses, oilseeds), environmental damage (soil degradation, water table depletion, chemical pollution), socio-economic inequality (benefited large farmers). White Revolution (Operation Flood, 1970): Verghese Kurien — dairy cooperative model (Amul). India became the largest milk producer. Blue Revolution: Fisheries development. Yellow Revolution: Oilseeds. Rainbow Revolution: Comprehensive agricultural growth.',
    },
    {
      section: 'MSP & Procurement',
      content:
        'Minimum Support Price (MSP): Government announces MSP for 23 crops each season based on CACP (Commission for Agricultural Costs and Prices) recommendations. Kharif (14 crops) and Rabi (6 crops) + sugarcane FRP + copra + jute. MSP formula: Since 2018-19, MSP is set at 1.5 times the A2+FL cost (actual paid cost + imputed family labour). Swaminathan Commission recommended C2+50% (comprehensive cost including rent on land and interest on capital). A2 = actual paid-out costs, FL = family labour, C2 = A2+FL+rent+interest. Procurement: FCI (Food Corporation of India) and state agencies procure at MSP. Mainly rice and wheat. Buffer Stock norms: Centre maintains minimum buffer of food grains. Central Pool stocks often exceed buffer norms. MSP-based procurement is concentrated in Punjab, Haryana, MP, Chhattisgarh — many states and crops have limited procurement.',
    },
    {
      section: 'Food Security — PDS & NFSA',
      content:
        'Public Distribution System (PDS): Network of ~5.3 lakh Fair Price Shops distributing subsidised food grains. Targeted PDS (TPDS) since 1997 — distinguishes between BPL, APL, and AAY (Antyodaya Anna Yojana — poorest of the poor). National Food Security Act 2013 (NFSA): Legal right to subsidised food. Coverage: 75% rural, 50% urban (67% overall). Entitlement: 5 kg per person per month at subsidised prices (rice Rs 3/kg, wheat Rs 2/kg, coarse grains Rs 1/kg). AAY households: 35 kg per family. NFSA is the largest food security programme in the world. Challenges: Targeting errors (inclusion/exclusion), leakage, poor quality grains, FCI inefficiency. One Nation One Ration Card (ONORC): Portability — migrant workers can access PDS anywhere. PM Garib Kalyan Anna Yojana (PMGKAY): Free grains during COVID — extended and merged into NFSA.',
    },
    {
      section: 'Agricultural Reforms & Schemes',
      content:
        'PM-KISAN: Rs 6,000/year in 3 instalments directly to farmer families. Over 11 crore beneficiaries. PM Fasal Bima Yojana (PMFBY): Crop insurance with low farmer premiums (2% kharif, 1.5% rabi). Uses satellite/drone technology for claim assessment. Soil Health Card Scheme: Provides soil nutrient status and fertiliser recommendations. PM Krishi Sinchai Yojana (PMKSY): "Per drop, more crop" — micro-irrigation promotion. e-NAM (National Agriculture Market): Electronic trading platform linking APMCs across states. Agricultural Infrastructure Fund: Rs 1 lakh crore for post-harvest infrastructure. Kisan Credit Card (KCC): Short-term crop loans at subsidised interest (4% after subvention). Natural Farming: Promoted through National Mission on Natural Farming — chemical-free, low-cost agriculture (Andhra Pradesh model). Farmer Producer Organisations (FPOs): 10,000 FPOs being set up to aggregate small farmers for better market access.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Agriculture is a high-priority topic for all exams. UPSC tests MSP mechanisms, food security, Green Revolution impact, and agricultural reforms. SSC exams ask about PM-KISAN details, NFSA provisions, and crop seasons. Banking exams test KCC, priority sector lending for agriculture, and crop insurance. The farm laws debate and MSP formula are frequently tested.',
}
