import type { SubjectRevision } from '@/types/subject-notes'

export const oceanCurrentsRevision: SubjectRevision = {
  "topic": "ocean-currents",
  "bullets": [
    "Ocean currents: continuous, predictable movements of seawater driven by wind, thermohaline differences, Coriolis effect, and basin shape.",
    "Warm currents: Gulf Stream, Kuroshio, Brazil, N Atlantic Drift, Agulhas. Cold currents: Labrador, Canary, Benguela, Peru/Humboldt, California.",
    "Indian Ocean currents reverse seasonally due to monsoon — unique among oceans.",
    "Somali Current reverses: northward (cold upwelling) in summer, southward in winter.",
    "Thermohaline circulation (ocean conveyor belt): density-driven deep circulation; ~1,000 years for one cycle; redistributes heat globally.",
    "Gulf Stream transports 30 million m³/s — keeps Western Europe 5-10°C warmer than similar latitudes.",
    "Upwelling zones produce ~50% of world's fish catch despite covering <1% of ocean area.",
    "El Niño: trade winds weaken, warm water flows east in Pacific; often causes below-normal Indian monsoon.",
    "La Niña: trade winds strengthen; generally associated with above-normal Indian monsoon.",
    "Southern Oscillation Index (SOI): pressure difference Tahiti - Darwin; Sir Gilbert Walker (DG India, 1904-24) discovered it.",
    "IOD (Indian Ocean Dipole): SST difference between western and eastern equatorial Indian Ocean; positive IOD = better monsoon.",
    "Cold currents cause coastal deserts: Peru/Humboldt→Atacama, Benguela→Namib, California→Sonoran.",
    "Cold currents cause fog: San Francisco fog from California Current cooling moist air.",
    "Upwelling off Kerala coast during SW monsoon supports sardine and mackerel fisheries.",
    "India is the 3rd largest fish producer (~14.2 million tonnes, 2021-22)."
  ],
  "comparisons": [
    {
      "title": "Warm vs Cold Currents",
      "headers": [
        "Feature",
        "Warm Currents",
        "Cold Currents"
      ],
      "rows": [
        [
          "Temperature",
          "Warmer than surroundings",
          "Colder than surroundings"
        ],
        [
          "Effect on coast",
          "Warm and wet",
          "Cool and dry (deserts)"
        ],
        [
          "Location",
          "Generally western side of oceans",
          "Generally eastern side of oceans"
        ],
        [
          "Examples",
          "Gulf Stream, Kuroshio",
          "Labrador, Peru/Humboldt"
        ]
      ]
    },
    {
      "title": "El Niño vs La Niña",
      "headers": [
        "Feature",
        "El Niño",
        "La Niña"
      ],
      "rows": [
        [
          "Trade winds",
          "Weaken or reverse",
          "Strengthen"
        ],
        [
          "Eastern Pacific",
          "Warmer, wetter",
          "Colder, drier"
        ],
        [
          "Western Pacific",
          "Cooler, drier",
          "Warmer, wetter"
        ],
        [
          "Indian monsoon effect",
          "Usually below-normal",
          "Usually above-normal"
        ],
        [
          "SOI",
          "Negative",
          "Positive"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "Warm Currents of Atlantic",
      "mnemonic": "GNB — Gulf Stream, N Atlantic Drift, Brazil",
      "explanation": "Major warm currents in the Atlantic Ocean flowing poleward."
    },
    {
      "title": "ENSO Impact on India",
      "mnemonic": "El Niño = Less rain, La Niña = Lots of rain",
      "explanation": "General relationship between ENSO and Indian monsoon rainfall."
    }
  ]
}
