<template>
  <div class="octave-switch control-switch">
    <button @click="changeOctaves('-')">-</button>
    <input v-model="octavesDisplayed" />
    <button @click="changeOctaves('+')">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { currentStartingOctave } = storeToRefs(useControlStore())
const octavesDisplayed = ref('3-4')
function changeOctaves(op) {
  const octaves = ['1', '2', '3', '4', '5']
  const index = octaves.indexOf(currentStartingOctave.value.toString())
  if (op === '+')
    currentStartingOctave.value = Number(octaves[(index + 1) % octaves.length])
  if (op === '-')
    currentStartingOctave.value = Number(
      octaves[(index - 1 + octaves.length) % octaves.length]
    )
  octavesDisplayed.value = `${currentStartingOctave.value}-${
    currentStartingOctave.value + 1
  }`
}
</script>

<style scoped></style>
