/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      backgroundImage: { 'food-image': "url('/src/assets/bgfood1.jpg')",'food-image-2': "url('/src/assets/bgfood2.jpg')"},
    },
  },
  plugins: [],
}

