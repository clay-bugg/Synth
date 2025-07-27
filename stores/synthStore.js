import { ref } from "vue";
import { defineStore } from "pinia";

export const useSynthStore = defineStore("synth", () => {
  const currentAttack = ref(null);
  const currentRelease = ref(null);
  const currentSustain = ref(null);
  const currentDecay = ref(null);

  return {
    currentAttack,
    currentRelease,
    currentDecay,
    currentSustain,
  };
});
