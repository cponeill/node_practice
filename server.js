var http = require("http");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Let's keep it going with " + pathname);

	route(pathname);

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World and all that Jazz!");
	response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Engines are starting up now!");
}

exports.start = start;
