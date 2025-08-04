import { defineStore } from "pinia";

export const useKeyStore = defineStore("keys", {
  state: () => ({
    keys: ["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#"],
    currentKey: "E",
  }),

  actions: {
    setKey(key: string) {
      this.currentKey = key;
    },
  },
});
