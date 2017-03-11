var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    vendors: './src/index.js',
    app: './src/app/app.jsx'
  },
  output: {
    library: 'dimension',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, options: { plugins: ['transform-decorators-legacy'] } },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, options: { plugins: ['transform-decorators-legacy'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({name: 'vendors', filename: 'bundle.js', minChunks: Infinity}),
    new ExtractTextPlugin("bundle.css")
  ]
};