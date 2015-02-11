var express = require('express');
var path = require('path');
var _ = require('lodash');
var shortId = require('shortid');
var fs = require('fs');
var busboy = require('connect-busboy');
var async = require('async');
var cuid = require('cuid');
var nedb = require('nedb');
var formgen = require('unistack_formgen');
var app_dataman = express();
app_dataman.use(busboy()); 

var app_title='data management';
var app_root='/dataman';

var $s= require(__dirname+"/appdata/appdata.js");
var $c = require(__dirname+"/appdata/config.js");

var $c1 = $s.clientmod;

var appforms=$s.forms();

var helloworld = require("./appdata/helloworld.js").say;

var appdata= $s.batch2_fields_n_data();


var appdata1=$s.batch1_fields_n_data();

var	dbpath=path.resolve(__dirname, '../../usrdata/databases/system/');
var db = { 
users:  new nedb({ filename: path.join(dbpath, 'sys1.db'), autoload: true }),
test1:  new nedb({ filename: path.join(dbpath, 'systest1.db'), autoload: true }) 
};



app_dataman.set('view engine', 'jade');
app_dataman.set('views', __dirname + '/views');
app_dataman.use("/", express.static(__dirname + "/public"));
// app_dataman.get('/', function(req, res) {

//     res.render('default_index',
//     	{
//     		root:app_root
//     		,appTitle:app_title
//     		,title: 'main datamanagement page'
//     		,initscript:'app'
//     	});
// });


app_dataman.get('/', function(req, res){
  res.render('index',{
  	approot:app_root
  	,'templateShow':'list'
  	,pageTitle: 'unistack'
  	,apps:$s["pagelist"]
  });
});

app_dataman.get('/partialtest', function(req, res){
		    res.render('partialtest',{root:app_root});
  });
app_dataman.get('/partial1', function(req, res){
		  res.render('partials/test1', {layout: false, pscript:'test1'});
  });
app_dataman.get('/partial2', function(req, res){
		  res.render('partials/test2', {layout: false, pscript:'test2'});
  });
app_dataman.get('/users', function (req, res) {
  db.users.find({}, function(err, result) {
    res.send(result);
  });
});



app_dataman.get('/view1', function(req, res) {
  res.render('default_index', { 
  	appTitle:app_title
	,title: 'table view'
	,root:app_root
	,'templateControl':'table'
	,'templateShow':'table'
	,pagestyles:['stickytable']
	,libstyles:['normalize']
  	,headers:appdata1.fields
  	,records:appdata1.records
     });
});
app_dataman.get('/view2', function (req, res) {
  db.test1.find({}, function(err, result) {
    genout(result);
  });
	function genout(reclist){
	// using the "_.property" callback shorthand
	var recdata_out = _.map(reclist,function(prop){
		return ({'id':prop.uid,'name':prop.name, 'vschema':1});
	}
	);
  res.render('default_index', { 
  	appTitle:app_title
	,title: 'table view'
	,root:app_root
	,'templateControl':'table'
	,'templateShow':'table'
	,pagestyles:['stickytable']
	,libstyles:['normalize']
  	,headers:appdata1.fields
  	,records:recdata_out
     });
	}
});

app_dataman.get('/edit1', function(req, res) {
  res.render('default_index', { 
  	appTitle:app_title
	,title: 'table edit'
	,root:app_root
	,'templateControl':'table'
	,'templateShow':'table'
	,pagestyles:['stickytable']
	,libstyles:['normalize']
  	,pagescripts:['javascripts/modules/caret','javascripts/appmodules/tableedit']
  	,initscript:'table_editAPP'
  	,headers:appdata.fields
  	,records:appdata.records
     });
});
app_dataman.get('/edit2', function(req, res) {
  res.render('default_index', { 
  	appTitle:app_title
	,title: 'form control'
	,root:app_root
	,'templateControl':'forms'
	,'templateShow':'basic'
    ,srv_top: '<h2>users API interface</h2>'
    ,srv_1: formgen(appforms.testform1)
    ,srv_2: formgen(appforms.addUser_form)	
	,pagestyles:['forms']
	,libstyles:['normalize']
  	,pagescripts:[
    'javascripts/modules/purejs.statehandler',
    'javascripts/modules/fetchtool',
    'javascripts/modules/posttool',
    'javascripts/modules/formserialize',
    'javascripts/appmodules/appmodule_forms'
  	]
  	,initscript:'sys'
     });
});



/* POST . */
app_dataman.post('/', function(req, res) {
  console.log("basic form posted:"+ JSON.stringify(req.body));
     res.send('sucess, form posted!');
});


//  : POST => User
app_dataman.post('/users', function (req, res) {
	var reqmodel=req.body;
 // console.log("add user form posted:"+ JSON.stringify(req.body));
	var newUser={
		"firstname":reqmodel.fname,
		"lastname": reqmodel.lname,
		"date_Created":new Date()
	};
  db.users.insert(newUser, function (err, result) {
    if (err) {
      res.send({'error':'An error has occurred'});
    } else {
     res.send('Success: ' + JSON.stringify(result));
     console.log("new record added");
      // res.send(result);
    }
  });

});

//  : DELETE => User by ID
app_dataman.delete('/users/:id', function (req, res) {
  var id = req.params.id;
  db.users.remove({_id: id}, {}, function (err, result) {
    if (err) {
      res.send({'error':'An error has occurred - ' + err});
    } else {
      console.log('' + result + ' user(s) deleted');
      res.send(req.body);
    }
  });
});

module.exports = app_dataman;
