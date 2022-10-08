/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "648px",
      md: "770px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(0deg, rgba(25, 26, 25, 0) 0%, rgba(25, 26, 25, 1) 100%);",
        "hex-background": "url('/images/pattern_hexagon.png')",
        "portrait-gradient":
          "linear-gradient(45deg, rgba(73,153,219,1) 0%, rgba(185,70,210,1) 100%);",
        "footer-gradient":
          "linear-gradient(0deg, rgba(25,26,25,1) 0%, rgba(59,62,59,1) 100%);",
      },
      colors: {
        "site-primary": "#191A19",
        "site-light": "#2c2e2c",
        "site-secondary": "rgba(255, 255, 255, 0.2)",
        "blue-highlight": "#6197FF",
        "blue-light": "#8CB3FF",
        "purple-highlight": "#c65dde",
        "purple-light": "#cf90de",
        "modal-background": "rgba(0,0,0, 0.4)",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, -15px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
      },
      dropShadow: {
        floating: "1px 16px 16px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
