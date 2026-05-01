import { describe, it, expect } from 'vitest'
import { AD_SLOTS } from '../AdSlots'

describe('AD_SLOTS', () => {
  it('does not ship placeholder AdSense slot IDs', () => {
    expect(Object.values(AD_SLOTS)).not.toEqual(
      expect.arrayContaining(['1234567890', '1234567891', '1234567892'])
    )
  })
})
