var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
    jquery: '$',
    markdown: 'markdown',
    accounting: 'accounting',
    moment: 'moment',
    backbone: 'backbone',
    marionette: 'backbone.marionette',
    bootstrap: 'bootstrap'
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'javascript-helpers.js',
    libraryTarget: 'var',
    library: 'Arro'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  resolve: {
    modulesDirectories: [__dirname + '/node_modules'],
    root: __dirname + '/src'
  }
};
