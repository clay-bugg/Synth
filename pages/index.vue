<template>
  <div class="app">
    <div class="synth">
        <ToneSwitcher class="tones"/>
        <LabelsSwitcher class="labels"/>
        <OctaveSwitcher class="octaves"/>
        <Metronome class="metronome"/>
        <VolumeSlider class="volume"/>
        <Keys class="keys" />
      </div>
    </div>
    <ToneSwitcher />
    <LabelsSwitcher />
    <OctaveSwitcher />
    <VolumeSlider />
    <WaveformControls />
    <Metronome />

</template>

<script setup>
import { ref } from 'vue'


</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100vw;
  height: 100vh;
}
.app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.synth {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "tones labels octaves metronome volume"
    "chords chords chords chords volume"
    "keys keys keys keys volume";
  width: fit-content;
  height: 300px;
  background-color: rgb(142, 142, 142);
}
.tones {
  grid-area: tones;
}
.labels {
  grid-area: labels;
}
.octaves {
  grid-area: octaves;
}
.volume {
  grid-area: volume;
}
.keys {
  grid-area: keys;
}
</style>
