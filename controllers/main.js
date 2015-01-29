// first:
// $ npm install redis
// $ redis-server

/**
 * Module dependencies.
 */

var express = require('express');



// setup express

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


/**
 * GET main page.
 */

app.get('/', function(req, res){
  res.render('index');
});


/* basic start */
app.listen(3000, function() {
  console.log('started on port 3000');
});

