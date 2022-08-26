import { defineStore } from "pinia";

export const useBaseStore = defineStore("base-store", {
  state: () => ({
    highscores: useLocalStorage("highscores", []),
  }),

  actions: {},

  getters: {},
});
