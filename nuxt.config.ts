// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: ["nuxt-icon"],
  typescript: {
    strict: true,
  },
});
