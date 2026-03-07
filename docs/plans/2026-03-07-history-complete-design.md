# History Topics — Complete Design (All Central Govt Prelims)

**Date:** 2026-03-07
**Status:** Approved
**Scope:** 35 history topics with Notes + Revision + PYQ Practice tabs

## Goal

Add 35 history topic pages covering all central govt prelims exams (UPSC CSE, SSC CGL/CHSL, IBPS PO/Clerk, SBI PO, RRB NTPC, CDS). Each topic gets a 3-tab page: Notes (narrative), Revision (bullets/tables/mnemonics), PYQ Practice (exam-tagged MCQs). No cap on number of questions or explanations per topic.

## Target Exams

UPSC CSE Prelims, SSC CGL, SSC CHSL, IBPS PO, IBPS Clerk, SBI PO, RRB NTPC, RRB Group D, CDS, UPPSC, MPPSC, and other state PSC prelims. Every PYQ is tagged with exam name + year.

## Topic List (35 topics, 5 sections)

### Ancient India (9 topics)

| # | Slug | Topic | Key Areas |
|---|------|-------|-----------|
| 1 | indus-valley | Indus Valley Civilization | Harappan sites, town planning, seals, script, trade, decline |
| 2 | vedic-period | Vedic Period | Early vs Later Vedic, Rig Veda, society, varna, polity |
| 3 | buddhism-jainism | Buddhism & Jainism | Founders, teachings, councils, sects, spread, literature |
| 4 | mahajanapadas | Mahajanapadas & Rise of Magadha | 16 kingdoms, Haryanka, Shishunaga, Nanda |
| 5 | maurya-empire | Maurya Empire & Ashoka | Chandragupta, Arthashastra, edicts, Dhamma, decline |
| 6 | post-maurya | Post-Maurya Period | Sungas, Kanvas, Satavahanas, Indo-Greeks, Kushanas (Kanishka) |
| 7 | sangam-age | Sangam Age | Cheras, Cholas, Pandyas, Sangam literature, trade |
| 8 | gupta-empire | Gupta Empire & Golden Age | Samudragupta, Chandragupta II, science, literature, art |
| 9 | south-indian-dynasties | South Indian Dynasties | Chalukyas, Pallavas, Rashtrakutas, Cholas, Hoysalas |

### Medieval India (6 topics)

| # | Slug | Topic | Key Areas |
|---|------|-------|-----------|
| 10 | delhi-sultanate | Delhi Sultanate | Slave/Khalji/Tughlaq/Sayyid/Lodi, administration, economy |
| 11 | vijayanagara-bahmani | Vijayanagara & Bahmani Kingdoms | Krishnadevaraya, Hampi, Deccan sultanates |
| 12 | bhakti-sufi | Bhakti & Sufi Movements | Saints, Sufi orders, philosophy, social impact |
| 13 | mughal-empire | Mughal Empire | Babur to Aurangzeb, Mansabdari, revenue, culture |
| 14 | maratha-empire | Maratha Empire | Shivaji, Peshwas, Ashtapradhan, Panipat III |
| 15 | medieval-kingdoms | Other Medieval Kingdoms | Rajputs, Sikhs (Guru Nanak to Ranjit Singh), Ahom |

### Modern India (11 topics)

| # | Slug | Topic | Key Areas |
|---|------|-------|-----------|
| 16 | european-companies | European Trading Companies | Portuguese, Dutch, French, EIC, Carnatic Wars |
| 17 | british-expansion | British Conquest & Expansion | Plassey, Buxar, Subsidiary Alliance, Doctrine of Lapse |
| 18 | governor-generals | Governor-Generals & Viceroys | Warren Hastings to Mountbatten, key policies |
| 19 | british-economic-policies | British Economic Policies | Drain of Wealth, Zamindari/Ryotwari/Mahalwari, de-industrialization |
| 20 | revolt-1857 | Revolt of 1857 | Causes, centres, leaders, consequences |
| 21 | reform-movements | Social & Religious Reform Movements | Brahmo Samaj, Arya Samaj, Widow remarriage, Sati abolition |
| 22 | congress-national-movement | INC & National Movement | Moderates vs Extremists, Surat Split, Swadeshi |
| 23 | gandhian-movements | Gandhian Era & Mass Movements | Champaran, Kheda, NCM, CDM, QIM |
| 24 | revolutionary-movement | Revolutionary Movement | Ghadar Party, HSRA, INA, Subhas Chandra Bose |
| 25 | constitutional-development | Constitutional Development (1773-1947) | Regulating Act through GoI Act 1935 |
| 26 | tribal-peasant-movements | Tribal & Peasant Movements | Santhal, Munda, Indigo, Deccan, Moplah, Tebhaga |

### Post-Independence (4 topics)

| # | Slug | Topic | Key Areas |
|---|------|-------|-----------|
| 27 | independence-partition | Independence & Partition | Cabinet Mission, Mountbatten Plan, Two-Nation Theory |
| 28 | princely-states | Integration of Princely States | Sardar Patel, Hyderabad, Kashmir, Junagadh |
| 29 | nation-building | Nation Building & Economic Development | FYPs, Green Revolution, LPG 1991 |
| 30 | wars-foreign-policy | Wars & Foreign Policy | 1962, 1965, 1971, Non-Alignment, Panchsheel |

### Art & Culture (5 topics)

| # | Slug | Topic | Key Areas |
|---|------|-------|-----------|
| 31 | indian-architecture | Indian Architecture | Nagara, Dravida, Vesara, Indo-Islamic, Colonial |
| 32 | paintings-sculpture | Indian Paintings & Sculpture | Cave art, miniature schools, Gandhara, Mathura |
| 33 | music-dance | Music, Dance & Theatre | Hindustani, Carnatic, classical dance, folk forms |
| 34 | indian-literature | Indian Literature & Philosophy | Vedic, Sangam, six schools, regional literatures |
| 35 | heritage-sites | UNESCO World Heritage Sites | Sites in India, significance, exam-relevant facts |

## Tab Structure: Learn -> Revise -> Test

History uses a 3-tab structure native to how students study history, different from quant's formula-based tabs:

| Tab | Label | Content |
|-----|-------|---------|
| 1 | Notes | Narrative summary — what happened, when, who, why, effects. Key dates timeline. |
| 2 | Revision | Bullet-point one-liners, comparison tables, mnemonics, "remember this" callouts |
| 3 | PYQ Practice | Previous Year Questions, each tagged with exam name + year |

## Data Models

### Types (added to `src/types/history.ts`)

```typescript
// --- Tab 1: Notes ---
interface HistoryNote {
  section: string           // e.g. "Origins & Discovery", "Town Planning"
  content: string           // narrative paragraph
}

interface KeyDate {
  year: string              // "3300 BCE", "1526", "1857"
  event: string             // "Harappan civilization begins"
}

interface HistoryConcept {
  topic: string             // slug
  title: string
  description: string       // one-line summary
  period: string            // "Ancient India" | "Medieval India" | etc.
  keyDates: KeyDate[]
  notes: HistoryNote[]
  examTags: string[]        // ["UPSC Prelims", "SSC CGL", ...]
  examRelevance: string     // prose about exam frequency
}

// --- Tab 2: Revision ---
interface ComparisonTable {
  title: string             // "Maurya vs Gupta Administration"
  headers: string[]
  rows: string[][]
}

interface Mnemonic {
  title: string             // "BAST - Sultanate Dynasties"
  mnemonic: string
  explanation: string
}

interface HistoryRevision {
  topic: string
  bullets: string[]         // one-liner facts for quick recall
  comparisons: ComparisonTable[]
  mnemonics: Mnemonic[]
}

// --- Tab 3: PYQ Practice ---
interface HistoryProblem {
  id: string
  topic: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  examName: string          // "UPSC Prelims" | "SSC CGL" | "IBPS PO" | ...
  examYear: number          // 2023
  difficulty: "easy" | "medium" | "hard"
}
```

### Variable lengths

Unlike quant (fixed 5 per topic), history data files have no cap:
- Notes sections: as many as the topic needs
- Revision bullets: as many as relevant
- Comparison tables: 0-N per topic
- Mnemonics: 0-N per topic
- PYQ problems: as many as available, tagged with exam source

## Data File Structure

```
src/data/history/
  concepts/
    indus-valley.ts          -> exports HistoryConcept
    vedic-period.ts
    ... (35 files)
  revision/
    indus-valley.ts          -> exports HistoryRevision
    vedic-period.ts
    ... (35 files)
  problems/
    indus-valley-problems.ts -> exports HistoryProblem[]
    vedic-period-problems.ts
    ... (35 files)
```

Existing data files (`events.ts`, `periods.ts`, `cause-effect-chains.ts`) are untouched — they serve the timeline/freedom-movement visualizers.

## Components

### New — `src/components/visualizers/history/`

| Component | Props | Purpose |
|-----------|-------|---------|
| HistoryTopicTabs | concept, revision, problems | Tab container (Notes / Revision / PYQ Practice) |
| HistoryNotesPanel | concept: HistoryConcept | Narrative sections, key dates mini-timeline, exam tags |
| HistoryRevisionPanel | revision: HistoryRevision | Bullet points, comparison tables, mnemonics |
| HistoryPYQSolver | problems: HistoryProblem[] | MCQ interface with exam name/year badge, filter by exam |

### HistoryNotesPanel

- Key Dates: vertical mini-timeline with amber dot + year + event text
- Notes sections: stacked cards, each with section heading (h3) and content paragraph
- Exam tags: chips (same as quant ConceptPanel)
- Exam relevance: prose note below tags
- Color: amber (#f59e0b) throughout

### HistoryRevisionPanel

- Bullets: numbered list with amber left-border callout
- Comparison tables: responsive `<table>` with amber header, striped rows
- Mnemonics: highlighted cards — large mnemonic text, explanation below, amber accent

### HistoryPYQSolver

- MCQ card per question with exam badge ("UPSC Prelims 2023") in top-right
- Filter dropdown to filter by exam name (All / UPSC Prelims / SSC CGL / ...)
- Difficulty badge (easy=green, medium=amber, hard=red)
- Same correct/incorrect animation as existing MCQCard
- Explanation shown after answering
- Question counter: "Question 3 of 15"

## Routing

### New route

```
/history/[topic]  -> dynamic route (35 slugs)
                     server component
                     TOPIC_DATA record with all 35 slugs
                     generateStaticParams = Object.keys(TOPIC_DATA)
                     generateMetadata for per-topic SEO
```

### Existing routes (untouched)

```
/history/timeline          -> Interactive timeline (Coming Soon)
/history/freedom-movement  -> Freedom movement (Coming Soon)
```

## Hub Page (`/history/page.tsx`)

Adopts SECTIONS pattern from quant:

```
Section: Ancient India (9 topics, hasTabs: true)
Section: Medieval India (6 topics, hasTabs: true)
Section: Modern India (11 topics, hasTabs: true)
Section: Post-Independence (4 topics, hasTabs: true)
Section: Art & Culture (5 topics, hasTabs: true)
Section: Interactive Visualizers (2 items, hasTabs: false) — existing, kept as-is
```

Each topic card: title + description + "Notes / Revision / PYQs" badge (analogous to quant's "5 concepts / 5 tricks / 5 problems").

## Layout (`/history/layout.tsx`)

Expands sidebar from 2 links to 37 links (35 topics + 2 visualizers) with grouped navigation:

| Group | Count |
|-------|-------|
| Ancient India | 9 |
| Medieval India | 6 |
| Modern India | 11 |
| Post-Independence | 4 |
| Art & Culture | 5 |
| Visualizers | 2 |

Uses `SubjectLayout` with `group` field on each NavLink (same pattern as quant layout).

## Sitemap Updates

Add all 35 history topic slugs to `HISTORY_TOPICS` array in `src/app/sitemap.ts`, generating `/history/{slug}` routes at priority 0.6.

## Design Decisions

1. **History-native tabs** (Notes/Revision/PYQ) instead of mirroring quant (Concept/Tricks/Problems) — history is studied differently
2. **No cap on data** — variable-length arrays per topic, unlike quant's fixed 5
3. **Exam-tagged PYQs** — every question carries examName + examYear, first on the platform
4. **Exam filter on PYQ tab** — dropdown to filter questions by source exam
5. **Existing visualizer routes untouched** — timeline and freedom-movement are separate features
6. **Art & Culture under History** — not a separate subject, since it's tested as part of history in all exams
