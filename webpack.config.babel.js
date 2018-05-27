require('babel-register')

import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import OPTIONS from './config/serverOptions.js'
import PATHS from './config/directories.js'

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
    new BrowserSyncPlugin(OPTIONS),
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