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

input {
  text-align: center;
  width: 100px;
  font-size: 1.2rem;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #F2F2F2;
  background-color: rgb(47, 47, 47);
  border-radius: 5px;
}

</style>

