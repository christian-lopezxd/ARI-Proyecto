/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'MontBold': "MontserratBold",
      'montserrat': "montserrat"
    },
    extend: {
      backgroundImage: {
        'jsonimage': "url('/src/assets/bg.jpg')",
       
      }
    },

    
  },
  
  plugins: [],
}

