export type SubjectSlug = 'polity' | 'geography' | 'economics'

export const SUBJECT_CLASSES: Record<SubjectSlug, {
  bg: string; text: string; border: string; bgLight: string; textDark: string
}> = {
  polity: {
    bg: 'bg-subject-polity',
    text: 'text-subject-polity',
    border: 'border-subject-polity',
    bgLight: 'bg-subject-polity-light',
    textDark: 'text-subject-polity-dark',
  },
  geography: {
    bg: 'bg-subject-geography',
    text: 'text-subject-geography',
    border: 'border-subject-geography',
    bgLight: 'bg-subject-geography-light',
    textDark: 'text-subject-geography-dark',
  },
  economics: {
    bg: 'bg-subject-economics',
    text: 'text-subject-economics',
    border: 'border-subject-economics',
    bgLight: 'bg-subject-economics-light',
    textDark: 'text-subject-economics-dark',
  },
}
