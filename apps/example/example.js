var express = require('express');
var formgen = require('unistack_formgen');
var busboy = require('connect-busboy');

var formdata = require(__dirname+"/appdata/forms/formset1.js")
var app_root='/example'
var app_example = express();

app_example.set('view engine', 'jade');
app_example.set('views', __dirname + '/views');
app_example.use("/", express.static(__dirname + "/public"));

var api = require(__dirname +'/appdata/api.js');
app_example.use('/api', api);




app_example.get('/', function(req, res){
  var userflag;
    if (req.session.user) {
    userflag=req.session.user;
  } 
  res.render('index',{
  	root:app_root,
  	user: req.user,  	
  	pageTitle: 'unistack',
    initscript:'init1',
    pagescripts:['appmodules/appmodule_forms','modules/formserialize'],
  	pagestyles:['forms'],
    srv_top: "<h2>Fabio System</h2>",
    datamodel_title: 'fabio datamodel',
  	srv_1: formgen(formdata["testform1"]),
    srv_2: formgen(formdata["testform2"]),
    srv_3: formgen(formdata["testform3"]),       
    srv_bottom:"<p>footer</p>"
  });
});

module.exports = app_example;
