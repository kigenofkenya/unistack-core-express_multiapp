var express = require('express');

var app_title='Unistack Admin';
var app_root='/admin';
var app_admin = express();

app_admin.set('view engine', 'jade');
app_admin.set('views', __dirname + '/views');
app_admin.use("/", express.static(__dirname + "/public"));


app_admin.get('/', function(req, res) {
    res.render('index',{
    	root:app_root,
    	title:app_title
    });
});

app_admin.get('/i1', function(req, res, next) {
  res.render('i1', { 
  	root:app_root,
  	title: 'Admin Applet 1',
  	page:'page1',
  	applet:'trips',
  	initscript:'app1'
  	 });
});

app_admin.get('/i2', function(req, res, next) {
  res.render('i2', { root:app_root,title: 'Admin Applet 2',page:'page2',
  	applet:'trips',
  	initscript:'app2' });
});

app_admin.get('/i3', function(req, res, next) {
  res.render('i3', { root:app_root,title: 'Admin Applet 3',page:'page3',
  	applet:'trips',
  	initscript:'app3' });
});
app_admin.get('/sublink', function(req, res) {
  res.send('a general sublink.');
});

module.exports = app_admin;
