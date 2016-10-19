var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
    jquery: {
      global: '$',
      commonjs: 'jquery'
    },
    markdown: true,
    commonmark: true,
    accounting: true,
    moment: true,
    backbone: true,
    underscore: true,
    'backbone.marionette': true,
    'url-parse': true,
    'window-or-global': true
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.json$/,
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
    libraryTarget: 'commonjs2',
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
