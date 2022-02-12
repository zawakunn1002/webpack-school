const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/javascripts/style.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './javascripts/style.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/style.css',
    }),
    new HTMLWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}