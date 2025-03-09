// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: { compatibilityVersion: 4 },
  modules: ["nuxt-maplibre"],
  vite: {
    optimizeDeps: {
      include: ["@indoorequal/vue-maplibre-gl"],
    },
  },
});
