import type { SubjectRevision } from '@/types/subject-notes'

export const climateMonsoonRevision: SubjectRevision = {
  topic: 'climate-monsoon',
  bullets: [
    "India has a tropical monsoon climate characterised by seasonal reversal of winds.",
    "SW Monsoon (June-September) brings about 75% of India's annual rainfall.",
    "Monsoon typically arrives at Kerala coast around June 1 and covers entire India by mid-July.",
    "Mawsynram (Meghalaya) receives the highest average annual rainfall in the world (~11,871 mm).",
    "Cherrapunji holds the record for highest single-year rainfall (26,471 mm in 1860-61).",
    "Jaisalmer (Rajasthan) is one of the driest places in India — less than 100 mm annual rainfall.",
    "El Nino (warming of Pacific) generally causes weak monsoon/drought in India.",
    "La Nina (cooling of Pacific) typically brings stronger monsoon to India.",
    "Tamil Nadu receives most of its rainfall from the NE Monsoon (October-December), not SW Monsoon.",
    "Western Disturbances — temperate cyclones from Mediterranean — bring winter rainfall to NW India.",
    "'Loo' are hot, dry winds blowing over north-western India during summer.",
    "'Mango Showers' are pre-monsoon showers in Kerala and Karnataka that aid mango ripening.",
    "ITCZ (Inter-Tropical Convergence Zone) shifts northward over Ganga Plain in summer, drawing SW monsoon winds.",
    "Monsoon breaks (dry spells) occur when ITCZ moves northward to Himalayas or southward over ocean temporarily.",
    "Somali Jet (Findlater Jet) — strong cross-equatorial low-level jet that drives moisture to India during SW monsoon.",
    "October Heat — post-monsoon high humidity and temperatures in northern India due to retreating monsoon.",
    "Nor'westers (Kalbaisakhi) — thunderstorms in eastern India (April-May) caused by local convection; vital for tea, jute, rice.",
    "Monsoon trough — low-pressure zone along Ganga Plain; its position determines rainfall distribution across India.",
    "Arabian Sea branch and Bay of Bengal branch are two arms of the SW monsoon; they merge over NW India by mid-July.",
    "Rainfall variability is highest in western Rajasthan (>50%) and lowest along the Western Ghats (<15%).",
    "Indian monsoon onset date has shifted by about 6-8 days in recent decades due to climate change effects.",
    "Jet streams — subtropical westerly jet moves north of Himalayas in summer, allowing monsoon onset; returns south in winter, causing monsoon withdrawal."
],
  comparisons: [
    {
        "title": "SW Monsoon vs NE Monsoon",
        "headers": [
            "Feature",
            "SW Monsoon",
            "NE Monsoon"
        ],
        "rows": [
            [
                "Period",
                "June-September",
                "October-December"
            ],
            [
                "Direction",
                "Southwest to Northeast",
                "Northeast to Southwest"
            ],
            [
                "Rainfall",
                "75% of annual rainfall",
                "Limited — mainly Tamil Nadu coast"
            ],
            [
                "Coverage",
                "Almost all India",
                "Mainly Tamil Nadu, SE coast, Sri Lanka"
            ],
            [
                "Origin",
                "Indian Ocean moisture",
                "Continental — dry, picks moisture over Bay of Bengal"
            ],
            [
                "Mechanism",
                "ITCZ shift + differential heating",
                "Retreating monsoon + Bay of Bengal cyclones"
            ]
        ]
    }
],
  mnemonics: [
    {
        "title": "India's Four Seasons",
        "mnemonic": "Cold-Hot-Wet-Retreat (C-H-W-R)",
        "explanation": "Winter (Dec-Feb), Summer (Mar-May), SW Monsoon/Wet (Jun-Sep), Retreating Monsoon (Oct-Nov)."
    }
],
}
