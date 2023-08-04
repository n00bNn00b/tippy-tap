/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        tippytap: {
          primary: "#f59764",

          secondary: "#963515",

          accent: "#D16A0F",

          neutral: "#d87952",

          "base-100": "#ffebcd",

          info: "#4683ec",

          success: "#39dbb5",

          warning: "#f1d246",

          error: "#f14b77",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
// #d87952
