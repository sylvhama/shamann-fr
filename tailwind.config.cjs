const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#f8f8f2",
        black: "#1d1e26",
        purple: "#7357ff",
        pink: "#ff80bf",
        blue: "#80ffea",
        current: "currentColor",
      },
      fontFamily: {
        mono: ['"Lucida Console"', "Courier", ...defaultTheme.fontFamily.mono],
      },
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
