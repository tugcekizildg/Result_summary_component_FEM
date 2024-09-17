/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'customGradientStart': 'hsl(252, 100%, 67%)',
        'customGradientEnd': 'hsl(241, 81%, 54%)',
        'customRound':'hsla(256, 72%, 46%, 1)',
      },
    },
    plugins: [],
  }
};

