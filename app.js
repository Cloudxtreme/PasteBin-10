//Declare dependencies
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();

router.get('/', function(req, res)
{
	res.json({"message": "Han shot first."});
});

app.use('/', router);

app.listen(8080);
console.log("Listneing on port 8080")