const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  output: {
    library: 'ReactSweetAlert',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
