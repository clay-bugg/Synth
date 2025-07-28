<template>
  <div class="label-switcher switcher">
    <div class="labels-switch control-switch">
      <button @click="changeLabels('-')">
        <img src="/icons/arrow-left.png" />
      </button>
      <p>Labels</p>
      <button @click="changeLabels('+')">
        <img src="/icons/arrow-right.png" />
      </button>
    </div>
    <input v-model="currentLabels" />
  </div>
</template>

<script setup>
//Imports
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

//Change Labels
const { currentLabels } = storeToRefs(useControlStore())

function changeLabels(op) {
  const labels = ['All', 'Chord', 'None']
  const index = labels.indexOf(currentLabels.value)
  if (op === '+') currentLabels.value = labels[(index + 1) % labels.length]
  if (op === '-')
    currentLabels.value = labels[(index - 1 + labels.length) % labels.length]
}
</script>

<style scoped>
.label-switcher {
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
