{import('tailwindcss').Config} 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#236F57",
        "black": "#000000",
        "white": "#ffffff",
        "primary-orange": "##F15931",
        "primary-gray": "##616C7A",
        "background": "#F2F4F7",
      }
    },
  },
  plugins: [],
}
