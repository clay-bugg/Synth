<template>
  <div class="volume-slider">
    <p>Vol</p>
    <input v-model="currentVolume" type="range" :min="0" :max="100" />
    <p>{{ currentVolume }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { currentVolume } = storeToRefs(useControlStore())
</script>

<style scoped>
.volume-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}
input {
  transform: rotate(-90deg);
}
</style>
