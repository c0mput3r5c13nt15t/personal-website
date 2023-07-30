/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "40%": {
            width: "100%",
            visibility: "visible",
          },
          "60%": {
            width: "100%",
            visibility: "visible",
          },
          "100%": {
            width: "0%",
            visibility: "hidden",
          },
        },
        hover: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        typing: "typing 4s steps(20) infinite",
        hover: "hover 2s infinite ease-in-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#D20F44",
          accent: "#57d130",
          "base-100": "#ffffff",
        },
      },
      {
        dark: {
          primary: "#D20F44",
          accent: "#57d130",
          "base-100": "#000000",
          "base-content": "#ffffff",
        },
      },
      {
        diribitio: {
          primary: "#6411D9",
          accent: "#752BDF",
          neutral: "#ffffff",
          "base-100": "#FFFFFF",
        },
      },
      {
        birklehof: {
          primary: "#004e47",
          accent: "#A5C12A",
          neutral: "#ffffff",
          "base-100": "#FFFFFF",
        },
      },
      {
        astropi: {
          primary: "#FEB400",
          accent: "#0CCBFF",
          neutral: "#ffffff",
          "base-100": "#111827",
        },
      },
      {
        linkedin: {
          primary: "#0077b5",
          neutral: "#ffffff",
        },
      },
      {
        github: {
          primary: "#24292e",
          neutral: "#ffffff",
        },
      },
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ],
  },
  plugins: [require("daisyui"),],
};
