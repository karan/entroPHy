
/**
 * Module dependencies.
 */

var dotenv = require('dotenv');
var express = require('express');
var http = require('http');
var path = require('path');
var request = require('request')

var app = express();

dotenv.load();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', exports.index = function(req, res){
  res.render('index', { title: 'Express' });
});

app.get('/give/:daysAgo', function(req, res) {
  var daysAgo = +req.params.daysAgo;
  if (daysAgo === -1) {
    daysAgo = Math.floor(Math.random() * 251);
  } else {
    daysAgo = Math.floor(Math.random() * (daysAgo + 1));
  }
  
  request('https://api.producthunt.com/v1/posts?days_ago=' + daysAgo, {'auth': {
      'bearer': process.env.PRODUCTHUNT_TOKEN
    }}, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        body = JSON.parse(body)['posts'];
        var ret = body[Math.floor(Math.random() * body.length)];
        return res.send(200, ret);
      }
    });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
