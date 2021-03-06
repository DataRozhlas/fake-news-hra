const path = require('path');

module.exports = {
  entry: './js_src/game.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'bundle.js'
  },

  node: {
    fs: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
  }
};