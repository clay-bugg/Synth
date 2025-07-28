<template>
  <div class="keys">
    <div v-for="key in keys" :key="key" :class="key.contains('#') ? 'black' : 'white'">
      {{ key }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { currentStartingOctave, notes } = storeToRefs(useSynthStore())

const firstOctave = computed(() => `${currentStartingOctave.value}`)
const secondOctave = computed(() => `${currentStartingOctave.value + 1}`)

const keys = computed(() => {
  return [...getFirstKeys.value, ...getSecondKeys.value]
})

const getFirstKeys = computed(() => {
  const firstKeys = []
  notes.value.forEach((note) => {
    firstKeys.push(`${note}${firstOctave.value.toString()}`)
  })
  return firstKeys
})
const getSecondKeys = computed(() => {
  const secondKeys = []
  notes.value.forEach((note) => {
    secondKeys.push(`${note}${secondOctave.value.toString()}`)
  })
  return secondKeys
})
</script>

<style scoped>
.keys {
  display: flex;
  align-items: center;
  width: 100%;
}
.key.white {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  border: 1px solid black
}
</style>
