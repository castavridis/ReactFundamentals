/*
  Save the object that the html-webpack-plugin main file returns
  as a variable, htmlWebpackPlugin
 */
var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

/*
  All of the rules for webpack transformations
 */
module.exports = {
  entry: [ // Sources
    './app/index.js'
  ],
  module: {
    loaders: [ // Transformations
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: { // Destinations
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [
    htmlWebpackPluginConfig
  ]
};
