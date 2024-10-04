/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#FF87B0",
        purple: "#7C76BB",
        primary: "#454545",
      },
      backgroundColor: {
        purple: "#7C76BB",
        primary: "#E6F3FF",
        footer: "#F6FBFF",
        circle: "#DCF0FF",
      },
      textShadow: {
        default: "2px 2px 4px rgba(124, 118, 187, 0.3)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
