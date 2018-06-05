require('babel-register')

const path = require('path');

import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const WEBPACK = Object.freeze({
  context: path.resolve(__dirname, 'app'),
  src: path.resolve(__dirname, 'app/src'),
  dist: path.resolve(__dirname, 'app/dist'),
});

module.exports = {
  context: WEBPACK.context,
  entry: `${WEBPACK.src}/bundle.js`,
  output: {
    filename: 'bundle.min.js',
    path: WEBPACK.dist
  },
  resolve: {
    modules: ['node_modules', 'app/src', 'app/src/javascript', 'app/src/templates'],
    extensions: ['.js', '.scss', '.css', '.html']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader', options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader', options: {
            sourceMap: true
          }
        }
        ]
      },
      { test: /\.hbs/, loader: 'handlebars-loader' }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${WEBPACK.src}/index.html`
    }),
    new CopyWebpackPlugin([
      {
        from: `${WEBPACK.src}/assets`,
        to: `${WEBPACK.dist}/assets`
      }, {
        from: `${WEBPACK.src}/templates`,
        to: `${WEBPACK.dist}/templates`
      }
    ])
  ],
  devtool: 'source-map'
}