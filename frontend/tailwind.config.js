/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  theme: {
    fontFamily: {
      inter: "var(--font-inter)",
      roboto: "var(--font-roboto)",
    },
    extend: {
      backgroundImage: {
        leaf: 'url("../../public/background_leafs.png")',
        // 'radial': 'radial-gradient(50% 50% at 50% 50%, #392D2E 100%, #FFFFFF 100%);',
        "carousel-fade-effect":
          "linear-gradient(90deg, white , transparent, white);",
      },
      screens: {
        sm: { min: "1px", max: "657px" },
      },
      textColor: {
        dark: "#444",
        "dark-white": "#888",
        light: "#fff",
      },
      colors: {
        primary: "#506d3a",
        secondary: "#7d8f69",
      },
      boxShadow: {
        main: "0 0 10vw #392D2E",
        breakout: "0 0 100vmax #392D2E",
      },
      fontSize: {
        "@body": "1rem",
        "@h1": "4rem",
        "@h2": "3rem",
        "@bold": "1rem",
        "@small": "0.6875rem",
      },
      fontWeight: {
        "@body": "400",
        "@h1": "700",
        "@h2": "500",
        "@bold": "700",
        "@small": "400",
      },
    },
  },
  plugins: [],
};
