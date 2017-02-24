var express = require('express');
var app = express();
var path = path();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, '/_book')));

// views is directory for all template files
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/_book/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
