module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'resolve-url-loader',
            options: { sourceMap: true }, // ✅ required
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }, // ✅ required for resolve-url-loader
          },
        ],
      },
    ],
  },
};
