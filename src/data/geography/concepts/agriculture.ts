import type { SubjectConcept } from '@/types/subject-notes'

export const agricultureConcept: SubjectConcept = {
  topic: 'agriculture',
  title: 'Indian Agriculture',
  description:
    'Agriculture is the backbone of the Indian economy, employing about 42% of the workforce and contributing about 18% to GDP. India is the world\'s largest producer of milk, pulses, and spices, and the second largest producer of rice, wheat, sugarcane, cotton, and fruits & vegetables.',
  category: 'Economic Geography',
  keyDates: [
    { year: 'Green Revolution', event: '1960s-70s: introduced HYV seeds, irrigation, fertilizers; led by M.S. Swaminathan and Norman Borlaug' },
    { year: 'White Revolution', event: 'Operation Flood (1970-96): led by Verghese Kurien; made India world\'s largest milk producer' },
    { year: 'Net Sown Area', event: 'About 140 million hectares — 43% of total geographic area; highest among large countries' },
    { year: 'Kharif Season', event: 'June-October: rice, maize, jowar, bajra, cotton, jute, sugarcane sown with monsoon onset' },
    { year: 'Rabi Season', event: 'October-March: wheat, barley, gram, mustard, peas sown in winter' },
    { year: 'Zaid Season', event: 'March-June: short summer crops like watermelon, muskmelon, cucumber, moong dal' },
    { year: 'MSP', event: 'Minimum Support Price announced by CACP (Commission for Agricultural Costs & Prices) for 23 crops' },
    { year: 'Top Rice', event: 'West Bengal is the largest rice-producing state; India is 2nd largest global producer after China' },
  ],
  notes: [
    {
      section: 'Cropping Seasons & Patterns',
      content:
        'India has three distinct cropping seasons: (1) Kharif (June-October, monsoon season): crops sown at onset of SW Monsoon and harvested in autumn; major crops — rice (paddy), maize, jowar (sorghum), bajra (pearl millet), ragi (finger millet), groundnut, cotton, jute, sugarcane, soybean, arhar/tur (pigeon pea); (2) Rabi (October-March, winter season): crops sown in October-November and harvested in spring (March-April); major crops — wheat, barley, gram (chickpea), mustard/rapeseed, linseed, peas, potato, oats; depend on winter rains and irrigation; (3) Zaid (March-June, summer season): short season crops — watermelon, muskmelon, cucumber, moong, urad, vegetables. India\'s cropping intensity (ratio of gross cropped area to net sown area) is about 140-142%, meaning about 40% of land is cropped more than once. Punjab and Haryana have the highest cropping intensity (>180%) due to extensive irrigation.',
    },
    {
      section: 'Major Food Crops',
      content:
        'Rice: India\'s most important food crop; grown in areas with rainfall >100 cm or irrigated lands; leading states — West Bengal, Uttar Pradesh, Punjab, Andhra Pradesh, Tamil Nadu; India is the world\'s 2nd largest producer (after China) and largest exporter of rice. Wheat: Second most important food grain; rabi crop; needs cool, dry climate and fertile alluvial/loamy soil; leading states — Uttar Pradesh, Punjab, Haryana, Madhya Pradesh, Rajasthan; India is 2nd largest global producer after China. Millets: Jowar (sorghum — Maharashtra, Karnataka), bajra (pearl millet — Rajasthan, Gujarat, Haryana), ragi (finger millet — Karnataka, Tamil Nadu); highly nutritious, drought-resistant ("nutri-cereals"); India declared 2023 as International Year of Millets (UN resolution). Pulses: India is the largest producer AND consumer of pulses; main types — gram/chana (Madhya Pradesh, Rajasthan), tur/arhar (Maharashtra, Karnataka), moong and urad; pulses fix atmospheric nitrogen, improving soil fertility.',
    },
    {
      section: 'Commercial & Plantation Crops',
      content:
        'Sugarcane: Tropical crop; India is 2nd largest global producer (after Brazil); leading states — Uttar Pradesh (largest), Maharashtra, Karnataka; used for sugar, jaggery, molasses, ethanol. Cotton: "White Gold"; kharif crop grown on black/regur soil; leading states — Gujarat (largest), Maharashtra, Telangana, Madhya Pradesh; India is 2nd largest producer after China. Jute: "Golden Fibre"; kharif crop needing high temperature and humidity; grown mainly in West Bengal (80% of production), Bihar, Assam; used for sacking, hessian, carpet backing. Tea: Plantation crop; India is 2nd largest producer (after China); Assam (50%+ production, CTC tea), West Bengal (Darjeeling — "Champagne of teas"), Tamil Nadu (Nilgiris), Kerala; requires well-drained acidic soil, cool climate, regular rainfall. Coffee: India is 6th largest global producer; Karnataka (Coorg, Chikmagalur, Hassan — 70% of production), Kerala, Tamil Nadu; Arabica and Robusta varieties. Rubber: Requires hot, humid climate and >200 cm rainfall; Kerala (90%+ production), Tamil Nadu, Karnataka, Tripura.',
    },
    {
      section: 'Agricultural Revolutions in India',
      content:
        'Green Revolution (1960s-70s): Introduction of High Yielding Variety (HYV) seeds (developed by Norman Borlaug), chemical fertilizers, pesticides, and irrigation; spearheaded by M.S. Swaminathan in India; focused on wheat (Punjab, Haryana) and rice; made India self-sufficient in food grains; criticisms include regional imbalance, ecological degradation, and income inequality. White Revolution (Operation Flood, 1970-96): Led by Dr. Verghese Kurien through NDDB (National Dairy Development Board); three phases; made India the world\'s largest milk producer; empowered millions of rural dairy farmers through cooperatives like Amul. Blue Revolution: Refers to fisheries development; India is 3rd largest fish producer globally and 2nd in aquaculture. Yellow Revolution: Oilseed production. Pink Revolution: Onion and prawn production. Silver Fibre Revolution: Cotton. Golden Revolution: Horticulture and honey production. Second Green Revolution (Evergreen Revolution) aims for sustainable productivity growth across all regions including eastern India.',
    },
    {
      section: 'Agricultural Challenges & Government Initiatives',
      content:
        'Key challenges: fragmented landholdings (average size 1.08 hectares, declining further), dependence on monsoon (only 52% of agricultural land is irrigated), soil degradation, depleting groundwater, low productivity compared to global averages, post-harvest losses (25-30% for fruits/vegetables), rural indebtedness. Government initiatives: PM-KISAN (Rs 6,000/year to farmers in 3 instalments), Soil Health Card Scheme (soil testing and nutrient recommendations), PM Fasal Bima Yojana (crop insurance), e-NAM (electronic National Agriculture Market — connects APMCs for transparent pricing), PM-KUSUM (solar energy for agriculture), National Mission on Sustainable Agriculture (NMSA), Neem Coated Urea Policy (reduces urea overuse), Micro Irrigation Fund (promotes drip and sprinkler irrigation). MSP (Minimum Support Price) is announced for 23 crops by CACP based on cost of production (A2+FL formula). FCI procures wheat and rice at MSP for the Public Distribution System (PDS).',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Agriculture is a very high-weight topic across all government exams. UPSC Prelims tests crop-region-climate associations, revolution leaders, and government schemes. SSC/RRB exams ask about largest producing states, cropping seasons, and factual recall about crop characteristics. Current affairs questions on MSP, PM-KISAN, and International Year of Millets are common.',
}
