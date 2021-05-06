"use strict";

var express = require("express");

var path = require('path');

var morgan = require("morgan");

var PORT = process.env.PORT || 3000;
var app = express();
app.use(morgan('dev')); //public folder

app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) => {
  //res.send("hello world");
  res.sendFile('./index.html', {
    root: __dirname
  });
});
app.listen(PORT, () => {
  console.log("server started : http://localhost:".concat(PORT));
});