/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        comparation: "min-content repeat(2, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
