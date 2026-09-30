/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        ink: { 950: "#070B16", 900: "#0B1020", 800: "#111833", 700: "#1B2550", 600: "#2A3670" },
        // signal = mint for fills/borders, signal-dim = deeper teal for text (readable on light)
        signal: { DEFAULT: "#6EE7D0", dim: "#0F766E" },
        amber: { DEFAULT: "#B45309" },
        muted: "#55607F",
        paper: "#0B1020",
        page: "#F3F6FB",
      },
    },
  },
  plugins: [],
};
