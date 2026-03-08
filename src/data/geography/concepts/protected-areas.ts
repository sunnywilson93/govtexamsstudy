import type { SubjectConcept } from '@/types/subject-notes'

export const protectedAreasConcept: SubjectConcept = {
  topic: 'protected-areas',
  title: 'Protected Areas of India',
  description:
    'India has an extensive network of protected areas — 106 National Parks, 567 Wildlife Sanctuaries, 105 Conservation Reserves, 220 Community Reserves, 18 Biosphere Reserves, and 52 Tiger Reserves. These areas collectively cover about 5.26% of India\'s geographic area and are critical for biodiversity conservation.',
  category: 'Environment & Ecology',
  keyDates: [
    { year: '106 National Parks', event: 'Highest protection; no grazing, cultivation, or forestry allowed' },
    { year: '567 Wildlife Sanctuaries', event: 'Limited human activity permitted; can be upgraded to National Park' },
    { year: '52 Tiger Reserves', event: 'Under Project Tiger (1973); core (critical habitat) and buffer zones' },
    { year: '18 Biosphere Reserves', event: 'Under UNESCO MAB Programme; 12 included in World Network of BRs' },
    { year: '75 Ramsar Sites', event: 'Wetlands of international importance under Ramsar Convention (2023)' },
    { year: 'Jim Corbett', event: 'India\'s first National Park (1936, Uttarakhand); first Tiger Reserve (1973)' },
    { year: 'Tiger Census 2022', event: 'India has 3,167 tigers — 75% of world\'s wild tiger population' },
  ],
  notes: [
    {
      section: 'National Parks',
      content:
        'National Parks are the highest category of protection under the Wildlife Protection Act 1972 (WLPA). No human habitation, grazing, cultivation, or forestry is allowed inside a National Park. Only the State Legislature can alter boundaries. India has 106 National Parks covering about 44,378 sq km (1.35% of geographic area). Key National Parks: Jim Corbett (Uttarakhand — first NP, 1936; Bengal Tiger), Kaziranga (Assam — one-horned rhinoceros, highest tiger density; World Heritage Site), Ranthambore (Rajasthan — Bengal tiger, open dry deciduous), Gir (Gujarat — Asiatic Lion, only habitat), Sundarbans (West Bengal — Royal Bengal Tiger, mangroves), Kanha (MP — Barasingha/hard-ground swamp deer), Bandhavgarh (MP — highest tiger density in central India), Periyar (Kerala — elephants, in Cardamom Hills), Silent Valley (Kerala — tropical evergreen, Lion-tailed Macaque), Bandipur (Karnataka — part of Nilgiri Biosphere Reserve), Hemis (Ladakh — largest NP in India by area, snow leopard), Namdapha (Arunachal Pradesh — 4 big cats: tiger, leopard, snow leopard, clouded leopard), Valley of Flowers (Uttarakhand — alpine meadows, UNESCO WHS), Keibul Lamjao (Manipur — only floating NP, Sangai deer).',
    },
    {
      section: 'Wildlife Sanctuaries & Conservation Reserves',
      content:
        'Wildlife Sanctuaries (WLS) are protected areas where certain human activities like grazing, firewood collection, and forestry may be permitted if not detrimental to wildlife. State Government can declare a WLS. India has 567 WLS covering about 1,22,420 sq km. A WLS can be upgraded to a National Park. Key sanctuaries: Bharatpur/Keoladeo Ghana (Rajasthan — migratory birds, UNESCO WHS), Chilika (Odisha — Irrawaddy dolphins, migratory birds), Bhitarkanika (Odisha — saltwater crocodiles, Olive Ridley nesting), Manas (Assam — Golden Langur, Pygmy Hog), Wild Ass (Little Rann of Kutch, Gujarat — Indian Wild Ass/Khur), Gahirmatha (Odisha — world\'s largest Olive Ridley sea turtle nesting), Nagarhole/Rajiv Gandhi (Karnataka — elephants, tigers), Dandeli (Karnataka), Point Calimere (Tamil Nadu — flamingos). Conservation Reserves (105) are areas between protected areas to serve as wildlife corridors; declared by State Government after consultation with local communities. Community Reserves (220) are managed by local communities; relatively new category added by WLPA Amendment 2002.',
    },
    {
      section: 'Tiger Reserves & Project Tiger',
      content:
        'Project Tiger was launched on April 1, 1973, by the Government of India to protect the Bengal Tiger. Initially covered 9 reserves; now India has 52 Tiger Reserves across 18 states. The National Tiger Conservation Authority (NTCA, est. 2006) is the statutory body overseeing tiger conservation. Tiger Reserves have two zones: Core/Critical Tiger Habitat (CTH — inviolate, no human activity) and Buffer Zone (limited, regulated activities). Tiger Census (All India Tiger Estimation) uses camera traps and the capture-mark-recapture method. India\'s tiger population has grown from 1,411 (2006) to 3,167 (2022) — India houses 75% of the world\'s wild tigers. Key Tiger Reserves: Jim Corbett (Uttarakhand — first), Sundarbans (West Bengal — mangrove habitat), Kaziranga (Assam — highest density), Bandhavgarh (MP), Ranthambore (Rajasthan), Sariska (Rajasthan — tiger reintroduction after local extinction), Panna (MP — successful reintroduction), Nagarjunasagar-Srisailam (AP/Telangana — largest TR), Periyar (Kerala), Satpura (MP), Kanha (MP), Pench (MP-Maharashtra), Tadoba (Maharashtra), Bandipur (Karnataka), Nagarhole (Karnataka).',
    },
    {
      section: 'Biosphere Reserves',
      content:
        'Biosphere Reserves (BRs) are designated under UNESCO\'s Man and the Biosphere (MAB) Programme. They aim to reconcile conservation of biological diversity with sustainable use. BRs have three zones: (1) Core Zone — strictly protected, no human activity, equivalent to National Park/Wildlife Sanctuary; (2) Buffer Zone — surrounds core, limited research and education activities, traditional use; (3) Transition Zone — outermost, sustainable resource management, settlements, tourism. India has 18 Biosphere Reserves; 12 are included in the UNESCO World Network of Biosphere Reserves: Nilgiri (first BR in India — 1986, Tamil Nadu-Karnataka-Kerala; tiger, elephant, tahr), Gulf of Mannar (Tamil Nadu — marine, dugong), Sundarbans (West Bengal), Nanda Devi (Uttarakhand), Nokrek (Meghalaya — Red Panda, citrus gene pool), Pachmarhi (MP), Simlipal (Odisha), Great Nicobar (A&N Islands — southernmost, saltwater crocodile), Agasthyamalai (Kerala-TN), Amarkantak (MP-Chhattisgarh — origin of Narmada and Son), Panna (MP — diamond, tiger), and Khangchendzonga (Sikkim). BRs not yet in World Network: Manas, Dibru-Saikhowa, Dehang-Debang, Cold Desert (Spiti, HP), Seshachalam Hills (AP), Kachchh (Gujarat).',
    },
    {
      section: 'Other Protected Area Categories',
      content:
        'Ramsar Wetlands: India has 75 Ramsar Sites (as of 2023) covering about 13.3 million hectares. Tamil Nadu has the most Ramsar sites (16), followed by UP (10). Notable: Chilika Lake, Vembanad-Kol, Sundarbans, Loktak, Sambhar, Wular, East Kolkata Wetlands. World Heritage Sites (Natural): India has 7 Natural World Heritage Sites — Kaziranga, Manas, Keoladeo Ghana, Sundarbans, Nanda Devi & Valley of Flowers, Western Ghats, Great Himalayan National Park. Elephant Reserves: 33 across India; protect elephant corridors and habitats; Project Elephant (1992). Marine Protected Areas: Gulf of Mannar Marine National Park, Wandur Marine NP (Andaman), Mahatma Gandhi Marine NP (Andaman), Gulf of Kutch Marine NP. Eco-Sensitive Zones (ESZ): buffer zones (up to 10 km) around National Parks and Wildlife Sanctuaries; regulated activities; notified by MoEFCC. Sacred Groves: community-protected forest patches with religious significance; found across India — Devvan (Maharashtra), Sarna (Jharkhand), Kavus (Kerala); contribute to biodiversity conservation through traditional practices.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Protected areas is among the most frequently tested topics in UPSC Prelims (3-5 questions yearly on NPs, tiger reserves, biosphere reserves, and Ramsar sites). Questions match park-state-species associations. SSC/RRB exams test first/largest NP, tiger census numbers, and scheme names (Project Tiger, Project Elephant). New Ramsar site announcements are perennial current affairs.',
}
