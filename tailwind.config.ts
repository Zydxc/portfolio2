import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultFont: '#D4D4D4',
        vscBlue: "#007acc",
        vscHighlight: "#8dc5e4",
        borderColor: "#3e3e42",
        dark2: "#2d2d30",
        dark3: "#252526",
        dark4: "#1e1e1e",
      },
      fontFamily : {
      Cascadia: ['Cascadia Code', 'monospace']
      }
    },
  },
  plugins: [],
} satisfies Config;
