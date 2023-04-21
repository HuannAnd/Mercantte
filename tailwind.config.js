/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  theme: {
    fontFamily: {
      'inter': "var(--font-inter)",
    },
    extend: {
      backgroundImage: {
        'leaf': 'url("../../public/background_leafs.png")',
        // 'radial': 'radial-gradient(50% 50% at 50% 50%, #392D2E 100%, #FFFFFF 100%);',
        "carousel-fade-effect": 'linear-gradient(90deg, white , transparent, white);'
      },
      colors: {
        'primary': "#392D2E",
        'secondary': "#174020",
      },
      boxShadow: {
        'main': "0 0 10vw #392D2E",
        'breakout': "0 0 100vmax #392D2E"
      },
      
      
    },
  },
  plugins: [],
}

