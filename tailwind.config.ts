import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        desktop:'url(/neo-brutalism-image1.webp)',
        mobile:'url(/neo-brutalism-image1-mobile.webp)',
        'rainbow-gradient': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        aboutUs:'url(/aboutuscover.jpg)',
        aboutUsMobile:'url(/aboutuscoverMobile.jpg)',
        
      },
      width: {
        container: '1300px',
      },
      colors: {
        main: '#A3E636',
        mainAccent: '#88cc19', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)',

        // light mode
        bg: '#E0E7F1',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#111903',
        darkText: '#eeefe9',
        darkBorder: '#000',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
      },
      boxWidth: {
        '12': '120px 120px 120px 120px #000',
        dark: '4px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      screens: {
        w900: { raw: '(max-width: 900px)' },
        w500: { raw: '(max-width: 500px)' },
        'w1050':' 1100'
      },
    },
  },
  plugins: [tailwindAnimate],
  darkMode: 'class',
}
export default config
