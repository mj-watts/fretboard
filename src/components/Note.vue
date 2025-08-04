<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  note: string;
  isScaleNote: boolean;
}>();

const note = computed(() => {
  return props.note.split("_")[0];
});

const octave = computed(() => {
  return props.note.split("_")[1];
});
</script>

<template>
  <div
    :data-note="note"
    :data-octave="octave"
    class="note"
    :class="{ 'scale-note': isScaleNote }"
  >
    <div class="name">
      {{ note }}
    </div>
  </div>
</template>

<style scoped>
@reference "../style.css";

.note {
  @apply border border-gray-500 flex flex-col items-center justify-center;
}

.name {
  @apply w-6 h-6 text-gray-900 m-1 rounded-full flex items-center justify-center font-semibold text-xs;
}

.scale-note {
  @apply bg-amber-500 text-red-500;
}
</style>
