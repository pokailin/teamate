// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.scss'],
  modules: ['nuxt-icon'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    plugins: ['~/server/db/indext.ts'],
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
});
