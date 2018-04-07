var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    vendors: './src/index.js',
    app: './src/app/app.jsx'
  },
  output: {
    library: '[name]',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: ['src', 'node_modules']
  },
  // externals: [nodeExternals()],
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, options: { plugins: ['transform-decorators-legacy'] } },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, options: { plugins: ['transform-decorators-legacy'] } },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
    ]
  },
  plugins: [
    new CommonsChunkPlugin({name: 'vendors', filename: 'bundle.js', minChunks: Infinity}),
    new ExtractTextPlugin("bundle.css"),
    new HtmlWebpackPlugin({
      title: 'Dimension Sample',
      template: './src/app/index.html',
      assets: {
        style  : 'bundle.css',
      }
    })
  ]
};