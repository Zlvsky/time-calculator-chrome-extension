/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: "#F6F8FA",
        primary: "#1f2328",
        secondary: "#636c76",
        lightGray: "#d0d7deb3",
      },
    },
  },
  plugins: [],
};
