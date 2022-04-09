module.exports = {
  content: ['./themes/**/*.html', './content/**/*.md'],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    letterSpacing: {
      tighter: '-.1em',
      tight: '-.05em',
      normal: '0',
      wide: '.05em',
      wider: '.1em',
      widest: '.2em',
    },
    extend: {
      colors: {},
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'Roboto', 'san-serif',]
      },
      lineHeight: {
        'extraloose': '2.5',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
};
