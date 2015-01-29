var express = require('express');

var app = module.exports = express();

app.use('/', require('./controllers/index.js'));
app.use('/blog', require('./controllers/blog.js'));



/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
