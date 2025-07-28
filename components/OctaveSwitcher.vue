<template>
  <div class="octave-switcher switcher">
    <div class="octave-switch control-switch">
      <button @click="changeOctaves('-')">
        <img src="/icons/arrow-left.png" />
      </button>
      <p>Octaves</p>
      <button @click="changeOctaves('+')">
        <img src="/icons/arrow-right.png" />
      </button>
    </div>
    <input v-model="octavesDisplayed" />
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

<style scoped>
.octave-switcher {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
button {
  width: 24px;
  height: 24px;
}
button img {
  width: 100%;
  height: 100%;
}
</style>
