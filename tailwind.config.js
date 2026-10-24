/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05060b",
        panel: "#0c0e17",
        line: "#1b1f2e",
        brand: { DEFAULT: "#6366f1", soft: "#818cf8", glow: "#a78bfa" },
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
