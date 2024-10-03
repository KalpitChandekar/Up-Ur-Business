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
        primary: "#27A3FF",
        footer: "#F6FBFF",
        circle: "#DCF0FF",
      },
    },
  },
  plugins: [],
};
