var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware.js');


//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// /about
app.get('/about', function(req, res) {
	res.send('About Me!!!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Express server started on port ' + PORT);
});