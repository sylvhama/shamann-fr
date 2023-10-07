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
      keyframes: {
        slidein: {
          from: {
            transform: "translateX(2rem)",
            opacity: 0,
          },
        },
        rainbow: {
          "0%": {
            color: "hsl(0turn, 90%, 65%)",
          },
          "25%": {
            color: "hsl(0.25turn, 90%, 65%)",
          },
          "50%": {
            color: "hsl(0.5turn, 90%, 65%)",
          },
          "75%": {
            color: "hsl(0.75turn, 90%, 65%)",
          },
          "100%": {
            color: "hsl(1turn, 90%, 65%)",
          },
        },
        floating: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(5px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        slidein:
          "slidein 1s calc(var(--index) * 60ms) cubic-bezier(0.5, 0, 0.5, 1) both",
        rainbow:
          "rainbow 2s calc(var(--index) * 60ms) linear infinite, floating 1s calc(var(--index) * 60ms) ease-in-out infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
