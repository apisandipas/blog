const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  // Tell webpack the root file of our
  // server application
  entry: './src/app/client.js',

  // Tell webpack where to put the output file
  // that gets generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = merge(baseConfig, config);
