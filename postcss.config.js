module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Apenas navegadores modernos - reduz CSS gerado
      overrideBrowserslist: [
        'last 2 Chrome versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'last 2 Edge versions',
        'not dead',
        'not IE 11',
      ],
    },
    // Minificar CSS em produção
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          colormin: true,
          minifyFontValues: true,
          minifySelectors: true,
        }],
      },
    } : {}),
  },
};
