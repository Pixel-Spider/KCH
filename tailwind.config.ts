import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-bg":
          "url('/footer-bg.svg'), linear-gradient(90deg, #2E3190 0%, #045E9D 100%)",
        "footer-bg-md":
          "url('/footer-bg-2.svg'), linear-gradient(90deg, #2E3190 0%, #045E9D 100%)",
        "about-us-bg-img": "url('/about-us-bg1.png'), url('/about-us-bg2.png')",
      },
      backgroundPosition: {
        "about-us-position": "left bottom, right bottom",
      },
      backgroundSize: {
        "about-us-size": "50% 150px, 50% 60%",
      },
      padding: {
        "6.5": "26px",
      },
      colors: {
        primary: "#2E3190",
        secondary: "#F1801B",
      },
    },
  },
  plugins: [],
};
export default config;
