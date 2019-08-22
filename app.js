var express = require('express');
var sumRouter = require('./routes/sum');

var app = express();

app.use('/', sumRouter);


module.exports = app;
