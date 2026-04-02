import type { ExamInfo } from '@/types/exam'

export const ctet: ExamInfo = {
  id: 'ctet',
  name: 'CTET',
  fullName: 'Central Teacher Eligibility Test',
  conductingBody: 'Central Board of Secondary Education (CBSE)',
  category: 'teaching',
  frequency: 'Twice a year (typically July and December)',
  description:
    'CTET is the eligibility test for teachers in central government schools (Kendriya Vidyalayas, Navodaya Vidyalayas, Tibetan schools, etc.). It is NOT a recruitment exam — passing CTET qualifies a candidate to apply for teaching posts; the actual appointment is done by individual schools and bodies. Paper I is for Classes I–V (Primary) and Paper II is for Classes VI–VIII (Elementary).',
  officialWebsite: 'https://ctet.nic.in',
  notificationUrl: 'https://ctet.nic.in',
  stages: [
    {
      name: 'Paper I — Primary Stage (Classes I–V)',
      mode: 'Computer Based Test (CBT)',
      duration: '2.5 hours (150 minutes)',
      totalMarks: 150,
      sections: [
        { name: 'Child Development & Pedagogy', questions: 30, marks: 30 },
        { name: 'Language I (compulsory)', questions: 30, marks: 30 },
        { name: 'Language II (compulsory)', questions: 30, marks: 30 },
        { name: 'Mathematics', questions: 30, marks: 30 },
        { name: 'Environmental Studies', questions: 30, marks: 30 },
      ],
    },
    {
      name: 'Paper II — Elementary Stage (Classes VI–VIII)',
      mode: 'Computer Based Test (CBT)',
      duration: '2.5 hours (150 minutes)',
      totalMarks: 150,
      sections: [
        { name: 'Child Development & Pedagogy (compulsory)', questions: 30, marks: 30 },
        { name: 'Language I (compulsory)', questions: 30, marks: 30 },
        { name: 'Language II (compulsory)', questions: 30, marks: 30 },
        { name: 'Mathematics & Science (for Maths/Science teachers) OR Social Studies/Social Science (for SST teachers)', questions: 60, marks: 60 },
      ],
    },
  ],
  syllabus: [
    'Child Development & Pedagogy: Learning theories, inclusive education, child psychology',
    'Language I & II: Reading comprehension, grammar, language acquisition pedagogy',
    'Mathematics (Paper I): Number system, shapes, measurement, patterns',
    'Environmental Studies (Paper I): Family, food, shelter, water, travel, things we make and do',
    'Mathematics & Science (Paper II): Maths up to Class VIII + Physics, Chemistry, Biology',
    'Social Studies (Paper II): History, Geography, Political Science, Economics up to Class VIII',
  ],
  eligibility: {
    education: "D.El.Ed (Diploma in Elementary Education) or B.Ed from a recognised institution, as specified in NCTE norms",
    ageMin: 18,
    ageMax: 0,
    ageRelaxation: 'No upper age limit — CTET has no maximum age restriction',
    attempts: 'No restriction on attempts',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 90, stage: 'Paper I (qualifying)' },
    { year: 2024, category: 'SC/ST/OBC/PwD', score: 82, stage: 'Paper I (qualifying)' },
    { year: 2023, category: 'General', score: 90, stage: 'Paper I (qualifying)' },
    { year: 2023, category: 'SC/ST/OBC/PwD', score: 82, stage: 'Paper II (qualifying)' },
    { year: 2022, category: 'General', score: 90, stage: 'Paper I (qualifying)' },
    { year: 2022, category: 'SC/ST/OBC/PwD', score: 82, stage: 'Paper I (qualifying)' },
  ],
  importantNotes: [
    'CTET is an eligibility test, not a recruitment exam — passing it qualifies you to apply for teaching posts but does not guarantee a job.',
    'CTET certificate now has lifetime validity (earlier it was 7 years) — once you clear it, you do not need to reappear.',
    'There is no negative marking in CTET — attempt all questions.',
  ],
}
