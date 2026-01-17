/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        olive: "rgb(var(--color-olive) / <alpha-value>)",
        moss: "rgb(var(--color-moss) / <alpha-value>)",
        sun: "rgb(var(--color-sun) / <alpha-value>)",
        coral: "rgb(var(--color-coral) / <alpha-value>)",
        sky: "rgb(var(--color-sky) / <alpha-value>)",
        cloud: "rgb(var(--color-cloud) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
