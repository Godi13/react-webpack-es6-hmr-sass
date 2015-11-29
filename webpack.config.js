var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      },
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: "style!css!autoprefixer!sass"
    }]
  }
};
