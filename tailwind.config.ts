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
        'base-black-low' : '#242832',
        'pastel-pink' : '#FF90BC',
        'pastel-purple' : '#FF90BC',
        'pastel-white' : '#F9F9F9',
        'pastel-beige' : '#F0DBAF',
        'pastel-yellow' : '#FDFFAE',
        'pastel-brown' : '#EBE3D5',
        'pastel-green' : '#C3E2C2'
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
