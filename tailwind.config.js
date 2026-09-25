/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        control: {
          bg: "#0B0D10",
          surface: "#11151A",
          surfaceHover: "#161B22",
          surfaceElevated: "#181E26",
          border: "#242A31",
          borderSubtle: "#1C2127",
          borderHighlight: "#363E4A",
          text: "#F2F4F7",
          textMuted: "#9AA4B2",
          textSubtle: "#667085",
        },
        cyanflux: "#00E5FF",
        blueflux: "#00A3FF",
        secgreen: "#10B981",
        amberwarn: "#F59E0B",
        crimsonalert: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        glow: "0 0 32px rgba(0, 229, 255, 0.12)",
        "glow-green": "0 0 32px rgba(16, 185, 129, 0.14)",
        "glow-amber": "0 0 32px rgba(245, 158, 11, 0.12)",
        panel: "0 8px 32px rgba(0, 0, 0, 0.45)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
