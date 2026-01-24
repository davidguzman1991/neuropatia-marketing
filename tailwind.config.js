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
        "metal-dark": "rgb(var(--metal-dark) / <alpha-value>)",
        "metal-mid": "rgb(var(--metal-mid) / <alpha-value>)",
        "metal-light": "rgb(var(--metal-light) / <alpha-value>)",
        "emerald-deep": "rgb(var(--emerald-deep) / <alpha-value>)",
        "emerald-intense": "rgb(var(--emerald-intense) / <alpha-value>)",
        "teal-deep": "rgb(var(--teal-deep) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(0, 0, 0, 0.35)",
        metallic:
          "0 4px 24px -6px rgba(30, 41, 59, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
        "metallic-dark":
          "0 4px 24px -6px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
        "mobile-card":
          "0 4px 20px -4px rgba(30, 41, 59, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
      },
      spacing: {
        "safe-bottom": "env(safe-area-inset-bottom, 0px)",
        "safe-top": "env(safe-area-inset-top, 0px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "soft-pulse": {
          "0%, 88%, 100%": { transform: "scale(1)" },
          "92%": { transform: "scale(1.03)" },
          "96%": { transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "soft-pulse": "soft-pulse 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
