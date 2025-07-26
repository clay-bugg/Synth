<template>
  <div class="tone-switch control-switch">
    <button @click="changeTone('-')">-</button>
    <input v-model="currentTone" />
    <button @click="changeTone('+')">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const { currentTone } = storeToRefs(useControlStore())

function changeTone(op) {
  const tones = ['sine', 'sawtooth', 'square', 'triangle']
  const index = tones.indexOf(currentTone.value)
  if (op === '+') currentTone.value = tones[(index + 1) % tones.length]
  if (op === '-') currentTone.value = tones[(index - 1 + tones.length) % tones.length] 
}
</script>

<style scoped>

</style>

