//Require app.js in root
var app = require('../app');

//Set port variable
var port = process.env.PORT || 8080;

//Start server
app.listen(port);
console.log('Server listening on ' + port);