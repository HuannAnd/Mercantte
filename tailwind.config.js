/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  theme: {
    fontFamily: {
      'inter': "var(--font-inter)",
    },
    extend: {
      backgroundImage: {
        'leaf': 'url("../../public/background_leafs.png")'
        
      },
      colors: {
        'primary': "#392D2E",
        'secondary': "#174020",
      }
      
    },
  },
  plugins: [],
}

