import type { SubjectConcept } from '@/types/subject-notes'

export const oceanographyConcept: SubjectConcept = {
  topic: 'oceanography',
  title: 'Oceanography',
  description:
    'Oceans cover about 71% of Earth\'s surface and play a crucial role in regulating climate, weather, and sustaining life. Oceanography covers ocean floor topography, salinity, temperature, tides, waves, and marine resources. The Indian Ocean is strategically vital for India\'s trade and security.',
  category: 'World Geography',
  keyDates: [
    { year: 'Pacific Ocean', event: 'Largest and deepest ocean — covers about 165.25 million sq km' },
    { year: 'Mariana Trench', event: 'Deepest point on Earth — Challenger Deep at 11,034 m in the Pacific Ocean' },
    { year: 'Average Salinity', event: 'About 35 ppt (parts per thousand); Dead Sea has highest salinity (~340 ppt)' },
    { year: 'Average Depth', event: 'Average ocean depth is about 3,688 m; average temperature about 3.5°C' },
    { year: 'Tides', event: 'Caused by gravitational pull of Moon (primary) and Sun; Spring tides and Neap tides' },
    { year: 'UNCLOS', event: 'UN Convention on the Law of the Sea (1982) — defines maritime zones and rights' },
    { year: 'Indian Ocean', event: '3rd largest ocean; India is centrally located; 80% of global oil trade passes through it' },
  ],
  notes: [
    {
      section: 'Ocean Floor Topography',
      content:
        'The ocean floor has a distinct topography: (1) Continental Shelf — shallow, gently sloping extension of the continent; depth up to 200 m; width varies (broad off eastern USA, narrow off western South America); rich in marine life, petroleum, and mineral deposits; India\'s continental shelf is about 530,000 sq km; (2) Continental Slope — steep descent from shelf edge to the deep ocean floor; 200-3,000 m depth; incised by submarine canyons; (3) Continental Rise — transition zone of accumulated sediments; (4) Abyssal Plains — flat, deep ocean floors at 3,000-6,000 m; covered with fine sediments; largest flat areas on Earth; (5) Mid-Ocean Ridges — underwater mountain chains formed at divergent plate boundaries; Mid-Atlantic Ridge (longest — 16,000 km), Central Indian Ridge; (6) Ocean Trenches — deepest parts, at subduction zones; Mariana Trench (11,034 m — Challenger Deep), Tonga Trench, Philippine Trench, Sunda Trench (Indian Ocean); (7) Seamounts — underwater volcanic mountains; flat-topped ones called Guyots; (8) Coral Reefs — biogenic formations in shallow tropical waters.',
    },
    {
      section: 'Ocean Temperature & Salinity',
      content:
        'Temperature: Average ocean surface temperature is about 17°C (higher in tropics, lower at poles). Temperature decreases with depth — a rapid decrease zone called the Thermocline (200-1,000 m) separates warm surface water from cold deep water. The thermocline is most developed in tropical oceans and absent at poles. Deep ocean below thermocline is uniformly cold (about 2-4°C). Warm water is less dense and stays on top (thermal stratification). Salinity: Average ocean salinity is 35 ppt (35 grams of dissolved salts per kg of seawater). Sodium chloride constitutes about 78% of dissolved salts. Salinity varies: highest near tropics (about 36-37 ppt — high evaporation, less rainfall), lower near equator (heavy rainfall dilutes), lowest near poles (ice melt). The Dead Sea has about 340 ppt (actually a lake, not an ocean). Lake Van (Turkey) and Great Salt Lake (USA) also have extreme salinity. Isohalines are lines connecting points of equal salinity. Salinity affects density, ocean currents, and marine life distribution.',
    },
    {
      section: 'Tides, Waves & Tsunamis',
      content:
        'Tides are periodic rise and fall of sea level caused by gravitational pull of the Moon (primary, closer) and the Sun (secondary). Spring Tides: occur during full moon and new moon when Sun, Moon, and Earth are aligned (syzygy); gravitational forces combine; highest high tides and lowest low tides. Neap Tides: occur during first and third quarters when Sun and Moon are at right angles to Earth (quadrature); gravitational forces partially cancel; smallest tidal range. Most coasts experience semi-diurnal tides (two highs and two lows daily). Gulf of Khambhat has the highest tidal range in India. Bay of Fundy (Canada) has the world\'s highest tidal range (about 16 m). Tidal energy can be harnessed at places with high tidal range. Waves: caused primarily by wind blowing over water surface. Wave height depends on wind speed, duration, and fetch (distance of open water). Tsunamis: seismic sea waves caused by underwater earthquakes, volcanic eruptions, or landslides; travel at 700-800 km/h in open ocean but are barely noticeable; devastate coastlines — 2004 Indian Ocean Tsunami (9.1 magnitude earthquake off Sumatra) killed over 230,000 people including about 12,400 in India.',
    },
    {
      section: 'Maritime Zones & UNCLOS',
      content:
        'UNCLOS (UN Convention on the Law of the Sea, 1982, effective 1994) established the legal framework for maritime zones: (1) Territorial Sea — up to 12 nautical miles (nm) from baseline; full sovereignty of the coastal state; (2) Contiguous Zone — 12-24 nm; state can enforce customs, immigration, fiscal, and sanitary laws; (3) Exclusive Economic Zone (EEZ) — up to 200 nm; sovereign rights for exploring/exploiting natural resources (fishing, minerals, energy); India\'s EEZ is about 2.01 million sq km; (4) Continental Shelf — up to 200 nm (or up to 350 nm if geological shelf extends further); rights over seabed and subsoil resources; (5) High Seas — beyond EEZ; open to all states; freedom of navigation, fishing, scientific research; resources are "common heritage of mankind." International Seabed Authority (ISA) administers deep-sea mining in international waters. India has been allocated exploration blocks in the Central Indian Ocean for polymetallic nodules. UNCLOS also established the International Tribunal for the Law of the Sea (ITLOS) in Hamburg.',
    },
    {
      section: 'Indian Ocean & Marine Resources',
      content:
        'The Indian Ocean is the 3rd largest ocean (about 70.56 million sq km). India is centrally located on its northern rim, giving it strategic advantage. About 80% of global oil trade and 50% of container traffic passes through the Indian Ocean. Key chokepoints: Strait of Hormuz (Persian Gulf — 20% of world oil), Strait of Malacca (between Malay Peninsula and Sumatra — busiest strait), Bab-el-Mandeb (Red Sea entrance), Mozambique Channel. India\'s maritime interests are protected by the Indian Navy, Coast Guard, and the SAGAR (Security and Growth for All in the Region) doctrine. Marine resources include: fish (India is 3rd largest fish producer — about 14.16 million tonnes; marine fish: sardines, mackerel, tuna from Kerala, Gujarat, Tamil Nadu coasts), petroleum (Bombay High, KG Basin offshore), polymetallic nodules (rich in manganese, cobalt, nickel, copper — India has pioneer investor status in Central Indian Ocean Basin), minerals from continental shelf, tidal and wave energy potential. Marine protected areas include Gulf of Mannar, Gulf of Kutch, Andaman reefs.',
    },
  ],
  examTags: ['UPSC CSE', 'SSC CGL', 'SSC CHSL', 'IBPS PO', 'RRB NTPC', 'CDS', 'State PSCs'],
  examRelevance:
    'Oceanography is important for UPSC (maritime zones, UNCLOS, ocean floor features) and SSC/RRB (deepest trench, largest ocean, tidal facts). Current affairs on India\'s Deep Ocean Mission, EEZ disputes, Indian Ocean security (SAGAR, Quad), and marine resource exploration are tested. Tsunami warning systems and coral reef conservation are also relevant.',
}
