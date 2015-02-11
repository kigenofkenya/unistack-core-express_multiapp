var express = require('express');
var bodyParser  =   require("body-parser");
var fs = require('fs');
var path = require("path");
var app_index = express();
var app_root='';
var todo_path=__dirname + '/../usrdata/index/todo/';
var indexMap= require(__dirname +'/../usrdata/index/index.js').routetree;


//Here we are configuring express to use body-parser as middle-ware.
app_index.use(bodyParser.json());
app_index.use(bodyParser.urlencoded({ extended: false }));

app_index.set('view engine', 'jade');
app_index.set('views', __dirname + '/views');
app_index.use("/", express.static(__dirname + "/public"));


/**
 * GET main page.
 */
function restrictIndex(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/');
  }
}



app_index.get('/', function(req, res){
  var userflag,serverflag,dummymode;
    if (req.session.user) {
    userflag=req.session.user;
  }else if(req.cookies.firstvisit){
    // dummymode=
    serverflag=req.cookies.firstvisit;
  }
  res.render('index',{
  	root:app_root,
  	usertoken:userflag,
    servertoken:serverflag,
  	pageTitle: 'unistack',
    apps:indexMap,
    initscript:'init_v7e',
    pagestate:'initial'
  });
});



app_index.get('/restricted', restrictIndex, function(req, res){
  res.send('Wahoo! restricted area, click to <a href="/auth/logout">logout</a>');
});

var t2 = fs.readFileSync(todo_path + 'todo2.tag', 'utf8');
var t2tag = fs.readFileSync(todo_path + 'todo2tag.tag', 'utf8');

//get rendered todolist page
app_index.get('/todos', function(req, res) {
  var file =todo_path  + 'todo2data.json';
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {console.log('Error: ' + err); return; }
    res.render('riot_todo',{root:app_root,tmpl:t2,tag:t2tag,tdata:data});
  });
});


//get raw todo data json
app_index.get('/todo_data', function(req, res) {
  fs.readFile(todo_path  + 'todo2data.json', 'utf8', function (err, tdata) {
    if (err) {console.log('Error: ' + err); return; }
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.parse(tdata));
      console.log("read todo data from file");
  });
});

//write full todo json

app_index.post('/todo_data', function(req, res) {
var headerdata= {
  "name": "indextodo",
  "version": "1.0",
  "schema":'testschema',
  "dateobj":{
    "created":"dummydate",
    "updated":"dummydate"}
  };
    var tDataObj = {
    meta:headerdata,
    records:req.body
    };
  console.log(req.body);
  fs.writeFile(todo_path + 'todo2data.json', JSON.stringify(tDataObj, null, 2), function(err) {
    if(err) {
      console.log(err);
    } else {
      res.send("TODO JSON created/overwritten!");
      // }
  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.parse(t2data));
    }
  }); 
});

module.exports = app_index;
