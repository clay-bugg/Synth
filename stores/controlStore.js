import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useControlStore = defineStore('control', () => { 
  const currentTone = ref('sine')
  const currentOctaves = ref(3)
  const currentLabels = ref('All')

  function changeOctaves(op) { 
    const octaves = [...Array(6).keys()]
    let octave = currentOctaves.value
    if (op === '+') {
      octave = (octave + 1) % octaves.length
    }
    if (op === '-') {
      octave = (octave - 1 + octaves.length) % octaves.length
    }
    currentOctaves.value = octave
  }

  function changeLabels(op) { 
    const labels = ['All', 'Chord', 'None']
    const index = labels.indexOf(currentLabels.value)
    if (op === '+') currentLabels.value = labels[(index + 1) % labels.length]
    if (op === '-') currentLabels.value = labels[(index - 1) % labels.length]
  }



  return {
    currentTone,
    currentOctaves,
    currentLabels,
    changeOctaves,
    changeLabels,
  }
})
