//Declare dependencies
var path = require('path');
var express = require('express');
var mongoose = require ('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var pages = require('./controllers/pages.js');
var views = require('./controllers/views.js');
var create = require('./controllers/create.js');
var app = express();

//Configure spme app uses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', pages);
app.use('/', [views, create]);
app.use(cookieParser());
app.use(session({ resave: true, saveUninitialized: true, secret: 'PastebinCloneSecret' }));

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));
app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/../public'));

//Declare database connections
var dbName = 'Paste';
var connectionString = 'mongodb://localhost:27017/' + dbName;

//Mongoose/databasing
mongoose.connect(connectionString);

module.exports = app;

//ROUTING IS IN /CONTROLLERS