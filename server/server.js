var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var routes = require('./routes/routes.js');
var request = require('request')


app.use(bodyParser.json());






app.set('port', process.env.PORT ||  8080);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));
console.log("In server.js file")
app.use('/api', routes);




app.listen(app.get('port'), function() {
    console.log('Server listening on port ', app.get('port'));
})
