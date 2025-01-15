/** @type {import('tailwindcss').Config} */

export default {
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bgbawah' : "url('/next/image/BgBawah.png')",
        'bgbawahdark' : "url('/public/BgBawahDark.png')",
      },
      colors: {
        'black-custom': '#111111',
        'white-custom': '#f9f9f9',
        'orange-custom': '#ef6537', 
        'orangelight-custom': '#FF6600',
        'gray-custom' : '#AAAAAA',
        'gray2-custom' : '#777777',
        'lightgray-custom' : '#e9e9e9',
        'lightblack-custom' : '#222222',
        'lightgray2-custom' : '#F5F5F5',
        'black3-custom' : '#333333',
        'black2-custom' : '#2b2b2b',
        'black4-custom' : '#555555',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode:'class',
  plugins: [
    require('taos/plugin')
  ],
  
};
