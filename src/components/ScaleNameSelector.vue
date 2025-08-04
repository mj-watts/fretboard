<script setup lang="ts">
import { useScalesStore } from "../store/scales.ts";

const scalesStore = useScalesStore();
</script>

<template>
  <div class="scale-selector">
    <select
      v-model="scalesStore.currentScaleName"
      @change="scalesStore.setScale(scalesStore.currentScaleName)"
    >
      <option
        v-for="scale in scalesStore.scaleNames"
        :key="scale"
        :value="scale"
      >
        {{ scale }}
      </option>
    </select>
  </div>
</template>
