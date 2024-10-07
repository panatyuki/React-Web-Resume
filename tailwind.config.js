/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#232A3C",
        medium: "#293245",
      },
      backgroundImage: {
        hero: "linear-gradient(to right, #141E30, #243B55)",
        "nav-footer-light": "linear-gradient(to right, #c21500, #ffc500)",
        "nav-footer-dark": "linear-gradient(to right, #000428, #004e92)",
      },
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        opensans: ["opensans", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

