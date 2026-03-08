import type { SubjectRevision } from '@/types/subject-notes'

export const drainageSystemsRevision: SubjectRevision = {
  topic: 'drainage-systems',
  bullets: [
    "Ganga (2,525 km) is the longest river flowing entirely within India; originates as Bhagirathi from Gangotri Glacier.",
    "Indus (3,180 km) originates near Lake Mansarovar, Tibet; enters India through J&K; its 5 tributaries give Punjab its name.",
    "Under Indus Waters Treaty (1960), India uses eastern rivers (Ravi, Beas, Sutlej); Pakistan uses western rivers (Indus, Jhelum, Chenab).",
    "Brahmaputra (2,900 km) is called Tsangpo in Tibet, Dihang in Arunachal Pradesh; forms Majuli — world's largest river island.",
    "Godavari (1,465 km) is the longest Peninsular river — called 'Dakshin Ganga'; originates at Trimbakeshwar, Nashik.",
    "Krishna (1,400 km) is the 2nd longest Peninsular river; originates at Mahabaleshwar, Maharashtra.",
    "Kaveri (800 km) is called 'Ganga of the South'; forms Shivasamudram Falls in Karnataka.",
    "Narmada and Tapi are exceptions — they flow westward through rift valleys (most Peninsular rivers flow eastward).",
    "Narmada (1,312 km) is the largest west-flowing Peninsular river; originates at Amarkantak, MP.",
    "Kosi is called 'Sorrow of Bihar' due to frequent floods and course changes.",
    "Ghaghara/Ghaghra is the largest tributary of Ganga by volume; Yamuna is the longest tributary.",
    "Sundarbans (Ganga-Brahmaputra delta) is the world's largest delta and mangrove forest.",
    "Wular Lake (J&K) — largest freshwater lake; Chilika (Odisha) — largest brackish water lagoon.",
    "Sambhar Lake (Rajasthan) is the largest inland salt lake in India."
],
  comparisons: [
    {
        "title": "Major Rivers of India",
        "headers": [
            "River",
            "Length (km)",
            "Origin",
            "Drains Into",
            "Key Fact"
        ],
        "rows": [
            [
                "Ganga",
                "2,525",
                "Gangotri Glacier, Uttarakhand",
                "Bay of Bengal",
                "Longest river within India"
            ],
            [
                "Indus",
                "3,180",
                "Near Lake Mansarovar, Tibet",
                "Arabian Sea",
                "Indus Waters Treaty (1960)"
            ],
            [
                "Brahmaputra",
                "2,900",
                "Near Mansarovar, Tibet",
                "Bay of Bengal",
                "World's largest river island (Majuli)"
            ],
            [
                "Godavari",
                "1,465",
                "Trimbakeshwar, Nashik",
                "Bay of Bengal",
                "Longest Peninsular river"
            ],
            [
                "Krishna",
                "1,400",
                "Mahabaleshwar",
                "Bay of Bengal",
                "2nd longest Peninsular river"
            ],
            [
                "Narmada",
                "1,312",
                "Amarkantak, MP",
                "Arabian Sea",
                "Largest west-flowing Peninsular river"
            ],
            [
                "Kaveri",
                "800",
                "Talakaveri, Coorg",
                "Bay of Bengal",
                "Ganga of the South"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "Indus Tributaries — West to East",
        "mnemonic": "Jhelum, Chenab, Ravi, Beas, Sutlej (J-C-R-B-S)",
        "explanation": "The five tributaries of the Indus flowing through Punjab, from west to east. Under the Indus Waters Treaty, India uses the eastern three (R, B, S)."
    },
    {
        "title": "Rivers that flow Westward (NTS)",
        "mnemonic": "Narmada, Tapi, Sabarmati — \"NTS flow West\"",
        "explanation": "Most Peninsular rivers flow east. Narmada and Tapi flow west through rift valleys. Sabarmati also flows to the Arabian Sea."
    }
],
}
