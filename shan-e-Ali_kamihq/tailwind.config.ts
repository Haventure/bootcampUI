import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-poppins)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Lucida Grande',
          'sans-serif',
        ],
        mulish: ['var(--font-mulish)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        lucida: ['"Lucida Grande"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
