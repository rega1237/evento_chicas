/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        christmas: ["Mountains of Christmas", "serif"],
        mon: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'header-image': "url('/src/assets/images/fondo_header.jpg')",
        'feature-one-image': "url('/src/assets/images/arbol_navidad_royal.jpg')",
        'feature-two-image': "url('/src/assets/images/navidad_royal.jpeg')",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF0000",

          secondary: "#FFFFFF",

          accent: "#c6a664",

          neutral: "#1c542d",

          "base-100": "#800000",

          info: "#00BFFF",

          success: "#00ff00",

          warning: "#dc2626",

          error: "#ff0000",
        },
      },
    ],
  },
};
