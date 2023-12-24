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
        'home-pattern' : "url('../public/home/home.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'base-black': '#030712',
        'pastel-blue' : '#7BD3EA',
      
        'pastel-pink' : '#FF90BC',
        'pastel-purple' : '#CCC1FF',
        'pastel-white' : '#F9F9F9'
      },
      fontFamily : {
        sdisplay: ['var(--font-sdisplay)'],
        sstencil: ['var(--font-sstencil)'],
        sinline: ['var(--font-sinline)'],
      }
    },
  },
  plugins: [],
}
export default config
