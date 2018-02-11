const webpack = require('webpack')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  // generate source maps for developer sanity
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      "JWT_SECRET": JSON.stringify(process.env.JWT_SECRET)
    })
  ],
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}