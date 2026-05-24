/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f5ff",
          100: "#dce9ff",
          200: "#b6d0ff",
          300: "#86aeff",
          400: "#5d86ff",
          500: "#3f62f0",
          600: "#304adb",
          700: "#273bb1",
          800: "#24358d",
          900: "#243164"
        }
      }
    }
  },
  plugins: []
};