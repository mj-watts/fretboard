<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>

<template>
  <h1 class="text-4xl font-bold">{{ text }}</h1>
</template>
