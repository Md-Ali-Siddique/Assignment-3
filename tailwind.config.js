/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        gridTemplateColumns: {
          '12-custom': 'repeat(12, minmax(0, 1fr))',
        },
        gridColumn: {
          'span-2.5': 'span 2.5 / span 2.5',
        },
      },
    },
  };
  