import { describe, it, expect, beforeEach } from 'vitest'
import { useVisualizerStore } from '../visualizerStore'

describe('visualizerStore', () => {
  beforeEach(() => {
    useVisualizerStore.getState().reset()
  })

  it('initializes at step 0', () => {
    expect(useVisualizerStore.getState().currentStep).toBe(0)
  })

  it('sets total steps', () => {
    useVisualizerStore.getState().setSteps(10)
    expect(useVisualizerStore.getState().totalSteps).toBe(10)
  })

  it('advances to next step', () => {
    useVisualizerStore.getState().setSteps(5)
    useVisualizerStore.getState().nextStep()
    expect(useVisualizerStore.getState().currentStep).toBe(1)
  })

  it('goes to previous step', () => {
    useVisualizerStore.getState().setSteps(5)
    useVisualizerStore.getState().goToStep(3)
    useVisualizerStore.getState().prevStep()
    expect(useVisualizerStore.getState().currentStep).toBe(2)
  })

  it('does not go below 0', () => {
    useVisualizerStore.getState().setSteps(5)
    useVisualizerStore.getState().prevStep()
    expect(useVisualizerStore.getState().currentStep).toBe(0)
  })

  it('does not go above totalSteps - 1', () => {
    useVisualizerStore.getState().setSteps(3)
    useVisualizerStore.getState().goToStep(2)
    useVisualizerStore.getState().nextStep()
    expect(useVisualizerStore.getState().currentStep).toBe(2)
  })

  it('toggles auto-play', () => {
    useVisualizerStore.getState().toggleAutoPlay()
    expect(useVisualizerStore.getState().isPlaying).toBe(true)
    useVisualizerStore.getState().toggleAutoPlay()
    expect(useVisualizerStore.getState().isPlaying).toBe(false)
  })

  it('resets to initial state', () => {
    useVisualizerStore.getState().setSteps(10)
    useVisualizerStore.getState().goToStep(5)
    useVisualizerStore.getState().reset()
    expect(useVisualizerStore.getState().currentStep).toBe(0)
    expect(useVisualizerStore.getState().totalSteps).toBe(0)
    expect(useVisualizerStore.getState().isPlaying).toBe(false)
  })
})
