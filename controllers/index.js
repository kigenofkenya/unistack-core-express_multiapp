var express = require('express');

var app_index = express();
var app_path = '/../apps/index';
app_index.set('view engine', 'jade');
app_index.set('views', __dirname + app_path +'/views');
app_index.use(express.static(__dirname + app_path + '/public'));


/**
 * GET main page.
 */

app_index.get('/', function(req, res){
  res.render('index');
});

app_index.get('/route1', function(req, res) {
  res.send('route1.');
});

module.exports = app_index;
