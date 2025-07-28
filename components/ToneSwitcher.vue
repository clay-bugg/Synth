<template>
  <div class="tone-switcher switcher">
    <div class="tone-switch control-switch">
      <button @click="changeTone('-')">
        <img src="/icons/arrow-left.png" />
      </button>
      <p>Tone</p>
      <button @click="changeTone('+')">
        <img src="/icons/arrow-right.png" />
      </button>
    </div>
    <input v-model="currentTone" />
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
  if (op === '-')
    currentTone.value = tones[(index - 1 + tones.length) % tones.length]
}
</script>

<style scoped>
.tone-switcher {
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
