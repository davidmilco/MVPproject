var express = require('express');
var path = require('path');
var http = require("http");
var fs = require('fs');
var bodyParser = require('body-parser');
var url = require('url');
var app = express();

app.set('port', 3000);

app.use(bodyParser());
app.use(express.static('public'));

app.get('/', function (req, res) {
  console.log('request');
  res.sendFile(path.join(__dirname + 'public/index.html'));
});


app.post('/', function (req, res) {
  //console.log('GOT A POST REQUEST');
  //var inputname = req.body.inputname;
  //var inputfortune = req.body.inputfortune;
  //res.sendFile(path.join(__dirname + '/public/index.html'));

});

app.listen(app.get('port'), function () {
  console.log('App is running on port', app.get('port'));
});