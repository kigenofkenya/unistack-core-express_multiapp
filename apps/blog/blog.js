var express = require('express');

var app_path = '/../apps/blog';
var app_root='/blog'
var app_blog = express();

app_blog.set('view engine', 'jade');
app_blog.set('views', __dirname + '/views');
app_blog.use("/", express.static(__dirname + "/public"));


app_blog.get('/', function(req, res) {
    res.render('index',{root:app_root});
});

app_blog.get('/users', function(req, res) {
  res.send('List of app_blog users.');
});

module.exports = app_blog;
