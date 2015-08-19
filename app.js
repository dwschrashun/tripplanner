var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var swig = require('swig');
var sass = require('node-sass-middleware');
var app = express();
var bodyParser = require('body-parser');





app.listen(3000, function(err) {
	console.log('listening on port 3000');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
// Swig Setup
swig.setDefaults({ cache: false });
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);

app.use(
  sass({
    src: __dirname + '/assets', //where the sass files are 
    dest: __dirname + '/public', //where css should go
    debug: true
  })
);

app.use(express.static('public'));
app.use("/bower_components", express.static('bower_components'));

app.get('/', routes.index);

// catch 404
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// general purpose error handler
app.get('/', function(err, req, res, next) {
	res.status(err.status || 500);
	console.log({error: err});
	res.render(routes.error);
});











