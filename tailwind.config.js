/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {},
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1040px',
        '2xl': '1296px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          maxWidth: '100%',
          padding: '0 15px',
          '@screen sm': {
            maxWidth: '600px',  
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '880px',
            padding: '0 2rem',
          },
          '@screen xl': {
            maxWidth: '1200px',
            padding: '0 3rem',
          },
          '@screen 2xl': {
            maxWidth: '1440px',
          },
        }
      })
    }
  ],
}

