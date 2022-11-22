const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  // mode: "production",
  entry: {index:'./src/index.js', test:'./src/test.js',},
  devtool: "inline-source-map",
  // devServer: { static: './dist' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules:[
      {test: /\.css$/i, use:['style-loader', 'css-loader']}
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Odin TODO List',
    }),
  ],
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};