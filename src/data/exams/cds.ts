import type { ExamInfo } from '@/types/exam'

export const cds: ExamInfo = {
  id: 'cds',
  name: 'CDS',
  fullName: 'Combined Defence Services Examination',
  conductingBody: 'Union Public Service Commission (UPSC)',
  category: 'defence',
  frequency: 'Twice a year (CDS I in February, CDS II in September)',
  description:
    'The CDS examination is conducted by UPSC to recruit officers into the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers Training Academy (OTA). It is the gateway to a commissioned officer career in the Indian Armed Forces for graduate candidates.',
  officialWebsite: 'https://upsc.gov.in',
  notificationUrl: 'https://upsc.gov.in/examinations/active-examinations',
  stages: [
    {
      name: 'Written Examination',
      mode: 'OMR-based objective test',
      duration: '2 hours per paper',
      totalMarks: 300,
      sections: [
        { name: 'English', questions: 120, marks: 100 },
        { name: 'General Knowledge', questions: 120, marks: 100 },
        { name: 'Elementary Mathematics (not for OTA)', questions: 100, marks: 100 },
      ],
      negativeMarking: '1/3rd mark per wrong answer',
    },
    {
      name: 'SSB Interview (Service Selection Board)',
      mode: '5-day in-person assessment at SSB Centre',
      duration: '5 days',
      totalMarks: 300,
      sections: [
        { name: 'Psychological Tests (Day 1–2: OIR, PP&DT, TAT, WAT, SRT, SD)', questions: 0, marks: 150 },
        { name: 'Group Tasks (GTO) + Interview + Conference', questions: 0, marks: 150 },
      ],
    },
  ],
  syllabus: [
    'English: Comprehension, Fill in the Blanks, Ordering Sentences, Vocabulary',
    'General Knowledge: History, Geography, Polity, Economics, Science & Technology, Current Affairs',
    'Elementary Mathematics: Arithmetic, Algebra, Geometry, Trigonometry, Statistics (not for OTA)',
  ],
  eligibility: {
    education: "Bachelor's degree from a recognised university (IMA/INA/AFA); 12th pass for OTA (women entry)",
    ageMin: 19,
    ageMax: 25,
    ageRelaxation: 'No age relaxation for any category',
    attempts: 'No official restriction (within age limit)',
    nationality: 'Indian',
  },
  cutoffs: [
    { year: 2024, category: 'General', score: 108, stage: 'Written (IMA)' },
    { year: 2024, category: 'General', score: 94, stage: 'Written (OTA)' },
    { year: 2023, category: 'General', score: 112, stage: 'Written (IMA)' },
    { year: 2023, category: 'General', score: 97, stage: 'Written (OTA)' },
    { year: 2022, category: 'General', score: 105, stage: 'Written (IMA)' },
    { year: 2022, category: 'General', score: 91, stage: 'Written (OTA)' },
  ],
  importantNotes: [
    'OTA (Officers Training Academy) does NOT have a Mathematics paper — only English + GK (200 marks total); OTA is for Short Service Commission.',
    'SSB Interview has an extremely high filter rate — only about 1 in 30 candidates recommended; mental robustness and leadership qualities are key.',
    'Women candidates can apply only for OTA (SSC) entry; IMA, INA, and AFA are currently open to male candidates only.',
  ],
}
