import type { SubjectRevision } from '@/types/subject-notes'

export const remoteSensingGisRevision: SubjectRevision = {
  "topic": "remote-sensing-gis",
  "bullets": [
    "Remote Sensing: acquiring info about objects from a distance using electromagnetic radiation (EMR) — every object has a unique spectral signature.",
    "Passive RS: detects reflected sunlight/emitted thermal radiation (optical sensors). Active RS: emits own energy (RADAR, LiDAR).",
    "EM Spectrum bands in RS: visible (0.4-0.7 \u00b5m), NIR (0.7-1.3 \u00b5m — vegetation), SWIR (minerals/moisture), TIR (temperature), microwave (all-weather).",
    "NDVI = (NIR-Red)/(NIR+Red); healthy vegetation: 0.6-0.9; bare soil: 0.1-0.2; water: negative values.",
    "Spatial Resolution: very high (<1 m, Cartosat-2), high (1-10 m, LISS-IV), medium (10-100 m, LISS-III/Landsat), low (>100 m, MODIS/AWiFS).",
    "Temporal Resolution: how often a satellite revisits — MODIS (daily), Sentinel-2 (5 days), Landsat (16 days), IRS (22-24 days).",
    "IRS-1A (1988) — India's first remote sensing satellite; India became 5th country with RS capability.",
    "ISRO (est. 1969, Vikram Sarabhai) — HQ Bengaluru; manages India's space and RS programmes.",
    "Resourcesat series: LISS-III (23.5 m), LISS-IV (5.8 m), AWiFS (56 m) sensors for agriculture and forestry.",
    "Cartosat-1 (2005): 2.5 m stereo for DEMs; Cartosat-2 (2007): 0.65 m — sub-metre for mapping and defense.",
    "RISAT: Radar Imaging Satellite — SAR for all-weather, day-night imaging; critical during cloudy monsoon for crop monitoring.",
    "Oceansat: ocean colour, sea surface temperature, wind speed — fisheries advisory and cyclone monitoring.",
    "INSAT-3D/3DR: geostationary weather satellites — continuous imaging for cyclone tracking and weather forecasting by IMD.",
    "HySIS (2018): India's first hyperspectral satellite — 55 VNIR + 256 SWIR bands for mineral mapping and environmental monitoring.",
    "GIS: computer system for capturing, storing, analyzing, and displaying geographically referenced data.",
    "GIS data types: Raster (grid/pixels — satellite images, DEMs) and Vector (points, lines, polygons — boundaries, roads, GPS locations).",
    "GIS operations: overlay analysis, buffer analysis, spatial query, network analysis, terrain analysis, spatial statistics.",
    "NavIC (IRNSS): India's indigenous satellite navigation system; 7 satellites; ~5 m civilian accuracy; covers India + 1,500 km around.",
    "GAGAN: India's satellite-based augmentation system for aviation; GPS accuracy improved to ~3 m; India is 3rd country with SBAS.",
    "GPS (USA, 24+ satellites), GLONASS (Russia), Galileo (EU), BeiDou (China) — four global navigation satellite systems.",
    "Bhuvan: ISRO's web geoportal (2009) — India's Google Earth alternative using Indian satellite data at 2.5 m resolution.",
    "NRSC (National Remote Sensing Centre, Hyderabad) — ISRO's node for satellite data acquisition, processing, and dissemination.",
    "FASAL programme: uses RS for pre-harvest crop production estimates for 11 major crops — accuracy >95% for rice and wheat.",
    "CHAMAN programme: RS-based horticulture crop assessment (mango, banana, citrus, potato, onion).",
    "PMFBY uses satellite data and drones for crop insurance loss assessment — replacing manual crop cutting experiments.",
    "Forest Survey of India uses IRS data for ISFR (India State of Forest Report) — classifies into very dense, moderately dense, open forest.",
    "ISRO's Decision Support Centre provides near-real-time flood maps using SAR (RISAT) data within 24 hours during disasters.",
    "LiDAR: uses laser pulses for precise 3D terrain mapping; 10-15 cm accuracy; used for DEM creation, forest canopy height, archaeology.",
    "SVAMITVA scheme: uses drones to map rural residential land and issue property cards — covers 6.62 lakh villages.",
    "PSLV: India's most reliable launch vehicle for RS satellites into polar sun-synchronous orbit; 50+ consecutive successes.",
    "2021 geospatial data guidelines liberalized access to mapping — private companies allowed to create maps without prior approval.",
    "Survey of India (est. 1767): principal mapping agency; Open Series Maps at 1:50,000; transitioning to digital cartography.",
    "NSDI (National Spatial Data Infrastructure, 2006): framework for sharing geospatial data across government agencies.",
    "India-WRIS: web-GIS portal for water resources data — rivers, basins, reservoirs, groundwater.",
    "International Charter on Space and Major Disasters: ISRO is a member; provides free satellite data during any country's disaster.",
    "VEDAS (ISRO): cloud platform for accessing and analyzing archived satellite data; supports time-series analysis and change detection.",
    "India has launched 328+ foreign satellites from 36 countries using PSLV — demonstrating cost-effective space capability.",
    "IN-SPACe (2020) authorizes and regulates private space activities; NSIL is ISRO's commercial arm for marketing satellite data and launches."
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
        ["Energy source", "Sun (reflected)/Earth (emitted)", "Own energy (RADAR, LiDAR)"],
        ["Weather limitation", "Cloud cover blocks optical sensors", "Can penetrate clouds (SAR)"],
        ["Time limitation", "Daytime only (optical)", "Day and night operation"],
        ["Resolution", "Up to 0.3 m (optical)", "Up to 1 m (SAR)"],
        ["Examples", "IRS LISS, Landsat, Sentinel-2", "RISAT (SAR), LiDAR, SMAP"],
        ["Indian satellite", "Resourcesat, Cartosat, HySIS", "RISAT-1, RISAT-2 series"]
      ]
    },
    {
      "title": "India's Key RS Satellites",
      "headers": [
        "Satellite",
        "Sensor/Resolution",
        "Primary Application"
      ],
      "rows": [
        ["Resourcesat-2A", "LISS-III (23.5 m), AWiFS (56 m)", "Agriculture, forestry, water resources"],
        ["Cartosat-2 series", "0.65 m panchromatic", "Large-scale mapping, defense, urban planning"],
        ["RISAT-1/2", "SAR (all-weather)", "Flood monitoring, monsoon agriculture, security"],
        ["Oceansat-2/3", "Ocean colour, scatterometer", "Fisheries, cyclone wind measurement"],
        ["INSAT-3D/3DR", "Thermal IR, water vapour", "Cyclone tracking, weather forecasting"],
        ["HySIS", "55 VNIR + 256 SWIR bands", "Mineral mapping, environmental monitoring"]
      ]
    },
    {
      "title": "GIS Data: Raster vs Vector",
      "headers": [
        "Feature",
        "Raster",
        "Vector"
      ],
      "rows": [
        ["Structure", "Grid of cells (pixels)", "Points, lines, polygons"],
        ["Source", "Satellite images, DEMs", "GPS, surveys, digitized maps"],
        ["Storage", "Large file sizes", "Smaller file sizes"],
        ["Analysis", "Surface analysis, classification", "Network analysis, buffer zones"],
        ["Example", "Landsat image, elevation model", "Road network, district boundaries"],
        ["Accuracy", "Limited by pixel size", "Can be very precise"]
      ]
    },
    {
      "title": "Global Navigation Satellite Systems",
      "headers": [
        "System",
        "Country",
        "Satellites",
        "Coverage"
      ],
      "rows": [
        ["GPS", "USA", "24+ (MEO)", "Global"],
        ["GLONASS", "Russia", "24 (MEO)", "Global"],
        ["Galileo", "EU", "24 (MEO)", "Global"],
        ["BeiDou", "China", "35+ (MEO+GEO)", "Global"],
        ["NavIC", "India", "7 (GEO+GSO)", "Regional (India+1500 km)"]
      ]
    },
    {
      "title": "ISRO's Geospatial Platforms",
      "headers": [
        "Platform",
        "Purpose",
        "Key Feature"
      ],
      "rows": [
        ["Bhuvan", "Geoportal (Google Earth alternative)", "2.5 m imagery, 100+ govt projects"],
        ["VEDAS", "Satellite data archive and analysis", "Cloud-based time-series processing"],
        ["MOSDAC", "Weather satellite data", "Cyclone tracking, ocean observations"],
        ["India-WRIS", "Water resources information", "91 major reservoirs tracked weekly"],
        ["Bhoonidhi", "Satellite data dissemination", "Access to Indian and foreign satellite data"]
      ]
    }
  ],
  "mnemonics": [
    {
      "title": "RS Satellite Types (India)",
      "mnemonic": "ReCaRI-OH — Resourcesat, Cartosat, RISAT, Oceansat, HySIS",
      "explanation": "India's five main RS satellite families: Resourcesat (agriculture), Cartosat (mapping), RISAT (radar), Oceansat (ocean), HySIS (hyperspectral)."
    },
    {
      "title": "GIS Data Types",
      "mnemonic": "RaVe — Raster (grid), Vector (points/lines/polygons)",
      "explanation": "Two types of GIS data: Raster (pixel-based, satellite images) and Vector (geometry-based, boundaries and roads)."
    },
    {
      "title": "EM Spectrum Bands for RS",
      "mnemonic": "Very Nice Students Take Milk — Visible, NIR, SWIR, TIR, Microwave",
      "explanation": "Five key EM bands used in remote sensing, from shortest to longest wavelength."
    },
    {
      "title": "Four Resolution Types",
      "mnemonic": "SuSTeR — Spatial, Spectral, Temporal, Radiometric",
      "explanation": "Four types of resolution that define satellite imagery quality: Spatial (pixel size), Spectral (number of bands), Temporal (revisit frequency), Radiometric (brightness levels)."
    },
    {
      "title": "ISRO Key Dates",
      "mnemonic": "1969-ISRO, 1975-Aryabhata, 1988-IRS-1A, 2009-Bhuvan, 2013-NavIC",
      "explanation": "Key milestones: ISRO establishment, first satellite, first RS satellite, geoportal launch, navigation system deployment."
    }
  ]
}
