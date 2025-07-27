<template>
  <div class="waveform-controls">
    <div class="waveform-control">
      <p>Attack</p>
      <input v-model="currentAttack" type="range" min="0" max="2" step="0.001" />
    </div>
    <div class="waveform-control">
      <p>Decay</p>
      <input v-model="currentDecay" type="range" min="0" max="2" step="0.001" />
    </div>
    <div class="waveform-control">
      <p>Sustain</p>
      <input v-model="currentSustain" type="range" min="0" max="1" step="0.1" />
    </div>
    <div class="waveform-control">
      <p>Release</p>   
      <input v-model="currentRelease" type="range" min="0" max="2" step="0.001"/>
    </div>    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { currentAttack, currentRelease, currentSustain, currentDecay } =
  storeToRefs(useSynthStore())
</script>

<style scoped>
.waveform-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
  padding: 10px 15px;
}
.waveform-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
}
.waveform-control input[type="text"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;

}
</style>
