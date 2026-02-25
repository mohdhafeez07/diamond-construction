/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0B",
        surface: "#111111",
        gold: "#B89B5E",
        goldSoft: "#E6D8A8",
        muted: "#9E9E9E",
      },

      fontFamily: {
        /* Elegant serif headings */
        heading: ["Playfair Display", "serif"],

        /* Clean body text */
        body: ["Inter", "sans-serif"],

         display: ["Bebas Neue", "sans-serif"], // CONSTRUCTION

        /* Apple-style numeric font */
        number: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },

      letterSpacing: {
        widest: "0.25em",
        numbers: "0.02em",
      },
    },
  },
  plugins: [],
};
