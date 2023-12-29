import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8ACCBD',
        secondary: '#EBCE51',
        accent: '#A04659',
        background: '#071f21',
      },
      gridTemplateColumns: {
        'auto-fit-s': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-m': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fit-l': 'repeat(auto-fit, minmax(350px, 1fr))',
        'auto-fit-xl': 'repeat(auto-fit, minmax(400px, 1fr))',
        'auto-fit-2xl': 'repeat(auto-fit, minmax(450px, 1fr))',
      },
    },
  },

  plugins: [],
};
export default config;
