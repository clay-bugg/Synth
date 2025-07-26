<template>
  <div class="labels-switch control-switch">
    <button @click="changeLabels('-')">-</button>
    <input v-model="currentLabels" />
    <button @click="changeLabels('+')">+</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const { currentLabels } = storeToRefs(useControlStore())

function changeLabels(op) {
  const labels = ['All', 'Chord', 'None']
  const index = labels.indexOf(currentLabels.value)
  if (op === '+') currentLabels.value = labels[(index + 1) % labels.length]
  if (op === '-') currentLabels.value = labels[(index - 1 + labels.length) % labels.length] 
}
</script>

<style scoped>

</style>