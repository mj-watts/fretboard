<script setup lang="ts">
import Header from "./components/Header.vue";
import SubHeader from "./components/SubHeader.vue";
import Section from "./components/Section.vue";
import Fretboard from "./components/Fretboard.vue";
import KeySelector from "./components/KeySelector.vue";
import ScaleNotes from "./components/ScaleNotes.vue";
import ScaleNameSelector from "./components/ScaleNameSelector.vue";
</script>

<template>
  <div class="container mx-auto flex flex-col gap-4">
    <Header text="Guitar Scale Generator" />

    <Section>
      <SubHeader text="Scale" />

      <KeySelector />
      <ScaleNameSelector />
      <ScaleNotes />
    </Section>

    <Section>
      <SubHeader text="Fretboard" />
      <Fretboard />
    </Section>
  </div>
</template>

<style scoped></style>
