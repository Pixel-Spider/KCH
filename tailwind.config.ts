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
        profileBg:
          "linear-gradient(90deg, rgba(46,49,144,0.8057816876750701) 19%, rgba(3,95,157,0.8674063375350141) 69%), url('/profileBg2.png')",
      },
      backgroundPosition: {
        "about-us-position": "left bottom, right bottom",
      },
      backgroundSize: {
        "about-us-size": "50% 150px, 50% 60%",
      },
      boxShadow: {
        "chairman-message": "14.62px 14.62px 47.86px 0px #000000BF",
      },
      padding: {
        "6.5": "26px",
        "2xl-2": "227px",
      },
      width: {
        lg: "calc( 100% - 120px)",
        xl: "calc( 100% - 160px)",
        xl2: "calc( 100% - 200px)",
        "2xl-2": "calc( 100% - 240px)",
      },
      colors: {
        primary: "#2E3190",
        secondary: "#F1801B",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1540px",
      "2xl": "1920px",
    },
  },
  plugins: [],
};
export default config;
