/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        lg: '1200px',
      },
      backgroundImage: {
        'white-glow': 'radial-gradient(41.7421% 100% at 50% 100%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
      },
    },
    screens: {
      sm: '576px',
      lg: '1200px',
    },
   
  },
  plugins: [],
};
