import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useControlStore } from '@/stores/controlStore'
const { currentStartingOctave } = storeToRefs(useControlStore())

export const useSynthStore = defineStore('synth', () => {
  const currentAttack = ref(null)
  const currentRelease = ref(null)
  const currentSustain = ref(null)
  const currentDecay = ref(null)
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']


  return {
    currentAttack,
    currentRelease,
    currentDecay,
    currentSustain,
    keys,
    octavesDisplayed,
    notes,
  }
})
