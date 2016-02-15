var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
    'jquery': '$'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.json/,
        loader: 'json-loader'
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'javascript-helpers.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  resolve: {
    modulesDirectories: [__dirname + '/node_modules'],
    root: __dirname + '/app'
  },
  resolveLoader: {
    root: __dirname + '/node_modules'
  }
};
