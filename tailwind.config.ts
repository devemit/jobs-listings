import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: 'hsl(180, 29%, 50%)',
      ligthcyan: 'hsl(180, 52%, 96%)',
      secondarycyan: 'hsl(180, 31%, 95%)',
      darkcyan: 'hsl(180, 8%, 52%)',
      darkercyan: 'hsl(180, 14%, 20%)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
