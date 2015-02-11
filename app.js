var express = require('express');
var hash = require(__dirname+'/sys/lib/pass').hash;
var session = require('express-session');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var $C= require(__dirname+'/sys/config_sys');

var usrSRV=require(__dirname+'/sys/usrSRV');
var users = usrSRV.users;

var api = require('./api/api_v1.js');
var app_root='';

var app = module.exports = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'main_secret'
}));


//cookie stuff

// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used
// for signing the cookies.
app.use(cookieParser('my secret here'));


app.use(function (req, res, next) {
      var minute = 60000;
  var hour= minute*60;
  if (req.session.user) {
    if(req.cookies.firstvisit){
    // console.log("user exists and cookie exists for this user with ip:" +req.cookies.firstvisit);
  }else{
      res.cookie('firstvisit',{ip:req.connection.remoteAddress,date:Date.now()} , { maxAge: hour });
    // console.log("first visit for user");
  }
}
  next();
});

app.get('/reset', function(req, res){
  res.clearCookie('firstvisit');
  res.redirect('back');
});

var HTMLtemplate= function(msg,server_cookie){
  var injectfrag='';
if(server_cookie){
  injectfrag='value="'+server_cookie;+'"';
}
  return('<h1> Cookie test</h1>'
      + '<h2>'+msg+'</h2>'
      + '<form method="post" action="/cookietest">'
      + '<p><label>Server Data: </label><input type="text" name="serverdata" '+injectfrag+ '/></p>'
      + '<p><label>Client Data: </label><input type="text" name="clientdata"/></p>'
      + '<p>Check to <label>'
      + '<input type="checkbox" name="remember"/> remember me</label> '
      + '<input type="submit" value="Submit"/>.</p></form>');
};

app.get('/cookietest', function(req, res){
    var minute = 60000;
  var hour= minute*60;

  if (req.cookies.remember) {
    console.log(req.cookies.remember)
    res.send(HTMLtemplate('Remembered :). Click to <a href="/forgetcookie">forget</a>!.',req.cookies.remember));
  } else {
    res.send(HTMLtemplate("no cookie set"));
  }
});

app.get('/forgetcookie', function(req, res){
  res.clearCookie('remember');
  res.redirect('back');
});

app.post('/cookietest', function(req, res){
  var minute = 60000;
  var hour= minute*60;
  if (req.body.remember) res.cookie('remember', req.body.clientdata || "blank cookie", { maxAge: minute });
// console.log(req.body.remember);
// console.log(req.connection.remoteAddress);

  res.redirect('back');
});


//SECURIY STUFF

app.use(function(req, res, next){


  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '"err":"' + err + '"';
  if (msg) res.locals.message = '"msg":"' + msg + '"';
  next();
});

function authenticate(name, pass, fn) {
  if (!module.parent) console.log('authenticating %s:%s', name );
  var user = users[name]; // query the db for the given username
  if (!user) return fn(new Error('cannot find user'));
  //  applying the hash against the pass / salt, if there is a match we found the user
  hash(pass, user.salt, function(err, hash){
    if (err) return fn(err);
    if (hash == user.hash) return fn(null, user);
    fn(new Error('invalid password'));
  });
}

app.post('/login', function(req, res){
  authenticate(req.body.username, req.body.password, function(err, user){
    if (user) {// Regenerate session when signing in o prevent fixation
      req.session.regenerate(function(){  //  session store users primary key 
        req.session.user = user;
        req.session.success = 'successflag';
        console.log(user.permissions);
        res.redirect('back');
      });
    } else {
      req.session.error = 'errtype1';
       res.redirect('/');
    }
  });
});


app.get('/logout', function(req, res){// destroy the user's session to log them out // will be re-created next request
  req.session.destroy(function(){
    res.redirect('/');
  });
});

app.get('/hardreset', function(req, res){// destroy the user's session to log them out // will be re-created next request
  res.clearCookie('firstvisit');
  req.session.destroy(function(){
    res.redirect('/');
  });
});

var restrictUser = function(req, res, next) {
  if (req.session.user) {
    console.log(req.session);
    next();
  } else {
    req.session.error = "Access denied, you are not a registered user!";
    res.redirect('/');
  }
};

var restrictAdmin = function(req, res, next) {
  if (req.session.user && req.session.user.permissions =='admin') {
    next();
  } else {
    req.session.error = "Access denied, you aren't an Admin!";
    res.redirect('/');
  }
};
app.use('/', require('./main/index.js'));




//Mapping apps

var x = $C.apps;
var secTrans={
  'restrictUser':restrictUser,
  'restrictAdmin':restrictAdmin
}
for (var i = 0;i<x.length;i++)
{
  var obj=x[i];
  var key=Object.keys(obj)[0];
  if(obj[key] !==null){
    app.use('/'+key, secTrans[obj[key]], require('./apps/'+key+'/'+key+'.js'));
  }else{
    app.use('/'+key, require('./apps/'+key+'/'+key+'.js'));
  }

}

app.use('/api', api);


if (!module.parent) {
  app.listen($C.server.port);
  console.log('Unistack server started on port %d',$C.server.port);
}
