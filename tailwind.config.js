// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#2ABBC7',
        secondary:'#F5F5F5',
        waning:'#FDED32',
      }
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}