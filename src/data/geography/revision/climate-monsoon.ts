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
    "'Mango Showers' are pre-monsoon showers in Kerala and Karnataka that aid mango ripening."
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
