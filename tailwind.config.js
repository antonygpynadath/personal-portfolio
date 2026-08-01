/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Full replacement (not extend): these are max-width (mobile-first-inverted)
    // breakpoints. `extend.screens` would merge into Tailwind's default screens
    // object, and since sm/md/lg already exist there, object-spread merging
    // keeps their ORIGINAL insertion order (sm, md, lg) no matter how this file
    // orders them — silently defeating any reordering. Replacing theme.screens
    // outright gives full control: Tailwind emits one media-query block per key
    // in this order, so when a viewport matches more than one breakpoint at once
    // (e.g. 375px matches sm/md/lg all simultaneously), the LAST matching block
    // in the stylesheet wins. Listing widest -> narrowest ensures the narrowest
    // applicable breakpoint always overrides the wider ones, as intended.
    screens: {
      lg: { max: "1024px" },
      md: { max: "870px" },
      sm: { max: "700px" },
      xs: { max: "480px" },
    },
    extend: {},
  },
  plugins: [],
};
