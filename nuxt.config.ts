// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ["nuxt-icon"],
  typescript: {
    strict: true,
  },
});
