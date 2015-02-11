var express = require('express');


var app_root='/example'
var app_example = express();

app_example.set('view engine', 'jade');
app_example.set('views', __dirname + '/views');
app_example.use("/", express.static(__dirname + "/public"));


app_example.get('/', function(req, res) {
    res.render('index',{root:app_root});
});

app_example.get('/sublink', function(req, res) {
  res.send('a general sublink.');
});

module.exports = app_example;
