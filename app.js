const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./express.config.js');
const compiler = webpack(config);
console.log(config.output.publicPath);

const app = express();
// This tells express to use the webpack-dev-middleware and 
// webpack.config.js as its base
app.use(
  webpackDevMiddleware(
    compiler,
    {
      publicPath: config.output.publicPath,
    }
  )
);

app.use(express.static('public'));
//app.use(express.static('src'));
//app.use(express.static('dist'));
//app.get('/');

module.exports = { app };