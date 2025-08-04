<script setup lang="ts">
import { computed } from "vue";
import { useScalesStore } from "../store/scales.ts";
import { useKeyStore } from "../store/key.ts";

const scalesStore = useScalesStore();
const keyStore = useKeyStore();

const scale = computed(() => {
  return scalesStore.calculateScale(
    scalesStore.currentScaleName,
    keyStore.currentKey
  );
});
</script>

<template>
  <div class="scale">
    <div v-for="note in scale" :key="note" class="note">
      {{ note }}
    </div>
  </div>
</template>

<style scoped>
@reference "../style.css";

.scale {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
