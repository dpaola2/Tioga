var webpack = require('webpack');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var _ = require('lodash');
var path = require('path');

var config = module.exports = require('./main.config.js')

config.output.path = path.join(__dirname, 'app', 'assets', 'javascripts');

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin()
);
