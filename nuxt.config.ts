// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    rootId: "app",
  },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: [
      "defineStore",
      "storeToRefs",
      "skipHydrate",
      "acceptHMRUpdate",
    ],
  },
});
