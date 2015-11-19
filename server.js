
var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
	res.sendfile('index.html', {root: __dirname});
});

app.listen(process.env.PORT || 5000);

// 
// Setup nconf to use (in-order): 
//   1. Command-line arguments 
//   2. Environment variables 
//   3. A file located at 'path/to/config.json' 
// 