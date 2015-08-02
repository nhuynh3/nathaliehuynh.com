var express = require('express');
var routes = require('./routes');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var monk = require('monk');
var db = monk('localhost:27017/nodetest1');

var app = express();

var http = require("http");
setInterval(function() {
    http.get("http://whispering-temple-1386.herokuapp.com");
}, 300000); // ping site every 5 minutes (300000)

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/public'));



//makes db accessible to router
app.use(function(req, res, next) {
    req.db = db;
    next();
});

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// redirect all other routes to index
app.get('*', routes.index);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;