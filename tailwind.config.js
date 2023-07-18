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
      },
      animation: {
        typing: "typing 4s steps(20) infinite",
      },
    },
  },
  daisyui: {
    themes: [
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
      "light",
      "dark",
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
  plugins: [require("daisyui")],
};
