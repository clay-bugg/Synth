<template></template>

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
  notes.forEach((note) => {
    firstKeys.push(`${note}${firstOctave}`)
  })
  return firstKeys
})
const getSecondKeys = computed(() => {
  const secondKeys = []
  notes.forEach((note) => {
    secondKeys.push(`${note}${secondOctave}`)
  })
  return secondKeys
})
</script>

<style scoped></style>
