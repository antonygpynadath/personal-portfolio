/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "700px" },
        md: { max: "870px" },
        lg: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
