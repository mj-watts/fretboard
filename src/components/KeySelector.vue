<script setup lang="ts">
import { useKeyStore } from "../store/key";

const keyStore = useKeyStore();
</script>

<template>
  <div class="key-selector">
    <select
      v-model="keyStore.currentKey"
      @change="keyStore.setKey(keyStore.currentKey)"
    >
      <option v-for="key in keyStore.keys" :key="key" :value="key">
        {{ key }}
      </option>
    </select>
  </div>
</template>
