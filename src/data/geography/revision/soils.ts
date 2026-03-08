import type { SubjectRevision } from '@/types/subject-notes'

export const soilsRevision: SubjectRevision = {
  topic: 'soils',
  bullets: [
    "Alluvial soil is the most widespread — covers about 43% of India; found in Northern Plains and river valleys.",
    "Alluvial soils have two types: Bhangar (older, with kankar) and Khadar (newer, more fertile).",
    "Black soil (Regur) is derived from Deccan Trap basalt — self-ploughing, rich in iron and magnesium.",
    "Black soil is ideal for cotton ('Black Cotton Soil') — high moisture retention; found in Maharashtra, Gujarat, MP.",
    "Red soil covers about 18.5% of India — red colour due to iron oxide (haematite); found on granite/gneiss rocks.",
    "Laterite soil forms in heavy rainfall areas through leaching — rich in iron/aluminium, poor in fertility.",
    "Laterite hardens when exposed to air — used for making bricks (Latin 'later' = brick).",
    "Forest/Mountain soils are found in Himalayas and Western Ghats — rich in humus but deficient in potash.",
    "Desert/Arid soils are sandy, saline, poor in humus — found in western Rajasthan.",
    "Peaty/Marshy soils are waterlogged, acidic, rich in organic matter — found in Sundarbans, Kerala.",
    "About 130 million hectares (45% of land) in India is affected by soil erosion.",
    "Soil Health Card Scheme (2015) provides soil analysis and nutrient recommendations to farmers."
],
  comparisons: [
    {
        "title": "Major Soil Types of India",
        "headers": [
            "Soil Type",
            "Colour",
            "Region",
            "Key Crop",
            "Key Property"
        ],
        "rows": [
            [
                "Alluvial",
                "Light grey to ash",
                "Northern Plains, deltas",
                "Wheat, rice, sugarcane",
                "Most fertile, most widespread"
            ],
            [
                "Black (Regur)",
                "Black",
                "Maharashtra, Gujarat, MP",
                "Cotton",
                "Self-ploughing, moisture retention"
            ],
            [
                "Red",
                "Red/yellow",
                "Tamil Nadu, Jharkhand, Odisha",
                "Millets, pulses",
                "Rich in iron, poor in nitrogen"
            ],
            [
                "Laterite",
                "Brick red",
                "Western Ghats, NE India",
                "Tea, coffee, cashew",
                "Leached, acidic, used for bricks"
            ],
            [
                "Desert",
                "Sandy brown",
                "Western Rajasthan",
                "Millet (with irrigation)",
                "Sandy, saline, kankar nodules"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "Alluvial Soil Zones — North to South",
        "mnemonic": "Bhabar, Terai, Bhangar, Khadar (BTBK)",
        "explanation": "From Himalayan foothills southward: Bhabar (pebbles), Terai (marshy), Bhangar (old alluvium), Khadar (new alluvium)."
    }
],
}
