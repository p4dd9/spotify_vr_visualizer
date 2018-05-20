require('babel-register')

import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import OPTIONS from './config/serverOptions.js'
import PATHS from './config/directories.js'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

module.exports = {
  context: __dirname + '/app',
  entry: `${PATHS.src}/index.js`,
  output: {
    filename: 'index.js',
    path: PATHS.dist
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
      }]
  },
  stats: {
    colors: true
  },
  plugins: [
    new BrowserSyncPlugin(OPTIONS),
    new CleanWebpackPlugin(PATHS.dist),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/index.html`,
        to: `${PATHS.dist}/index.html`
      }
    ])

  ],
  devtool: 'source-map'
}