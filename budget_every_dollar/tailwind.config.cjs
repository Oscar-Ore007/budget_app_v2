module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        'primary-foreground': '#ffffff',
        input: '#e6e6e6',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
