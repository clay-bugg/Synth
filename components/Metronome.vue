<template>
  <div class="metronome">
    <h6>Metronome</h6>
    <div class="metronome-controls">
      <div class="metronome-controls-1">
        <input v-model="currentBPM" />
        <button>TAP</button>
      </div>
      <div class="metronome-controls-2">
        <div class="leds">
          <div
            v-for="led in 4"
            :key="led"
            class="led"
            :class="{ active: currentBeat === led - 1 }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { currentBPM } = storeToRefs(useControlStore())
const { currentBeat } = storeToRefs(useSynthStore())
</script>

<style scoped>
.metronome {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
h6 {
  font-size: 1.2rem;
}
.metronome-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: fit-content;
  border: 1px solid black;
  padding: 10px 15px;
}
.metronome-controls-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  height: 26px;
}
.bpm-input input {
  height: 100%;
}
.bpm-input button {
  width: 26px;
  height: 24px;
  font-size: 0.6rem;
  font-weight: 700;
}
.leds {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  width: fit-content;
}
.led {
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background-color: rgb(215, 215, 215);
}
.led.active {
  background-color: rgb(94, 157, 13);
}
</style>
