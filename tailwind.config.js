/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#05070d",
        graphite: "#0b1020",
        cyanflux: "#3ee7ff",
        violetflux: "#9f6bff",
        plasma: "#6ef3c5"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(62, 231, 255, 0.22)",
        violet: "0 0 52px rgba(159, 107, 255, 0.2)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 20% 15%, rgba(62, 231, 255, 0.18), transparent 28%), radial-gradient(circle at 78% 16%, rgba(159, 107, 255, 0.18), transparent 26%), linear-gradient(180deg, #05070d 0%, #070a12 48%, #05070d 100%)"
      }
    }
  },
  plugins: []
};
