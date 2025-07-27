<template>
  <div class="metronome">
    <h6>Metronome</h6>
    <div class="metronome-controls">
      <div class="metronome-controls-1">
        <input v-model="currentBPM" />
        <button @click="handleTap">TAP</button>
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
        <div class="metronome-playback-buttons">
          <button @click="startMetronome(currentBPM)">
            <Icon class="button-icon" name="fluent:play-28-filled" />
          </button>
          <button @click="stopMetronome">
            <Icon class="button-icon" name="mage:stop-fill" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//Imports
import { ref } from 'vue'
import { Howl, Howler } from 'howler'

//Metronome
const { currentBPM } = storeToRefs(useControlStore())
const currentBeat = ref(0)
const tapTimes = ref([])
let interval = null

function startMetronome(bpm) {
  clearInterval(interval)
  const msPerBeat = 60000 / bpm
  interval = setInterval(() => {
    currentBeat.value = (currentBeat.value + 1) % 4
    playClick(currentBeat.value)
  }, msPerBeat)
}
function stopMetronome() {
  clearInterval(interval)
  currentBeat.value = 0
}
function playClick(beat) {
  beat === 0 ? clickHigh.play() : clickLow.play()
}
function handleTap() {
  const now = Date.now()
  tapTimes.value.push(now)

  if (tapTimes.value.length > 4) tapTimes.value.shift()
  if (tapTimes.value.length >= 2) {
    const intervals = []
    for (let i = 1; i < tapTimes.value.length; i++) {
      intervals.push(tapTimes.value[i] - tapTimes.value[i - 1])
    }
    const avgInterval = intervals.reduce((a, b) => a + b) / intervals.length
    const bpm = Math.round(60000 / avgInterval)
    currentBPM.value = bpm
  }
}
//Howler.js
const clickHigh = new Howl({
  src: ['/samples/metronome/clickhigh.wav'],
  onload: () => console.log('Click High loaded'),
})
const clickLow = new Howl({
  src: ['/samples/metronome/clicklow.wav'],
  onload: () => console.log('Click Low loaded'),
})
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
.metronome-controls-1,
.metronome-controls-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  height: 26px;
}
.metronome-controls-1 input {
  height: 100%;
  width: 40px;
  text-align: center;
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
  transition: background-color 0.1s ease;
}
.led.active {
  background-color: #00ff00;
  box-shadow: 0 0 2px #00ff00;
}
.metronome-controls-1 button {
  width: 28px;
  height: 22px;
  border: 0.5px solid black;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.7rem;
}
.metronome-playback-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  width: fit-content;
}
.metronome-playback-buttons button {
  width: 26px;
  height: 26px;
  border: 0.5px solid black;
  border-radius: 4px;
}
.button-icon {
  width: 16px;
  height: 16px;
}
</style>
