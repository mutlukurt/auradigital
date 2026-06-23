import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050608",
          900: "#0a0c10",
          800: "#11141a",
          700: "#1a1d24",
          600: "#242832",
        },
        accent: {
          orange: "#ff5a1f",
          "orange-soft": "#ff8a3d",
          "orange-deep": "#c64a08",
          violet: "#7c5cff",
          "violet-soft": "#b388ff",
          yellow: "#ffcc33",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        xl: "18px",
        "2xl": "28px",
      },
      transitionTimingFunction: {
        aura: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "scroll-dot": {
          "0%": { transform: "translateY(-100%)" },
          "60%,100%": { transform: "translateY(200%)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "scroll-dot": "scroll-dot 2.2s cubic-bezier(0.22,1,0.36,1) infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
