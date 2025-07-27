import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useControlStore = defineStore('control', () => { 
  const currentTone = ref('sine')
  const currentStartingOctave = ref(3)
  const currentLabels = ref('All')
  const currentVolume = ref(80)
  const currentBPM = ref(80)

  return {
    currentTone,
    currentStartingOctave,
    currentLabels,
    currentVolume,
    currentBPM,
  }
})
