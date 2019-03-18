const webpack = require('webpack');

const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reStyleModule = /module\.(css|less|styl|scss|sass|sss)$/;
const reStyleNoModule = /^((?!\.module).)*(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;
const constreImageNoSvg = /\.(bmp|gif|jpg|jpeg|png)$/;
const reSvg = /\.svg$/;

module.exports = {
  target: 'web',
  mode: 'production',
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: reScript,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  output: {
    library: 'ReactSweetAlert',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

