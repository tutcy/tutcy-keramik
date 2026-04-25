const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/assets/images/banner.jpg')",
      },
      colors: {
        // Hier wird die CSS-Variable auf einen Tailwind-Namen gemappt
        primary: 'var(--color-primary)',
        text: 'var(--color-text)',
      },
    },
  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        'body': {
          backgroundImage: theme('backgroundImage.banner'),
        },
        '[data-theme="light"]': {
          '--color-primary': '#ffffff', // Usage <nav class="bg-primary">
          '--color-text': '#000000',
          // Deine Variablen oder Styles hier
        },
        '[data-theme="dark"]': {
          '--color-primary': '#1a1a1a',
          '--color-text': '#ffffff',
        },
        '[data-theme="forest"]': {
          '--color-primary': '#2A9D8F',
          '--color-secondary': '#E9C46A',
          '--color-text': '#264653',
          '--image': {
            'banner': "url('/assets/images/banner.jpg')"
          }
        },
        '[data-theme="winter"]': {
          '--color-primary': 'hsl(45 39% 69%)',
          '--color-secondary': 'rgb(120 210 50)',
          '--color-text': 'hsl(54 93% 96%)',
        },
      })
    }),
  ],
};
