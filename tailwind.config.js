/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.htnl", "./src/**/*.{ts,js,vue}"],
  theme: {
    extend: {
      colors: {
        'orange': '#f67d3c',
        'grayColor' : '#cccccc'
      },
      fontFamily: {
        'sans' : 'Open Sans, sans-serif'
      },
      scale: {
        '125': '1.05',
      }
    },
  },
  plugins: [],
}

