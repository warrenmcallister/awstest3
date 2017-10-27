var port = process.env.PORT || 3000;
var express = require('express');

var app = express();

app.set('json spaces', 2)

app.get('/', function (req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function (req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.listen(port);
