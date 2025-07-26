import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useControlStore = defineStore('control', () => { 
  const currentTone = ref('sine')
  const currentStartingOctave = ref(3)
  const currentLabels = ref('All')

  function changeLabels(op) { 
    const labels = ['All', 'Chord', 'None']
    const index = labels.indexOf(currentLabels.value)
    if (op === '+') currentLabels.value = labels[(index + 1) % labels.length]
    if (op === '-') currentLabels.value = labels[(index - 1) % labels.length]
  }



  return {
    currentTone,
    currentStartingOctave,
    currentLabels,
    changeLabels,
  }
})
