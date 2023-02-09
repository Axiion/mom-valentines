/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        popWindow: {
          "0%": { transform: "scale(70%)" },
          "50%": { transform: "scale(110%)" },
          "75%": { transform: "scale(105%)" },
          "100%": { transform: "scale(100%)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        "spin-fast": "spin 0.7s ease-in-out",
        popWindow: "popWindow 0.4s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [],
};
