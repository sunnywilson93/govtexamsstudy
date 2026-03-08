import type { SubjectRevision } from '@/types/subject-notes'

export const remoteSensingGisRevision: SubjectRevision = {
  "topic": "remote-sensing-gis",
  "bullets": [
    "Remote Sensing: acquiring info about objects from a distance using electromagnetic radiation (EMR).",
    "Passive RS: detects reflected sunlight/emitted thermal radiation (optical sensors). Active RS: emits own energy (RADAR, LiDAR).",
    "IRS-1A (1988) — India's first remote sensing satellite; India became 5th country with RS capability.",
    "ISRO (est. 1969, Vikram Sarabhai) — HQ Bengaluru; manages India's space and RS programmes.",
    "Resourcesat series: LISS-III (23.5 m), LISS-IV (5.8 m), AWiFS (56 m) sensors for agriculture and forestry.",
    "Cartosat-2: sub-metre resolution (0.65 m) — for large-scale mapping and defense.",
    "RISAT: Radar Imaging Satellite — SAR for all-weather, day-night imaging; critical during monsoon.",
    "GIS: computer system for capturing, storing, analyzing, and displaying geographically referenced data.",
    "GIS data types: Raster (grid/pixels — satellite images) and Vector (points, lines, polygons — boundaries, roads).",
    "NavIC (IRNSS): India's indigenous satellite navigation system; 7 satellites; ~5 m civilian accuracy.",
    "Bhuvan: ISRO's web geoportal (2009) — India's Google Earth alternative using Indian satellite data.",
    "FASAL programme: uses RS for pre-harvest crop production estimates for Ministry of Agriculture.",
    "GPS: US satellite navigation; 24+ satellites; ~3-5 m civilian accuracy; GLONASS (Russia), Galileo (EU), BeiDou (China).",
    "GAGAN: India's satellite-based augmentation system for aviation; GPS accuracy improved to ~3 m.",
    "NRSC (National Remote Sensing Centre, Hyderabad) — ISRO's node for satellite data.",
    "2021 geospatial data guidelines liberalized access to mapping and geospatial data in India."
  ],
  "comparisons": [
    {
      "title": "Passive vs Active Remote Sensing",
      "headers": [
        "Feature",
        "Passive RS",
        "Active RS"
      ],
      "rows": [
        [
          "Energy source",
          "Sun (reflected)/Earth (emitted)",
          "Own energy (RADAR, LiDAR)"
        ],
        [
          "Weather limitation",
          "Cloud cover blocks",
          "Can penetrate clouds"
        ],
        [
          "Time limitation",
          "Daytime only (optical)",
          "Day and night"
        ],
        [
          "Examples",
          "IRS LISS, Landsat",
          "RISAT (SAR), LiDAR"
        ],
        [
          "Indian satellite",
          "Resourcesat, Cartosat",
          "RISAT-1, RISAT-2"
        ]
      ]
    },
    {
      "title": "India's Key RS Satellites",
      "headers": [
        "Satellite",
        "Sensor/Resolution",
        "Application"
      ],
      "rows": [
        [
          "Resourcesat",
          "LISS-III (23.5 m)",
          "Agriculture, forestry"
        ],
        [
          "Cartosat-2",
          "0.65 m",
          "Mapping, defense"
        ],
        [
          "RISAT",
          "SAR (all-weather)",
          "Flood monitoring, agriculture"
        ],
        [
          "Oceansat",
          "Ocean color, SST",
          "Fisheries, cyclone monitoring"
        ],
        [
          "INSAT-3D/3DR",
          "Weather imagery",
          "Cyclone tracking, forecasting"
        ]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "RS Satellite Types",
      "mnemonic": "ReCaRI — Resourcesat, Cartosat, RISAT",
      "explanation": "India's three main RS satellite series: Resourcesat (agriculture), Cartosat (mapping), RISAT (radar/all-weather)."
    },
    {
      "title": "GIS Data Types",
      "mnemonic": "RaVe — Raster (grid), Vector (points/lines/polygons)",
      "explanation": "Two types of GIS data: Raster (pixel-based, satellite images) and Vector (geometry-based, boundaries and roads)."
    }
  ]
}
