/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'regular': '"Cabin", sans-serif',
        'monospaced': '"Azeret Mono", monospace',
        'icon': '"Material Symbols Rounded"',
      },
      colors: { 
        'dark_green': { DEFAULT: '#012627', 100: '#000808', 200: '#000f10', 300: '#011718', 400: '#011f20', 500: '#012627', 600: '#037f83', 700: '#06d8df', 800: '#48f4fa', 900: '#a4fafd' }, 
        'midnight_green': { DEFAULT: '#023a3c', 100: '#000b0c', 200: '#011718', 300: '#012224', 400: '#012e2f', 500: '#023a3c', 600: '#058e92', 700: '#07e2e9', 800: '#51f4fa', 900: '#a8f9fc' }, 
        'light_sea_green': { DEFAULT: '#06b2a7', 100: '#012321', 200: '#034742', 300: '#046a63', 400: '#058e85', 500: '#06b2a7', 600: '#09f0e1', 700: '#42f8ec', 800: '#81faf2', 900: '#c0fdf9' }, 
        'vivid_sky_blue': { DEFAULT: '#35c7f5', 100: '#032c38', 200: '#055871', 300: '#0884a9', 400: '#0bb0e2', 500: '#35c7f5', 600: '#5bd3f7', 700: '#84def9', 800: '#ade9fb', 900: '#d6f4fd' }, 
        'lawn_green': { DEFAULT: '#89f954', 100: '#164002', 200: '#2c8005', 300: '#42c007', 400: '#5bf613', 500: '#89f954', 600: '#9ffa75', 700: '#b7fb98', 800: '#cffdba', 900: '#e7fedd' },
        'light_gray': '#F8F7F9',
        'gradient': "linear-gradient(128deg, rgb(137, 249, 84) 20%, rgb(53, 199, 245) 80%)"
      },
    },
  },
  plugins: [],
}

