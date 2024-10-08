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
        "service-bg-img":
          " url('/about-us-bg1.png'), url('/about-us-bg2.png'), linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(208,226,237,1) 54%)",
        "secondary-linear":
          "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
        partnerBg: "url('/partnerBg.jpg')",
        project1: "url('/project-1.jpg')",
        project2: "url('/project-2.jpg')",
        project3: "url('/project-3.jpg')",
        project4: "url('/project-4.jpg')",
        project5: "url('/project-5.jpg')",
        project6: "url('/project-6.jpg')",
        contactUsBg: "url('/contact-us-bg.png')",
        "primary-linear": "linear-gradient(90deg, #2E3190 0%, #035F9D 100%)",
        profileBg:
          "linear-gradient(90deg, rgba(46,49,144,0.8057816876750701) 19%, rgba(3,95,157,0.8674063375350141) 69%), url('/profileBg2.png')",
        "product-service-bg": "url('/product-service-bg.svg')",
      },

      backgroundPosition: {
        "about-us-position": "left bottom, right bottom",
        "contact-us-position": "left bottom",
      },
      backgroundSize: {
        "about-us-size": "50% 150px, 50% 60%",
        "service-bg-img-size": "50% 150px, 50% 600px, 100%",
        "service-bg-img-size-2": "50% 150px, 50% 600px, 100%",
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
        neutral: "#e5e6e9",
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
