import type { SubjectConcept } from '@/types/subject-notes'

export const naturalVegetationConcept: SubjectConcept = {
  topic: 'natural-vegetation',
  title: 'Natural Vegetation of India',
  description:
    'India possesses diverse natural vegetation ranging from tropical evergreen forests in the Western Ghats to alpine meadows in the Himalayas. India has about 24.62% of its geographical area under forest cover (2021 assessment). The Forest Survey of India conducts biennial assessments.',
  category: 'Physical Geography',
  keyDates: [
    { year: 'Forest Cover', event: 'India has 7,13,789 sq km forest cover — 21.71% of geographic area (ISFR 2021)' },
    { year: 'Total Tree Cover', event: 'Forest + Tree cover = 80.9 million hectares — 24.62% of geographic area' },
    { year: 'Madhya Pradesh', event: 'Largest forest cover by area among all states (77,482 sq km)' },
    { year: 'Mizoram', event: 'Highest percentage of forest cover to total geographic area (84.53%)' },
    { year: 'National Forest Policy 1988', event: 'Target: 33% geographic area under forests (60% for hills, 20% for plains)' },
    { year: '1927', event: 'Indian Forest Act — classified forests into Reserved, Protected, and Village forests' },
    { year: '2006', event: 'Forest Rights Act (FRA) — recognized rights of forest-dwelling tribal communities' },
  ],
  notes: [
    {
      section: 'Tropical Evergreen Forests',
      content:
        'Also called Tropical Rain Forests, found in areas receiving rainfall above 200 cm with short dry season. Distribution: Western Ghats (western slopes), Andaman & Nicobar Islands, Upper Assam, coastal strip of Western Ghats, parts of Tamil Nadu and Odisha coasts. Trees are tall (45-60 m), with dense canopy that prevents sunlight from reaching the ground. Trees do not shed leaves simultaneously (evergreen). Commercially less exploited due to dense undergrowth and heterogeneous composition. Important species: Rosewood (Dalbergia), Ebony, Mahogany, rubber, cinchona, and bamboo. Semi-evergreen forests are a transition between evergreen and deciduous — found in less rainy parts of the Western Ghats, NE India; species include laurel, white cedar.',
    },
    {
      section: 'Tropical Deciduous Forests',
      content:
        'The most widespread forest type in India, covering about 65% of India\'s forest area. Found in areas receiving 70-200 cm rainfall. Trees shed their leaves during the dry season (6-8 weeks) to conserve moisture. Two sub-types: (1) Moist Deciduous Forests (100-200 cm rainfall) — found along the Shiwaliks, eastern slopes of Western Ghats, NE India, Jharkhand, Chhattisgarh, Odisha; important species: teak (most dominant), sal, sandalwood, bamboo, rosewood, mahua, mulberry; commercially most valuable forests; (2) Dry Deciduous Forests (70-100 cm rainfall) — found in peninsular India, Uttar Pradesh, Bihar; trees are lower, grasslands interspersed; important species: teak, sal, peepal, neem. Teak is found mainly in the moist deciduous forests of central and southern India. Sal dominates in the eastern moist deciduous forests (Jharkhand, Chhattisgarh, Odisha).',
    },
    {
      section: 'Thorn Forests & Mangroves',
      content:
        'Thorn Forests: Found in areas receiving less than 70 cm rainfall — northwestern India (Rajasthan, Gujarat, Punjab, Haryana), rain-shadow areas of Western Ghats. Trees are scattered, stunted, with long roots and thorny/wax-coated leaves to reduce water loss. Important species: babool (kikar/acacia), ber, wild date palm, khejri (state tree of Rajasthan — associated with the Chipko-like Khejarli sacrifice by the Bishnoi community in 1730), cactus, euphorbia. Mangrove Forests: Found along sheltered coastlines, river deltas, and tidal creeks. India has about 4,992 sq km of mangroves (ISFR 2021). The Sundarbans (West Bengal) is the largest mangrove area in India and the world — home to the Royal Bengal Tiger. Other important mangrove areas: Bhitarkanika (Odisha), Pichavaram (Tamil Nadu), Gulf of Kutch (Gujarat), Andaman & Nicobar Islands. Mangroves provide coastal protection from cyclones and tsunamis and serve as breeding grounds for fish and shellfish. Rhizophora, Avicennia, and Sonneratia are common mangrove species.',
    },
    {
      section: 'Montane & Alpine Vegetation',
      content:
        'Montane forests show a vertical zonation with altitude in the Himalayas: (1) Tropical moist deciduous (foothills up to 1,000 m) — sal, teak, bamboo; (2) Sub-tropical (1,000-2,000 m) — broad-leaved evergreen trees like oak, chestnut, magnolia, and laurel; in the western Himalayas: chir pine (Pinus roxburghii) dominates; (3) Temperate forests (1,500-3,000 m) — deodar, blue pine, spruce, silver fir in western Himalayas; oak, birch, maple in eastern Himalayas; temperate grasslands called bugyals found here; (4) Sub-alpine (3,000-3,500 m) — juniper, rhododendron, birch; trees become stunted; (5) Alpine meadows (3,500-4,500 m) — treeless grasslands used for seasonal grazing (summer pastures called margs in Kashmir, bugyals in Uttarakhand); alpine flowers bloom briefly; (6) Above 4,500 m — permanent snow and tundra vegetation; mosses, lichens only. Similar but shorter zonation occurs on the Western Ghats: Shola forests (stunted tropical montane evergreen forests) with grasslands occur above 1,500 m in the Nilgiris, Anaimalai, and Palani hills.',
    },
    {
      section: 'Forest Policy & Conservation',
      content:
        'The National Forest Policy 1988 aims for 33% of total area under forest cover (60% for hills/mountains, 20% for plains). The Indian Forest Act 1927 classified forests into: Reserved Forests (most restricted, highest protection), Protected Forests (people can collect forest produce unless prohibited), and Village Forests (managed by village communities). The Forest Conservation Act 1980 restricts diversion of forest land for non-forest purposes without Central Government approval. The Forest Rights Act 2006 (FRA) recognizes the rights of forest-dwelling Scheduled Tribes and other traditional forest dwellers, including community forest resource rights. Joint Forest Management (JFM) involves local communities in forest protection. India has 52 Tiger Reserves (Project Tiger, 1973), 33 Elephant Reserves, and numerous national parks and wildlife sanctuaries. The compensatory afforestation scheme (CAMPA) ensures afforestation when forest land is diverted.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Natural vegetation and forest types are essential for both geography and environment sections. UPSC asks about forest types, their distribution, and species-region associations. SSC exams test factual recall — largest mangrove, state with highest forest percentage, and tree species. Current affairs questions on ISFR reports, FRA, and afforestation schemes are also common.',
}
