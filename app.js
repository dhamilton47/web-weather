const express = require('express');
const app = express();

app.use(express.static('public'));
//app.use(express.static('src'));
//app.use(express.static('dist'));
//0app.get('/');

module.exports = { app };