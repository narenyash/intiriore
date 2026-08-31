import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // warm neutral ground
        plaster: "#FBF8F1",
        cream: "#F4EFE6",
        linen: "#EDE6D8",
        sand: "#E7DECE",
        // wood
        oak: "#B08A5E",
        "oak-deep": "#6F5334",
        bark: "#3D3222",
        // matte black accents / hero void
        ink: "#141210",
        "black-warm": "#0B0A08",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
        wide: "0.08em",
      },
      transitionTimingFunction: {
        quiet: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        shell: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;
