var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
    jquery: {
      global: '$',
      commonjs: 'jquery'
    },
    markdown: {
      global: 'markdown',
      commonjs: 'markdown'
    },
    accounting: {
      global: 'accounting',
      commonjs: 'accounting'
    },
    moment: {
      global: 'moment',
      commonjs: 'moment'
    },
    backbone: {
      global: 'Backbone',
      commonjs: 'backbone'
    },
    marionette: {
      global: 'Backbone.Marionette',
      commonjs: 'backbone.marionette'
    },
    bootstrap: {
      commonjs: 'bootstrap'
    }
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
