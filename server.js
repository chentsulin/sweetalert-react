/* eslint no-var: 0, func-names: 0, prefer-arrow-callback: 0 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }

  console.log('Listening at localhost:3000'); // eslint-disable-line no-console
});
