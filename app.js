
/**
 * Module dependencies.
 */

var express   = require('express')
  , routes    = require('./routes')
  , db        = require('./routes/db')
  , http      = require('http')
  , path      = require('path');

var app = express();

app.configure(function(){
  app.locals.pretty = true;
  app.set('port', process.env.PORT || 8080);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon( __dirname + '/public/favicon.ico', { maxAge: 2592000000 } ));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/',          routes.index);
app.get('/tv',        routes.tv);
app.get('/billboard', routes.billboard);
//This captures the Remote
app.get('/:id',       db.index);

var server = http.createServer(app);
server.listen( app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var socket = require( process.cwd() + "/lib/Socket.js" );
	socket.init( server );
	