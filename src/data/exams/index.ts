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
