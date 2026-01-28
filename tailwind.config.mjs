import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [typography],
};
