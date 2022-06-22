const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**/

module.exports = {
  mode: "development",
  entry: {
    main: './main.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },

  module: {
    rules: [
      // sass
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },

      // pug
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: false
        },
      },

      // fonts
      {
        test: /\.(ttf|woff)$/,
        use: [
          'file-loader',
        ]
      },

      // image
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'src/assets/images/[name].[ext]',
            },
          },
        ],
      },

      // svg
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.pug',
    }),
   ],
};
