var express = require('express')
	, app = express()
	, http = require('http')
	, server = http.createServer(app);

app.set('views', __dirname + '/views');

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
});

app.get('/', function (request, response) {
	response.render('index.jade', {
		layout: false
	});
});
server.listen(8080);

// websockets
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	socket.on('newMarker', function (data) {
		console.log(data);
	});
});