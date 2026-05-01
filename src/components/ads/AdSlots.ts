/**
 * Centralized ad slot IDs.
 * Set these in the deployment environment with real AdSense ad unit slot IDs.
 */
const getSlot = (envValue: string | undefined, fallback: string) => envValue?.trim() || fallback

export const AD_SLOTS = {
  /** Horizontal banner below the practice hub subject grid */
  practiceHubBanner: getSlot(process.env.NEXT_PUBLIC_ADSENSE_PRACTICE_HUB_SLOT, '1726114430'),
  /** Horizontal banner below the topic list grid */
  practiceSubjectBanner: getSlot(process.env.NEXT_PUBLIC_ADSENSE_PRACTICE_SUBJECT_SLOT, '9323291019'),
  /** Rectangle ad shown after quiz completion (ScoreSummary) */
  practiceResultRect: getSlot(process.env.NEXT_PUBLIC_ADSENSE_PRACTICE_RESULT_SLOT, '9695878458'),
} as const
