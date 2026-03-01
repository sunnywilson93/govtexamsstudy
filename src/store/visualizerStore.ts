import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface VisualizerState {
  currentStep: number
  totalSteps: number
  isPlaying: boolean
}

interface VisualizerActions {
  setSteps: (total: number) => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (n: number) => void
  toggleAutoPlay: () => void
  reset: () => void
}

const initialState: VisualizerState = {
  currentStep: 0,
  totalSteps: 0,
  isPlaying: false,
}

export const useVisualizerStore = create<VisualizerState & VisualizerActions>()(
  immer((set, get) => ({
    ...initialState,

    setSteps: (total: number) => {
      set((state) => {
        state.totalSteps = total
      })
    },

    nextStep: () => {
      const { currentStep, totalSteps } = get()
      if (currentStep < totalSteps - 1) {
        set((state) => {
          state.currentStep = currentStep + 1
        })
      }
    },

    prevStep: () => {
      const { currentStep } = get()
      if (currentStep > 0) {
        set((state) => {
          state.currentStep = currentStep - 1
        })
      }
    },

    goToStep: (n: number) => {
      const { totalSteps } = get()
      const clamped = Math.max(0, Math.min(n, totalSteps - 1))
      set((state) => {
        state.currentStep = clamped
      })
    },

    toggleAutoPlay: () => {
      set((state) => {
        state.isPlaying = !state.isPlaying
      })
    },

    reset: () => {
      set(initialState)
    },
  }))
)
