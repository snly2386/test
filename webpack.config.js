var path    = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      './src/main.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
