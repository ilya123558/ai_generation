import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#23262F',
        'secondary': '#141718',
        'background': '#F7F8FA',
        'gray': '#757171',
        'light-gray': '#ACADB9',
        'gold': '#E79D25',
        'light-red': '#E93F21',
        'red': '#DD3D20',
        'green': '#0AB161'
      }
    },
  },
  plugins: [],
};
export default config;
