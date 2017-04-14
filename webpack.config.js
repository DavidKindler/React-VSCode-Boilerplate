var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './tsx/index.tsx'
  ],
  output: {
    path: __dirname+"/dist",
    filename: 'index_bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './tsx/index.html'
    })
  ],
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'json']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 8000,
    headers: { "Access-Control-Allow-Origin": "*" }
  }
};
