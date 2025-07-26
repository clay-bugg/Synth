<template>
  <div class="app">
    <ToneSwitcher />
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const { currentTone } = storeToRefs(useControlStore())


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

</style>
