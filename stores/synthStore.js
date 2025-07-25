import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSynthStore = defineStore('synth', () => { 
  const currentTone = 'sine'

  return {
    currentTone
  }
})