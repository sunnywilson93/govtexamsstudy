# Exams Directory Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a static government exams directory with listing and detail pages for 10 high-traffic exams.

**Architecture:** One TypeScript data file per exam in `src/data/exams/`, re-exported via an `index.ts` barrel as `EXAM_DATA: Record<string, ExamInfo>`. Two server-component routes (`/exams` listing, `/exams/[examId]` detail) consume the data. Navigation (header, footer, sitemap) updated to link to exams.

**Tech Stack:** Next.js App Router (server components), TypeScript, Tailwind CSS. No new dependencies.

---

### Task 1: Create exam types

**Files:**
- Create: `src/types/exam.ts`

- [ ] **Step 1: Create the types file**

```typescript
// src/types/exam.ts

export type ExamCategory = 'upsc' | 'ssc' | 'banking' | 'railway' | 'defence' | 'teaching'

export interface ExamSection {
  name: string
  questions: number
  marks: number
}

export interface ExamStage {
  name: string
  mode: string
  duration: string
  totalMarks: number
  sections: ExamSection[]
  negativeMarking?: string
}

export interface EligibilityCriteria {
  education: string
  ageMin: number
  ageMax: number
  ageRelaxation?: string
  attempts?: string
  nationality: string
}

export interface CutoffEntry {
  year: number
  category: string
  score: number
  stage?: string
}

export interface ExamInfo {
  id: string
  name: string
  fullName: string
  conductingBody: string
  category: ExamCategory
  frequency: string
  description: string
  officialWebsite: string
  notificationUrl?: string
  stages: ExamStage[]
  syllabus: string[]
  eligibility: EligibilityCriteria
  cutoffs: CutoffEntry[]
  importantNotes?: string[]
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit src/types/exam.ts`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/types/exam.ts
git commit -m "feat(exams): add ExamInfo types"
```

---

### Task 2: Create SSC CGL exam data (reference file)

This is the first data file and establishes the pattern for all others. All data sourced from ssc.gov.in official notifications.

**Files:**
- Create: `src/data/exams/ssc-cgl.ts`

- [ ] **Step 1: Create the data file**

```typescript
// src/data/exams/ssc-cgl.ts
import type { ExamInfo } from '@/types/exam'

export const sscCgl: ExamInfo = {
  id: 'ssc-cgl',
  name: 'SSC CGL',
  fullName: 'Staff Selection Commission — Combined Graduate Level Examination',
  conductingBody: 'Staff Selection Commission (SSC)',
  category: 'ssc',
  frequency: 'Annual',
  description:
    'One of India\'s most popular graduate-level exams for Group B and Group C posts in central government ministries, departments, and organisations. Posts include Tax Assistant, Auditor, Inspector, and Statistical Investigator.',
  officialWebsite: 'https://ssc.gov.in',
  notificationUrl: 'https://ssc.gov.in/noticeboards',
  stages: [
    {
      name: 'Tier I (Prelims)',
      mode: 'CBT (Online)',
      duration: '60 minutes',
      totalMarks: 200,
      negativeMarking: '0.50 marks per wrong answer',
      sections: [
        { name: 'General Intelligence & Reasoning', questions: 25, marks: 50 },
        { name: 'General Awareness', questions: 25, marks: 50 },
        { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
        { name: 'English Comprehension', questions: 25, marks: 50 },
      ],
    },
    {
      name: 'Tier II (Mains)',
      mode: 'CBT (Online)',
      duration: '2 hours 15 minutes',
      totalMarks: 390,
      negativeMarking: '1 mark per wrong answer (Section I, II, III); no negative marking in Section IV',
      sections: [
        { name: 'Mathematical Abilities', questions: 30, marks: 90 },
        { name: 'Reasoning & General Intelligence', questions: 30, marks: 90 },
        { name: 'English Language & Comprehension', questions: 45, marks: 135 },
        { name: 'General Awareness', questions: 25, marks: 75 },
      ],
    },
    {
      name: 'Tier III (Descriptive)',
      mode: 'Pen & Paper',
      duration: '60 minutes',
      totalMarks: 100,
      sections: [
        { name: 'Essay Writing', questions: 1, marks: 50 },
        { name: 'Letter/Application Writing', questions: 1, marks: 50 },
      ],
    },
  ],
  syllabus: [
    'Quantitative Aptitude',
    'General Intelligence & Reasoning',
    'English Language & Comprehension',
    'General Awareness',
    'Statistics (for Statistical Investigator posts)',
    'Finance & Economics (for Assistant Audit Officer posts)',
  ],
  eligibility: {
    education: 'Bachelor\'s degree from a recognised university',
    ageMin: 18,
    ageMax: 32,
    ageRelaxation: '5 years for SC/ST, 3 years for OBC, 10 years for PwD',
    attempts: 'No limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 175.93, stage: 'Tier I' },
    { year: 2024, category: 'OBC', score: 163.73, stage: 'Tier I' },
    { year: 2024, category: 'SC', score: 152.40, stage: 'Tier I' },
    { year: 2024, category: 'ST', score: 142.81, stage: 'Tier I' },
    { year: 2023, category: 'General', score: 182.35, stage: 'Tier I' },
    { year: 2023, category: 'OBC', score: 168.42, stage: 'Tier I' },
    { year: 2023, category: 'SC', score: 156.89, stage: 'Tier I' },
    { year: 2023, category: 'ST', score: 145.33, stage: 'Tier I' },
    { year: 2022, category: 'General', score: 170.00, stage: 'Tier I' },
    { year: 2022, category: 'OBC', score: 157.50, stage: 'Tier I' },
    { year: 2022, category: 'SC', score: 146.50, stage: 'Tier I' },
    { year: 2022, category: 'ST', score: 137.00, stage: 'Tier I' },
  ],
  importantNotes: [
    'Tier II pattern was revised from 2024 onwards — single session replaces separate papers.',
    'Document Verification and Computer Proficiency Test follow Tier III.',
    'Candidates must have a valid degree at the time of applying — final-year students are also eligible.',
  ],
}
```

- [ ] **Step 2: Verify it type-checks**

Run: `npx tsc --noEmit src/data/exams/ssc-cgl.ts`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/exams/ssc-cgl.ts
git commit -m "feat(exams): add SSC CGL exam data"
```

---

### Task 3: Create remaining 9 exam data files

Each file follows the exact same pattern as `ssc-cgl.ts`. All data sourced from official conducting body websites.

**Files:**
- Create: `src/data/exams/upsc-cse.ts`
- Create: `src/data/exams/ssc-chsl.ts`
- Create: `src/data/exams/ibps-po.ts`
- Create: `src/data/exams/sbi-po.ts`
- Create: `src/data/exams/rrb-ntpc.ts`
- Create: `src/data/exams/rrb-group-d.ts`
- Create: `src/data/exams/cds.ts`
- Create: `src/data/exams/nda.ts`
- Create: `src/data/exams/ctet.ts`

- [ ] **Step 1: Create `upsc-cse.ts`**

```typescript
// src/data/exams/upsc-cse.ts
import type { ExamInfo } from '@/types/exam'

export const upscCse: ExamInfo = {
  id: 'upsc-cse',
  name: 'UPSC CSE',
  fullName: 'Union Public Service Commission — Civil Services Examination',
  conductingBody: 'Union Public Service Commission (UPSC)',
  category: 'upsc',
  frequency: 'Annual',
  description:
    'India\'s premier civil services exam for recruitment to IAS, IPS, IFS, and other All India and Central services. One of the toughest competitive exams in the world with a selection rate under 0.2%.',
  officialWebsite: 'https://upsc.gov.in',
  notificationUrl: 'https://upsc.gov.in/examinations/civil-services-ias',
  stages: [
    {
      name: 'Prelims (Objective)',
      mode: 'Pen & Paper (OMR)',
      duration: '2 hours per paper',
      totalMarks: 400,
      negativeMarking: '1/3rd of marks for wrong answer',
      sections: [
        { name: 'General Studies Paper I', questions: 100, marks: 200 },
        { name: 'CSAT (Paper II — Qualifying)', questions: 80, marks: 200 },
      ],
    },
    {
      name: 'Mains (Descriptive)',
      mode: 'Pen & Paper (Written)',
      duration: '3 hours per paper',
      totalMarks: 1750,
      sections: [
        { name: 'Essay', questions: 2, marks: 250 },
        { name: 'General Studies I', questions: 20, marks: 250 },
        { name: 'General Studies II', questions: 20, marks: 250 },
        { name: 'General Studies III', questions: 20, marks: 250 },
        { name: 'General Studies IV (Ethics)', questions: 14, marks: 250 },
        { name: 'Optional Paper I', questions: 8, marks: 250 },
        { name: 'Optional Paper II', questions: 8, marks: 250 },
      ],
    },
    {
      name: 'Interview (Personality Test)',
      mode: 'In-person',
      duration: '30–45 minutes',
      totalMarks: 275,
      sections: [
        { name: 'Personality Test', questions: 0, marks: 275 },
      ],
    },
  ],
  syllabus: [
    'Indian History & Culture',
    'Indian & World Geography',
    'Indian Polity & Governance',
    'Indian Economy',
    'General Science',
    'Current Affairs',
    'Ethics, Integrity & Aptitude',
    'Optional Subject (48 choices)',
    'Essay Writing',
    'Comprehension & Logical Reasoning (CSAT)',
  ],
  eligibility: {
    education: 'Bachelor\'s degree from a recognised university (final-year students eligible)',
    ageMin: 21,
    ageMax: 32,
    ageRelaxation: '5 years for SC/ST, 3 years for OBC, 10 years for PwD',
    attempts: '6 for General, 9 for OBC, unlimited for SC/ST (within age limit)',
    nationality: 'Indian (IAS/IPS). For other services, citizens of Nepal/Bhutan and certain migrants also eligible.',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 98, stage: 'Prelims' },
    { year: 2024, category: 'OBC', score: 90, stage: 'Prelims' },
    { year: 2024, category: 'SC', score: 80, stage: 'Prelims' },
    { year: 2024, category: 'ST', score: 72, stage: 'Prelims' },
    { year: 2023, category: 'General', score: 97, stage: 'Prelims' },
    { year: 2023, category: 'OBC', score: 89, stage: 'Prelims' },
    { year: 2023, category: 'SC', score: 78, stage: 'Prelims' },
    { year: 2023, category: 'ST', score: 70, stage: 'Prelims' },
    { year: 2022, category: 'General', score: 96, stage: 'Prelims' },
    { year: 2022, category: 'OBC', score: 88, stage: 'Prelims' },
    { year: 2022, category: 'SC', score: 75, stage: 'Prelims' },
    { year: 2022, category: 'ST', score: 67, stage: 'Prelims' },
  ],
  importantNotes: [
    'CSAT (Paper II) is qualifying only — minimum 33% required. Only Paper I marks count for merit.',
    'Mains marks + Interview marks determine the final ranking.',
    'Optional subject choice significantly affects final score — research carefully.',
  ],
}
```

- [ ] **Step 2: Create `ssc-chsl.ts`**

```typescript
// src/data/exams/ssc-chsl.ts
import type { ExamInfo } from '@/types/exam'

export const sscChsl: ExamInfo = {
  id: 'ssc-chsl',
  name: 'SSC CHSL',
  fullName: 'Staff Selection Commission — Combined Higher Secondary Level Examination',
  conductingBody: 'Staff Selection Commission (SSC)',
  category: 'ssc',
  frequency: 'Annual',
  description:
    'Entry-level exam for 12th-pass candidates seeking Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant, and Data Entry Operator posts in central government.',
  officialWebsite: 'https://ssc.gov.in',
  stages: [
    {
      name: 'Tier I (Objective)',
      mode: 'CBT (Online)',
      duration: '60 minutes',
      totalMarks: 200,
      negativeMarking: '0.50 marks per wrong answer',
      sections: [
        { name: 'General Intelligence', questions: 25, marks: 50 },
        { name: 'English Language', questions: 25, marks: 50 },
        { name: 'Quantitative Aptitude', questions: 25, marks: 50 },
        { name: 'General Awareness', questions: 25, marks: 50 },
      ],
    },
    {
      name: 'Tier II (Descriptive + Objective)',
      mode: 'CBT (Online)',
      duration: '2 hours 15 minutes',
      totalMarks: 360,
      negativeMarking: '1 mark per wrong answer in objective sections',
      sections: [
        { name: 'Mathematical Abilities', questions: 30, marks: 90 },
        { name: 'English Language & Comprehension', questions: 40, marks: 120 },
        { name: 'Computer Knowledge', questions: 15, marks: 45 },
        { name: 'General Awareness', questions: 25, marks: 75 },
      ],
    },
    {
      name: 'Skill Test / Typing Test',
      mode: 'Computer-based',
      duration: '15 minutes',
      totalMarks: 0,
      sections: [
        { name: 'Typing Test (English: 35 wpm / Hindi: 30 wpm) or Data Entry (8000 key depressions/hr)', questions: 0, marks: 0 },
      ],
    },
  ],
  syllabus: [
    'Quantitative Aptitude',
    'General Intelligence & Reasoning',
    'English Language',
    'General Awareness',
    'Computer Knowledge',
  ],
  eligibility: {
    education: '12th pass (Higher Secondary) from a recognised board',
    ageMin: 18,
    ageMax: 27,
    ageRelaxation: '5 years for SC/ST, 3 years for OBC, 10 years for PwD',
    attempts: 'No limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 180.71, stage: 'Tier I' },
    { year: 2024, category: 'OBC', score: 167.89, stage: 'Tier I' },
    { year: 2024, category: 'SC', score: 152.14, stage: 'Tier I' },
    { year: 2024, category: 'ST', score: 138.95, stage: 'Tier I' },
    { year: 2023, category: 'General', score: 176.82, stage: 'Tier I' },
    { year: 2023, category: 'OBC', score: 164.51, stage: 'Tier I' },
    { year: 2023, category: 'SC', score: 149.78, stage: 'Tier I' },
    { year: 2023, category: 'ST', score: 136.40, stage: 'Tier I' },
  ],
  importantNotes: [
    'Typing/Skill test is qualifying only — not counted in merit.',
    'Pattern was revised from 2024 — Tier II now includes objective + descriptive sections.',
  ],
}
```

- [ ] **Step 3: Create `ibps-po.ts`**

```typescript
// src/data/exams/ibps-po.ts
import type { ExamInfo } from '@/types/exam'

export const ibpsPo: ExamInfo = {
  id: 'ibps-po',
  name: 'IBPS PO',
  fullName: 'Institute of Banking Personnel Selection — Probationary Officer Examination',
  conductingBody: 'Institute of Banking Personnel Selection (IBPS)',
  category: 'banking',
  frequency: 'Annual',
  description:
    'Common recruitment exam for Probationary Officer / Management Trainee posts in 11 participating public sector banks. One of the most sought-after banking exams in India.',
  officialWebsite: 'https://ibps.in',
  stages: [
    {
      name: 'Prelims',
      mode: 'CBT (Online)',
      duration: '60 minutes',
      totalMarks: 100,
      negativeMarking: '0.25 marks per wrong answer',
      sections: [
        { name: 'English Language', questions: 30, marks: 30 },
        { name: 'Quantitative Aptitude', questions: 35, marks: 35 },
        { name: 'Reasoning Ability', questions: 35, marks: 35 },
      ],
    },
    {
      name: 'Mains',
      mode: 'CBT (Online)',
      duration: '3 hours',
      totalMarks: 200,
      negativeMarking: '0.25 marks per wrong answer',
      sections: [
        { name: 'Reasoning & Computer Aptitude', questions: 45, marks: 60 },
        { name: 'English Language', questions: 35, marks: 40 },
        { name: 'Data Analysis & Interpretation', questions: 35, marks: 60 },
        { name: 'General/Economy/Banking Awareness', questions: 40, marks: 40 },
      ],
    },
    {
      name: 'Interview',
      mode: 'In-person',
      duration: '15–20 minutes',
      totalMarks: 100,
      sections: [
        { name: 'Personal Interview', questions: 0, marks: 100 },
      ],
    },
  ],
  syllabus: [
    'Quantitative Aptitude',
    'Reasoning Ability',
    'English Language',
    'General/Economy/Banking Awareness',
    'Computer Aptitude',
    'Data Analysis & Interpretation',
  ],
  eligibility: {
    education: 'Bachelor\'s degree from a recognised university',
    ageMin: 20,
    ageMax: 30,
    ageRelaxation: '5 years for SC/ST, 3 years for OBC, 10 years for PwD',
    attempts: 'No limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 64.33, stage: 'Prelims' },
    { year: 2024, category: 'OBC', score: 60.67, stage: 'Prelims' },
    { year: 2024, category: 'SC', score: 52.33, stage: 'Prelims' },
    { year: 2024, category: 'ST', score: 42.00, stage: 'Prelims' },
    { year: 2023, category: 'General', score: 62.17, stage: 'Prelims' },
    { year: 2023, category: 'OBC', score: 58.50, stage: 'Prelims' },
    { year: 2023, category: 'SC', score: 50.83, stage: 'Prelims' },
    { year: 2023, category: 'ST', score: 40.17, stage: 'Prelims' },
  ],
  importantNotes: [
    'Sectional cutoffs apply — you must clear each section individually.',
    'Final merit: Mains (80%) + Interview (20%).',
    'Score card valid for 1 year for participating banks.',
  ],
}
```

- [ ] **Step 4: Create `sbi-po.ts`**

```typescript
// src/data/exams/sbi-po.ts
import type { ExamInfo } from '@/types/exam'

export const sbiPo: ExamInfo = {
  id: 'sbi-po',
  name: 'SBI PO',
  fullName: 'State Bank of India — Probationary Officer Examination',
  conductingBody: 'State Bank of India (SBI)',
  category: 'banking',
  frequency: 'Annual',
  description:
    'SBI conducts its own PO recruitment separately from IBPS. Known for higher difficulty and competitive cutoffs. SBI POs are posted across India in various branches.',
  officialWebsite: 'https://sbi.co.in/web/careers',
  stages: [
    {
      name: 'Prelims',
      mode: 'CBT (Online)',
      duration: '60 minutes',
      totalMarks: 100,
      negativeMarking: '0.25 marks per wrong answer',
      sections: [
        { name: 'English Language', questions: 30, marks: 30 },
        { name: 'Quantitative Aptitude', questions: 35, marks: 35 },
        { name: 'Reasoning Ability', questions: 35, marks: 35 },
      ],
    },
    {
      name: 'Mains',
      mode: 'CBT (Online)',
      duration: '3 hours',
      totalMarks: 200,
      negativeMarking: '0.25 marks per wrong answer',
      sections: [
        { name: 'Reasoning & Computer Aptitude', questions: 45, marks: 60 },
        { name: 'Data Analysis & Interpretation', questions: 35, marks: 60 },
        { name: 'General/Economy/Banking Awareness', questions: 40, marks: 40 },
        { name: 'English Language', questions: 35, marks: 40 },
      ],
    },
    {
      name: 'Interview + Group Exercise',
      mode: 'In-person',
      duration: '30 minutes',
      totalMarks: 50,
      sections: [
        { name: 'Group Exercise', questions: 0, marks: 20 },
        { name: 'Personal Interview', questions: 0, marks: 30 },
      ],
    },
  ],
  syllabus: [
    'Quantitative Aptitude',
    'Reasoning Ability',
    'English Language',
    'General/Economy/Banking Awareness',
    'Computer Aptitude',
    'Data Analysis & Interpretation',
  ],
  eligibility: {
    education: 'Bachelor\'s degree from a recognised university',
    ageMin: 21,
    ageMax: 30,
    ageRelaxation: '5 years for SC/ST, 3 years for OBC, 10 years for PwD',
    attempts: 'No limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 72.50, stage: 'Prelims' },
    { year: 2024, category: 'OBC', score: 67.00, stage: 'Prelims' },
    { year: 2024, category: 'SC', score: 55.50, stage: 'Prelims' },
    { year: 2024, category: 'ST', score: 46.75, stage: 'Prelims' },
    { year: 2023, category: 'General', score: 71.25, stage: 'Prelims' },
    { year: 2023, category: 'OBC', score: 65.75, stage: 'Prelims' },
    { year: 2023, category: 'SC', score: 54.50, stage: 'Prelims' },
    { year: 2023, category: 'ST', score: 45.50, stage: 'Prelims' },
  ],
  importantNotes: [
    'SBI conducts its own exam — not part of IBPS common recruitment.',
    'Group Exercise is unique to SBI PO (not in IBPS PO).',
    'Final merit: Mains (75%) + Interview + GE (25%).',
  ],
}
```

- [ ] **Step 5: Create `rrb-ntpc.ts`**

```typescript
// src/data/exams/rrb-ntpc.ts
import type { ExamInfo } from '@/types/exam'

export const rrbNtpc: ExamInfo = {
  id: 'rrb-ntpc',
  name: 'RRB NTPC',
  fullName: 'Railway Recruitment Board — Non-Technical Popular Categories',
  conductingBody: 'Railway Recruitment Boards (RRBs)',
  category: 'railway',
  frequency: 'Periodic (every 2–3 years)',
  description:
    'Recruitment for non-technical posts in Indian Railways including Station Master, Goods Guard, Commercial Apprentice, Traffic Assistant, and Clerk. One of the highest-volume exams with millions of applicants.',
  officialWebsite: 'https://rrbcdg.gov.in',
  stages: [
    {
      name: 'CBT 1 (Prelims)',
      mode: 'CBT (Online)',
      duration: '90 minutes',
      totalMarks: 100,
      negativeMarking: '1/3rd of marks per wrong answer',
      sections: [
        { name: 'Mathematics', questions: 30, marks: 30 },
        { name: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
        { name: 'General Awareness', questions: 40, marks: 40 },
      ],
    },
    {
      name: 'CBT 2 (Mains)',
      mode: 'CBT (Online)',
      duration: '90 minutes',
      totalMarks: 120,
      negativeMarking: '1/3rd of marks per wrong answer',
      sections: [
        { name: 'Mathematics', questions: 35, marks: 35 },
        { name: 'General Intelligence & Reasoning', questions: 35, marks: 35 },
        { name: 'General Awareness', questions: 50, marks: 50 },
      ],
    },
    {
      name: 'Typing Skill Test / CBAT',
      mode: 'Computer-based',
      duration: '15–30 minutes',
      totalMarks: 0,
      sections: [
        { name: 'Typing Test or Computer-Based Aptitude Test (post-specific)', questions: 0, marks: 0 },
      ],
    },
  ],
  syllabus: [
    'Mathematics (Arithmetic)',
    'General Intelligence & Reasoning',
    'General Awareness (current affairs, history, geography, polity, economy, science)',
  ],
  eligibility: {
    education: 'Graduation for most posts; 12th pass for some lower-level posts',
    ageMin: 18,
    ageMax: 33,
    ageRelaxation: '5 years for SC/ST, 3 years for OBC, 10 years for PwD',
    attempts: 'No limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 68.50, stage: 'CBT 1' },
    { year: 2024, category: 'OBC', score: 62.30, stage: 'CBT 1' },
    { year: 2024, category: 'SC', score: 50.15, stage: 'CBT 1' },
    { year: 2024, category: 'ST', score: 42.00, stage: 'CBT 1' },
    { year: 2021, category: 'General', score: 67.00, stage: 'CBT 1' },
    { year: 2021, category: 'OBC', score: 61.00, stage: 'CBT 1' },
    { year: 2021, category: 'SC', score: 48.25, stage: 'CBT 1' },
    { year: 2021, category: 'ST', score: 40.75, stage: 'CBT 1' },
  ],
  importantNotes: [
    'RRB NTPC is not conducted annually — cycles depend on Railway vacancy notifications.',
    'Cutoffs vary significantly by RRB zone (Delhi, Mumbai, Kolkata, etc.).',
    'CBAT is required only for Station Master and Traffic Assistant posts.',
  ],
}
```

- [ ] **Step 6: Create `rrb-group-d.ts`**

```typescript
// src/data/exams/rrb-group-d.ts
import type { ExamInfo } from '@/types/exam'

export const rrbGroupD: ExamInfo = {
  id: 'rrb-group-d',
  name: 'RRB Group D',
  fullName: 'Railway Recruitment Board — Group D (Level 1) Examination',
  conductingBody: 'Railway Recruitment Boards (RRBs)',
  category: 'railway',
  frequency: 'Periodic (every 2–3 years)',
  description:
    'Entry-level recruitment for Track Maintainer, Helper, Porter, and other Group D posts in Indian Railways. Requires only 10th pass qualification. Attracts the highest number of applicants among all govt exams.',
  officialWebsite: 'https://rrbcdg.gov.in',
  stages: [
    {
      name: 'CBT (Computer-Based Test)',
      mode: 'CBT (Online)',
      duration: '90 minutes',
      totalMarks: 100,
      negativeMarking: '1/3rd of marks per wrong answer',
      sections: [
        { name: 'Mathematics', questions: 25, marks: 25 },
        { name: 'General Intelligence & Reasoning', questions: 30, marks: 30 },
        { name: 'General Science', questions: 25, marks: 25 },
        { name: 'General Awareness & Current Affairs', questions: 20, marks: 20 },
      ],
    },
    {
      name: 'Physical Efficiency Test (PET)',
      mode: 'Physical',
      duration: 'Varies',
      totalMarks: 0,
      sections: [
        { name: 'PET (qualifying — running, weight lifting, etc.)', questions: 0, marks: 0 },
      ],
    },
  ],
  syllabus: [
    'Mathematics (basic arithmetic)',
    'General Intelligence & Reasoning',
    'General Science (Physics, Chemistry, Biology)',
    'General Awareness & Current Affairs',
  ],
  eligibility: {
    education: '10th pass (Matriculation) from a recognised board',
    ageMin: 18,
    ageMax: 33,
    ageRelaxation: '5 years for SC/ST, 3 years for OBC, 10 years for PwD',
    attempts: 'No limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 72.00, stage: 'CBT' },
    { year: 2024, category: 'OBC', score: 65.00, stage: 'CBT' },
    { year: 2024, category: 'SC', score: 55.00, stage: 'CBT' },
    { year: 2024, category: 'ST', score: 45.00, stage: 'CBT' },
    { year: 2022, category: 'General', score: 70.00, stage: 'CBT' },
    { year: 2022, category: 'OBC', score: 63.00, stage: 'CBT' },
    { year: 2022, category: 'SC', score: 53.00, stage: 'CBT' },
    { year: 2022, category: 'ST', score: 43.00, stage: 'CBT' },
  ],
  importantNotes: [
    'PET is qualifying only — CBT score determines the merit.',
    'Medical fitness is mandatory (visual acuity standards apply for safety posts).',
    'Cutoffs vary by RRB zone — the values shown are indicative averages.',
  ],
}
```

- [ ] **Step 7: Create `cds.ts`**

```typescript
// src/data/exams/cds.ts
import type { ExamInfo } from '@/types/exam'

export const cds: ExamInfo = {
  id: 'cds',
  name: 'CDS',
  fullName: 'Combined Defence Services Examination',
  conductingBody: 'Union Public Service Commission (UPSC)',
  category: 'defence',
  frequency: 'Twice a year (CDS I and CDS II)',
  description:
    'Entry into the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers Training Academy (OTA). Conducted by UPSC twice a year.',
  officialWebsite: 'https://upsc.gov.in',
  stages: [
    {
      name: 'Written Exam',
      mode: 'Pen & Paper (OMR)',
      duration: '2 hours per paper',
      totalMarks: 300,
      negativeMarking: '1/3rd of marks per wrong answer',
      sections: [
        { name: 'English', questions: 120, marks: 100 },
        { name: 'General Knowledge', questions: 120, marks: 100 },
        { name: 'Elementary Mathematics', questions: 100, marks: 100 },
      ],
    },
    {
      name: 'SSB Interview',
      mode: 'In-person (5-day process)',
      duration: '5 days',
      totalMarks: 300,
      sections: [
        { name: 'Intelligence & Personality Test', questions: 0, marks: 300 },
      ],
    },
  ],
  syllabus: [
    'English (grammar, vocabulary, comprehension)',
    'General Knowledge (history, geography, polity, economics, science, current affairs)',
    'Elementary Mathematics (up to 10th standard — arithmetic, algebra, geometry, trigonometry)',
  ],
  eligibility: {
    education: 'Bachelor\'s degree (or final year) for IMA/INA/AFA; any graduate or final-year for OTA',
    ageMin: 19,
    ageMax: 25,
    ageRelaxation: 'No age relaxation for reserved categories in defence exams',
    attempts: 'No limit (within age bracket)',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 137, stage: 'Written (IMA)' },
    { year: 2024, category: 'General', score: 137, stage: 'Written (INA)' },
    { year: 2024, category: 'General', score: 150, stage: 'Written (AFA)' },
    { year: 2023, category: 'General', score: 135, stage: 'Written (IMA)' },
    { year: 2023, category: 'General', score: 135, stage: 'Written (INA)' },
    { year: 2023, category: 'General', score: 148, stage: 'Written (AFA)' },
  ],
  importantNotes: [
    'OTA entry does not include Mathematics paper — only English + GK (200 marks total).',
    'SSB Interview has a high filtering rate — around 60–70% are screened out on Day 1.',
    'Women candidates can apply for OTA entry only (Short Service Commission).',
    'No reservation-based age relaxation in CDS — unlike SSC/Banking exams.',
  ],
}
```

- [ ] **Step 8: Create `nda.ts`**

```typescript
// src/data/exams/nda.ts
import type { ExamInfo } from '@/types/exam'

export const nda: ExamInfo = {
  id: 'nda',
  name: 'NDA',
  fullName: 'National Defence Academy & Naval Academy Examination',
  conductingBody: 'Union Public Service Commission (UPSC)',
  category: 'defence',
  frequency: 'Twice a year (NDA I and NDA II)',
  description:
    'Entry into the National Defence Academy for Army, Navy, and Air Force wings. Open to 12th-pass candidates aged 16.5–19.5. One of the earliest career entry points into the Indian Armed Forces.',
  officialWebsite: 'https://upsc.gov.in',
  stages: [
    {
      name: 'Written Exam',
      mode: 'Pen & Paper (OMR)',
      duration: '2.5 hours per paper',
      totalMarks: 900,
      negativeMarking: '1/3rd of marks per wrong answer',
      sections: [
        { name: 'Mathematics', questions: 120, marks: 300 },
        { name: 'General Ability Test (English + GK)', questions: 150, marks: 600 },
      ],
    },
    {
      name: 'SSB Interview',
      mode: 'In-person (5-day process)',
      duration: '5 days',
      totalMarks: 900,
      sections: [
        { name: 'Intelligence & Personality Test', questions: 0, marks: 900 },
      ],
    },
  ],
  syllabus: [
    'Mathematics (up to 12th standard — algebra, matrices, trigonometry, calculus, statistics)',
    'English (grammar, vocabulary, comprehension)',
    'General Knowledge (physics, chemistry, general science, history, geography, current affairs)',
  ],
  eligibility: {
    education: '12th pass or appearing (10+2 pattern) from a recognised board',
    ageMin: 16,
    ageMax: 19,
    ageRelaxation: 'No age relaxation for any category',
    attempts: 'No limit (within age bracket)',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 355, stage: 'Written' },
    { year: 2023, category: 'General', score: 348, stage: 'Written' },
    { year: 2022, category: 'General', score: 342, stage: 'Written' },
  ],
  importantNotes: [
    'Female candidates are eligible for NDA since 2022 (Supreme Court order).',
    'Navy entry requires Physics and Maths in 12th. Air Force requires Physics and Maths with minimum 60%.',
    'Army wing accepts students from any stream.',
    'NDA cadets undergo a 3-year training programme at NDA Pune followed by 1 year at respective academies.',
  ],
}
```

- [ ] **Step 9: Create `ctet.ts`**

```typescript
// src/data/exams/ctet.ts
import type { ExamInfo } from '@/types/exam'

export const ctet: ExamInfo = {
  id: 'ctet',
  name: 'CTET',
  fullName: 'Central Teacher Eligibility Test',
  conductingBody: 'Central Board of Secondary Education (CBSE)',
  category: 'teaching',
  frequency: 'Twice a year',
  description:
    'National-level eligibility test for teaching positions in central government schools (KVS, NVS, DSSSB, Army Schools, etc.). Qualifying CTET is mandatory for Classes I–VIII teaching posts.',
  officialWebsite: 'https://ctet.nic.in',
  stages: [
    {
      name: 'Paper I (Classes I–V)',
      mode: 'CBT (Online)',
      duration: '2 hours 30 minutes',
      totalMarks: 150,
      sections: [
        { name: 'Child Development & Pedagogy', questions: 30, marks: 30 },
        { name: 'Language I', questions: 30, marks: 30 },
        { name: 'Language II', questions: 30, marks: 30 },
        { name: 'Mathematics', questions: 30, marks: 30 },
        { name: 'Environmental Studies', questions: 30, marks: 30 },
      ],
    },
    {
      name: 'Paper II (Classes VI–VIII)',
      mode: 'CBT (Online)',
      duration: '2 hours 30 minutes',
      totalMarks: 150,
      sections: [
        { name: 'Child Development & Pedagogy', questions: 30, marks: 30 },
        { name: 'Language I', questions: 30, marks: 30 },
        { name: 'Language II', questions: 30, marks: 30 },
        { name: 'Mathematics & Science OR Social Studies', questions: 60, marks: 60 },
      ],
    },
  ],
  syllabus: [
    'Child Development & Pedagogy',
    'Language I (Hindi/English/regional)',
    'Language II (Hindi/English/regional)',
    'Mathematics',
    'Environmental Studies (Paper I)',
    'Science (Paper II)',
    'Social Studies (Paper II)',
  ],
  eligibility: {
    education: 'Paper I: D.El.Ed / B.El.Ed or graduation with 50% + B.Ed. Paper II: Graduation with B.Ed or equivalent.',
    ageMin: 18,
    ageMax: 99,
    ageRelaxation: 'No upper age limit',
    attempts: 'No limit',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 90, stage: 'Paper I (60%)' },
    { year: 2024, category: 'SC/ST/OBC', score: 82, stage: 'Paper I (55%)' },
    { year: 2024, category: 'General', score: 90, stage: 'Paper II (60%)' },
    { year: 2024, category: 'SC/ST/OBC', score: 82, stage: 'Paper II (55%)' },
  ],
  importantNotes: [
    'CTET is an eligibility test — not a recruitment exam. You still need to apply separately to KVS, NVS, DSSSB, etc.',
    'CTET certificate is valid for life (changed from 7 years in 2021).',
    'Candidates can appear for both Paper I and Paper II in the same session.',
    'No negative marking in CTET.',
  ],
}
```

- [ ] **Step 10: Verify all 10 files type-check**

Run: `npx tsc --noEmit src/data/exams/*.ts`
Expected: No errors.

- [ ] **Step 11: Commit all data files**

```bash
git add src/data/exams/upsc-cse.ts src/data/exams/ssc-chsl.ts src/data/exams/ibps-po.ts src/data/exams/sbi-po.ts src/data/exams/rrb-ntpc.ts src/data/exams/rrb-group-d.ts src/data/exams/cds.ts src/data/exams/nda.ts src/data/exams/ctet.ts
git commit -m "feat(exams): add data files for 9 remaining exams"
```

---

### Task 4: Create exam data barrel file

**Files:**
- Create: `src/data/exams/index.ts`

- [ ] **Step 1: Create the barrel file**

```typescript
// src/data/exams/index.ts
import type { ExamInfo } from '@/types/exam'
import { upscCse } from './upsc-cse'
import { sscCgl } from './ssc-cgl'
import { sscChsl } from './ssc-chsl'
import { ibpsPo } from './ibps-po'
import { sbiPo } from './sbi-po'
import { rrbNtpc } from './rrb-ntpc'
import { rrbGroupD } from './rrb-group-d'
import { cds } from './cds'
import { nda } from './nda'
import { ctet } from './ctet'

export const EXAM_DATA: Record<string, ExamInfo> = {
  'upsc-cse': upscCse,
  'ssc-cgl': sscCgl,
  'ssc-chsl': sscChsl,
  'ibps-po': ibpsPo,
  'sbi-po': sbiPo,
  'rrb-ntpc': rrbNtpc,
  'rrb-group-d': rrbGroupD,
  'cds': cds,
  'nda': nda,
  'ctet': ctet,
}

export const EXAM_LIST = Object.values(EXAM_DATA)
```

- [ ] **Step 2: Verify it compiles**

Run: `npx tsc --noEmit src/data/exams/index.ts`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/exams/index.ts
git commit -m "feat(exams): add EXAM_DATA barrel export"
```

---

### Task 5: Create exams layout

**Files:**
- Create: `src/app/exams/layout.tsx`

- [ ] **Step 1: Create the layout with metadata**

```typescript
// src/app/exams/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Government Exams — Eligibility, Pattern & Cutoffs | GovtExamsStudy',
  description:
    'Comprehensive guide to India\'s top government competitive exams. Exam pattern, eligibility criteria, syllabus, and cutoff trends for SSC, UPSC, Banking, Railways, and more.',
}

export default function ExamsLayout({ children }: { children: React.ReactNode }) {
  return children
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/exams/layout.tsx
git commit -m "feat(exams): add exams layout with metadata"
```

---

### Task 6: Create exams listing page

**Files:**
- Create: `src/app/exams/page.tsx`

- [ ] **Step 1: Create the listing page**

```typescript
// src/app/exams/page.tsx
import Link from 'next/link'
import { EXAM_LIST } from '@/data/exams'
import type { ExamCategory } from '@/types/exam'

const CATEGORY_ORDER: ExamCategory[] = ['upsc', 'ssc', 'banking', 'railway', 'defence', 'teaching']

const CATEGORY_LABELS: Record<ExamCategory, string> = {
  upsc: 'UPSC Exams',
  ssc: 'SSC Exams',
  banking: 'Banking Exams',
  railway: 'Railway Exams',
  defence: 'Defence Exams',
  teaching: 'Teaching Exams',
}

const CATEGORY_DESCRIPTIONS: Record<ExamCategory, string> = {
  upsc: 'India\'s premier civil services and defence examinations',
  ssc: 'Central government Group B and Group C posts',
  banking: 'Public sector bank officer and clerk recruitment',
  railway: 'Indian Railways technical and non-technical posts',
  defence: 'Armed Forces officer entry through UPSC',
  teaching: 'Central government school teaching eligibility',
}

export default function ExamsPage() {
  const examsByCategory = CATEGORY_ORDER
    .map((cat) => ({
      category: cat,
      label: CATEGORY_LABELS[cat],
      description: CATEGORY_DESCRIPTIONS[cat],
      exams: EXAM_LIST.filter((e) => e.category === cat),
    }))
    .filter((group) => group.exams.length > 0)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold text-text-primary">Government Exams</h1>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        Comprehensive guide to India&apos;s top competitive exams — eligibility, exam pattern, syllabus, and cutoff trends. All data sourced from official conducting body websites.
      </p>

      <div className="mt-8 space-y-8">
        {examsByCategory.map((group) => (
          <section key={group.category}>
            <div className="mb-3">
              <h2 className="text-base font-semibold text-text-primary">{group.label}</h2>
              <p className="text-xs text-text-muted">{group.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {group.exams.map((exam) => (
                <Link
                  key={exam.id}
                  href={`/exams/${exam.id}`}
                  className="group rounded-lg border border-border-primary bg-bg-elevated p-4 no-underline transition-shadow hover:shadow-md"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-text-primary">{exam.name}</h3>
                    <span className="shrink-0 rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700">
                      {exam.frequency}
                    </span>
                  </div>
                  <p className="mb-1 text-[11px] text-text-muted">{exam.conductingBody}</p>
                  <p className="mb-2 text-xs leading-relaxed text-text-secondary">{exam.description}</p>
                  <p className="text-xs text-text-muted">
                    {exam.stages.length} {exam.stages.length === 1 ? 'Stage' : 'Stages'} · {exam.syllabus.length} Subjects
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify the page renders**

Run: `curl -s http://localhost:3000/exams | head -20`
Expected: HTML response containing "Government Exams".

- [ ] **Step 3: Commit**

```bash
git add src/app/exams/page.tsx
git commit -m "feat(exams): add exams listing page"
```

---

### Task 7: Create exam detail page

**Files:**
- Create: `src/app/exams/[examId]/page.tsx`

- [ ] **Step 1: Create the detail page**

```typescript
// src/app/exams/[examId]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { EXAM_DATA } from '@/data/exams'
import type { ExamInfo, CutoffEntry } from '@/types/exam'

export function generateStaticParams() {
  return Object.keys(EXAM_DATA).map((examId) => ({ examId }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ examId: string }>
}): Promise<Metadata> {
  const { examId } = await params
  const exam = EXAM_DATA[examId]
  if (!exam) return {}
  const year = new Date().getFullYear()
  return {
    title: `${exam.name} ${year} — Exam Pattern, Eligibility, Syllabus & Cutoffs | GovtExamsStudy`,
    description: exam.description,
  }
}

function groupCutoffsByYear(cutoffs: CutoffEntry[]) {
  const years = [...new Set(cutoffs.map((c) => c.year))].sort((a, b) => b - a)
  return years.map((year) => ({
    year,
    entries: cutoffs.filter((c) => c.year === year),
  }))
}

function hasStageColumn(cutoffs: CutoffEntry[]) {
  return cutoffs.some((c) => c.stage)
}

export default async function ExamDetailPage({
  params,
}: {
  params: Promise<{ examId: string }>
}) {
  const { examId } = await params
  const exam = EXAM_DATA[examId]
  if (!exam) notFound()

  const cutoffGroups = groupCutoffsByYear(exam.cutoffs)
  const showStageCol = hasStageColumn(exam.cutoffs)

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-xs text-text-muted" aria-label="Breadcrumb">
        <Link href="/" className="text-text-muted no-underline hover:text-text-primary">Home</Link>
        <span className="mx-1.5">›</span>
        <Link href="/exams" className="text-text-muted no-underline hover:text-text-primary">Exams</Link>
        <span className="mx-1.5">›</span>
        <span className="text-text-primary">{exam.name}</span>
      </nav>

      {/* Hero */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-text-primary">{exam.name}</h1>
        <p className="mt-1 text-sm text-text-muted">{exam.fullName}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-text-secondary">{exam.conductingBody}</span>
          <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700">
            {exam.frequency}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">{exam.description}</p>
        <a
          href={exam.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block rounded-md bg-orange-500 px-4 py-2 text-xs font-medium text-white no-underline transition-colors hover:bg-orange-600"
        >
          Official Website ↗
        </a>
      </section>

      {/* Exam Pattern */}
      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-text-primary">Exam Pattern</h2>
        <div className="space-y-4">
          {exam.stages.map((stage, i) => (
            <div key={i} className="rounded-lg border border-border-primary bg-bg-elevated p-4">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-text-primary">{stage.name}</h3>
                <div className="flex gap-2">
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-text-muted">{stage.mode}</span>
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] text-text-muted">{stage.duration}</span>
                </div>
              </div>
              <p className="mb-2 text-xs text-text-secondary">
                Total Marks: <span className="font-semibold">{stage.totalMarks}</span>
                {stage.negativeMarking && (
                  <span className="ml-2 text-red-600">· Negative: {stage.negativeMarking}</span>
                )}
              </p>
              {stage.sections.length > 0 && stage.sections.some((s) => s.marks > 0) && (
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border-primary text-left text-text-muted">
                      <th className="pb-1.5 font-medium">Section</th>
                      <th className="pb-1.5 text-right font-medium">Questions</th>
                      <th className="pb-1.5 text-right font-medium">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stage.sections.map((sec, j) => (
                      <tr key={j} className="border-b border-border-primary/50 last:border-0">
                        <td className="py-1.5 text-text-secondary">{sec.name}</td>
                        <td className="py-1.5 text-right font-mono text-text-primary">{sec.questions || '—'}</td>
                        <td className="py-1.5 text-right font-mono text-text-primary">{sec.marks || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-text-primary">Syllabus</h2>
        <div className="flex flex-wrap gap-2">
          {exam.syllabus.map((subject) => (
            <span key={subject} className="rounded-full border border-border-primary bg-bg-secondary px-3 py-1 text-xs text-text-secondary">
              {subject}
            </span>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-text-primary">Eligibility</h2>
        <div className="rounded-lg border border-border-primary bg-bg-elevated p-4">
          <dl className="space-y-3 text-xs">
            <div>
              <dt className="font-medium text-text-muted">Education</dt>
              <dd className="mt-0.5 text-text-secondary">{exam.eligibility.education}</dd>
            </div>
            <div>
              <dt className="font-medium text-text-muted">Age</dt>
              <dd className="mt-0.5 text-text-secondary">
                {exam.eligibility.ageMin}–{exam.eligibility.ageMax} years
                {exam.eligibility.ageRelaxation && (
                  <span className="ml-1 text-text-muted">({exam.eligibility.ageRelaxation})</span>
                )}
              </dd>
            </div>
            {exam.eligibility.attempts && (
              <div>
                <dt className="font-medium text-text-muted">Attempts</dt>
                <dd className="mt-0.5 text-text-secondary">{exam.eligibility.attempts}</dd>
              </div>
            )}
            <div>
              <dt className="font-medium text-text-muted">Nationality</dt>
              <dd className="mt-0.5 text-text-secondary">{exam.eligibility.nationality}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Cutoff Trends */}
      {exam.cutoffs.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Cutoff Trends</h2>
          <div className="space-y-4">
            {cutoffGroups.map((group) => (
              <div key={group.year} className="rounded-lg border border-border-primary bg-bg-elevated p-4">
                <h3 className="mb-2 text-sm font-semibold text-text-primary">{group.year}</h3>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border-primary text-left text-text-muted">
                      <th className="pb-1.5 font-medium">Category</th>
                      {showStageCol && <th className="pb-1.5 font-medium">Stage</th>}
                      <th className="pb-1.5 text-right font-medium">Cutoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.entries.map((entry, i) => (
                      <tr key={i} className="border-b border-border-primary/50 last:border-0">
                        <td className="py-1.5 text-text-secondary">{entry.category}</td>
                        {showStageCol && <td className="py-1.5 text-text-muted">{entry.stage || '—'}</td>}
                        <td className="py-1.5 text-right font-mono text-text-primary">{entry.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Important Notes */}
      {exam.importantNotes && exam.importantNotes.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-semibold text-text-primary">Important Notes</h2>
          <ul className="space-y-1.5 text-xs text-text-secondary">
            {exam.importantNotes.map((note, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-orange-500">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Official Links */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-semibold text-text-primary">Official Links</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href={exam.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border-primary bg-bg-elevated px-4 py-2 text-xs font-medium text-text-primary no-underline transition-colors hover:bg-bg-tertiary"
          >
            Official Website ↗
          </a>
          {exam.notificationUrl && (
            <a
              href={exam.notificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-border-primary bg-bg-elevated px-4 py-2 text-xs font-medium text-text-primary no-underline transition-colors hover:bg-bg-tertiary"
            >
              Latest Notifications ↗
            </a>
          )}
        </div>
      </section>
    </div>
  )
}
```

- [ ] **Step 2: Verify the page renders**

Run: `curl -s http://localhost:3000/exams/ssc-cgl | head -20`
Expected: HTML response containing "SSC CGL".

- [ ] **Step 3: Verify unknown slug returns 404**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/exams/nonexistent`
Expected: `404`

- [ ] **Step 4: Commit**

```bash
git add src/app/exams/\[examId\]/page.tsx
git commit -m "feat(exams): add exam detail page with pattern, eligibility, cutoffs"
```

---

### Task 8: Update header navigation

**Files:**
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Add "Exams" to NAV_LINKS after Science**

In `src/components/layout/Header.tsx`, add to the `NAV_LINKS` array after the Science entry:

```typescript
// Add this as the last entry in NAV_LINKS (after Science)
  { href: '/exams', label: 'Exams', colorClass: 'hover:text-orange-500' },
```

The full `NAV_LINKS` array becomes:
```typescript
const NAV_LINKS: NavLink[] = [
  { href: '/quant', label: 'Quant', colorClass: 'hover:text-subject-quant' },
  { href: '/reasoning', label: 'Reasoning', colorClass: 'hover:text-subject-reasoning' },
  { href: '/polity', label: 'Polity', colorClass: 'hover:text-subject-polity' },
  { href: '/history', label: 'History', colorClass: 'hover:text-subject-history' },
  { href: '/geography', label: 'Geography', colorClass: 'hover:text-subject-geography' },
  { href: '/economics', label: 'Economics', colorClass: 'hover:text-subject-economics' },
  { href: '/science', label: 'Science', colorClass: 'hover:text-subject-science' },
  { href: '/exams', label: 'Exams', colorClass: 'hover:text-orange-500' },
]
```

- [ ] **Step 2: Verify header renders the new link**

Run: `curl -s http://localhost:3000 | grep -o 'href="/exams"'`
Expected: `href="/exams"`

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Header.tsx
git commit -m "feat(exams): add Exams link to header navigation"
```

---

### Task 9: Update footer exam badges

**Files:**
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Replace static exam badges with linked badges**

In `src/components/layout/Footer.tsx`, replace the "Exams Covered" section (the `div` containing the `.map` over the string array) with:

```typescript
          {/* Exams */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Exams Covered
            </p>
            <div className="flex flex-wrap gap-1.5">
              {([
                { label: 'UPSC', href: '/exams/upsc-cse' },
                { label: 'SSC CGL', href: '/exams/ssc-cgl' },
                { label: 'SSC CHSL', href: '/exams/ssc-chsl' },
                { label: 'Banking PO', href: '/exams/ibps-po' },
                { label: 'Railways', href: '/exams/rrb-ntpc' },
                { label: 'NDA', href: '/exams/nda' },
                { label: 'CDS', href: '/exams/cds' },
                { label: 'CTET', href: '/exams/ctet' },
              ] as const).map((exam) => (
                <Link
                  key={exam.href}
                  href={exam.href}
                  className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-400 no-underline transition-colors hover:bg-gray-700 hover:text-gray-200"
                >
                  {exam.label}
                </Link>
              ))}
              <span className="rounded bg-gray-800 px-2 py-0.5 text-xs text-gray-400">
                State PSC
              </span>
            </div>
          </div>
```

Note: "State PSC" remains a static `<span>` since it has no detail page.

- [ ] **Step 2: Verify footer renders linked badges**

Run: `curl -s http://localhost:3000 | grep -c 'href="/exams/'`
Expected: `8` (8 linked badges).

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat(exams): make footer exam badges link to detail pages"
```

---

### Task 10: Update sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add exam routes to sitemap**

In `src/app/sitemap.ts`, add the `EXAM_SLUGS` array after the other topic arrays (before the `sitemap()` function):

```typescript
const EXAM_SLUGS = [
  'upsc-cse',
  'ssc-cgl',
  'ssc-chsl',
  'ibps-po',
  'sbi-po',
  'rrb-ntpc',
  'rrb-group-d',
  'cds',
  'nda',
  'ctet',
]
```

Add `/exams` to the `staticRoutes` array (after `/practice`):

```typescript
    '/exams',
```

Add exam routes to `allRoutes` — after the `economicsRoutes` line, add:

```typescript
  const examRoutes = EXAM_SLUGS.map((slug) => `/exams/${slug}`)
```

Update the `allRoutes` spread to include `examRoutes`:

```typescript
  const allRoutes = [...staticRoutes, ...quantRoutes, ...reasoningRoutes, ...polityRoutes, ...historyRoutes, ...geographyRoutes, ...economicsRoutes, ...examRoutes]
```

- [ ] **Step 2: Verify sitemap includes exam routes**

Run: `curl -s http://localhost:3000/sitemap.xml | grep -c 'exams'`
Expected: `11` (1 for `/exams` + 10 for individual exam pages).

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "feat(exams): add exam routes to sitemap"
```

---

### Task 11: Final verification

- [ ] **Step 1: Type-check the entire project**

Run: `npx tsc --noEmit`
Expected: No errors.

- [ ] **Step 2: Verify listing page loads**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/exams`
Expected: `200`

- [ ] **Step 3: Verify a detail page loads**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/exams/upsc-cse`
Expected: `200`

- [ ] **Step 4: Verify 404 for unknown exam**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/exams/fake-exam`
Expected: `404`

- [ ] **Step 5: Verify header has Exams link**

Run: `curl -s http://localhost:3000 | grep -o 'Exams'`
Expected: At least one match.

- [ ] **Step 6: Verify sitemap has exam routes**

Run: `curl -s http://localhost:3000/sitemap.xml | grep 'exams/' | wc -l`
Expected: `10`

- [ ] **Step 7: Run linter**

Run: `npx next lint`
Expected: No errors in new files.

- [ ] **Step 8: Commit any remaining changes**

Only if linter required fixes:
```bash
git add -A
git commit -m "fix(exams): lint fixes"
```
