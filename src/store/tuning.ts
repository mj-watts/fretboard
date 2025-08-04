import { defineStore } from "pinia";

export const useTuningStore = defineStore("tuning", {
  state: () => ({
    tuning: ["E_2", "A_2", "D_3", "G_3", "B_3", "E_4"],
  }),
});
