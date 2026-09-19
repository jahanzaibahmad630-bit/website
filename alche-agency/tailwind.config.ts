import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505"
      },
      fontFamily: {
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        brutal: ["ui-sans-serif", "system-ui", "Inter", "Arial", "sans-serif"]
      },
      letterSpacing: {
        brutal: "0.08em"
      }
    }
  },
  plugins: []
} satisfies Config;
