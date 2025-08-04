<script setup lang="ts">
import { computed } from "vue";
import { useStringsStore } from "../store/strings.ts";
import { useTuningStore } from "../store/tuning.ts";
import { useScalesStore } from "../store/scales.ts";
import String from "./String.vue";
import Note from "./Note.vue";

const stringsStore = useStringsStore();
const tuningStore = useTuningStore();
const scalesStore = useScalesStore();

const strings = computed(() => stringsStore.strings);
const scaleNotes = computed(() => scalesStore.currentScaleNotes);

const bridgeNote = (note: string, index: number) => {
  return (
    index === 0 && tuningStore.tuning.find((bridgeNote) => note === bridgeNote)
  );
};

const scaleNote = (note: string) => {
  return scaleNotes.value.includes(note.split("_")[0]);
};
</script>

<template>
  <div class="grid grid-cols-1 w-full">
    <String v-for="string in strings" :key="string.id">
      <Note
        v-for="(note, index) in string.notes"
        :key="note"
        :note="note"
        :is-scale-note="scaleNote(note)"
        :class="{
          'bridge-note': bridgeNote(note, index),
        }"
      />
    </String>
  </div>
</template>

<style scoped>
@reference "../style.css";

.bridge-note {
  @apply border-e-4;
}
</style>
