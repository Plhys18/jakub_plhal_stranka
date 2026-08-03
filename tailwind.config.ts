import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#0d0e12",
        foreground: "#faf8fe",
        
        "on-primary-fixed-variant": "#00635e",
        "on-primary-fixed": "#004440",
        "surface-container-low": "#121318",
        "secondary": "#98f2ed",
        "on-primary-container": "#003c38",
        "outline-variant": "#47484c",
        "on-tertiary-fixed": "#464849",
        "surface-tint": "#5bf3e8",
        "error": "#ff716c",
        "surface-dim": "#0d0e12",
        "surface-container-lowest": "#000000",
        "surface-container": "#18191e",
        "tertiary": "#f9f9fa",
        "tertiary-dim": "#e2e2e3",
        "on-tertiary-container": "#555758",
        "error-dim": "#d7383b",
        "on-secondary": "#005c59",
        "tertiary-container": "#eaebec",
        "surface-variant": "#24252b",
        "primary-dim": "#48e4da",
        "primary-fixed-dim": "#48e4da",
        "inverse-on-surface": "#54555a",
        "on-primary": "#005853",
        "secondary-fixed": "#98f2ed",
        "on-secondary-container": "#dafffc",
        "primary-container": "#19cbc1",
        "on-tertiary": "#5d5f60",
        "on-tertiary-fixed-variant": "#636566",
        "on-secondary-fixed": "#004745",
        "primary": "#5bf3e8",
        "inverse-primary": "#006b65",
        "tertiary-fixed": "#f0f1f2",
        "on-surface": "#faf8fe",
        "secondary-fixed-dim": "#89e4df",
        "surface-container-high": "#1e1f25",
        "on-error-container": "#ffa8a3",
        "on-secondary-fixed-variant": "#006764",
        "secondary-container": "#006a67",
        "tertiary-fixed-dim": "#e2e2e3",
        "secondary-dim": "#89e4df",
        "surface-container-highest": "#24252b",
        "surface": "#0d0e12",
        "primary-fixed": "#5bf3e8",
        "on-background": "#faf8fe",
        "inverse-surface": "#faf8fe",
        "surface-bright": "#2a2c32",
        "on-surface-variant": "#abaab0",
        "error-container": "#9f0519",
        "on-error": "#490006",
        "outline": "#75757a"
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(91, 243, 232, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(91, 243, 232, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
