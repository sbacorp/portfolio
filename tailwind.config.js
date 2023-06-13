/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      "body": "18px",
      "lables": "16px",
      "code": "14px",
      "subhead": "32px",
      "head": "62px",
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-fira-code)'],
        mono: ['var(--font-fira-code)'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        "gradient1": "#4D5BCE",
        "gradient2": "#43D9AD"
      },
      backgroundColor: {
        "primary1": '#01080E',
        "primary2": '#011627',
        "primary3": '#011221',
        "grey": '#607B96',
        "secondary2": '#3C9D93',
        "secondary3": '#4D5BCE',
        "white": '#FFFFFF',
        "accent1": '#FEA55F',
        "accent2": '#43D9AD',
        "accent3": '#E99287',
        "accent4": '#C98BDF',
        "line": "#1E2D3D",
      },
      textColor: {
        "grey": '#607B96',
        "white": '#FFFFFF',
        "accent2": '#43D9AD',
        "secondary3": '#4D5BCE',
        "accent3": '#E99287',

      },
      borderColor: {
        "line": "#1E2D3D",
        "accent1": '#FEA55F',
      },
      rotate: {
        '270': '270deg'
      }
    },
  },
  plugins: [],
}
