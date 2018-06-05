require('babel-register')

const path = require('path');

import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const PATHS = Object.freeze({
  src: path.resolve(__dirname, 'app/src'),
  dist: path.resolve(__dirname, 'app/dist'),
});


module.exports = {
  context: __dirname + '/app',
  entry: `${PATHS.src}/bundle.js`,
  output: {
    filename: 'bundle.min.js',
    path: PATHS.dist
  },
  resolve: {
    modules: ['node_modules', 'app/src', 'app/src/javascript', 'app/src/templates'],
    extensions: ['.js', '.scss', '.css', '.html']
  },
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
    new CleanWebpackPlugin(PATHS.dist),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/assets`,
        to: `${PATHS.dist}/assets`
      }, {
        from: `${PATHS.src}/templates`,
        to: `${PATHS.dist}/templates`
      }
    ])
  ],
  devtool: 'source-map'
}