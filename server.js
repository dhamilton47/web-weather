const express = require('express');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./express.config.js');
const compiler = webpack(config);
console.log(config.output.publicPath);

const app = express();
const port = 3001;
// This tells express to use the webpack-dev-middleware and 
// express.config.js as its base
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));
app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
