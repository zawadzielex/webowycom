const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin =  require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './assets/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyWebpackPlugin([
      { from: './assets/styles/styles.min.css', to: 'assets/styles/' },
      { from: './assets/styles/styles.min.css.map', to: 'assets/styles/' },
      { from: './node_modules/slick-carousel/slick/ajax-loader.gif', to: 'assets/styles/' },
      { from: './assets/images/', to: 'assets/images/' },
      { from: './assets/scripts/particles.json', to: 'assets/scripts/' },
      { from: './assets/scripts/particles2.json', to: 'assets/scripts/' },
    ])
  ]
};
