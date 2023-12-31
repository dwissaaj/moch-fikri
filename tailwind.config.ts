import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-pattern' : "url('../public/home/1.png')",
        'home-gradient-two' : "url('../public/home/2.png')",
        'home-gradient-three' : "url('../public/home/3.png')",
        'home-gradient-four' : "url('../public/home/4.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'base-black': '#030712',
        'pastel-blue' : '#7BD3EA',
        'base-black-low' : '#242832', 
        'base-black-mid' : '#272B34',
        'maroon' : '#7D0A0A',
        'pastel-pink' : '#FF8080',
        'pastel-orange' : '#F9B572'
      },
      fontFamily : {
        sdisplay: ['var(--font-sdisplay)'],
        sstencil: ['var(--font-sstencil)'],
        sinline: ['var(--font-sinline)'],
        st: ['var(--font-st)'],
        stmono: ['var(--font-stMono)']
      }
    },
  },
  plugins: [],
}
export default config
