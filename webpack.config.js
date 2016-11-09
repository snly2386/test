var path    = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    testEntry: './src/test.js',
    mainEntry: './src/main.js'
  },
  devServer: {
    inline: true,
    port: 8000
  },
  output: {
    path:'./public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass!'
      }
    ]
  }
}
