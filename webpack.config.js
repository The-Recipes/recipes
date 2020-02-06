const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  mode: 'development',
  // plugins: [
  //   new HTMLWebpackPlugin({
  //     template: 'public/index.html'
  //   })
  // ]
  plugins: [
    new LiveReloadPlugin()
  ]
}