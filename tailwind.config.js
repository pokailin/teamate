/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#556b2f",
        secondary: "#b07946",
        surface: "#efe4d4",
        onSurface: "#151618",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
